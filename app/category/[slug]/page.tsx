'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCategoryBySlug, getPostsByCategory, type Category, type Post } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { ArrowRight } from 'lucide-react';

const categoryImages: Record<string, string> = {
  'destinations': 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
  'bucket-list-hikes': 'https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg',
  'travel-tips': 'https://images.pexels.com/photos/346798/pexels-photo-346798.jpeg',
  'food-drinks': 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [category, setCategory] = useState<Category | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategoryData() {
      try {
        const categoryData = await getCategoryBySlug(slug);

        if (!categoryData) {
          setLoading(false);
          return;
        }

        setCategory(categoryData);

        const postsData = await getPostsByCategory(categoryData.id);
        setPosts(postsData);
      } catch (error) {
        console.error('Error loading category:', error);
      } finally {
        setLoading(false);
      }
    }

    loadCategoryData();
  }, [slug]);

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

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]" dir="rtl">
      <section className="relative h-[45vh] md:h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={categoryImages[category.slug] || 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'}
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
            <p className="text-white/60 text-sm mt-3">{posts.length} פוסטים</p>
          </motion.div>
        </div>
      </section>

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
