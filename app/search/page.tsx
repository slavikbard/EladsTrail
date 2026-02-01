'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';
import { supabase, Post } from '@/lib/supabase';
import BlogCard from '@/components/BlogCard';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setSearched(true);

    const { data } = await supabase
      .from('posts')
      .select('*, categories(*)')
      .eq('published', true)
      .or(`title_he.ilike.%${searchQuery}%,excerpt_he.ilike.%${searchQuery}%,content_he.ilike.%${searchQuery}%`)
      .order('created_at', { ascending: false });

    if (data) {
      setPosts(data as Post[]);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1B263B] mb-6">
            חיפוש מסלולים
          </h1>
          <p className="text-xl text-gray-600">
            חפשו מסלולים לפי מיקום, סוג אוכל או כל מילת חיפוש אחרת
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSearch}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="לדוגמה: שביל ישראל, פורטוגל, בורקס..."
              className="w-full px-6 py-4 pr-14 text-lg rounded-full border-2 border-gray-300 focus:border-[#E85D04] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#E85D04] hover:bg-[#E85D04]/90 text-white p-3 rounded-full transition-all"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
        </motion.form>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96 animate-pulse" />
            ))}
          </div>
        ) : searched ? (
          posts.length > 0 ? (
            <>
              <p className="text-center text-gray-600 mb-8">
                נמצאו {posts.length} תוצאות עבור "{searchQuery}"
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-4">
                לא נמצאו תוצאות עבור "{searchQuery}"
              </p>
              <p className="text-gray-500">
                נסו לחפש עם מילות חיפוש אחרות
              </p>
            </div>
          )
        ) : (
          <div className="text-center py-20">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">
              הזינו מילת חיפוש כדי להתחיל
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
