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
    <footer className="bg-[#1B263B] text-white mt-20 pb-20 md:pb-0" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="SLAVX"
                width={50}
                height={50}
                className="h-12 w-12"
              />
              <h3 className="text-xl font-light tracking-wide">
                <span className="text-white">ELAD'S</span>{' '}
                <span className="text-[#E85D04]">TRAIL</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">לטייל. לאכול. לחזור על זה.</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/eladdeutsch4/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E85D04] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/elad.deutsch.3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E85D04] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:Eladd19899@gmail.com"
                className="hover:text-[#E85D04] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">מסלולים</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/trails" className="hover:text-[#E85D04] transition-colors">
                  כל המסלולים
                </Link>
              </li>
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link href={`/category/${category.slug}`} className="hover:text-[#E85D04] transition-colors">
                    מסלולים ב{category.name_he}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="hover:text-[#E85D04] transition-colors">
                  אודות אלעד
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">מידע משפטי</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/accessibility-statement" className="hover:text-[#E85D04] transition-colors">
                  הצהרת נגישות
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#E85D04] transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-[#E85D04] transition-colors">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">הרשמו לניוזלטר</h4>
            <p className="text-gray-300 text-sm mb-4">
              קבלו עדכונים על מסלולים חדשים, טיפים ומתכונים ישירות למייל
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="האימייל שלכם"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E85D04] transition-all"
              />
              <button
                type="submit"
                className="w-full bg-[#E85D04] text-white px-4 py-2 rounded-lg hover:bg-[#E85D04]/90 transition-colors font-medium"
              >
                הרשמה
              </button>
              {subscribed && (
                <p className="text-green-400 text-sm">תודה על ההרשמה!</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} המסלול של אלעד. כל הזכויות שמורות.
          </p>
          <p className="mt-2">
            Built with ❤️ by{' '}
            <a
              href="https://slavx.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E85D04] hover:underline"
            >
              SLAVX Brand
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
