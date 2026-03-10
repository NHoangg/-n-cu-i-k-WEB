const vocabulary = [
  { word: "achieve", meaning: "đạt được" },
  { word: "appointment", meaning: "cuộc hẹn" },
  { word: "negotiate", meaning: "đàm phán" },
  { word: "deadline", meaning: "hạn chót" },
  { word: "shipment", meaning: "lô hàng" },
  { word: "revenue", meaning: "doanh thu" },
  { word: "efficient", meaning: "hiệu quả" },
  { word: "proposal", meaning: "đề xuất" }
];

const grammarQuestions = [
  {
    question: "If she ____ earlier, she would have caught the train.",
    options: ["left", "had left", "has left", "would leave"],
    answer: "had left",
    explanation: "Câu điều kiện loại 3 dùng 'had + V3' ở mệnh đề if."
  },
  {
    question: "The report must ____ before Friday.",
    options: ["submit", "be submitted", "submitted", "be submit"],
    answer: "be submitted",
    explanation: "Sau 'must' và bị động: must be + V3."
  },
  {
    question: "Neither the manager nor the staff ____ aware of the change.",
    options: ["was", "were", "be", "been"],
    answer: "were",
    explanation: "Động từ hòa hợp với chủ ngữ gần nhất 'staff' (số nhiều)."
  },
  {
    question: "By the time we arrived, the meeting ____.",
    options: ["starts", "started", "had started", "has started"],
    answer: "had started",
    explanation: "Một hành động xảy ra trước một mốc quá khứ: quá khứ hoàn thành."
  }
];

let vocabIndex = 0;
let grammarIndex = 0;
let knownWords = Number(localStorage.getItem("toeicKnownWords") || 0);
let correctGrammar = Number(localStorage.getItem("toeicCorrectGrammar") || 0);
let revealedMeaning = false;

const vocabWordEl = document.getElementById("vocab-word");
const vocabMeaningEl = document.getElementById("vocab-meaning");
const vocabScoreEl = document.getElementById("vocab-score");
const grammarScoreEl = document.getElementById("grammar-score");
const grammarQuestionEl = document.getElementById("grammar-question");
const grammarOptionsEl = document.getElementById("grammar-options");
const grammarFeedbackEl = document.getElementById("grammar-feedback");

function updateScores() {
  vocabScoreEl.textContent = `${knownWords}/${vocabulary.length}`;
  grammarScoreEl.textContent = `${correctGrammar}/${grammarQuestions.length}`;
  localStorage.setItem("toeicKnownWords", String(knownWords));
  localStorage.setItem("toeicCorrectGrammar", String(correctGrammar));
}

function renderWord() {
  const currentWord = vocabulary[vocabIndex];
  vocabWordEl.textContent = currentWord.word;
  vocabMeaningEl.textContent = revealedMeaning ? currentWord.meaning : 'Nhấn "Hiện nghĩa" để xem.';
}

function nextWord() {
  vocabIndex = (vocabIndex + 1) % vocabulary.length;
  revealedMeaning = false;
  renderWord();
}

function renderGrammarQuestion() {
  const current = grammarQuestions[grammarIndex];
  grammarQuestionEl.textContent = current.question;
  grammarFeedbackEl.textContent = "";
  grammarFeedbackEl.className = "feedback";
  grammarOptionsEl.innerHTML = "";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.addEventListener("click", () => checkGrammarAnswer(option));
    grammarOptionsEl.appendChild(btn);
  });
}

function checkGrammarAnswer(selected) {
  const current = grammarQuestions[grammarIndex];
  const isCorrect = selected === current.answer;

  if (isCorrect) {
    grammarFeedbackEl.textContent = `✅ Chính xác! ${current.explanation}`;
    grammarFeedbackEl.className = "feedback ok";
    correctGrammar = Math.min(correctGrammar + 1, grammarQuestions.length);
    updateScores();
  } else {
    grammarFeedbackEl.textContent = `❌ Chưa đúng. Đáp án: ${current.answer}. ${current.explanation}`;
    grammarFeedbackEl.className = "feedback nope";
  }
}

function nextGrammarQuestion() {
  grammarIndex = (grammarIndex + 1) % grammarQuestions.length;
  renderGrammarQuestion();
}

document.getElementById("show-meaning").addEventListener("click", () => {
  revealedMeaning = true;
  renderWord();
});

document.getElementById("mark-known").addEventListener("click", () => {
  knownWords = Math.min(knownWords + 1, vocabulary.length);
  updateScores();
  nextWord();
});

document.getElementById("next-word").addEventListener("click", nextWord);
document.getElementById("next-grammar").addEventListener("click", nextGrammarQuestion);

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

updateScores();
renderWord();
renderGrammarQuestion();
