'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { CATEGORIES, getPostsByCategory, getSubcategoriesByCategory } from '@/src/data/siteData';
import PostCard from '@/components/PostCard';
import { ArrowRight } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = CATEGORIES.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.id);
  const subcategories = getSubcategoriesByCategory(category.id);

  return (
    <div className="min-h-screen bg-[#FAFAF8]" dir="rtl">
      <section className="relative h-[45vh] md:h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.name_he}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-white/70 text-sm mb-4 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              כל הקטגוריות
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
              {category.name_he}
            </h1>
            {category.description_he && (
              <p className="text-white/80 text-lg max-w-xl">
                {category.description_he}
              </p>
            )}
            <p className="text-white/60 text-sm mt-3">{posts.length} פוסטים</p>
          </motion.div>
        </div>
      </section>

      {subcategories.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {subcategories.map(sub => (
              <span
                key={sub.id}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white text-gray-600 border border-gray-200"
              >
                {sub.name_he}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">בקרוב יגיעו פוסטים חדשים...</p>
          </div>
        )}
      </div>
    </div>
  );
}
