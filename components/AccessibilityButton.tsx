'use client';

import { useState } from 'react';
import { Accessibility } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AccessibilityMenu from './AccessibilityMenu';

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 bg-[#E85D04] hover:bg-[#E85D04]/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="פתח תפריט נגישות"
        title="נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && <AccessibilityMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
