'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPostBySlug, getCategoryById, getPostsByCategory, AUTHOR } from '@/src/data/siteData';
import { notFound, useParams } from 'next/navigation';
import { Clock, MapPin, User, Mountain, Users, ArrowRight, Calendar } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';
import ImageGallery from '@/components/ImageGallery';
import PostCard from '@/components/PostCard';

const difficultyConfig: Record<string, { color: string; bg: string; label: string }> = {
  'קל': { color: 'text-emerald-700', bg: 'bg-emerald-50', label: 'קל' },
  'בינוני': { color: 'text-amber-700', bg: 'bg-amber-50', label: 'בינוני' },
  'קשה': { color: 'text-orange-700', bg: 'bg-orange-50', label: 'קשה' },
  'אתגרי': { color: 'text-red-700', bg: 'bg-red-50', label: 'אתגרי' },
};

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

  const difficulty = post.difficulty ? difficultyConfig[post.difficulty] : null;

  return (
    <div className="min-h-screen bg-[#FAFAF8]" dir="rtl">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            {category && (
              <Link
                href={`/category/${category.slug}`}
                className="px-3 py-1 text-xs font-semibold bg-[#E85D04]/10 text-[#E85D04] rounded-full hover:bg-[#E85D04]/20 transition-colors"
              >
                {category.name_he}
              </Link>
            )}
            {difficulty && (
              <span className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 ${difficulty.bg} ${difficulty.color}`}>
                <Mountain className="w-3 h-3" />
                {difficulty.label}
              </span>
            )}
            {post.is_family_friendly && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                מתאים למשפחות
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#1B263B] mb-6 leading-tight">
            {post.title_he}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {post.author && (
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={AUTHOR.image} alt={post.author} fill className="object-cover" sizes="32px" />
                </div>
                <span className="font-medium text-[#1B263B]">{post.author}</span>
              </div>
            )}
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            {post.reading_time && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.reading_time.replace('⏱️ ', '')}</span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-10 rounded-2xl overflow-hidden"
        >
          <ImageSlider
            images={post.images}
            alt={post.title_he}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100"
        >
          <p className="text-lg md:text-xl text-[#1B263B] leading-relaxed font-medium italic border-r-4 border-[#E85D04] pr-6">
            {post.excerpt_he}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 md:p-10 mb-10 border border-gray-100"
        >
          <div
            className="text-[#3D3D3D] text-base md:text-lg leading-loose"
            style={{
              whiteSpace: 'pre-wrap',
              textAlign: 'right',
              direction: 'rtl',
              lineHeight: '2'
            }}
          >
            {post.content_he}
          </div>
        </motion.div>

        {post.images && post.images.length > 1 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#1B263B] mb-6">
              גלריית תמונות
            </h3>
            <ImageGallery images={post.images.slice(1)} />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 mb-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={AUTHOR.image}
                alt={AUTHOR.name}
                fill
                className="object-cover rounded-full"
                sizes="80px"
              />
            </div>
            <div className="text-center sm:text-right flex-1">
              <h3 className="text-xl font-bold text-[#1B263B] mb-1">{AUTHOR.name}</h3>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm text-gray-400 mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{AUTHOR.location}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{AUTHOR.bio}</p>
            </div>
          </div>
        </motion.div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-white py-16 md:py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sm font-semibold text-[#E85D04] tracking-wider uppercase mb-2">קראו עוד</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B263B]">
                  פוסטים נוספים
                </h2>
              </div>
              {category && (
                <Link
                  href={`/category/${category.slug}`}
                  className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[#E85D04] hover:text-[#d04f00] transition-colors"
                >
                  עוד ב{category.name_he}
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </Link>
              )}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, i) => (
                <PostCard key={relatedPost.id} post={relatedPost} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
