'use client';

import { motion } from 'framer-motion';
import { X, Type, Palette, Contrast, Keyboard, FileText } from 'lucide-react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import Link from 'next/link';

interface AccessibilityMenuProps {
  onClose: () => void;
}

export default function AccessibilityMenu({ onClose }: AccessibilityMenuProps) {
  const {
    settings,
    increaseTextSize,
    decreaseTextSize,
    toggleGrayscale,
    toggleHighContrast,
    toggleKeyboardNav,
    resetSettings,
  } = useAccessibility();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
        dir="rtl"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1B263B]">נגישות</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="סגור תפריט"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-5 h-5 text-[#E85D04]" />
                <h3 className="font-semibold text-lg">גודל טקסט</h3>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseTextSize}
                  disabled={settings.textSize <= 80}
                  className="px-4 py-2 bg-[#1B263B] text-white rounded-lg hover:bg-[#1B263B]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  הקטן
                </button>
                <span className="text-lg font-medium">{settings.textSize}%</span>
                <button
                  onClick={increaseTextSize}
                  disabled={settings.textSize >= 150}
                  className="px-4 py-2 bg-[#1B263B] text-white rounded-lg hover:bg-[#1B263B]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  הגדל
                </button>
              </div>
            </div>

            <div className="border-b pb-6">
              <button
                onClick={toggleGrayscale}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                  settings.grayscale ? 'bg-[#E85D04] text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5" />
                  <span className="font-semibold">גווני אפור</span>
                </div>
                <div
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.grayscale ? 'bg-white/30' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.grayscale ? 'translate-x-[-24px]' : 'translate-x-[-2px]'
                    } mt-0.5`}
                  />
                </div>
              </button>
            </div>

            <div className="border-b pb-6">
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                  settings.highContrast ? 'bg-[#E85D04] text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Contrast className="w-5 h-5" />
                  <span className="font-semibold">ניגודיות גבוהה</span>
                </div>
                <div
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.highContrast ? 'bg-white/30' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-[-24px]' : 'translate-x-[-2px]'
                    } mt-0.5`}
                  />
                </div>
              </button>
            </div>

            <div className="border-b pb-6">
              <button
                onClick={toggleKeyboardNav}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                  settings.keyboardNav ? 'bg-[#E85D04] text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Keyboard className="w-5 h-5" />
                  <span className="font-semibold">ניווט במקלדת</span>
                </div>
                <div
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.keyboardNav ? 'bg-white/30' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      settings.keyboardNav ? 'translate-x-[-24px]' : 'translate-x-[-2px]'
                    } mt-0.5`}
                  />
                </div>
              </button>
            </div>

            <Link
              href="/accessibility-statement"
              onClick={onClose}
              className="w-full flex items-center gap-3 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
            >
              <FileText className="w-5 h-5 text-[#E85D04]" />
              <span className="font-semibold">הצהרת נגישות</span>
            </Link>

            <button
              onClick={resetSettings}
              className="w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-all"
            >
              אפס הגדרות
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
