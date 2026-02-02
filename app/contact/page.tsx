'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light text-[#1B263B] mb-6">
            צרו קשר
          </h1>
          <div className="w-24 h-1 bg-[#E85D04] mx-auto mb-8" />
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            יש לכם שאלות? רוצים שיתוף פעולה? או סתם רוצים לספר על הטרק הבא שלכם?
            אני כאן!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light text-[#1B263B] mb-8">
              שלחו לי הודעה
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  שם מלא
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85D04] focus:border-transparent transition-all"
                  placeholder="איך קוראים לך?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  אימייל
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85D04] focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  הודעה
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E85D04] focus:border-transparent transition-all resize-none"
                  placeholder="ספרו לי..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E85D04] text-white px-8 py-4 rounded-lg hover:bg-[#1B263B] transition-colors duration-300 font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                שלח הודעה
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-700 rounded-lg text-center"
                >
                  תודה! ההודעה נשלחה בהצלחה
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-light text-[#1B263B] mb-8">
                הצטרפו אליי ברשתות
              </h2>

              <div className="space-y-6">
                <a
                  href="https://www.instagram.com/eladdeutsch4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#E85D04] hover:bg-gray-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#E85D04] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1B263B]">Instagram</p>
                    <p className="text-sm text-gray-600">@eladdeutsch4</p>
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#E85D04] hover:bg-gray-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#1B263B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1B263B]">TikTok</p>
                    <p className="text-sm text-gray-600">@eladtravel</p>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#E85D04] hover:bg-gray-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1B263B]">YouTube</p>
                    <p className="text-sm text-gray-600">Elad's Travel</p>
                  </div>
                </a>

                <a
                  href="mailto:Eladd19899@gmail.com"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#E85D04] hover:bg-gray-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1B263B]">Email</p>
                    <p className="text-sm text-gray-600">Eladd19899@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-[#1B263B] mb-4">
                שיתופי פעולה
              </h3>
              <p className="text-gray-600 leading-relaxed">
                מעוניינים בשיתוף פעולה? אני עובד עם מותגי טיולים, ציוד חוצות, ויעדים תיירותיים.
                בואו נדבר!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
