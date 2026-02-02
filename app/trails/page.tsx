'use client';

import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';
import { getAllPosts, getCategoryById } from '@/src/data/siteData';
import Image from 'next/image';
import Link from 'next/link';

export default function Trails() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-20 bg-[#FAF8F5]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#D4A574] tracking-[0.3em] mb-3">חקר</p>
          <h1 className="text-6xl md:text-7xl font-extralight text-[#5D4E37] mb-4 tracking-tight" style={{fontFamily: 'serif'}}>
            <span className="italic">כל המסלולים</span>
          </h1>
          <div className="w-24 h-px bg-[#D4A574] mx-auto mb-6" />
          <p className="text-lg text-[#8B7E6A] font-light">
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
                    className="bg-white group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={post.featured_image}
                        alt={post.title_he}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      {category && (
                        <span className="text-xs text-[#D4A574] font-medium tracking-widest mb-3 block uppercase">
                          {category.name_he}
                        </span>
                      )}
                      <h2 className="text-2xl font-light text-[#5D4E37] mb-3 leading-tight group-hover:text-[#D4A574] transition-colors" style={{fontFamily: 'serif'}}>
                        {post.title_he}
                      </h2>
                      <p className="text-[#8B7E6A] leading-relaxed line-clamp-3 text-sm">
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
            <Mountain className="w-16 h-16 text-[#D4A574] mx-auto mb-4" />
            <p className="text-xl text-[#8B7E6A]">אין מסלולים כרגע</p>
          </div>
        )}
      </div>
    </div>
  );
}
