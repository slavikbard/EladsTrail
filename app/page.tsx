'use client';

import { motion } from 'framer-motion';
import { getRecentPosts, CATEGORIES, getAllPosts } from '@/src/data/siteData';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '@/components/PostCard';
import { ArrowLeft, Mountain, MapPin, UtensilsCrossed, Lightbulb } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'destinations': <MapPin className="w-6 h-6" />,
  'bucket-list-hikes': <Mountain className="w-6 h-6" />,
  'travel-tips': <Lightbulb className="w-6 h-6" />,
  'food-drinks': <UtensilsCrossed className="w-6 h-6" />,
};

export default function Home() {
  const recentPosts = getRecentPosts(6);
  const allPosts = getAllPosts();
  const featuredPost = recentPosts[0];
  const sidePosts = recentPosts.slice(1, 4);
  const morePosts = recentPosts.slice(4);

  return (
    <div className="min-h-screen bg-[#FAFAF8]" dir="rtl">
      <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Image src="/logo.svg" alt="Logo" width={80} height={80} className="mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            המסלול של אלעד
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/85 font-light mb-10 tracking-wide"
          >
            לטייל &bull; לאכול &bull; לחזור על זה
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/trails"
              className="inline-flex items-center gap-2 bg-[#E85D04] text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[#d04f00] transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              גלו את המסלולים
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-white/25 transition-all duration-300 border border-white/20"
            >
              הכירו את אלעד
            </Link>
          </motion.div>
        </div>

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

          <div className="text-center mt-10 md:hidden">
            <Link
              href="/trails"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E85D04] hover:text-[#d04f00] transition-colors"
            >
              כל הפוסטים
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
            {CATEGORIES.map((cat, i) => {
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
                      src={cat.image}
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
