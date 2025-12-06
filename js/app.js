// 30 soruyu programatik olarak oluşturuyoruz.
// Buradaki metinleri kendi gerçek sorularınla değiştirebilirsin.
/* const questions = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  text: `Soru ${i + 1}: Buraya kendi soru metnini yaz.`,
  // İstersen her soru için farklı seçenekler de verebilirsin.
  options: [
    { label: "Hiç katılmıyorum", value: 1 },
    { label: "Katılmıyorum", value: 2 },
    { label: "Kararsızım", value: 3 },
    { label: "Katılıyorum", value: 4 },
    { label: "Tamamen katılıyorum", value: 5 },
  ],
})); */

// Ortak kullanılacak seçenekler (her soru için aynı ölçek)
const baseOptions = [
  { label: "Hiç katılmıyorum", value: 1 },
  { label: "Katılmıyorum", value: 2 },
  { label: "Kararsızım", value: 3 },
  { label: "Katılıyorum", value: 4 },
  { label: "Tamamen katılıyorum", value: 5 },
];

// 30 soruluk test
const questions = [
  {
    id: 1,
    text: "Karmaşık problemleri küçük parçalara bölerek çözmeyi severim.",
    options: baseOptions,
  },
  {
    id: 2,
    text: "Sayısal verilerle çalışmak bana keyif verir.",
    options: baseOptions,
  },
  {
    id: 3,
    text: "Yeni teknolojileri ve araçları kurcalamayı severim.",
    options: baseOptions,
  },
  {
    id: 4,
    text: "Uzun süre bilgisayar başında çalışmak beni çok yormaz.",
    options: baseOptions,
  },
  {
    id: 5,
    text: "Bir şey çalışmadığında hatayı bulana kadar uğraşmaktan çekinmem.",
    options: baseOptions,
  },
  {
    id: 6,
    text: "İngilizce teknik kaynak okumaktan rahatsız olmam.",
    options: baseOptions,
  },
  {
    id: 7,
    text: "Yeni şeyler öğrenmek için kendi kendime araştırma yaparım.",
    options: baseOptions,
  },
  {
    id: 8,
    text: "Bir projede sorumluluk almayı severim.",
    options: baseOptions,
  },
  {
    id: 9,
    text: "Zaman baskısı altında çalışırken genelde soğukkanlı kalırım.",
    options: baseOptions,
  },
  {
    id: 10,
    text: "Mantık bulmacaları ve zeka oyunları ilgimi çeker.",
    options: baseOptions,
  },
  {
    id: 11,
    text: "Tasarım detayları (renk, boşluk, hizalama vb.) dikkatimi çeker.",
    options: baseOptions,
  },
  {
    id: 12,
    text: "Kullanıcıların bir ürünü nasıl kullandığını gözlemlemeyi ilginç bulurum.",
    options: baseOptions,
  },
  {
    id: 13,
    text: "İnsanlarla iletişim kurmak ve fikirlerini dinlemek hoşuma gider.",
    options: baseOptions,
  },
  {
    id: 14,
    text: "Yaptığım işleri bir başkasına anlatırken sabırlı davranabilirim.",
    options: baseOptions,
  },
  {
    id: 15,
    text: "Tek başıma derin odaklanarak çalışmayı severim.",
    options: baseOptions,
  },
  {
    id: 16,
    text: "Ekip içinde beyin fırtınası yapmaktan keyif alırım.",
    options: baseOptions,
  },
  {
    id: 17,
    text: "Aynı işi defalarca yapmaktansa süreci otomatikleştirmeye çalışırım.",
    options: baseOptions,
  },
  {
    id: 18,
    text: "Hata yaptığımda sebebini analiz etmeye çalışırım.",
    options: baseOptions,
  },
  {
    id: 19,
    text: "Kullandığım uygulamaların nasıl çalıştığını merak ederim.",
    options: baseOptions,
  },
  {
    id: 20,
    text: "Uzun vadeli hedefler koyup adım adım ilerleyebilirim.",
    options: baseOptions,
  },
  {
    id: 21,
    text: "Eleştiri aldığımda savunmaya geçmek yerine dinlemeye çalışırım.",
    options: baseOptions,
  },
  {
    id: 22,
    text: "Belirsizlik olduğunda bile hareket etmeye ve denemeye başlarım.",
    options: baseOptions,
  },
  {
    id: 23,
    text: "Planlı ve organize çalışmaya önem veririm.",
    options: baseOptions,
  },
  {
    id: 24,
    text: "Bir konuyu tam anlamadan geçmeyi sevmem.",
    options: baseOptions,
  },
  {
    id: 25,
    text: "Birden fazla işi aynı anda yürütmek beni çok zorlamaz.",
    options: baseOptions,
  },
  {
    id: 26,
    text: "Teknik konuları teknik olmayan birine açıklamaya çalışırım.",
    options: baseOptions,
  },
  {
    id: 27,
    text: "Geri bildirim almanın gelişimim için önemli olduğuna inanırım.",
    options: baseOptions,
  },
  {
    id: 28,
    text: "Hataları kabul edip düzeltmekte zorlanmam.",
    options: baseOptions,
  },
  {
    id: 29,
    text: "Yeni bir işe başlarken öğrenme sürecinin zor olmasını normal karşılarım.",
    options: baseOptions,
  },
  {
    id: 30,
    text: "Bilişim / IT alanında kendimi uzun vadede geliştirmek istiyorum.",
    options: baseOptions,
  },
];


const introSection = document.getElementById("intro-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const questionTextEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const progressTextEl = document.getElementById("progress-text");
const percentTextEl = document.getElementById("percent-text");
const progressBarInnerEl = document.getElementById("progress-bar-inner");
const errorMessageEl = document.getElementById("error-message");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const resultScoreEl = document.getElementById("result-score");
const resultSummaryEl = document.getElementById("result-summary");
const resultTagEl = document.getElementById("result-tag");

let currentQuestionIndex = 0;
const answers = new Array(questions.length).fill(null);

function startTest() {
  introSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  currentQuestionIndex = 0;
  for (let i = 0; i < answers.length; i++) answers[i] = null;
  renderQuestion();
  updateProgress();
}

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  questionTextEl.textContent = q.text;

  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const id = `q${q.id}_opt${index}`;
    const label = document.createElement("label");
    label.className = "option-label";
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.id = id;
    input.value = opt.value;

    // Önceden seçilmişse işaretli göster
    if (answers[currentQuestionIndex] === opt.value) {
      input.checked = true;
    }

    const span = document.createElement("span");
    span.textContent = opt.label;

    label.appendChild(input);
    label.appendChild(span);
    optionsEl.appendChild(label);
  });

  errorMessageEl.classList.add("hidden");
  errorMessageEl.textContent = "";
}

function updateProgress() {
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = questions.length;
  progressTextEl.textContent = `Soru ${questionNumber} / ${totalQuestions}`;

  const answeredCount = answers.filter((v) => v !== null).length;
  const percentage = Math.round((answeredCount / totalQuestions) * 100);
  percentTextEl.textContent = `${percentage}%`;
  progressBarInnerEl.style.width = `${percentage}%`;
}

function showError(message) {
  errorMessageEl.textContent = message;
  errorMessageEl.classList.remove("hidden");
}

function handleNext() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    showError("Devam etmek için bir seçenek işaretlemen gerekiyor.");
    return;
  }
  const value = parseInt(selected.value, 10);
  answers[currentQuestionIndex] = value;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    updateProgress();
  } else {
    // Test bitti
    showResults();
  }
}

function showResults() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const totalScore = answers.reduce((sum, val) => sum + (val || 0), 0);
  const maxScore = questions.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);

  resultScoreEl.textContent = `Genel Skorun: ${percentage}%`;

  let summary = "";
  let tag = "";

  if (percentage >= 80) {
    summary =
      "Cevapların, test edilen yetkinlik alanlarına güçlü bir eğilimin olduğunu gösteriyor. Bu alanda derinleşmek ve uzmanlaşmak için iyi bir potansiyele sahipsin.";
    tag = "Yüksek Uyum";
  } else if (percentage >= 50) {
    summary =
      "Bazı alanlarda güçlü, bazı alanlarda ise gelişime açık yanların var. Doğru yönlendirme ve pratikle bu yetkinliklerini daha da güçlendirebilirsin.";
    tag = "Orta Düzey Uyum";
  } else {
    summary =
      "Sonuçların, bu alanda daha yolun başında olduğunu gösteriyor olabilir. Bu kesin bir yargı değil; sadece hangi konularda deneyim ve pratik ekleyebileceğine dair bir işaret olarak düşünebilirsin.";
    tag = "Gelişim Alanı";
  }

  resultSummaryEl.textContent = summary;
  resultTagEl.textContent = tag;
}

startBtn.addEventListener("click", startTest);
nextBtn.addEventListener("click", handleNext);
