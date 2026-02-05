'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Mountain, Compass, User } from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'בית', key: 'home' },
    { href: '/trails', icon: Mountain, label: 'מסלולים', key: 'trails' },
    { href: '/categories', icon: Compass, label: 'יעדים', key: 'categories' },
    { href: '/about', icon: User, label: 'אודות', key: 'about' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 md:hidden z-40">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-[#E85D04]'
                  : 'text-gray-400 active:text-[#1B263B]'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'stroke-[2.5] scale-110' : ''}`} />
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
