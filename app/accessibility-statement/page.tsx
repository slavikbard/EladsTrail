export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-8">
          הצהרת נגישות
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">מחויבות לנגישות</h2>
            <p>
              המסלול של אלעד מחויב להנגשת האתר לאנשים עם מוגבלויות והקפדה על עמידה בדרישות חוק שוויון זכויות לאנשים עם מוגבלויות, התשנ"ח-1998, ותקנות שוויון זכויות לאנשים עם מוגבלויות (התאמות נגישות לשירות), התשע"ג-2013.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">רמת הנגישות</h2>
            <p>
              האתר עומד ברמת נגישות AA על פי תקן WCAG 2.1 (Web Content Accessibility Guidelines) של ארגון W3C.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">תכונות נגישות באתר</h2>
            <ul className="list-disc pr-6 space-y-2">
              <li>תפריט נגישות ייעודי עם אפשרויות התאמה אישיות</li>
              <li>אפשרות להגדלה והקטנת גודל הטקסט</li>
              <li>מצב גווני אפור (Grayscale)</li>
              <li>מצב ניגודיות גבוהה</li>
              <li>ניווט מלא באמצעות מקלדת</li>
              <li>תמיכה בקוראי מסך</li>
              <li>טקסטים אלטרנטיביים לתמונות</li>
              <li>מבנה סמנטי תקין</li>
              <li>תמיכה בכיוון RTL (ימין לשמאל) עבור עברית</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">דפדפנים נתמכים</h2>
            <p>האתר תומך בגרסאות העדכניות ביותר של הדפדפנים הפופולריים:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">הנגשת תכנים חדשים</h2>
            <p>
              כל תוכן חדש שמתווסף לאתר עובר בדיקת נגישות ומותאם לעמידה בתקנים. אנו ממשיכים לעבוד על שיפור הנגישות באופן שוטף.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">איך להשתמש בתפריט הנגישות</h2>
            <ol className="list-decimal pr-6 space-y-2">
              <li>לחצו על כפתור הנגישות הצף בצד ימין של המסך</li>
              <li>בחרו את האפשרות הרצויה מתוך התפריט</li>
              <li>ההגדרות יישמרו עבור ביקורים עתידיים באתר</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">ניווט באמצעות מקלדת</h2>
            <p>ניתן לנווט באתר באמצעות מקלדת בלבד:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>Tab - מעבר לאלמנט הבא</li>
              <li>Shift + Tab - מעבר לאלמנט הקודם</li>
              <li>Enter - הפעלת קישור או כפתור</li>
              <li>ESC - סגירת תפריטים וחלונות קופצים</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">בעיות נגישות וצור קשר</h2>
            <p>
              אם נתקלתם בבעיית נגישות באתר או אם אתם זקוקים לסיוע, אנא צרו עמנו קשר:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li>דוא"ל: accessibility@eladstrail.com</li>
              <li>טלפון: 03-1234567</li>
            </ul>
            <p className="mt-4">
              נשתדל לטפל בכל פנייה בהקדם האפשרי ולתת מענה ראוי לצרכי הנגישות שלכם.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">רכז נגישות</h2>
            <p>
              רכז הנגישות של האתר: אלעד<br />
              דוא"ל: elad@eladstrail.com<br />
              טלפון: 03-1234567
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B263B] mt-8 mb-4">תאריך עדכון אחרון</h2>
            <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}</p>
          </section>

          <section className="bg-[#E85D04]/10 border-r-4 border-[#E85D04] p-6 rounded-lg mt-8">
            <p className="font-semibold">
              אנו ממשיכים לעבוד על שיפור הנגישות באופן שוטף ומחויבים להנגיש את כל התכנים באתר לכלל האוכלוסייה.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
