'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { supabase, Post } from '@/lib/supabase';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*, categories(*)')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (data) {
        setPosts(data as Post[]);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div className="absolute inset-0 z-0">
  <Image
    src="/background.jpg"
    alt="Background"
    fill
    className="object-cover opacity-40"
    priority
  />
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </section>

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

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">בקרוב יגיעו מסלולים חדשים...</p>
          </div>
        )}
      </section>
    </div>
  );
}
