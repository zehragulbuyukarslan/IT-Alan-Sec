

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
    text: "Soru 1 \nBir mobil uygulama geliştiriyorsunuz. Uygulama, kullanıcı bir butona bastığında arka planda sunucudan veri çekiyor. Ancak, kullanıcı butona tekrar tekrar hızlıca bastığında, aynı veri çekme işlemi defalarca tetikleniyor ve bu da sunucuda gereksiz yüke neden oluyor. Bu durumu kodlama düzeyinde önlemek için en temel ve etkili yaklaşımınız ne olur?",
    options:  [
  { label: "Hiç katılmıyorum", value: 1 },
  { label: "Katılmıyorum", value: 2 },
  { label: "Kararsızım", value: 3 },
  { label: "Katılıyorum", value: 4 },
  { label: "Tamamen katılıyorum", value: 5 },
],
  },
  {
    id: 2,
    text: "Soru 2 \nBir hastane yönetim sistemi tasarlıyorsunuz. Sistemde 'Doktor', 'Hemşire' ve 'Hasta' gibi temel roller var. Her rolün kendine has özellikleri (Doktor'un uzmanlığı, Hemşire'nin vardiyası, Hasta'nın hastalık geçmişi) ve ortak işlevleri (Kişisel bilgileri görüntüleme, randevu kaydı oluşturma) bulunuyor. Nesne Yönelimli Programlama (NYP) prensiplerini kullanarak bu yapıyı en verimli şekilde nasıl modelledirsiniz?",
    options: baseOptions,
  },
  {
    id: 3,
    text: "Soru 3 \nBir uygulamanın son sürümünde, nadiren ve tahmin edilemeyen zamanlarda kullanıcıların profil fotoğrafının kaybolduğu bildiriliyor. Kendi testlerinizde bu hatayı yeniden oluşturamıyorsunuz. Hatanın kaynağını bulmak için izleyeceğiniz en sistematik ilk adım ne olmalıdır?",
    options: baseOptions,
  },
  {
    id: 4,
    text: "Soru 4 \nBir ekip toplantısında, mevcut sistemin yavaşlığı tartışılıyor. Geliştiricilerin çoğu, kodun içindeki spesifik yavaş fonksiyonları optimize etmeyi önerirken, siz farklı bir görüş belirtiyorsunuz. Sizin yaklaşımınız aşağıdakilerden hangisidir?",
    options: baseOptions,
  },
  {
    id: 5,
    text: "Soru 5 \nBir çizgi film karakteri koleksiyonu uygulaması geliştiriyorsunuz. Her karakterin adı, rengi ve özel gücü var. Bazı karakterler uçabiliyor, bazıları hızlı koşabiliyor, bazıları ise görünmez olabiliyor. Bu farklı yetenekleri kod yapısına en esnek şekilde dahil etmek için hangi Nesne Yönelimli Tasarım Kalıbını (Design Pattern) kullanmayı tercih edersiniz?",
    options: baseOptions,
  },
  {
    id: 6,
    text: "Soru 6 \nBir geliştirici olarak, 1000 satırlık bir fonksiyonun içindeki bir hatayı (bug) bulmaya çalışıyorsunuz. Fonksiyon, birçok farklı girdi (input) alıyor ve çıktı (output) üretiyor. Fonksiyonun çıktısı beklediğiniz gibi değil. Hata ayıklama sürecini hızlandırmak için ilk olarak ne yaparsınız?",
    options: baseOptions,
  },
  {
    id: 7,
    text: "Soru 7 \nBir A/B testi yaptınız. A versiyonunda dönüşüm oranı %5.0, B versiyonunda ise %5.2 çıktı. İstatistiksel olarak anlamlı bir fark olup olmadığını anlamak için hangi temel bilgiyi bilmeniz gerekir?",
    options: baseOptions,
  },
  {
    id: 8,
    text: "Soru 8 \nBir model kurucu olarak, müşterilerinizin bir sonraki ay ne kadar harcama yapacağını tahmin eden bir model tasarlıyorsunuz. Modelin tahmin sonuçlarını ne zaman ve nasıl güncelleyeceğinize dair bir strateji belirlemelisiniz. Aşağıdaki yaklaşımlardan hangisi, kaynak verimliliği ve tahmin güncelliği arasında en iyi dengeyi sağlar?",
    options: baseOptions,
  },
  {
    id: 9,
    text: "Soru 9 \n10.000 farklı ürüne ait satış verisini analiz ediyorsunuz. Her ürünün Fiyatı, Satış Miktarı, Stok Durumu ve Kategori Bilgisi var. Yöneticinize, \"Hangi ürün kategorileri en yüksek kâr marjına sahiptir?\" sorusunu görsel olarak açıklamak istiyorsunuz. En uygun görselleştirme yöntemi ne olur?",
    options: baseOptions,
  },
  {
    id: 10,
    text: "Soru 10 \n100 GB büyüklüğünde, sık sık güncellenen bir müşteri verisi tablosuna sahipsiniz. Her ay, bu tablodaki verilere dayanarak karmaşık analizler yapmanız gerekiyor. Analiz sorgularının süresi giderek artıyor. Sorgu süresini düşürmek için veriye dayalı ilk müdahaleniz ne olur?",
    options: baseOptions,
  },
  {
    id: 11,
    text: "Soru 11 \nBir e-posta pazarlama kampanyasının başarısını ölçüyorsunuz. Açıktır ki tıklama oranı (CTR) kampanyanın başarısının önemli bir göstergesidir. Ancak, yöneticiniz sadece CTR'ye bakmanın yeterli olmadığını iddia ediyor ve daha sağlam bir metrik önermenizi istiyor. Hangi metrik, sadece açılma ve tıklanma sayısından daha derin bir etkiyi ölçer?",
    options: baseOptions,
  },
  {
    id: 12,
    text: "Soru 12 \nBir Tahmin Modeli oluşturuyorsunuz. Modeliniz eğitim verilerinde %99 doğruluk gösteriyor, ancak gerçek dünyadan gelen yeni verilerde bu doğruluk %60'a düşüyor. Bu durum, modelinizin hangi temel problemi yaşadığını gösterir?",
    options: baseOptions,
  },
  {
    id: 13,
    text: "Soru 13 \nBir sunucu odasındaki kritik bir veritabanı sunucusunu yönetiyorsunuz. Bu sunucunun donanımsal bir arıza nedeniyle çökmesi durumunda sistemin işleyişini aksatmamasını sağlamak için uygulayacağınız en temel ve hayati altyapı stratejisi ne olur?",
    options: baseOptions,
  },
  {
    id: 14,
    text: "Soru 14 \nUygulamanızın kullanıcı sayısı beklenenin çok üzerinde artıyor ve tek bir sunucu artık tüm isteklere yetişemiyor. Uygulamanızın mimarisini, kullanıcı sayısındaki gelecekteki artışlara kolayca uyum sağlayacak şekilde \"yatay olarak ölçeklenebilir\" (Horizontally Scalable) kılmak için ilk hangi adımı atarsınız?",
    options: baseOptions,
  },
  {
    id: 15,
    text: "Soru 15 \nBir bulut bilişim ortamında (Cloud Environment) bir e-posta bildirim hizmeti çalıştırıyorsunuz. Hizmet, günün büyük bir bölümünde boştadır ve sadece belirli saatlerde (örneğin, 09:00 ve 18:00) yoğun e-posta trafiği yaşar. Maliyetleri düşürmek için hangi altyapı stratejisini benimsemelisiniz?",
    options: baseOptions,
  },
  {
    id: 16,
    text: "Soru 16 \nBir kullanıcının web tarayıcısından sunucunuza güvenli ve şifreli veri göndermesini sağlamak için hangi protokolün kullanılması esastır?",
    options: baseOptions,
  },
  {
    id: 17,
    text: "Soru 17 \nYeni bir yazılımı üretim ortamına (Production Environment) dağıtmadan önce, yazılımın beklenen yük altında çalışıp çalışmayacağını test etmek istiyorsunuz. Bu amaçla yapılması gereken en uygun test türü nedir?",
    options: baseOptions,
  },
  {
    id: 18,
    text: "Soru 18 \nBir ağ üzerindeki cihazlar arasında büyük dosyaların hızlı ve güvenilir bir şekilde transfer edilmesini sağlamak istiyorsunuz. Hangi yöntem, dosya transfer hızını artırmak ve ağ üzerindeki yükü azaltmak için dosyanın kendisini değiştirmeden en etkili şekilde kullanılabilir?",
    options: baseOptions,
  },
  {
    id: 19,
    text: "Soru 19 \nKullanıcılarınızın parolalarını saklarken, bir güvenlik ihlali durumunda bile parolaların çalınmasını en zor hale getirecek yöntem hangisidir?",
    options: baseOptions,
  },
  {
    id: 20,
    text: "Soru 20 \nBir web sitesinin giriş formunda, kullanıcı adının bir kod parçası (örneğin <script>alert('XSS')</script>) girmesini engelleyen bir güvenlik mekanizması tasarlıyorsunuz. Bu tür bir saldırıyı (XSS - Cross-Site Scripting) önlemek için kullanıcı girdisine yapmanız gereken temel işlem nedir?",
    options: baseOptions,
  },
  {
    id: 21,
    text: "Soru 21 \nBir uygulama, dışarıdan gelen bir kullanıcının kimliğini doğrulamak için bir token (jeton) kullanıyor. Bu tokenin süresi dolduğunda (expired) kullanıcının otomatik olarak oturumunu kapatmak ve yeni bir oturum açmasını istemek, hangi güvenlik prensibini destekler?",
    options: baseOptions,
  },
  {
    id: 22,
    text: "Soru 22 \nBir güvenlik açığı (vulnerability) tespit ettiniz: Veri tabanınızdaki hassas müşteri bilgileri, sistemdeki bir hata nedeniyle düz metin (plaintext) olarak görünür hale gelme riski taşıyor. Bu kritik durumda ilk yapmanız gereken nedir?",
    options: baseOptions,
  },
  {
    id: 23,
    text: "Soru 23 \nSaldırgan perspektifinden bakıldığında, bir web uygulamasının güvenlik açıklarını keşfetmeye çalışıyorsunuz. Başarılı bir SQL Enjeksiyonu (SQL Injection) saldırısı gerçekleştirmek için öncelikle hangi kodlama hatasını ararsınız?",
    options: baseOptions,
  },
  {
    id: 24,
    text: "Soru 24 \nBir şirketin dahili ağından dışarıya izinsiz veri sızdırılmasını önlemek istiyorsunuz. Bu tür bir sızıntıyı tespit etmek ve engellemek için tasarlanmış ana güvenlik aracı hangisidir?",
    options: baseOptions,
  },
  {
    id: 25,
    text: "Soru 25 \nBir yazılım projesinde, geliştiriciler kod kalitesine odaklanmak isterken, proje yöneticisi mümkün olduğunca çok özelliği kısa sürede teslim etme baskısı yapıyor. Bu çatışmayı yönetmek için hangi yaklaşım en dengeli çözümü sunar?",
    options: baseOptions,
  },
  {
    id: 26,
    text: "Soru 26 \nÖnemli bir müşteri, yazılımınızın \"verileri yanlış gösterdiğini\" iddia ediyor. Kendi testlerinizde bir sorun bulamadınız. Müşteriyle olan iletişimi en verimli ve objektif şekilde yönetmek için ilk adımınız ne olmalıdır?",
    options: baseOptions,
  },
  {
    id: 27,
    text: "Soru 27 \nYeni bir özellik geliştirdiniz. Bu özelliği, önce küçük bir kullanıcı grubunda test etmek ve herhangi bir sorun olursa hızla geri alabilmek (rollback) istiyorsunuz. Bu süreç için en uygun Dağıtım Stratejisi (Deployment Strategy) hangisidir?",
    options: baseOptions,
  },
  {
    id: 28,
    text: "Soru 28 \nBir hesaplama modülündeki hatayı arıyorsunuz. Modül, 10 farklı parametre alıyor ve 5 farklı sonuç üretiyor. Tüm olası girdi kombinasyonlarını test etmek pratik değil. Hata bulma şansınızı artırmak için hangi test stratejisini kullanırsınız?",
    options: baseOptions,
  },
  {
    id: 29,
    text: "Soru 29 \nProjeniz iki hafta içinde teslim edilmeli, ancak en önemli ve karmaşık özellik hala bitmedi. Geri kalan tüm görevler tamamlandı. Takımınız tükenmiş durumda. Proje yöneticisi olarak bu durumu nasıl yönetirsiniz?",
    options: baseOptions,
  },
  {
    id: 30,
    text: "Soru 30 \nAşağıdaki görev tanımlarından hangisi size mesleki açıdan en çok çekici gelmektedir?",
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
