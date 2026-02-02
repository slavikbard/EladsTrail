'use client';

import { motion } from 'framer-motion';
import { getRecentPosts, CATEGORIES } from '@/src/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const recentPosts = getRecentPosts(4);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image src="/logo.svg" alt="המסלול של אלעד" width={120} height={120} className="mx-auto mb-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide"
          >
            המסלול של אלעד
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-white/90 font-light mb-12 tracking-wider"
          >
            לטייל • לאכול • לחזור על זה
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/trails"
              className="inline-block bg-[#E85D04] text-white px-10 py-4 text-lg font-medium hover:bg-[#1B263B] transition-colors duration-300"
            >
              גלו את המסלולים
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#1B263B] mb-4 tracking-wide">
              פוסטים אחרונים
            </h2>
            <p className="text-gray-600 text-lg">
              הרפתקאות, טרקים, ואוכל מהעולם
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post, index) => {
              const category = CATEGORIES.find(c => c.id === post.category_id);
              return (
                <Link key={post.id} href={`/post/${post.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={post.featured_image}
                        alt={post.title_he}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      {category && (
                        <span className="text-xs text-[#E85D04] font-medium tracking-wider mb-3 block uppercase">
                          {category.name_he}
                        </span>
                      )}
                      <h3 className="text-xl font-light text-[#1B263B] mb-3 leading-tight line-clamp-2 group-hover:text-[#E85D04] transition-colors">
                        {post.title_he}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt_he}
                      </p>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/trails"
              className="inline-block text-[#E85D04] hover:text-[#1B263B] font-medium text-lg transition-colors border-b-2 border-[#E85D04] hover:border-[#1B263B] pb-1"
            >
              צפו בכל הפוסטים ←
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#1B263B] mb-4 tracking-wide">
              חקרו את היעדים
            </h2>
            <p className="text-gray-600 text-lg">
              ממסלולים קשוחים ועד אוכל רחוב - הכל כאן
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category, index) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name_he}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-light mb-2">
                        {category.name_he}
                      </h3>
                      {category.description_he && (
                        <p className="text-white/80 text-sm">
                          {category.description_he}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}