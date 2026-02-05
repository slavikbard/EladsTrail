'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Eye } from 'lucide-react';
import type { Post, Category } from '@/lib/posts';
import { supabase } from '@/lib/supabase';

interface PostCardProps {
  post: Post;
  index?: number;
  variant?: 'default' | 'compact' | 'featured';
}

export default function PostCard({ post, index = 0, variant = 'default' }: PostCardProps) {
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    async function loadCategory() {
      if (post.category_id) {
        const { data } = await supabase
          .from('categories')
          .select('*')
          .eq('id', post.category_id)
          .maybeSingle();
        setCategory(data);
      }
    }
    loadCategory();
  }, [post.category_id]);

  if (variant === 'featured') {
    return (
      <Link href={`/post/${post.slug}`}>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-500"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={post.featured_image}
              alt={post.title_he}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

            <div className="absolute top-4 right-4 flex gap-2">
              {category && (
                <span className="px-3 py-1 text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-[#1B263B] rounded-full">
                  {category.name_he}
                </span>
              )}
            </div>

            <div className="absolute bottom-0 right-0 left-0 p-6">
              <h3 className="text-xl font-semibold text-white mb-2 leading-tight line-clamp-2 group-hover:text-orange-200 transition-colors">
                {post.title_he}
              </h3>
              <div className="flex items-center gap-4 text-white/80 text-xs">
                {post.view_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {post.view_count} צפיות
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/post/${post.slug}`}>
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          viewport={{ once: true }}
          className="group flex gap-4 items-start"
        >
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl">
            <Image
              src={post.featured_image}
              alt={post.title_he}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="96px"
            />
          </div>
          <div className="flex-1 min-w-0">
            {category && (
              <span className="text-[10px] font-semibold text-[#E85D04] tracking-wider uppercase mb-1 block">
                {category.name_he}
              </span>
            )}
            <h3 className="text-sm font-medium text-[#1B263B] leading-snug line-clamp-2 group-hover:text-[#E85D04] transition-colors">
              {post.title_he}
            </h3>
            {post.view_count > 0 && (
              <span className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {post.view_count} צפיות
              </span>
            )}
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link href={`/post/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.featured_image}
            alt={post.title_he}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            {category && (
              <span className="text-[10px] font-semibold text-[#E85D04] tracking-wider uppercase">
                {category.name_he}
              </span>
            )}
            {post.view_count > 0 && (
              <span className="flex items-center gap-1 text-[11px] text-gray-400">
                <Eye className="w-3 h-3" />
                {post.view_count}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-[#1B263B] mb-2 leading-snug line-clamp-2 group-hover:text-[#E85D04] transition-colors">
            {post.title_he}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {post.excerpt_he}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}
