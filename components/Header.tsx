'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, MapPin, Compass, Info, Map as MapIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CATEGORIES, getSubcategoriesByCategory } from '@/src/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  // סגירת תפריט במעבר דף
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'בית', icon: <Compass className="w-5 h-5" /> },
    { href: '/trails', label: 'כל המסלולים', icon: <MapIcon className="w-5 h-5" /> },
    { href: '/about', label: 'אודות אלעד', icon: <Info className="w-5 h-5" /> },
  ];

  const containerVars = {
    initial: { transition: { staggerChildren: 0.05 } },
    animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  };

  const itemVars = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[100] w-full" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* לוגו וכיתוב */}
          <Link href="/" className="flex items-center gap-3 relative z-[110]">
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <Image
                src="/logo.svg"
                alt="ELAD'S TRAIL"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-[#1B263B] leading-none">
                ELAD'S TRAIL
              </span>
              <span className="text-[11px] md:text-[12px] text-[#E85D04] font-bold mt-1">
                מומחה למסעות וטיולים
              </span>
            </div>
          </Link>

          {/* ניווט דסקטופ */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-sm transition-colors ${
                  pathname === item.href ? 'text-[#E85D04]' : 'text-[#1B263B] hover:text-[#E85D04]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* כפתור המבורגר */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-orange-50 text-[#E85D04] rounded-xl relative z-[110]"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* תפריט מובייל - גרסה יציבה */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl z-[90] border-t"
          >
            <motion.nav 
              variants={containerVars}
              initial="initial"
              animate="animate"
              className="p-6 space-y-4 max-h-[80vh] overflow-y-auto"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={itemVars}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-4 p-4 rounded-2xl font-bold text-lg ${
                      pathname === item.href ? 'bg-[#E85D04] text-white' : 'bg-gray-50 text-[#1B263B]'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-6 border-t">
                <p className="text-xs font-bold text-[#E85D04] uppercase mb-4 px-2">יעדים נבחרים</p>
                <div className="grid grid-cols-1 gap-2">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="flex items-center justify-between p-4 bg-white border rounded-xl"
                    >
                      <span className="font-bold text-[#1B263B]">{category.name_he}</span>
                      <ChevronDown className="w-4 h-4 text-[#E85D04] -rotate-90" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}