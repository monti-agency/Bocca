/* Bocca: guest reviews (20 five-star Google Maps reviews with their photos, collected 11 Oct 2026).
   Notes:
   - Reviews 3 to 20 were written in Arabic on Google; only Google's English translation was available, so the Arabic text here is
     translated back from it. Paste the original Arabic wording into `text` if you want it exact.
   - `date` is approximate (built from Google's "x months ago"); only month and year are shown.
   Fields:
     name      guest name                      nameEn  optional English name
     rating    1 to 5
     date      YYYY-MM-DD (shown as month + year)
     sec       'cafe' | 'rest' | 'both'
     source    'google' | 'tiktok' | 'snapchat' | 'whatsapp' | 'direct'   (optional)
     text      review text (Arabic)            textEn  English text (shown on the English page)
     photos    optional list of image paths (first one shows on the card, all open in the viewer)
     strip     true on up to 3 SHORT reviews to show them in the quotes strip under the home page hero
     featured  true on ONE review to show it large at the top of the page
     sample    true = layout sample only (shows a "Sample" badge)
   An empty list [] shows a friendly "reviews coming soon" message. */
window.BOCCA_REVIEWS = [
  { name: "Chef Panos", rating: 5, date: "2026-01-15", sec: "cafe", source: 'google',
    text: "جودة ممتازة في مشروبات الشوكولاتة البلجيكية، وأجواء رائعة، وفطور أمريكي مميز. شاب متميز خدمنا في اليوم الأول وقدّم لنا تجربة وخدمة فريدة.",
    textEn: "Excellent quality Belgian chocolate drinks great atmosphere and great American breakfasts. Unique boy serve us the first day that provide us unique expirience and service.",
    photos: ["assets/img/reviews/review-01-01.webp", "assets/img/reviews/review-01-02.webp", "assets/img/reviews/review-01-03.webp", "assets/img/reviews/review-01-04.webp", "assets/img/reviews/review-01-05.webp", "assets/img/reviews/review-01-06.webp", "assets/img/reviews/review-01-07.webp", "assets/img/reviews/review-01-08.webp", "assets/img/reviews/review-01-09.webp", "assets/img/reviews/review-01-10.webp", "assets/img/reviews/review-01-11.webp", "assets/img/reviews/review-01-12.webp"] },
  { name: "v san", strip: true, rating: 5, date: "2026-07-12", sec: "cafe", source: 'google',
    text: "كل شيء كان مثالياً، وديالا التي خدمتنا كانت راقية جداً.",
    textEn: "Everything was perfect and our server Diala was very classy",
    photos: ["assets/img/reviews/review-02-01.webp", "assets/img/reviews/review-02-02.webp"] },
  { name: "Fahad Alghamdi", strip: true, rating: 5, date: "2023-10-10", sec: "cafe", source: 'google',
    text: "مكان هادئ، قهوة لذيذة برسمة جميلة عليها، وطاقم لطيف جداً خصوصاً يوسف.",
    textEn: "Calm place, delicious coffee with beautiful art on it, very kind staff especially 'Yousef'.",
    photos: ["assets/img/reviews/review-03-01.webp"] },
  { name: "Hasan Alfahemi", rating: 5, date: "2023-10-05", sec: "both", source: 'google',
    text: "يوسف نادل لطيف، دائماً يسعد بمساعدة الزبائن!",
    textEn: "Yousef is a kind waiter who's always happy to help customers!",
    photos: ["assets/img/reviews/review-04-01.webp", "assets/img/reviews/review-04-02.webp"] },
  { name: "A Al", rating: 5, date: "2025-10-08", sec: "both", source: 'google',
    text: "شكراً للموظف سهيل، قلنا له إن اليوم عيد ميلادي ففاجأني وجهّز لي حفلة. شكراً سهيل، شكراً بوكا.",
    textEn: "Thanks to the employee Suhail, we told him that today is my birthday and he surprised me to make a party for me, thank you Suhail, thank you Bocca",
    photos: ["assets/img/reviews/review-05-01.webp"] },
  { name: "بنت النور", rating: 5, date: "2026-07-09", sec: "cafe", source: 'google',
    text: "المكان جميل ومرتّب. طلبت حلى وقهوة ساخنة وباردة ولفائف لندن. الحلى لم يكن الأفضل، لكن بشكل عام كان كل شيء ممتازاً.",
    textEn: "The place is beautiful and well-maintained. I ordered dessert, hot and cold coffee, and London wraps. The dessert wasn't the best, but overall, everything was perfect.",
    photos: ["assets/img/reviews/review-06-01.webp", "assets/img/reviews/review-06-02.webp", "assets/img/reviews/review-06-03.webp"] },
  { name: "أم زياد", rating: 5, date: "2026-08-14", sec: "cafe", source: 'google',
    text: "كافيه رائع حقاً! مشروباتهم وحلوياتهم متوازنة تماماً، والأجواء والجلسات جميلة. ليست زيارتي الأولى، وإن شاء الله لن تكون الأخيرة.",
    textEn: "A truly amazing cafe! Their drinks and desserts are perfectly balanced, and the atmosphere and seating are wonderful. It's not my first time going there, and God willing, it won't be my last.",
    photos: ["assets/img/reviews/review-07-01.webp", "assets/img/reviews/review-07-02.webp"] },
  { name: "aboammar", rating: 5, date: "2026-08-10", sec: "rest", source: 'google',
    text: "تجربة رائعة في مطعم لذيذ. الأكل لذيذ والطلبات وصلت بحالة ممتازة. الموظفون مهذبون والخدمة جيدة، والأجواء مريحة وجميلة.",
    textEn: "A wonderful experience at a delicious restaurant. The food was delicious and the orders arrived in perfect condition. The staff were courteous and the service was good, and the atmosphere was comfortable and pleasant.",
    photos: ["assets/img/reviews/review-08-01.webp", "assets/img/reviews/review-08-02.webp", "assets/img/reviews/review-08-03.webp", "assets/img/reviews/review-08-04.webp", "assets/img/reviews/review-08-05.webp"] },
  { name: "امل الزهراني", rating: 5, date: "2026-08-06", sec: "cafe", source: 'google',
    text: "المكان رائع ومذهل وفخم، وهذه زيارتي الثالثة. ويستقبلون الحفلات أيضاً. قهوة اليوم كانت جيدة والحلى لذيذ جداً. عندهم أصناف كثيرة.",
    textEn: "The place is amazing, stunning, and luxurious, and this is my third visit. They also host parties. Today's coffee was good, and the dessert was absolutely delicious. They have many varieties.",
    photos: ["assets/img/reviews/review-09-01.webp", "assets/img/reviews/review-09-02.webp", "assets/img/reviews/review-09-03.webp"] },
  { name: "لولي الغامدي", rating: 5, date: "2026-07-05", sec: "cafe", source: 'google',
    text: "كوفي شوب جميل ومنظّم. الأجواء هادئة والقهوة لذيذة والخدمة ممتازة. تجربة رائعة ولن تكون زيارتي الأخيرة بالتأكيد.",
    textEn: "A beautiful and well-organized coffee shop. The atmosphere is calm, the coffee is delicious, and the service is excellent. A wonderful experience, and definitely not my last visit.",
    photos: ["assets/img/reviews/review-10-01.webp", "assets/img/reviews/review-10-02.webp"] },
  { name: "SALWA HUSS", strip: true, rating: 5, date: "2026-06-20", sec: "cafe", source: 'google',
    text: "بصراحة، كوفي شوب ممتاز. الأسعار معقولة والمكان راقٍ والخدمة رائعة. قهوتهم لذيذة جداً.",
    textEn: "Honestly, this is an excellent coffee shop. The prices are reasonable, the place is classy, and the service is superb. Their coffee is absolutely delicious.",
    photos: ["assets/img/reviews/review-11-01.webp", "assets/img/reviews/review-11-02.webp"] },
  { name: "Shosho", rating: 5, date: "2026-03-12", sec: "cafe", source: 'google',
    text: "مكان جميل وهادئ. القهوة لذيذة والفطور عندهم ممتاز، سواء كان فطور الصباح أو فطور رمضان. شكر خاص لأحمد على خدمته الممتازة.",
    textEn: "A beautiful and quiet place. The coffee is delicious, and their breakfast is very good, whether it's a morning breakfast or a Ramadan breakfast. Special thanks to Ahmed for his excellent service.",
    photos: ["assets/img/reviews/review-12-01.webp", "assets/img/reviews/review-12-02.webp"] },
  { name: "Abdullah alshamrani", rating: 5, date: "2026-06-16", sec: "cafe", source: 'google',
    text: "كافيه جميل وخدمة راقية، خصوصاً من الأخت ميسم والأخت فدوى، المحترفتين في خدمة الكافيه وطلباته بلباقة ومهنية.",
    textEn: "A beautiful cafe and classy service, especially from Sister Maysam and Sister Fadwa, who are professionals in serving the cafe and its orders with tact and professionalism.",
    photos: ["assets/img/reviews/review-13-01.webp", "assets/img/reviews/review-13-02.webp", "assets/img/reviews/review-13-03.webp"] },
  { name: "Jawharah alghamdi", rating: 5, date: "2026-08-03", sec: "cafe", source: 'google',
    text: "هذا الصيف شربت القهوة عندكم أكثر من مرة، والقهوة لذيذة جداً! جربت القهوة الإثيوبية. وللحلى جربت كيكة لندن وموس التوت والماتيلدا. بصراحة كلها كانت لذيذة جداً!",
    textEn: "This summer I've had coffee at your place more than once, and the coffee is absolutely delicious! I tried the Ethiopian coffee. For dessert, I tried the London cake, the raspberry mousse, and the Matilda. Honestly, they were all incredibly delicious!",
    photos: ["assets/img/reviews/review-14-01.webp"] },
  { name: "KHALIL ALI", rating: 5, date: "2026-06-11", sec: "cafe", source: 'google',
    text: "كافيه راقٍ وهادئ جداً. أنصح به بشدة. الموظف حسن، الله يبارك فيه، وبقية الفريق كانوا متعاونين جداً. كانت تجربة ممتازة وسأعود بالتأكيد.",
    textEn: "A very classy and quiet cafe. I highly recommend it. The employee, Hassan, may God bless him, and the rest of the team were incredibly helpful. It was an excellent experience, and I will definitely return.",
    photos: ["assets/img/reviews/review-15-01.webp"] },
  { name: "L1", rating: 5, date: "2026-03-08", sec: "cafe", source: 'google',
    text: "تجربة فطور رائعة حقاً. كل شيء كان لذيذاً وطازجاً، والاهتمام بالتفاصيل وجودة الأكل واضحان. وبصراحة السعر ممتاز مقارنةً بالكمية والجودة. شكر خاص لإلياس على خدمته الممتازة.",
    textEn: "A truly wonderful breakfast experience. Everything was delicious and fresh, the attention to detail and food quality was evident. And honestly, the price was amazing considering the quantity and quality. Special thanks to Elias for his excellent service.",
    photos: ["assets/img/reviews/review-16-01.webp", "assets/img/reviews/review-16-02.webp"] },
  { name: "ام ماريا", rating: 5, date: "2026-02-18", sec: "both", source: 'google',
    text: "حجزنا باقة احتفال تخرّج لأختي، وكانت الأجواء رائعة. موظفات الدور الثاني كنّ متعاونات جداً، رتّبن الطاولات بشكل جميل، وكنّ جميعاً مهذبات ومحترفات.",
    textEn: "We booked a graduation celebration package for my sister, and the atmosphere was wonderful. The female staff members on the second floor were incredibly helpful; they arranged the tables beautifully, and they were all very polite and professional.",
    photos: ["assets/img/reviews/review-17-01.webp", "assets/img/reviews/review-17-02.webp", "assets/img/reviews/review-17-03.webp"] },
  { name: "Abo Kayan", rating: 5, date: "2026-08-01", sec: "cafe", source: 'google',
    text: "تجربة رائعة في بوكا دي كافيه. القهوة لذيذة ومحضّرة باحتراف، بنكهة متوازنة وواضحة. وخيارات الفطور لذيذة أيضاً، بجودة ممتازة وتقديم أنيق.",
    textEn: "A wonderful experience at Bocca di Caffè. The coffee is delicious and expertly prepared, with a well-balanced and pronounced flavor. The breakfast options were also delicious, of excellent quality and presented neatly.",
    photos: ["assets/img/reviews/review-18-01.webp"] },
  { name: "ABDULWAHAB ALSHBILI", rating: 5, date: "2026-06-25", sec: "cafe", source: 'google', featured: true,
    text: "من أجمل الكافيهات في الباحة، بأجواء رائعة ومريحة. قهوتهم المختصة وحلوياتهم ممتازة. شكر وتقدير خاص للموظف (فهد) على خدمته المتميزة وحفاوة استقباله وروحه الجميلة.",
    textEn: "One of the most beautiful cafes in Al-Baha, with a wonderful and relaxing atmosphere. Their specialty coffee and desserts are excellent. Special thanks and appreciation to the employee (Fahad) for his exceptional service, warm welcome, and wonderful spirit.",
    photos: ["assets/img/reviews/review-19-01.webp", "assets/img/reviews/review-19-02.webp"] },
  { name: "N", rating: 5, date: "2026-08-20", sec: "cafe", source: 'google',
    text: "بصراحة، هذا من أفضل الكافيهات التي جربتها، ومكان يستحق الزيارة أكثر من مرة. فور دخولنا استقبلنا الموظف أزهر عبدالله بابتسامة وبشاشة.",
    textEn: "Honestly, this is one of the best cafes I've ever tried, and a place worth visiting more than once. As soon as we entered, the employee Azhar Abdullah greeted us with a smile and a cheerful demeanor.",
    photos: ["assets/img/reviews/review-20-01.webp"] }
];
