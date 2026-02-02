'use client';

import { motion } from 'framer-motion';
import { getAllPosts, CATEGORIES } from '@/src/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts();

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
            <Image src="/logo.svg" alt="SLAVX" width={120} height={120} className="mx-auto mb-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide"
          >
            ELAD'S TRAIL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-light mb-12 tracking-wider"
          >
            TRAVEL • HIKE • EXPLORE
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light text-center text-[#1B263B] mb-16 tracking-wide">
            יעדים
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((category, index) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={category.image}
                    alt={category.name_he}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl md:text-3xl font-light tracking-wider">
                      {category.name_he}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light text-center text-[#1B263B] mb-16 tracking-wide">
            פוסטים אחרונים
          </h2>

          <div className="space-y-12">
            {posts.map((post, index) => {
              const category = CATEGORIES.find(c => c.id === post.category_id);
              return (
                <Link key={post.id} href={`/post/${post.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`grid lg:grid-cols-2 gap-8 bg-white hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
                      index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                    }`}
                  >
                    <div className={`relative aspect-[4/3] ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                      <Image
                        src={post.featured_image}
                        alt={post.title_he}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      {category && (
                        <span className="text-sm text-[#E85D04] font-medium tracking-wider mb-4">
                          {category.name_he}
                        </span>
                      )}
                      <h3 className="text-3xl md:text-4xl font-light text-[#1B263B] mb-4 leading-tight">
                        {post.title_he}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {post.excerpt_he}
                      </p>
                      <span className="text-[#E85D04] font-medium hover:underline">
                        קרא עוד ←
                      </span>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}