'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase, Category, Post } from '@/lib/supabase';
import BlogCard from '@/components/BlogCard';

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('*')
        .order('name_he');

      if (categoriesData) {
        setCategories(categoriesData as Category[]);
      }

      const query = supabase
        .from('posts')
        .select('*, categories(*)')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (selectedCategory) {
        query.eq('category_id', selectedCategory);
      }

      const { data: postsData } = await query;

      if (postsData) {
        setPosts(postsData as Post[]);
      }

      setLoading(false);
    }

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#1B263B] mb-6">
            קטגוריות
          </h1>
          <p className="text-xl text-gray-600">
            בחרו קטגוריה ותגלו את המסלולים
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === null
                ? 'bg-[#E85D04] text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            הכל
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={
                selectedCategory === category.id
                  ? { backgroundColor: category.color }
                  : {}
              }
            >
              {category.name_he}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
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
            <p className="text-xl text-gray-600">
              אין מסלולים בקטגוריה זו כרגע
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
