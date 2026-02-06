'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllCategories, getPublishedPosts, type Category, type Post } from '@/lib/posts';
import { ArrowLeft } from 'lucide-react';

const categoryImages: Record<string, string> = {
  'israel': 'https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg',
  'global': 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
  'culinary': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [cats, posts] = await Promise.all([
          getAllCategories(),
          getPublishedPosts()
        ]);
        setCategories(cats);
        setAllPosts(posts);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E85D04] mx-auto"></div>
          <p className="mt-4 text-gray-500">טוען...</p>
        </div>
      </div>
    );
  }

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
          {categories.map((cat, i) => {
            const postCount = allPosts.filter(p => p.category_id === cat.id).length;

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
                      src={categoryImages[cat.slug] || 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'}
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
