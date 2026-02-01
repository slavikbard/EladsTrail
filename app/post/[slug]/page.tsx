'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Eye, ArrowRight, Mountain } from 'lucide-react';
import { supabase, Post } from '@/lib/supabase';
import { motion } from 'framer-motion';

export default function PostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Fetch the post
        const { data: postData, error } = await supabase
          .from('posts')
          .select('*, categories(*)')
          .eq('slug', slug)
          .eq('published', true)
          .maybeSingle();

        if (error || !postData) {
          router.push('/404');
          return;
        }

        setPost(postData as Post);

        // Update view count
        await supabase
          .from('posts')
          .update({ view_count: (postData.view_count || 0) + 1 })
          .eq('id', postData.id);

        // Fetch related posts from the same category
        if (postData.category_id) {
          const { data: related } = await supabase
            .from('posts')
            .select('*, categories(*)')
            .eq('category_id', postData.category_id)
            .eq('published', true)
            .neq('id', postData.id)
            .limit(3);

          if (related) {
            setRelatedPosts(related as Post[]);
          }
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        router.push('/404');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#E85D04] mx-auto mb-4"></div>
          <p className="text-gray-600">טוען את הטיול...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

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
        {post.categories && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-lg mb-6"
            style={{ backgroundColor: post.categories.color }}
          >
            <Mountain className="w-4 h-4" />
            {post.categories.name_he}
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
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#E85D04]" />
            <span>{post.view_count + 1} צפיות</span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-12"
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

        {/* Related Posts */}
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
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.featured_image}
                        alt={relatedPost.title_he}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <div className="p-4">
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

        {/* Back to Trails Button */}
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
