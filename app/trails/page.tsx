'use client';

import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';
import { getAllPosts, getCategoryById } from '@/src/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export default function Trails() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light text-[#1B263B] mb-4 tracking-wide">
            כל המסלולים
          </h1>
          <p className="text-xl text-gray-600 font-light">
            מצפון ועד דרום, מהגליל ועד האלפים
          </p>
        </motion.div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const category = getCategoryById(post.category_id);
              return (
                <Link key={post.id} href={`/post/${post.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white hover:shadow-2xl transition-shadow duration-300 group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.featured_image}
                        alt={post.title_he}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      {category && (
                        <span className="text-sm text-[#E85D04] font-medium tracking-wider mb-3 block">
                          {category.name_he}
                        </span>
                      )}
                      <h2 className="text-2xl font-light text-[#1B263B] mb-3 leading-tight">
                        {post.title_he}
                      </h2>
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {post.excerpt_he}
                      </p>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
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
