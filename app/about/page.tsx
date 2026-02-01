'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Utensils, Camera, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1B263B] mb-6">
            נעים להכיר, אני אלעד
          </h1>
          <div className="w-24 h-1 bg-[#E85D04] mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl"
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
          <div className="bg-[#E85D04]/10 border-r-4 border-[#E85D04] p-8 rounded-lg mb-12">
            <p className="text-2xl text-[#1B263B] font-semibold leading-relaxed">
              יש כאלה שמטיילים כדי לנוח, אני מטייל כדי לחיות. המסלול של אלעד נולד מתוך רעב בלתי פוסק למסלולים הכי קשוחים ולאוכל מקומי אמיתי.
            </p>
          </div>

          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
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

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#E85D04]"
            >
              <MapPin className="w-12 h-12 text-[#E85D04] mb-4" />
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4">המסלולים שלי</h3>
              <p className="text-gray-700 leading-relaxed">
                מתמחה במסלולי טיולים קשוחים ומאתגרים. שביל ישראל, שבילי הרי אירופה, ומסלולים מדבריים. אם זה קל מדי, זה לא בשבילי.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#E85D04]"
            >
              <Utensils className="w-12 h-12 text-[#E85D04] mb-4" />
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4">האוכל שלי</h3>
              <p className="text-gray-700 leading-relaxed">
                מחפש אוכל אמיתי, מקומי, ביתי. לא מעניין אותי מסעדות מהודרות - אני רוצה לטעום את המקום דרך האוכל של האנשים שחיים בו.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#E85D04]"
            >
              <Camera className="w-12 h-12 text-[#E85D04] mb-4" />
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4">הצילום שלי</h3>
              <p className="text-gray-700 leading-relaxed">
                כל התמונות בבלוג צולמו על ידי במהלך הטיולים. אני מאמין בתיעוד אמיתי של החוויה - הטוב, הרע, והמיוזע.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#E85D04]"
            >
              <Heart className="w-12 h-12 text-[#E85D04] mb-4" />
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4">הפילוסופיה שלי</h3>
              <p className="text-gray-700 leading-relaxed">
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
            <div className="bg-gradient-to-br from-[#1B263B] to-[#E85D04]/20 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">בואו לטייל איתי</h3>
              <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                אם גם אתם אוהבים מסלולים קשוחים, אוכל אמיתי, וחוויות שלא שוכחים - הגעתם למקום הנכון. בואו נטייל ביחד.
              </p>
              <p className="text-2xl font-bold text-[#E85D04]">
                לטייל. לאכול. לחזור על זה.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
