'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPostBySlug, getCategoryById, getPostsByCategory, AUTHOR } from '@/src/data/siteData';
import { notFound, useParams } from 'next/navigation';
import { Clock, MapPin, User } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';
import ImageGallery from '@/components/ImageGallery'; // הוספנו את הייבוא של הגלריה המתוקנת

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
          className="text-4xl md:text-6xl font-extralight text-center text-[#5D4E37] mb-8 leading-tight tracking-tight"
          style={{fontFamily: 'serif'}}
        >
          <span className="italic">{post.title_he}</span>
        </motion.h1>

        {/* זמן קריאה + תאריך + מחבר */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-8 text-sm text-[#8B7E6A]"
        >
          {post.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          )}
          {post.reading_time && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.reading_time}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span>{new Date(post.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </motion.div>

        <div className="w-24 h-px bg-[#D4A574] mx-auto mb-12" />

        {/* סליידר תמונות עליון */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-16"
        >
          <ImageSlider 
            images={post.images} 
            alt={post.title_he} 
          />
        </motion.div>

        {/* תקציר */}
        <div className="w-full text-center mb-16 bg-white p-8 border-r-4 border-[#D4A574]">
          <p className="text-xl md:text-2xl text-[#5D4E37] leading-relaxed font-light italic">
            {post.excerpt_he}
          </p>
        </div>

        {/* תוכן הפוסט */}
        <div className="w-full bg-white p-8 md:p-12 mb-12">
          <div 
            className="text-[#5D4E37] text-lg font-light leading-relaxed"
            style={{ 
              whiteSpace: 'pre-wrap',
              textAlign: 'right',
              direction: 'rtl',
              lineHeight: '2'
            }}
          >
            {post.content_he}
          </div>
        </div>

        {/* גלריית תמונות תחתונה - משתמשת ברכיב המתוקן */}
        {post.images && post.images.length > 1 && (
          <div className="w-full mb-16">
            <h3 className="text-2xl font-light text-[#5D4E37] mb-6 text-center" style={{fontFamily: 'serif'}}>
              <span className="italic">גלריית תמונות</span>
            </h3>
            {/* קריאה לרכיב שמתקן את המתיחה והחיתוך */}
            <ImageGallery 
              images={post.images.slice(1)} 
              captions={post.captions?.slice(1)} 
            />
          </div>
        )}

        {/* כרטיס מחבר */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-l from-[#F4EDE3] to-[#FAF8F5] p-8 md:p-12 border-2 border-[#D4A574] rounded-lg shadow-lg mb-16"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={AUTHOR.image}
                alt={AUTHOR.name}
                fill
                className="object-cover rounded-full border-4 border-[#D4A574] shadow-xl"
              />
            </div>

            <div className="flex-1 text-center md:text-right space-y-4">
              <div className="border-b-2 border-[#D4A574] pb-4">
                <h3 className="text-4xl md:text-5xl font-light text-[#5D4E37] mb-2" style={{fontFamily: 'serif'}}>
                  <span className="italic">{AUTHOR.name}</span>
                </h3>
                <div className="flex items-center justify-center md:justify-end gap-2 text-base text-[#8B7E6A]">
                  <MapPin className="w-5 h-5" />
                  <span>{AUTHOR.location}</span>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-[#5D4E37] font-light leading-relaxed">
                {AUTHOR.bio}
              </p>
              <p className="text-2xl md:text-3xl text-[#D4A574] font-light italic pt-2">
                {AUTHOR.tagline}
              </p>
            </div>
          </div>
        </motion.div>

      </article>

      {/* פוסטים קשורים */}
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
                        {relatedPost.reading_time && (
                          <div className="flex items-center gap-2 mt-2 text-sm text-[#8B7E6A]">
                            <Clock className="w-3 h-3" />
                            <span>{relatedPost.reading_time}</span>
                          </div>
                        )}
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