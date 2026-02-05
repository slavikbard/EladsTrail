'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Utensils, Camera, Heart, Users, Mountain } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-[#FAF8F5]" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#D4A574] tracking-[0.3em] mb-3">אודות</p>
          <h1 className="text-6xl md:text-7xl font-extralight text-[#5D4E37] mb-6 tracking-tight" style={{fontFamily: 'serif'}}>
            <span className="italic">נעים להכיר</span>
          </h1>
          <div className="w-24 h-px bg-[#D4A574] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* תמונה עגולה בצד הטקסט */}
          <div className="bg-white border-r-4 border-[#D4A574] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/dwi0ey5cv/image/upload/v1770106967/EladAbout_vrfofw.jpg"
                alt="אלעד דויטש"
                fill
                className="object-cover rounded-full border-4 border-[#D4A574]"
              />
            </div>
            <div>
              <p className="text-2xl text-[#5D4E37] leading-relaxed font-light italic mb-4">
                שלום, אני <strong>אלעד דויטש</strong>, מטייל אתגרי מהקריות שאוהב לקחת את עצמו למקומות שלא לכל אחד יש אומץ להגיע אליהם.
              </p>
              <p className="text-lg text-[#8B7E6A] leading-relaxed font-light">
                רווק, ג'ינג'י, ובן שנים שלא יכול לשבת בבית כשיש עוד מסלול קשוח לא צעוד או מסעדה מקומית שלא טעמתי את האוכל שלה.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-[#5D4E37] text-lg leading-loose font-light">
            <h2 className="text-3xl font-light text-[#5D4E37] mb-6" style={{fontFamily: 'serif'}}>
              את מה אני אוהב
            </h2>

            <div className="bg-[#F4EDE3] p-6 border-l-4 border-[#D4A574]">
              <h3 className="text-xl font-medium text-[#5D4E37] mb-3">טיולים מאתגרים</h3>
              <p>
                לא מסתפק בטיול סטנדרטי. אתה תמצא אותי בקצוות הר געש, בלוע של הר עם טמפרטורה של מינוס 10 מעלות, או בטרק של 5 ימים דרך יערות במבוק בהימלאיה. <strong>אם זה לא קשה, זה לא מעניין.</strong>
              </p>
            </div>

            <div className="bg-[#F4EDE3] p-6 border-l-4 border-[#D4A574]">
              <h3 className="text-xl font-medium text-[#5D4E37] mb-3">אוכל אמיתי</h3>
              <p>
                רחוב, תחנות אוכל מקומיות, לא מסעדות תיירותיות. חיפשתי את הפאד תאי הטוב ביותר בבנגקוק, אכלתי חומוס בירושלים כמו הישראלים, ושתיתי קפה וייטנאמי על קרח בהא נוי. <strong>האוכל זה התרבות, והתרבות זו הסיפור.</strong>
              </p>
            </div>

            <div className="bg-[#F4EDE3] p-6 border-l-4 border-[#D4A574]">
              <h3 className="text-xl font-medium text-[#5D4E37] mb-3">חברים לטיול</h3>
              <p>
                לא לבד, אלא עם כל אחד שרוצה להצטרף. הטיול הוא טוב פי 200% כשאתה חולק את זה עם מישהו שמרגיש את אותה רוח הרפתקה. <strong>יחד אנחנו קורעים את המדינה ואת העולם.</strong>
              </p>
            </div>

            <h2 className="text-3xl font-light text-[#5D4E37] mb-6 mt-12" style={{fontFamily: 'serif'}}>
              המטרה
            </h2>

            <p className="text-xl font-medium text-[#D4A574] italic">
              "לקרוע את המדינה ואת העולם"
            </p>

            <p>
              זה לא רק סלוגן, זה דרך חיים. כל שבוע יש מסלול חדש ישראלי שלא בדקתי, כל שנה יש מדינה חדשה שלא ביקרתי בה.
            </p>

            <p>הנפש שלי רוצה:</p>
            <ul className="list-disc list-inside space-y-2 text-[#8B7E6A] mr-4">
              <li>להשלים טרק קשוח שהיה מאתגר מאוד</li>
              <li>לאכול את המנה המוזרה בשוק מקומי (ולא להבין בדיוק מה זה)</li>
              <li>להגיע לפסגה בזריחה עם נוף שעוצר נשימה</li>
              <li>לחזור הביתה עם סיפורים שאף אחד לא מאמין</li>
            </ul>

            <h2 className="text-3xl font-light text-[#5D4E37] mb-6 mt-12" style={{fontFamily: 'serif'}}>
              למה בלוג?
            </h2>

            <p>
              כי כל אלה שרוצים ללכת לאיזה מקום אתגרי, אני רוצה שתדעו:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#8B7E6A] mr-4">
              <li><strong>איפה זה באמת קשוח</strong> ולמה</li>
              <li><strong>מה אוכלים שם</strong> ואיפה</li>
              <li><strong>כמה זה עולה</strong> (בלי הפתעות)</li>
              <li><strong>איזה טעויות לא לעשות</strong> (למדתי הדרך הקשה)</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-2 border-[#D4A574]"
            >
              <Mountain className="w-10 h-10 text-[#D4A574] mb-4" />
              <h3 className="text-2xl font-light text-[#5D4E37] mb-4" style={{fontFamily: 'serif'}}>המסלולים שלי</h3>
              <p className="text-[#8B7E6A] leading-relaxed font-light">
                מתמחה במסלולי טיולים קשוחים ומאתגרים. הר חרמון בחורף, וולקנים באינדונזיה, פטגוניה, הימלאיה. אם זה לא מאתגר, זה לא בשבילי.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-2 border-[#D4A574]"
            >
              <Utensils className="w-10 h-10 text-[#D4A574] mb-4" />
              <h3 className="text-2xl font-light text-[#5D4E37] mb-4" style={{fontFamily: 'serif'}}>האוכל שלי</h3>
              <p className="text-[#8B7E6A] leading-relaxed font-light">
                מחפש אוכל אמיתי, מקומי, ביתי. אוכל רחוב, שווקים, warung אינדונזי, חומוס ירושלמי. לא מעניין אותי מסעדות מהודרות - אני רוצה לטעום את המקום דרך האוכל של האנשים שחיים בו.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-2 border-[#D4A574]"
            >
              <Users className="w-10 h-10 text-[#D4A574] mb-4" />
              <h3 className="text-2xl font-light text-[#5D4E37] mb-4" style={{fontFamily: 'serif'}}>החברים שלי</h3>
              <p className="text-[#8B7E6A] leading-relaxed font-light">
                הטיול הכי טוב הוא עם חברים שחושבים כמוך. אוהב לצאת עם כנופיה שמוכנה לקחת סיכונים, לצעוד 8 שעות ביום, ולאכול דברים מוזרים בשווקים.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-2 border-[#D4A574]"
            >
              <Heart className="w-10 h-10 text-[#D4A574] mb-4" />
              <h3 className="text-2xl font-light text-[#5D4E37] mb-4" style={{fontFamily: 'serif'}}>הפילוסופיה שלי</h3>
              <p className="text-[#8B7E6A] leading-relaxed font-light">
                לטייל זה לא לברוח מהחיים - זה לחיות אותם במלואם. כל מסלול מלמד משהו חדש, כל ארוחה מחברת לתרבות חדשה. העולם גדול מדי כדי לשבת בבית.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-[#F4EDE3] p-12 border border-[#D4A574]">
              <h3 className="text-4xl font-extralight text-[#5D4E37] mb-6 tracking-tight" style={{fontFamily: 'serif'}}>
                <span className="italic">בואו נטייל ביחד</span>
              </h3>
              <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto text-[#8B7E6A] font-light">
                אם גם אתם אוהבים מסלולים קשוחים, אוכל אמיתי, וחוויות שלא שוכחים - הגעתם למקום הנכון. העולם מחכה.
              </p>
              <p className="text-3xl font-light text-[#ffffff] italic mb-4">
                לטייל. לאכול. לחזור על זה.
              </p>
              <p className="text-sm text-[#8B7E6A] font-light">
                אלעד דויטש | מטייל אתגרי | אוהב אוכל | הקריות | אתה זה יחד איתי? 🏔️
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
