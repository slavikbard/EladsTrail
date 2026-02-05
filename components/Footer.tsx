'use client';

import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { CATEGORIES } from '@/src/data/siteData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#1B263B] text-white pb-20 md:pb-0" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              <div>
                <span className="text-lg font-bold tracking-wide">ELAD&apos;S TRAIL</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              לטייל. לאכול. לחזור על זה. בלוג טיולים ואוכל של אלעד דויטש.
            </p>
            <div className="flex gap-3">
              <SocialLink href="https://www.instagram.com/eladdeutsch4/" label="Instagram">
                <Instagram className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/elad.deutsch.3" label="Facebook">
                <Facebook className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="mailto:Eladd19899@gmail.com" label="Email">
                <Mail className="w-4 h-4" />
              </SocialLink>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4 text-white/90">ניווט</h4>
            <ul className="space-y-2.5">
              <FooterLink href="/trails">כל המסלולים</FooterLink>
              <FooterLink href="/categories">קטגוריות</FooterLink>
              <FooterLink href="/about">אודות</FooterLink>
              <FooterLink href="/contact">צור קשר</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4 text-white/90">קטגוריות</h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <FooterLink key={cat.id} href={`/category/${cat.slug}`}>{cat.name_he}</FooterLink>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold mb-4 text-white/90">הישארו מעודכנים</h4>
            <p className="text-gray-400 text-sm mb-4">
              קבלו עדכונים על מסלולים חדשים וטיפים למייל
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="האימייל שלכם"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#E85D04]/30 focus:border-[#E85D04]/50 transition-all"
              />
              <button
                type="submit"
                className="bg-[#E85D04] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#d04f00] transition-colors whitespace-nowrap"
              >
                הרשמה
              </button>
            </form>
            {subscribed && (
              <p className="text-emerald-400 text-sm mt-2">תודה על ההרשמה!</p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} המסלול של אלעד. כל הזכויות שמורות.</p>
          <div className="flex gap-4">
            <Link href="/accessibility-statement" className="hover:text-gray-300 transition-colors">הצהרת נגישות</Link>
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">פרטיות</Link>
            <Link href="/terms-of-use" className="hover:text-gray-300 transition-colors">תנאי שימוש</Link>
          </div>
          <p>
            Built by{' '}
            <a href="https://slavx.site" target="_blank" rel="noopener noreferrer" className="text-[#E85D04] hover:underline">
              SLAVX Brand
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-gray-300 hover:bg-[#E85D04] hover:text-white transition-all duration-200"
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}
