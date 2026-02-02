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
    <header className="bg-white shadow-sm sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="SLAVX"
              width={50}
              height={50}
              className="h-12 w-12"
            />
            <span className="text-xl font-light text-[#1B263B] tracking-wide hidden sm:block">
              ELAD'S TRAIL
            </span>
          </Link>

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
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                  >
                    {CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="block px-4 py-2 text-sm text-[#1B263B] hover:bg-gray-50 hover:text-[#E85D04] transition-colors"
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
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
            className="md:hidden border-t bg-white"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-[#E85D04] text-white'
                      : 'text-[#1B263B] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 border-t mt-2">
                <p className="px-4 py-2 text-sm font-semibold text-gray-500">יעדים</p>
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#1B263B] hover:bg-gray-100 rounded-lg transition-colors"
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
