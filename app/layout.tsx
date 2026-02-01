import './globals.css';
import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext';
import AccessibilityButton from '@/components/AccessibilityButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import CookieConsent from '@/components/CookieConsent';

const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'המסלול של אלעד - לטייל. לאכול. לחזור על זה.',
  description: 'בלוג טיולים ואוכל של אלעד. מסלולי טיולים בישראל ובעולם, חוויות קולינריות אותנטיות, ואוכל מקומי אמיתי.',
  openGraph: {
    title: 'המסלול של אלעד',
    description: 'לטייל. לאכול. לחזור על זה.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'המסלול של אלעד',
    description: 'לטייל. לאכול. לחזור על זה.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className}>
        <AccessibilityProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileNav />
          <AccessibilityButton />
          <CookieConsent />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
