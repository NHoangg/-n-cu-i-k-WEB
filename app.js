const vocabulary = [
  { word: "achieve", meaning: "đạt được" },
  { word: "appointment", meaning: "cuộc hẹn" },
  { word: "negotiate", meaning: "đàm phán" },
  { word: "deadline", meaning: "hạn chót" },
  { word: "shipment", meaning: "lô hàng" },
  { word: "revenue", meaning: "doanh thu" },
  { word: "efficient", meaning: "hiệu quả" },
  { word: "proposal", meaning: "đề xuất" },
  { word: "inventory", meaning: "hàng tồn kho" },
  { word: "invoice", meaning: "hóa đơn" },
  { word: "maintenance", meaning: "bảo trì" },
  { word: "conference", meaning: "hội nghị" },
  { word: "schedule", meaning: "lịch trình" },
  { word: "customer", meaning: "khách hàng" },
  { word: "promotion", meaning: "khuyến mãi" },
  { word: "discount", meaning: "giảm giá" },
  { word: "contract", meaning: "hợp đồng" },
  { word: "candidate", meaning: "ứng viên" },
  { word: "qualification", meaning: "trình độ" },
  { word: "department", meaning: "phòng ban" },
  { word: "branch", meaning: "chi nhánh" },
  { word: "budget", meaning: "ngân sách" },
  { word: "expense", meaning: "chi phí" },
  { word: "purchase", meaning: "mua hàng" },
  { word: "supplier", meaning: "nhà cung cấp" },
  { word: "delivery", meaning: "giao hàng" },
  { word: "postpone", meaning: "hoãn lại" },
  { word: "confirm", meaning: "xác nhận" },
  { word: "available", meaning: "có sẵn" },
  { word: "deadline extension", meaning: "gia hạn thời hạn" }
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
  },
  {
    question: "Ms. Linh is responsible ____ training new employees.",
    options: ["for", "to", "with", "at"],
    answer: "for",
    explanation: "Cụm đúng: responsible for + V-ing/N."
  },
  {
    question: "The clients requested that the proposal ____ revised.",
    options: ["is", "be", "was", "being"],
    answer: "be",
    explanation: "Subjunctive sau 'request that': dùng động từ nguyên mẫu."
  },
  {
    question: "No sooner ____ the presentation started than the projector failed.",
    options: ["had", "has", "was", "did"],
    answer: "had",
    explanation: "Đảo ngữ với 'No sooner ... than': No sooner had + S + V3."
  },
  {
    question: "The marketing team, along with its director, ____ attending the meeting.",
    options: ["are", "were", "is", "be"],
    answer: "is",
    explanation: "Chủ ngữ chính là 'team' (số ít) nên dùng 'is'."
  },
  {
    question: "This machine is not ____ as the previous model.",
    options: ["more efficient", "as efficient", "most efficient", "efficienter"],
    answer: "as efficient",
    explanation: "So sánh ngang bằng dạng phủ định: not as + adj + as."
  },
  {
    question: "If I ____ you, I would accept the offer immediately.",
    options: ["am", "were", "was", "be"],
    answer: "were",
    explanation: "Câu điều kiện loại 2: If I were you..."
  },
  {
    question: "All applicants ____ submit their resumes by Monday.",
    options: ["must", "should to", "have", "can to"],
    answer: "must",
    explanation: "Động từ khuyết thiếu 'must' + V nguyên mẫu."
  },
  {
    question: "The CEO asked ____ the quarterly report was ready.",
    options: ["that", "if", "what", "which"],
    answer: "if",
    explanation: "Mệnh đề gián tiếp yes/no dùng 'if/whether'."
  },
  {
    question: "The new policy will take effect ____ next month.",
    options: ["in", "on", "at", "for"],
    answer: "in",
    explanation: "Dùng 'in' với tháng/năm/thời gian dài."
  },
  {
    question: "Each of the employees ____ required to wear an ID badge.",
    options: ["are", "were", "is", "have"],
    answer: "is",
    explanation: "Each of + plural noun đi với động từ số ít."
  },
  {
    question: "The seminar was canceled ____ the speaker's illness.",
    options: ["because", "because of", "despite", "although"],
    answer: "because of",
    explanation: "Theo sau là danh từ/cụm danh từ nên dùng 'because of'."
  },
  {
    question: "The package ____ by the time we reached the office.",
    options: ["delivered", "had been delivered", "was delivering", "has deliver"],
    answer: "had been delivered",
    explanation: "Bị động ở quá khứ hoàn thành: had been + V3."
  },
  {
    question: "Please let me know as soon as you ____ the confirmation email.",
    options: ["receive", "received", "will receive", "have receiving"],
    answer: "receive",
    explanation: "Trong mệnh đề thời gian với 'as soon as', dùng hiện tại đơn cho tương lai."
  },
  {
    question: "The manager recommended ____ the budget before approving the plan.",
    options: ["review", "to review", "reviewing", "reviewed"],
    answer: "reviewing",
    explanation: "Recommend thường đi với V-ing."
  },
  {
    question: "Hardly ____ he entered the room when everyone applauded.",
    options: ["had", "has", "did", "was"],
    answer: "had",
    explanation: "Đảo ngữ với 'Hardly ... when': Hardly had + S + V3..."
  },
  {
    question: "The report contains ____ information than the previous one.",
    options: ["many", "fewer", "more", "most"],
    answer: "more",
    explanation: "Information là danh từ không đếm được, dùng 'more'."
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
