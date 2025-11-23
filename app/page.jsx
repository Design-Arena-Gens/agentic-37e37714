const scenes = [
  {
    id: 1,
    time: "0 – 2 ثانية",
    title: "كلنا نضيع أحيانًا…",
    visual: "خلفية داكنة مع إضاءة بسيطة تتحرك برفق",
    audio: "نبضة هادئة + موسيقى ملهمة خفيفة",
    note: "ابدأ الفيديو بظهور النص تدريجيًا مع نبضة ضوئية تتوافق مع النبضة الصوتية."
  },
  {
    id: 2,
    time: "2 – 4 ثوان",
    title: "لكن دائمًا هناك بوصلة تعيدنا للطريق الصحيح.",
    visual: "شخص يقف أمام طريق متشعب أو ضباب خفيف يحيط بالمشهد",
    audio: "استمرار الموسيقى مع لمسة أمل بسيطة",
    note: "أضف حركة خفيفة للضباب أو تلاشي يبرز حيرة الشخصية قبل ظهور البوصلة."
  },
  {
    id: 3,
    time: "4 – 7 ثوان",
    title: "بوصلة الحياة…",
    visual: "ضوء يتجمع ليشكل بوصلة متوهجة",
    audio: "ارتفاع بسيط في الموسيقى عند تشكل البوصلة",
    note: "استخدم تأثير جسيمات ضوئية تتجه نحو مركز الشاشة قبل أن تستقر في شكل البوصلة."
  },
  {
    id: 4,
    time: "7 – 10 ثوان",
    title: "7 خطوات تعيد توازنك وتفتح لك باب الازدهار.",
    visual: "ظهور غلاف الكتاب بشكل أنيق مع إضاءة جانبية",
    audio: "موسيقى ملهمة بثبات متصاعد",
    note: "اظهر الغلاف بتدويرة طفيفة ثم تثبيته مع لمعان خفيف على العنوان."
  },
  {
    id: 5,
    time: "10 – 13 ثانية",
    title: "رحلة تغيير حقيقية… تبدأ الآن.",
    visual: "شخص يكتب، يتأمل، أو يعمل بثقة في بيئة دافئة",
    audio: "خاتمة موسيقية مطمئنة",
    note: "اختم بلقطة مقربة لليد وهي تكتب مع انتقال ناعم للشعار أو رابط الشراء في النهاية."
  }
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tagline">Storyboard Video Script</p>
        <h1>&ldquo;بوصلة الحياة&rdquo;</h1>
        <p className="duration">مدة الفيديو: 12 – 15 ثانية</p>
      </header>

      <section className="grid">
        {scenes.map((scene, index) => (
          <article key={scene.id} className="card" data-index={index + 1}>
            <span className="time">{scene.time}</span>
            <h2>{scene.title}</h2>
            <div className="divider" aria-hidden />
            <dl>
              <div>
                <dt>الصورة المقترحة</dt>
                <dd>{scene.visual}</dd>
              </div>
              <div>
                <dt>المؤثر الصوتي / الموسيقى</dt>
                <dd>{scene.audio}</dd>
              </div>
              <div>
                <dt>ملاحظات الإخراج</dt>
                <dd>{scene.note}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>
          المدة المتبقية (13 – 15 ثانية): إبقاء الموسيقى على نغمة أمل مع انتهاء المشهد الأخير
          بتلاشي إلى شعار الكتاب أو معلومات التواصل.
        </p>
      </footer>
    </main>
  );
}
