'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CATEGORIES, getSubcategoriesByCategory } from '@/src/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'בית' },
    { href: '/trails', label: 'כל המסלולים' },
    { href: '/about', label: 'אודות אלעד' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-20">
          
          {/* אזור הלוגו - מוגדל למובייל */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-16 w-16 md:h-14 md:w-14">
              <Image
                src="/logo.svg"
                alt="SLAVX"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-[#1B263B] tracking-tight leading-none">
                ELAD'S TRAIL
              </span>
              <span className="text-[10px] text-[#E85D04] font-bold tracking-[0.15em] uppercase">
                ALBANIA EXPERT
              </span>
            </div>
          </Link>

          {/* ניווט דסקטופ */}
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
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 max-h-[80vh] overflow-y-auto"
                  >
                    {CATEGORIES.map((category) => {
                      const subcategories = getSubcategoriesByCategory(category.id);
                      return (
                        <div key={category.id} className="py-2">
                          <Link
                            href={`/category/${category.slug}`}
                            className="block px-4 py-2 text-sm font-semibold text-[#1B263B] hover:bg-orange-50 hover:text-[#E85D04] transition-colors"
                          >
                            {category.name_he}
                          </Link>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* כפתור המבורגר מעוצב */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-orange-50 text-[#E85D04] rounded-xl transition-all active:scale-95"
            aria-label="תפריט"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* תפריט מובייל משודרג עם צבעי המותג */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-24 bg-white/95 backdrop-blur-md border-b shadow-2xl z-40"
          >
            <nav className="px-5 py-8 space-y-4 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-5 py-4 rounded-2xl font-bold text-xl transition-all ${
                    pathname === item.href
                      ? 'bg-[#E85D04] text-white shadow-lg shadow-orange-200'
                      : 'text-[#1B263B] bg-gray-50 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-6 mt-6 border-t border-gray-100">
                <p className="px-5 py-2 text-xs font-black text-[#E85D04] uppercase tracking-[0.2em] mb-4">חקר לפי יעדים</p>
                <div className="grid grid-cols-1 gap-3">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-5 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-orange-200 transition-all"
                    >
                      <span className="text-[#1B263B] font-bold text-lg">{category.name_he}</span>
                      <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
                        <ChevronDown className="w-4 h-4 text-[#E85D04] -rotate-90" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}