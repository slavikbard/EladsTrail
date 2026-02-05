'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getRecentPosts, getPublishedPosts, getAllCategories, type Post, type Category } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { ArrowLeft, Mountain, MapPin, UtensilsCrossed, Lightbulb } from 'lucide-react';

const categoryImages: Record<string, string> = {
  'destinations': 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
  'bucket-list-hikes': 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg',
  'travel-tips': 'https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg',
  'food-drinks': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
};

const categoryIcons: Record<string, React.ReactNode> = {
  'destinations': <MapPin className="w-6 h-6" />,
  'bucket-list-hikes': <Mountain className="w-6 h-6" />,
  'travel-tips': <Lightbulb className="w-6 h-6" />,
  'food-drinks': <UtensilsCrossed className="w-6 h-6" />,
};

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [recent, all, cats] = await Promise.all([
          getRecentPosts(6),
          getPublishedPosts(),
          getAllCategories()
        ]);
        setRecentPosts(recent);
        setAllPosts(all);
        setCategories(cats);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const featuredPost = recentPosts[0];
  const sidePosts = recentPosts.slice(1, 4);
  const morePosts = recentPosts.slice(4);

  return (
    <div className="min-h-screen bg-[#FAFAF8]" dir="rtl">
      {/* Hero Section - מוגדל ומרשים */}
      <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            fill
            className="object-cover scale-105" 
            priority
          />
          {/* שכבת החשכה מדורגת לקריאות מקסימלית */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
          {/* לוגו מרשימי עם פריסה רחבה */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-10"
          >
            <div className="relative mb-6">
               {/* הילה יוקרתית מאחורי הלוגו להדגשה */}
              <div className="absolute inset-0 bg-[#E85D04]/20 blur-[100px] rounded-full scale-150" />
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={180} // גודל מקסימלי ללוגו
                height={180} 
                className="relative z-10 drop-shadow-[0_0_25px_rgba(232,93,4,0.3)]" 
                priority 
              />
            </div>
            
            {/* כותרת משנית באנגלית למראה יוקרתי ורחב */}
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white/60 text-sm md:text-base uppercase font-medium mb-4 tracking-[0.4em]"
            >
              ELAD'S TRAIL
            </motion.span>
          </motion.div>

          {/* כותרת ראשית ענקית */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl"
          >
            המסלול של אלעד
          </motion.h1>

          {/* סלוגן צבעוני ורחב */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-4xl text-[#E85D04] font-bold mb-12 tracking-wide drop-shadow-lg flex items-center justify-center gap-4"
          >
            <span>לטייל</span>
            <span className="text-white/30">•</span>
            <span>לאכול</span>
            <span className="text-white/30">•</span>
            <span>לחזור על זה</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/trails"
              className="group relative overflow-hidden bg-[#E85D04] text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,93,4,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                גלו את המסלולים
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* פוסטים אחרונים */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-[#E85D04] tracking-wider uppercase mb-2"
              >
                חדש באתר
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-[#1B263B]"
              >
                פוסטים אחרונים
              </motion.h2>
            </div>
            <Link
              href="/trails"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[#E85D04] hover:text-[#d04f00] transition-colors"
            >
              כל הפוסטים
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {featuredPost && (
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <PostCard post={featuredPost} variant="featured" index={0} />
              <div className="grid gap-6">
                {sidePosts.map((post, i) => (
                  <PostCard key={post.id} post={post} variant="compact" index={i + 1} />
                ))}
              </div>
            </div>
          )}

          {morePosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {morePosts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i + 4} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* קטגוריות */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-[#E85D04] tracking-wider uppercase mb-2"
            >
              קטגוריות
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#1B263B]"
            >
              חקרו לפי נושא
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const postCount = allPosts.filter(p => p.category_id === cat.id).length;
              return (
                <Link key={cat.id} href={`/category/${cat.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                  >
                    <Image
                      src={categoryImages[cat.slug] || 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'}
                      alt={cat.name_he}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                    <div className="absolute bottom-0 right-0 left-0 p-5">
                      <div className="flex items-center gap-2 text-white/70 mb-2">
                        {categoryIcons[cat.slug]}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {cat.name_he}
                      </h3>
                      <p className="text-white/60 text-sm">{postCount} פוסטים</p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA לסיום */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#1B263B] p-8 md:p-14 text-center"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#E85D04]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#E85D04]/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                בואו נטייל ביחד
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                מסלולים קשוחים, אוכל אמיתי, וחוויות שלא שוכחים. הצטרפו למסע.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E85D04] text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[#d04f00] transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                צרו קשר
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}