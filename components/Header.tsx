'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Compass, Info, Map as MapIcon, Mountain, UtensilsCrossed, Lightbulb, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CATEGORIES } from '@/src/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categoryIcons: Record<string, React.ReactNode> = {
    'destinations': <MapPin className="w-4 h-4" />,
    'bucket-list-hikes': <Mountain className="w-4 h-4" />,
    'travel-tips': <Lightbulb className="w-4 h-4" />,
    'food-drinks': <UtensilsCrossed className="w-4 h-4" />,
  };

  const isHome = pathname === '/';

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5 relative z-[110]">
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <Image
                src="/logo.svg"
                alt="ELAD'S TRAIL"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-[#1B263B] leading-none tracking-wide">
                ELAD&apos;S TRAIL
              </span>
              <span className="text-[10px] md:text-[11px] text-[#E85D04] font-semibold mt-0.5 tracking-wider">
                לטייל. לאכול. לחזור על זה.
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/" active={isHome}>בית</NavLink>
            <NavLink href="/trails" active={pathname === '/trails'}>כל המסלולים</NavLink>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname.startsWith('/category') || pathname === '/categories'
                    ? 'text-[#E85D04] bg-orange-50'
                    : 'text-[#1B263B] hover:text-[#E85D04] hover:bg-gray-50'
                }`}
              >
                יעדים
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/category/${cat.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-[#8B7E6A] group-hover:bg-[#E85D04]/10 group-hover:text-[#E85D04] transition-colors">
                            {categoryIcons[cat.slug] || <Compass className="w-4 h-4" />}
                          </span>
                          <div>
                            <span className="block text-sm font-medium text-[#1B263B] group-hover:text-[#E85D04] transition-colors">
                              {cat.name_he}
                            </span>
                            <span className="block text-[11px] text-gray-400">
                              {cat.name_en}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 p-2">
                      <Link
                        href="/categories"
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-[#E85D04] hover:bg-orange-50 transition-colors font-medium"
                      >
                        כל היעדים
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/about" active={pathname === '/about'}>אודות</NavLink>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1B263B] hover:bg-gray-50 rounded-lg relative z-[110] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-[80] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl z-[90] border-t border-gray-100"
            >
              <nav className="p-4 space-y-1 max-h-[75vh] overflow-y-auto">
                <MobileNavItem href="/" active={isHome} icon={<Compass className="w-5 h-5" />}>
                  בית
                </MobileNavItem>
                <MobileNavItem href="/trails" active={pathname === '/trails'} icon={<MapIcon className="w-5 h-5" />}>
                  כל המסלולים
                </MobileNavItem>
                <MobileNavItem href="/about" active={pathname === '/about'} icon={<Info className="w-5 h-5" />}>
                  אודות אלעד
                </MobileNavItem>

                <div className="pt-3 mt-3 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-3">קטגוריות</p>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 text-[#8B7E6A]">
                        {categoryIcons[cat.slug] || <Compass className="w-4 h-4" />}
                      </span>
                      <span className="text-sm font-medium text-[#1B263B]">{cat.name_he}</span>
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
        active
          ? 'text-[#E85D04] bg-orange-50'
          : 'text-[#1B263B] hover:text-[#E85D04] hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavItem({ href, active, icon, children }: { href: string; active: boolean; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-3 rounded-xl font-medium text-sm transition-all ${
        active ? 'bg-[#E85D04] text-white' : 'text-[#1B263B] hover:bg-gray-50'
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}
