'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, MapPin, Compass, Info, Map as MapIcon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CATEGORIES, getSubcategoriesByCategory } from '@/src/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'בית', icon: <Compass className="w-5 h-5" /> },
    { href: '/trails', label: 'כל המסלולים', icon: <MapIcon className="w-5 h-5" /> },
    { href: '/about', label: 'אודות אלעד', icon: <Info className="w-5 h-5" /> },
  ];

  // אנימציות כניסה מדורגות לפריטים בתפריט
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    animate: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] } }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-20">
          
          {/* לוגו מוגדל - מותאם למובייל ודסקטופ */}
          <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
            <div className="relative h-16 w-16 md:h-14 md:w-14">
              <Image
                src="/logo.svg"
                alt="ELAD'S TRAIL"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-[#1B263B] tracking-tight leading-none">
                ELAD'S TRAIL
              </span>
              <span className="text-[11px] md:text-[12px] text-[#E85D04] font-bold tracking-normal mt-1">
                מומחה למסעות וטיולים
              </span>
            </div>
          </Link>

          {/* ניווט דסקטופ (מוסתר במובייל) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors text-sm tracking-wide ${
                  pathname === item.href
                    ? 'text-[#E85D04]'
                    : 'text-[#1B263B] hover:text-[#E85D04]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-sm tracking-wide text-[#1B263B] hover:text-[#E85D04] transition-colors">
                יעדים
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {destinationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 overflow-hidden"
                  >
                    {CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="block px-5 py-3 text-sm font-semibold text-[#1B263B] hover:bg-orange-50 hover:text-[#E85D04] transition-colors"
                      >
                        {category.name_he}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* כפתור המבורגר למובייל - מעוצב בכתום */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-orange-50 text-[#E85D04] rounded-2xl transition-all active:scale-90"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* תפריט מובייל - גרסה מתוקנת ללא שגיאות */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-x-0 top-[96px] bg-white z-[60] shadow-2xl overflow-y-auto max-h-[calc(100vh-96px)]"
          >
            <motion.nav 
              variants={containerVars}
              initial="initial"
              animate="animate"
              className="px-6 py-8 space-y-4 pb-24"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={itemVars}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-xl transition-all ${
                      pathname === item.href
                        ? 'bg-[#E85D04] text-white shadow-lg shadow-orange-200'
                        : 'text-[#1B263B] bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVars} className="pt-8 mt-4 border-t border-gray-100">
                <p className="px-2 py-2 text-xs font-black text-[#E85D04] uppercase tracking-[0.2em] mb-4">חקר לפי יעדים</p>
                <div className="grid grid-cols-1 gap-3">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-6 py-5 bg-white border border-gray-100 rounded-2xl shadow-sm active:bg-orange-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="text-[#1B263B] font-bold text-lg">{category.name_he}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-[#E85D04] -rotate-90" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}