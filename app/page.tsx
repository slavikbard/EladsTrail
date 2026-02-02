'use client';

import { motion } from 'framer-motion';
import { getRecentPosts, CATEGORIES } from '@/src/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const posts = getRecentPosts(3);

  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <section className="relative">
        <div className="grid lg:grid-cols-3 min-h-[calc(100vh-80px)]">
          <div className="relative h-[40vh] lg:h-auto lg:col-span-1 order-1 lg:order-1">
            <Image
              src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Travel"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative h-[40vh] lg:h-auto lg:col-span-1 order-3 lg:order-2">
            <Image
              src="https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Desert"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center justify-center p-8 lg:p-12 bg-[#F4EDE3] order-2 lg:order-3 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-md"
            >
              <div className="mb-6 relative inline-block">
                <h1 className="text-7xl md:text-8xl font-extralight text-[#5D4E37] tracking-tight mb-2">
                  ברוכים<br />הבאים
                </h1>
                <div className="absolute -bottom-2 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent" />
              </div>

              <div className="space-y-4 mt-8">
                <p className="text-xl font-light text-[#7A6F5D] leading-relaxed" style={{fontFamily: 'serif'}}>
                  <span className="italic text-2xl">למסלול של אלעד</span>
                </p>

                <p className="text-base text-[#8B7E6A] leading-relaxed px-4">
                  בלוג טיולים המציג מסלולי הליכה, חוויות קולינריות,
                  וצילומים מרחבי העולם
                </p>

                <Link
                  href="/trails"
                  className="inline-block mt-6 px-8 py-3 bg-[#D4A574] text-white font-light tracking-wider hover:bg-[#C9A98E] transition-colors duration-300"
                >
                  התחילו כאן
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-[#D4A574] tracking-[0.3em] mb-3">מוצגים</p>
            <h2 className="text-5xl font-extralight text-[#5D4E37] tracking-tight mb-4" style={{fontFamily: 'serif'}}>
              <span className="italic">מהבלוג</span>
            </h2>
            <div className="w-24 h-px bg-[#D4A574] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const category = CATEGORIES.find(c => c.id === post.category_id);
              return (
                <Link key={post.id} href={`/post/${post.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden mb-6">
                      <Image
                        src={post.featured_image}
                        alt={post.title_he}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {category && (
                      <span className="text-xs text-[#D4A574] font-medium tracking-widest mb-3 block uppercase">
                        {category.name_he}
                      </span>
                    )}
                    <h3 className="text-2xl font-light text-[#5D4E37] mb-3 leading-tight group-hover:text-[#D4A574] transition-colors" style={{fontFamily: 'serif'}}>
                      {post.title_he}
                    </h3>
                    <p className="text-[#8B7E6A] leading-relaxed line-clamp-3 text-sm">
                      {post.excerpt_he}
                    </p>
                  </motion.article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4EDE3]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-[#D4A574] tracking-[0.3em] mb-3">חקור לפי</p>
            <h2 className="text-5xl font-extralight text-[#5D4E37] tracking-tight" style={{fontFamily: 'serif'}}>
              <span className="italic">יעדים</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category, index) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[3/4] overflow-hidden"
                >
                  <Image
                    src={category.image}
                    alt={category.name_he}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide">
                      {category.name_he}
                    </h3>
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