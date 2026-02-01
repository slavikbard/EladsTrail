'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Eye } from 'lucide-react';
import { Post } from '@/lib/supabase';
import { motion } from 'framer-motion';

interface BlogCardProps {
  post: Post;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <Link href={`/post/${post.slug}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={post.featured_image}
            alt={post.title_he}
            fill
            className="object-cover hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {post.categories && (
            <div
              className="absolute top-4 right-4 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg"
              style={{ backgroundColor: post.categories.color }}
            >
              {post.categories.name_he}
            </div>
          )}
        </div>
      </Link>

      <div className="p-6" dir="rtl">
        <Link href={`/post/${post.slug}`}>
          <h3 className="text-2xl font-bold text-[#1B263B] mb-3 hover:text-[#E85D04] transition-colors line-clamp-2">
            {post.title_he}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt_he}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(post.created_at).toLocaleDateString('he-IL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{post.view_count} צפיות</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
