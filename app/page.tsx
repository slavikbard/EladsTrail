'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { getAllPublishedPosts } from '@/data/siteContent';
import BlogCard from '@/components/BlogCard';
import Image from 'next/image';

export default function Home() {
  const posts = getAllPublishedPosts();

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#1B263B] overflow-hidden">
        {/* רקע התמונה המוגדר בצורה נכונה */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30" // אופסיטי עדין כדי שהטקסט יהיה קריא
            priority
          />
          {/* שכבת גרדיאנט עדינה לשיפור הקריאות */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#1B263B]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            המסלול של אלעד
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#E85D04] font-semibold mb-8"
          >
            לטייל. לאכול. לחזור על זה.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            יש כאלה שמטיילים כדי לנוח, אני מטייל כדי לחיות. מסלולים קשוחים, אוכל אמיתי, וחוויות שלא שוכחים.
          </motion.p>

          <motion.a
            href="#latest-trails"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#E85D04] hover:bg-[#E85D04]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 ring-[12px] ring-black/40 shadow-2xl"
          >
            גלו את המסלולים
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section id="latest-trails" className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            המסלולים האחרונים
          </h2>
          <p className="text-xl text-gray-600">
            סיפורים מהשטח, חוויות אמיתיות
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">בקרוב יגיעו מסלולים חדשים...</p>
          </div>
        )}
      </section>
    </div>
  );
}