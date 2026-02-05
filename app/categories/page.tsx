'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CATEGORIES, getAllPosts, getSubcategoriesByCategory } from '@/src/data/siteData';
import { ArrowLeft } from 'lucide-react';

export default function CategoriesPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FAFAF8]" dir="rtl">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-semibold text-[#E85D04] tracking-wider uppercase mb-2">יעדים</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-3">
              כל הקטגוריות
            </h1>
            <p className="text-gray-500 text-lg max-w-xl">
              מסלולים, יעדים, טיפים ואוכל - הכל מאורגן בשבילכם
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, i) => {
            const postCount = allPosts.filter(p => p.category_id === cat.id).length;
            const subcategories = getSubcategoriesByCategory(cat.id);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name_he}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 right-5">
                      <h2 className="text-2xl font-bold text-white">{cat.name_he}</h2>
                      <p className="text-white/70 text-sm mt-1">{cat.name_en}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    {cat.description_he && (
                      <p className="text-gray-600 text-sm mb-4">{cat.description_he}</p>
                    )}
                    {subcategories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {subcategories.map(sub => (
                          <span
                            key={sub.id}
                            className="px-3 py-1 text-[11px] font-medium bg-gray-50 text-gray-600 rounded-full"
                          >
                            {sub.name_he}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-sm text-gray-400">{postCount} פוסטים</span>
                      <span className="flex items-center gap-1.5 text-sm font-medium text-[#E85D04] group-hover:gap-2.5 transition-all">
                        לקטגוריה
                        <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
