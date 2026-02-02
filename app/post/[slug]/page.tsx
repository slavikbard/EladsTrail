'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {category && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <span className="text-xs text-[#D4A574] font-medium tracking-[0.3em] uppercase">
              {category.name_he}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extralight text-center text-[#5D4E37] mb-8 leading-tight tracking-tight" style={{fontFamily: 'serif'}}
        >
          <span className="italic">{post.title_he}</span>
        </motion.h1>

        <div className="w-24 h-px bg-[#D4A574] mx-auto mb-12" />

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

        <div className="max-w-3xl mx-auto text-center mb-16 bg-white p-8 border-r-4 border-[#D4A574]">
          <p className="text-xl md:text-2xl text-[#5D4E37] leading-relaxed font-light italic">
            {post.excerpt_he}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12">
          <div className="text-[#5D4E37] leading-loose whitespace-pre-line text-lg font-light">
            {post.content_he}
          </div>
        </div>

      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[#D4A574] tracking-[0.3em] mb-3">קראו עוד</p>
              <h2 className="text-4xl md:text-5xl font-extralight text-[#5D4E37] tracking-tight" style={{fontFamily: 'serif'}}>
                <span className="italic">פוסטים נוספים</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => {
                const relatedCategory = getCategoryById(relatedPost.category_id);
                return (
                  <Link key={relatedPost.id} href={`/post/${relatedPost.slug}`} className="group">
                    <div className="bg-[#FAF8F5]">
                      <div className="relative aspect-[4/5] overflow-hidden mb-4">
                        <Image
                          src={relatedPost.featured_image}
                          alt={relatedPost.title_he}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                      </div>
                      <div className="p-4">
                        {relatedCategory && (
                          <span className="text-xs text-[#D4A574] font-medium tracking-widest mb-3 block uppercase">
                            {relatedCategory.name_he}
                          </span>
                        )}
                        <h3 className="text-xl font-light text-[#5D4E37] line-clamp-2 group-hover:text-[#D4A574] transition-colors" style={{fontFamily: 'serif'}}>
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

      <div className="text-center py-16 bg-[#F4EDE3]">
        <Link
          href="/trails"
          className="inline-block text-[#D4A574] hover:text-[#5D4E37] font-light text-lg transition-colors tracking-wider"
        >
          ← חזרה לכל הפוסטים
        </Link>
      </div>
    </div>
  );
}