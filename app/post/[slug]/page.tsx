'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPostBySlug, getPostsByCategory, type Post, type Category } from '@/lib/posts';
import { supabase } from '@/lib/supabase';
import { notFound, useParams } from 'next/navigation';
import { Eye, ArrowRight, Calendar } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';
import PostCard from '@/components/PostCard';

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<Post | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const postData = await getPostBySlug(slug);

        if (!postData) {
          setLoading(false);
          return;
        }

        setPost(postData);

        if (postData.category_id) {
          const { data: categoryData } = await supabase
            .from('categories')
            .select('*')
            .eq('id', postData.category_id)
            .maybeSingle();

          setCategory(categoryData);

          const related = await getPostsByCategory(postData.category_id);
          setRelatedPosts(related.filter(p => p.id !== postData.id).slice(0, 3));
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E85D04] mx-auto"></div>
          <p className="mt-4 text-gray-500">טוען...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

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
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4 leading-tight">
            {post.title_he}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {post.excerpt_he}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            {post.created_at && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.created_at).toLocaleDateString('he-IL')}
              </span>
            )}
            {post.view_count > 0 && (
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {post.view_count} צפיות
              </span>
            )}
          </div>
        </motion.div>

        {post.featured_image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md"
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
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none mb-12"
        >
          <div
            className="text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content_he.replace(/\n/g, '<br />') }}
          />
        </motion.div>

        {post.gallery_images && post.gallery_images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#1B263B] mb-6">גלריית תמונות</h2>
            <ImageGallery images={post.gallery_images} />
          </motion.div>
        )}

        {post.packing_list_he && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-blue-50 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-[#1B263B] mb-4">רשימת ציוד</h2>
            <div
              className="text-gray-700 space-y-2"
              dangerouslySetInnerHTML={{ __html: post.packing_list_he.replace(/\n/g, '<br />') }}
            />
          </motion.div>
        )}

        {post.fun_facts_he && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-orange-50 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-[#1B263B] mb-4">עובדות מעניינות</h2>
            <div
              className="text-gray-700 space-y-2"
              dangerouslySetInnerHTML={{ __html: post.fun_facts_he.replace(/\n/g, '<br />') }}
            />
          </motion.div>
        )}
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B263B]">פוסטים נוספים</h2>
              <Link
                href="/trails"
                className="text-sm font-medium text-[#E85D04] hover:text-[#d04f00] transition-colors flex items-center gap-1"
              >
                כל המסלולים
                <ArrowRight className="w-4 h-4 -scale-x-100" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <PostCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
