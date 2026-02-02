'use client';

import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';
import { getAllPublishedPosts } from '@/data/siteContent';
import BlogCard from '@/components/BlogCard';

export default function Trails() {
  const posts = getAllPublishedPosts();

  return (
    <div className="min-h-screen py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mountain className="w-12 h-12 text-[#E85D04]" />
            <h1 className="text-5xl md:text-6xl font-bold text-[#1B263B]">
              כל המסלולים
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מצפון ועד דרום, מהגליל ועד האלפים. כל הטיולים, כל החוויות, כל הטעמים.
          </p>
        </motion.div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Mountain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-600">אין מסלולים כרגע</p>
          </div>
        )}
      </div>
    </div>
  );
}
