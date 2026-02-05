'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Search } from 'lucide-react';
import { getAllPosts, CATEGORIES } from '@/src/data/siteData';
import PostCard from '@/components/PostCard';

export default function Trails() {
  const allPosts = getAllPosts();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === null || post.category_id === activeCategory;
    const matchesSearch = searchQuery === '' ||
      post.title_he.includes(searchQuery) ||
      post.excerpt_he.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8]" dir="rtl">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-semibold text-[#E85D04] tracking-wider uppercase mb-2">חקרו</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-3">
              כל המסלולים
            </h1>
            <p className="text-gray-500 text-lg max-w-xl">
              מצפון ועד דרום, מהגליל ועד האלפים
            </p>
          </motion.div>
        </div>
      </div>

      <div className="sticky top-16 md:top-20 z-30 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto scrollbar-hide">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === null
                    ? 'bg-[#1B263B] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                הכל ({allPosts.length})
              </button>
              {CATEGORIES.map(cat => {
                const count = allPosts.filter(p => p.category_id === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeCategory === cat.id
                        ? 'bg-[#E85D04] text-white shadow-sm'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat.name_he} ({count})
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="חיפוש מסלול..."
                className="w-full pr-10 pl-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#E85D04]/20 focus:border-[#E85D04] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Mountain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-400 font-medium">לא נמצאו מסלולים</p>
              <p className="text-gray-400 mt-2">נסו לשנות את הסינון או את החיפוש</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
