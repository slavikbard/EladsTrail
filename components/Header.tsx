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
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header גבוה מאוד (h-24 בנייד, h-32 במחשב) כדי להכיל לוגו רחב */}
        <div className="flex items-center justify-between h-24 md:h-32">
          <Link href="/" className="flex items-center gap-6 relative z-[110] group">
            {/* שינוי דרמטי: רוחב גדול (w-48) וגובה משמעותי (h-24) */}
            <div className="relative h-20 w-32 md:h-28 md:w-48 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="ELAD'S TRAIL"
                fill
                className="object-contain object-right" // הצמדה לימין בגלל RTL
                priority
              />
            </div>
            
            <div className="flex flex-col border-r-2 border-gray-100 pr-4">
              <span className="text-xl md:text-2xl font-black text-[#1B263B] leading-tight tracking-tighter">
                ELAD&apos;S TRAIL
              </span>
              <span className="text-[12px] md:text-[15px] text-[#E85D04] font-bold mt-1 tracking-wide">
                לטייל. לאכול. לחזור על זה.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <NavLink href="/" active={isHome}>בית</NavLink>
            <NavLink href="/trails" active={pathname === '/trails'}>כל המסלולים</NavLink>

            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className={`flex items-center gap-1.5 px-5 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                  pathname.startsWith('/category') || pathname === '/categories'
                    ? 'text-[#E85D04] bg-orange-50'
                    : 'text-[#1B263B] hover:text-[#E85D04] hover:bg-gray-50'
                }`}
              >
                יעדים
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-3">
                      {CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/category/${cat.slug}`}
                          className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 text-[#8B7E6A] group-hover:bg-[#E85D04]/10 group-hover:text-[#E85D04] transition-colors">
                            {categoryIcons[cat.slug] || <Compass className="w-5 h-5" />}
                          </span>
                          <div>
                            <span className="block text-sm font-bold text-[#1B263B] group-hover:text-[#E85D04]">
                              {cat.name_he}
                            </span>
                            <span className="block text-[12px] text-gray-400 font-medium">
                              {cat.name_en}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink href="/about" active={pathname === '/about'}>אודות</NavLink>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 text-[#1B263B] bg-gray-50 rounded-xl relative z-[110]"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* תפריט מובייל נשאר ללא שינוי פונקציונלי אך מותאם ויזואלית */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[80] md:hidden backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl z-[90] border-t border-gray-100 rounded-b-3xl"
            >
              <nav className="p-6 space-y-2">
                <MobileNavItem href="/" active={isHome} icon={<Compass className="w-6 h-6" />}>בית</MobileNavItem>
                <MobileNavItem href="/trails" active={pathname === '/trails'} icon={<MapIcon className="w-6 h-6" />}>כל המסלולים</MobileNavItem>
                <MobileNavItem href="/about" active={pathname === '/about'} icon={<Info className="w-6 h-6" />}>אודות</MobileNavItem>
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
      className={`px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ${
        active
          ? 'text-[#E85D04] bg-orange-50 shadow-sm'
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
      className={`flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-base transition-all ${
        active ? 'bg-[#E85D04] text-white shadow-lg shadow-orange-200' : 'text-[#1B263B] bg-gray-50'
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}