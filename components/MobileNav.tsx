'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Mountain, List, User } from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'בית' },
    { href: '/trails', icon: Mountain, label: 'טיולים' },
    { href: '/trails', icon: List, label: 'יעדים' },
    { href: '/about', icon: User, label: 'אודות' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40 shadow-lg">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 transition-colors ${
                isActive
                  ? 'text-[#E85D04]'
                  : 'text-gray-600 hover:text-[#1B263B]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
