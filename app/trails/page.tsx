'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';
import { supabase, Post } from '@/lib/supabase';
import BlogCard from '@/components/BlogCard';

export default function Trails() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('posts')
        .select('*, categories(*)')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (data) {
        setPosts(data as Post[]);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

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

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96 animate-pulse" />
            ))}
          </div>
        ) : posts.length > 0 ? (
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
