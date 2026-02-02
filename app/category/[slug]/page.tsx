'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { CATEGORIES, getPostsByCategory } from '@/src/data/siteData';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = CATEGORIES.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.id);

  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.name_he}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extralight text-white mb-6 tracking-tight" style={{fontFamily: 'serif'}}
          >
            <span className="italic">{category.name_he}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/90 font-light tracking-wider"
          >
            {posts.length} פוסטים
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
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
                    <span className="text-xs text-[#D4A574] font-medium tracking-widest mb-3 block uppercase">
                      {category.name_he}
                    </span>
                    <h3 className="text-2xl font-light text-[#5D4E37] mb-3 leading-tight group-hover:text-[#D4A574] transition-colors" style={{fontFamily: 'serif'}}>
                      {post.title_he}
                    </h3>
                    <p className="text-[#8B7E6A] leading-relaxed line-clamp-3 text-sm">
                      {post.excerpt_he}
                    </p>
                  </motion.article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-[#8B7E6A]">בקרוב יגיעו פוסטים חדשים...</p>
            </div>
          )}
        </div>
      </section>

      <div className="text-center py-16 bg-[#F4EDE3]">
        <Link
          href="/"
          className="inline-block text-[#D4A574] hover:text-[#5D4E37] font-light text-lg transition-colors tracking-wider"
        >
          ← חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}
