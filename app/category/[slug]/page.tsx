'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { CATEGORIES, getPostsByCategory, getCategoryById } from '@/src/data/siteData';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = CATEGORIES.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.id);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.name_he}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide"
          >
            {category.name_he}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 font-light"
          >
            {posts.length} פוסטים
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length > 0 ? (
            <div className="space-y-12">
              {posts.map((post, index) => (
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
                      <span className="text-sm text-[#E85D04] font-medium tracking-wider mb-4">
                        {category.name_he}
                      </span>
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
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">בקרוב יגיעו פוסטים חדשים...</p>
            </div>
          )}
        </div>
      </section>

      <div className="text-center py-16 bg-gray-50">
        <Link
          href="/"
          className="inline-block text-[#E85D04] hover:text-[#1B263B] font-medium text-lg transition-colors"
        >
          ← חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}
