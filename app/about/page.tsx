'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Utensils, Camera, Heart } from 'lucide-react';

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
          className="relative h-[500px] overflow-hidden mb-12"
        >
          <Image
            src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg"
            alt="אלעד במסלול"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white border-r-4 border-[#D4A574] p-8 md:p-12 mb-12">
            <p className="text-2xl text-[#5D4E37] leading-relaxed font-light italic">
              יש כאלה שמטיילים כדי לנוח, אני מטייל כדי לחיות. המסלול של אלעד נולד מתוך רעב בלתי פוסק למסלולים הכי קשוחים ולאוכל מקומי אמיתי.
            </p>
          </div>

          <div className="space-y-8 text-[#5D4E37] text-lg leading-loose font-light">
            <p>
              בשביל הרבה אנשים, טיול זה חופשה. בשבילי, זה הדרך שלי לחיות. כל מסלול הוא סיפור חדש, כל פסגה היא אתגר חדש, וכל ארוחה היא הזדמנות להכיר את המקום דרך הטעמים שלו.
            </p>

            <p>
              התחלתי לטייל בגיל 16, כשיצאתי לשביל ישראל בפעם הראשונה. מאז, החרטתי על הרגליים שלי אלפי קילומטרים - מהרי הגליל ועד פסגות האנדים, ממדבר יהודה ועד שבילי פורטוגל.
            </p>

            <p>
              אבל טיול בלי אוכל טוב? זה כמו מסלול בלי תצפית. בכל מקום שאני מגיע, אני מחפש את האוכל האמיתי - לא את המסעדות התיירותיות המהודרות, אלא את המקומות שבהם המקומיים אוכלים. הטאבון הדרוזי בגליל, הפסקדה המושלמת בליסבון, הבורקס הטרי בשוק מחנה יהודה - אלה הטעמים שהופכים כל מסלול לבלתי נשכח.
            </p>

            <p>
              הבלוג הזה נולד מתוך הרצון לשתף את החוויות האלה איתכם. כל מסלול שאני כותב עליו, עברתי בעצמי. כל מסעדה שאני ממליץ עליה, אכלתי בה. כל תמונה שאתם רואים, צילמתי בעצמי (גם אם לפעמים עם הידיים הרועדות אחרי טיפוס ארוך).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-2 border-[#D4A574]"
            >
              <MapPin className="w-10 h-10 text-[#D4A574] mb-4" />
              <h3 className="text-2xl font-light text-[#5D4E37] mb-4" style={{fontFamily: 'serif'}}>המסלולים שלי</h3>
              <p className="text-[#8B7E6A] leading-relaxed font-light">
                מתמחה במסלולי טיולים קשוחים ומאתגרים. שביל ישראל, שבילי הרי אירופה, ומסלולים מדבריים. אם זה קל מדי, זה לא בשבילי.
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
                מחפש אוכל אמיתי, מקומי, ביתי. לא מעניין אותי מסעדות מהודרות - אני רוצה לטעום את המקום דרך האוכל של האנשים שחיים בו.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-t-2 border-[#D4A574]"
            >
              <Camera className="w-10 h-10 text-[#D4A574] mb-4" />
              <h3 className="text-2xl font-light text-[#5D4E37] mb-4" style={{fontFamily: 'serif'}}>הצילום שלי</h3>
              <p className="text-[#8B7E6A] leading-relaxed font-light">
                כל התמונות בבלוג צולמו על ידי במהלך הטיולים. אני מאמין בתיעוד אמיתי של החוויה - הטוב, הרע, והמיוזע.
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
                לטייל זה לא לברוח מהחיים - זה לחיות אותם במלואם. כל מסלול מלמד משהו חדש, כל ארוחה מחברת לתרבות חדשה.
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
                <span className="italic">בואו לטייל איתי</span>
              </h3>
              <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto text-[#8B7E6A] font-light">
                אם גם אתם אוהבים מסלולים קשוחים, אוכל אמיתי, וחוויות שלא שוכחים - הגעתם למקום הנכון. בואו נטייל ביחד.
              </p>
              <p className="text-2xl font-light text-[#D4A574] italic">
                לטייל. לאכול. לחזור על זה.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
