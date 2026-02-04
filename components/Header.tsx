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
        <div className="flex items-center justify-between h-24 md:h-20"> {/* הגבהתי מעט את הבר למובייל */}
          
          {/* אזור הלוגו */}
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <div className="relative h-16 w-16 md:h-14 md:w-14"> {/* הגדלנו את המיכל של הלוגו */}
              <Image
                src="/logo.svg"
                alt="SLAVX"
                fill
                className="object-contain" // שומר על פרופורציות הלוגו
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-light text-[#1B263B] tracking-wide leading-tight">
                ELAD'S TRAIL
              </span>
              <span className="text-[10px] text-[#E85D04] font-medium tracking-[0.2em] uppercase hidden sm:block">
                Adventure awaits
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
                            className="block px-4 py-2 text-sm font-semibold text-[#1B263B] hover:bg-gray-50 hover:text-[#E85D04] transition-colors"
                          >
                            {category.name_he}
                          </Link>
                          {subcategories.length > 0 && (
                            <div className="pr-4">
                              {subcategories.map((subcategory) => (
                                <Link
                                  key={subcategory.id}
                                  href={`/category/${category.slug}#${subcategory.slug}`}
                                  className="block px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-[#E85D04] transition-colors"
                                >
                                  {subcategory.name_he}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* כפתור המבורגר למובייל */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="תפריט ניווט"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8 text-[#1B263B]" />
            ) : (
              <Menu className="w-8 h-8 text-[#1B263B]" />
            )}
          </button>
        </div>
      </div>

      {/* תפריט מובייל נפתח */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium text-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-[#E85D04] text-white'
                      : 'text-[#1B263B] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t mt-4">
                <p className="px-4 py-2 text-sm font-bold text-[#E85D04] uppercase tracking-widest">יעדים</p>
                {CATEGORIES.map((category) => {
                  const subcategories = getSubcategoriesByCategory(category.id);
                  return (
                    <div key={category.id} className="mb-2">
                      <Link
                        href={`/category/${category.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-[#1B263B] font-medium text-base hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {category.name_he}
                      </Link>
                      {subcategories.length > 0 && (
                        <div className="pr-6 mt-1 flex flex-wrap gap-2">
                          {subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.id}
                              href={`/category/${category.slug}#${subcategory.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="inline-block px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded-full border border-gray-100"
                            >
                              {subcategory.name_he}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}