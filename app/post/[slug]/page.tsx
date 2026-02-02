'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Mountain, Backpack, Lightbulb, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { getPostBySlug, getCategoryById, getPostsByCategory } from '@/src/data/siteData';
import { notFound, useParams } from 'next/navigation';

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = post.category_id ? getCategoryById(post.category_id) : null;
  const relatedPosts = post.category_id
    ? getPostsByCategory(post.category_id).filter(p => p.id !== post.id).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Category */}
        {category && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <span className="text-sm text-[#E85D04] font-medium tracking-widest uppercase">
              {category.name_he}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-light text-center text-[#1B263B] mb-12 leading-tight tracking-wide"
        >
          {post.title_he}
        </motion.h1>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full aspect-[16/9] mb-16 overflow-hidden"
        >
          <Image
            src={post.featured_image}
            alt={post.title_he}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </motion.div>

        {/* Excerpt */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            {post.excerpt_he}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg font-light">
            {post.content_he}
          </div>
        </div>

      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center text-[#1B263B] mb-12 tracking-wide">
              פוסטים נוספים
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => {
                const relatedCategory = getCategoryById(relatedPost.category_id);
                return (
                  <Link key={relatedPost.id} href={`/post/${relatedPost.slug}`} className="group">
                    <div className="bg-white hover:shadow-2xl transition-shadow duration-300">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={relatedPost.featured_image}
                          alt={relatedPost.title_he}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                      <div className="p-6">
                        {relatedCategory && (
                          <span className="text-sm text-[#E85D04] font-medium tracking-wider mb-3 block">
                            {relatedCategory.name_he}
                          </span>
                        )}
                        <h3 className="text-xl font-light text-[#1B263B] line-clamp-2">
                          {relatedPost.title_he}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <div className="text-center py-16">
        <Link
          href="/trails"
          className="inline-block text-[#E85D04] hover:text-[#1B263B] font-medium text-lg transition-colors"
        >
          ← חזרה לכל הפוסטים
        </Link>
      </div>
    </div>
  );
}