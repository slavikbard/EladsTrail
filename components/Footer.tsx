import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1B263B] text-white mt-20 pb-20 md:pb-0" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="לוגו המסלול של אלעד"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold text-[#E85D04]">המסלול של אלעד</h3>
            </div>
            <p className="text-gray-300 mb-4">לטייל. לאכול. לחזור על זה.</p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E85D04] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E85D04] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@eladstrail.com"
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
              <li>
                <Link href="/categories?cat=israel" className="hover:text-[#E85D04] transition-colors">
                  מסלולים בישראל
                </Link>
              </li>
              <li>
                <Link href="/categories?cat=global" className="hover:text-[#E85D04] transition-colors">
                  מסלולים בעולם
                </Link>
              </li>
              <li>
                <Link href="/categories?cat=culinary" className="hover:text-[#E85D04] transition-colors">
                  חוויות קולינריות
                </Link>
              </li>
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
