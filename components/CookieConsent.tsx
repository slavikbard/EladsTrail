'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const dismissConsent = () => {
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1B263B] text-white shadow-2xl border-t-4 border-[#E85D04] mb-0 md:mb-0"
          dir="rtl"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 flex-1">
                <Cookie className="w-6 h-6 text-[#E85D04] flex-shrink-0" />
                <p className="text-sm md:text-base leading-relaxed">
                  אתר זה משתמש בעוגיות כדי להבטיח את החוויה הטובה ביותר. המשך הגלישה מהווה הסכמה לכך.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={acceptCookies}
                  className="bg-[#E85D04] hover:bg-[#E85D04]/90 text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 whitespace-nowrap"
                >
                  אני מסכים/ה
                </button>
                <button
                  onClick={dismissConsent}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="סגור"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
