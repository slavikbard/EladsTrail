'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CATEGORIES } from '@/src/data/siteData';

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
    <header className="bg-white/95 backdrop-blur-sm border-b border-[#F4EDE3] sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="SLAVX"
              width={50}
              height={50}
              className="h-10 w-10"
            />
            <span className="text-xl font-light text-[#5D4E37] tracking-wide hidden sm:block" style={{fontFamily: 'serif'}}>
              <span className="italic">המסלול של אלעד</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-light transition-colors text-sm tracking-wider ${
                  pathname === item.href
                    ? 'text-[#D4A574]'
                    : 'text-[#5D4E37] hover:text-[#D4A574]'
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
              <button className="flex items-center gap-1 font-light text-sm tracking-wider text-[#5D4E37] hover:text-[#D4A574] transition-colors">
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
                    className="absolute left-0 mt-2 w-48 bg-white border border-[#F4EDE3] shadow-lg py-2"
                  >
                    {CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="block px-4 py-2 text-sm text-[#5D4E37] hover:bg-[#FAF8F5] hover:text-[#D4A574] transition-colors font-light"
                      >
                        {category.name_he}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#FAF8F5] rounded-lg transition-colors text-[#5D4E37]"
            aria-label="תפריט ניווט"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#F4EDE3] bg-white"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-light transition-colors ${
                    pathname === item.href
                      ? 'bg-[#D4A574] text-white'
                      : 'text-[#5D4E37] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 border-t border-[#F4EDE3] mt-2">
                <p className="px-4 py-2 text-xs font-medium text-[#8B7E6A] tracking-widest">יעדים</p>
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#5D4E37] hover:bg-[#FAF8F5] rounded-lg transition-colors font-light"
                  >
                    {category.name_he}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
