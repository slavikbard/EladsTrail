'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Mountain, Backpack, Lightbulb, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';
import { getPostBySlug, getCategoryById, getPostsByCategory } from '@/data/siteContent';
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
    <div className="min-h-screen py-20 md:py-8" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8" aria-label="ניווט">
          <Link href="/" className="hover:text-[#E85D04] transition-colors">
            בית
          </Link>
          <ArrowRight className="w-4 h-4 rotate-180" />
          <Link href="/trails" className="hover:text-[#E85D04] transition-colors">
            טיולים
          </Link>
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span className="text-[#1B263B] font-semibold">{post.title_he}</span>
        </nav>

        {/* Category Badge */}
        {category && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg mb-6"
            style={{ backgroundColor: category.color }}
          >
            <Mountain className="w-4 h-4" />
            {category.name_he}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6 leading-tight"
        >
          {post.title_he}
        </motion.h1>

        {/* Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#E85D04]" />
            <span>
              {new Date(post.created_at).toLocaleDateString('he-IL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </motion.div>

        {/* Featured Image - Main Post */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full rounded-2xl overflow-hidden shadow-2xl mb-12 bg-white"
        >
          <img
            src={post.featured_image}
            alt={post.title_he}
            className="w-full h-auto block"
            loading="eager"
          />
        </motion.div>

        {/* Excerpt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-l from-[#E85D04]/10 to-[#1B263B]/10 p-6 rounded-xl mb-12 border-r-4 border-[#E85D04]"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            {post.excerpt_he}
          </p>
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="prose prose-lg max-w-none mb-16"
          dir="rtl"
        >
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
            {post.content_he}
          </div>
        </motion.article>

        {/* Photo Gallery */}
        {post.gallery_images && post.gallery_images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-[#E85D04]/10 rounded-lg">
                <Camera className="w-8 h-8 text-[#E85D04]" />
              </span>
              <h2 className="text-3xl font-bold text-[#1B263B]">גלריית תמונות</h2>
            </div>
            <ImageGallery images={post.gallery_images} />
          </motion.section>
        )}

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 pt-12 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold text-[#1B263B] mb-8 flex items-center gap-3">
              <Mountain className="w-8 h-8 text-[#E85D04]" />
              טיולים נוספים שיעניינו אותך
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/post/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Fixed Card Image Container */}
                    <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                      <Image
                        src={relatedPost.featured_image}
                        alt={relatedPost.title_he}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="font-bold text-[#1B263B] group-hover:text-[#E85D04] transition-colors line-clamp-2">
                        {relatedPost.title_he}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {relatedPost.excerpt_he}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <Link
            href="/trails"
            className="inline-flex items-center gap-2 bg-[#E85D04] hover:bg-[#E85D04]/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mountain className="w-6 h-6" />
            חזרה לכל הטיולים
            <ArrowRight className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}