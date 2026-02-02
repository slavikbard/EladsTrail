import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';
import Image from 'next/image';
import { CATEGORIES } from '@/src/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#5D4E37] text-white mt-20 pb-20 md:pb-0" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.svg"
                alt="SLAVX"
                width={50}
                height={50}
                className="h-10 w-10"
              />
              <h3 className="text-2xl font-light tracking-wide" style={{fontFamily: 'serif'}}>
                <span className="italic text-[#D4A574]">המסלול של אלעד</span>
              </h3>
            </div>
            <p className="text-[#C9A98E] mb-6 font-light italic">לטייל. לאכול. לחזור על זה.</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/eladdeutsch4/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A574] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/elad.deutsch.3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4A574] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:Eladd19899@gmail.com"
                className="hover:text-[#D4A574] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-light mb-6 text-[#D4A574] tracking-wider">מסלולים</h4>
            <ul className="space-y-3 text-[#C9A98E] font-light">
              <li>
                <Link href="/trails" className="hover:text-white transition-colors">
                  כל המסלולים
                </Link>
              </li>
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link href={`/category/${category.slug}`} className="hover:text-white transition-colors">
                    מסלולים ב{category.name_he}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  אודות אלעד
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-6 text-[#D4A574] tracking-wider">מידע משפטי</h4>
            <ul className="space-y-3 text-[#C9A98E] font-light">
              <li>
                <Link href="/accessibility-statement" className="hover:text-white transition-colors">
                  הצהרת נגישות
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white transition-colors">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#7A6F5D] text-center text-[#C9A98E] text-sm font-light">
          <p>
            © {new Date().getFullYear()} המסלול של אלעד. כל הזכויות שמורות.
          </p>
          <p className="mt-2">
            Built with ❤️ by{' '}
            <a
              href="https://slavx.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A574] hover:underline"
            >
              SLAVX Brand
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
