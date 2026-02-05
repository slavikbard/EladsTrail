'use client';

import { useState, useMemo } from 'react';
import {
  LayoutDashboard, FileText, Search, Filter, ChevronDown,
  Copy, Check, ArrowUpDown, Mountain, Clock, Users, Tag
} from 'lucide-react';
import { getAllPosts, CATEGORIES, getCategoryById, getSubcategoryById, Post } from '@/src/data/siteData';
import Image from 'next/image';

type SortField = 'id' | 'title' | 'category' | 'date' | 'difficulty';
type SortDir = 'asc' | 'desc';

export default function AdminDashboard() {
  const allPosts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<number | null>(null);
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const stats = useMemo(() => ({
    total: allPosts.length,
    byCategory: CATEGORIES.map(c => ({
      ...c,
      count: allPosts.filter(p => p.category_id === c.id).length,
    })),
    withDifficulty: allPosts.filter(p => p.difficulty).length,
    familyFriendly: allPosts.filter(p => p.is_family_friendly).length,
  }), [allPosts]);

  const filteredPosts = useMemo(() => {
    let posts = [...allPosts];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(p =>
        p.title_he.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    }

    if (categoryFilter !== null) {
      posts = posts.filter(p => p.category_id === categoryFilter);
    }

    posts.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case 'id': cmp = a.id - b.id; break;
        case 'title': cmp = a.title_he.localeCompare(b.title_he); break;
        case 'category': cmp = a.category_id - b.category_id; break;
        case 'date': cmp = new Date(a.date).getTime() - new Date(b.date).getTime(); break;
        case 'difficulty': cmp = (a.difficulty || '').localeCompare(b.difficulty || ''); break;
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return posts;
  }, [allPosts, searchQuery, categoryFilter, sortField, sortDir]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const copyPostJson = (post: Post) => {
    const json = JSON.stringify(post, null, 2);
    navigator.clipboard.writeText(json);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="bg-[#1B263B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-[#E85D04]" />
            <div>
              <h1 className="text-xl font-bold">לוח בקרה</h1>
              <p className="text-sm text-gray-400">ניהול תוכן - ELAD&apos;S TRAIL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="סה&quot;כ פוסטים" value={stats.total} icon={<FileText className="w-5 h-5" />} color="bg-blue-50 text-blue-600" />
          <StatCard label="עם רמת קושי" value={stats.withDifficulty} icon={<Mountain className="w-5 h-5" />} color="bg-orange-50 text-orange-600" />
          <StatCard label="מתאים למשפחות" value={stats.familyFriendly} icon={<Users className="w-5 h-5" />} color="bg-emerald-50 text-emerald-600" />
          <StatCard label="קטגוריות" value={CATEGORIES.length} icon={<Tag className="w-5 h-5" />} color="bg-amber-50 text-amber-600" />
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {stats.byCategory.map(c => (
            <button
              key={c.id}
              onClick={() => setCategoryFilter(categoryFilter === c.id ? null : c.id)}
              className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                categoryFilter === c.id
                  ? 'bg-[#E85D04] text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <span>{c.name_he}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                categoryFilter === c.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {c.count}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="relative flex-1 w-full sm:max-w-sm">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="חיפוש לפי כותרת, slug, או מחבר..."
                className="w-full pr-10 pl-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E85D04]/20 focus:border-[#E85D04] transition-all"
              />
            </div>
            <div className="text-sm text-gray-500">
              {filteredPosts.length} מתוך {allPosts.length} פוסטים
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-500">
                  <SortableHeader label="#" field="id" current={sortField} dir={sortDir} onClick={handleSort} />
                  <th className="text-right py-3 px-4 font-medium">תמונה</th>
                  <SortableHeader label="כותרת" field="title" current={sortField} dir={sortDir} onClick={handleSort} />
                  <SortableHeader label="קטגוריה" field="category" current={sortField} dir={sortDir} onClick={handleSort} />
                  <SortableHeader label="תאריך" field="date" current={sortField} dir={sortDir} onClick={handleSort} />
                  <SortableHeader label="קושי" field="difficulty" current={sortField} dir={sortDir} onClick={handleSort} />
                  <th className="text-right py-3 px-4 font-medium">זמן קריאה</th>
                  <th className="text-right py-3 px-4 font-medium">פעולות</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredPosts.map(post => {
                  const cat = getCategoryById(post.category_id);
                  return (
                    <tr
                      key={post.id}
                      className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedPost(selectedPost?.id === post.id ? null : post)}
                    >
                      <td className="py-3 px-4 text-gray-400 font-mono text-xs">{post.id}</td>
                      <td className="py-3 px-4">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={post.featured_image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <p className="font-medium text-[#1B263B] line-clamp-1 max-w-[240px]">{post.title_he}</p>
                        <p className="text-gray-400 text-xs mt-0.5 font-mono">{post.slug}</p>
                      </td>
                      <td className="py-3 px-4">
                        {cat && (
                          <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-gray-100 text-gray-700 whitespace-nowrap">
                            {cat.name_he}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-500 whitespace-nowrap">
                        {new Date(post.date).toLocaleDateString('he-IL')}
                      </td>
                      <td className="py-3 px-4">
                        {post.difficulty ? (
                          <DifficultyBadge level={post.difficulty} />
                        ) : (
                          <span className="text-gray-300 text-xs">--</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-500 whitespace-nowrap">
                        {post.reading_time?.replace('⏱️ ', '') || '--'}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={(e) => { e.stopPropagation(); copyPostJson(post); }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="העתק JSON"
                        >
                          {copiedId === post.id ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Search className="w-8 h-8 mx-auto mb-3 text-gray-300" />
              <p>לא נמצאו פוסטים</p>
            </div>
          )}
        </div>

        {selectedPost && (
          <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#1B263B]">JSON - {selectedPost.title_he}</h3>
              <button
                onClick={() => copyPostJson(selectedPost)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {copiedId === selectedPost.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                {copiedId === selectedPost.id ? 'הועתק' : 'העתק'}
              </button>
            </div>
            <pre
              className="bg-gray-50 rounded-xl p-4 text-xs font-mono overflow-x-auto text-gray-700 max-h-96 overflow-y-auto"
              dir="ltr"
            >
              {JSON.stringify(selectedPost, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color }: { label: string; value: number; icon: React.ReactNode; color: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-[#1B263B]">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function SortableHeader({ label, field, current, dir, onClick }: {
  label: string; field: SortField; current: SortField; dir: SortDir; onClick: (f: SortField) => void;
}) {
  return (
    <th
      className="text-right py-3 px-4 font-medium cursor-pointer hover:text-gray-800 transition-colors select-none whitespace-nowrap"
      onClick={() => onClick(field)}
    >
      <span className="flex items-center gap-1">
        {label}
        <ArrowUpDown className={`w-3.5 h-3.5 ${current === field ? 'text-[#E85D04]' : 'text-gray-300'}`} />
      </span>
    </th>
  );
}

function DifficultyBadge({ level }: { level: string }) {
  const config: Record<string, string> = {
    'קל': 'bg-emerald-50 text-emerald-700',
    'בינוני': 'bg-amber-50 text-amber-700',
    'קשה': 'bg-orange-50 text-orange-700',
    'אתגרי': 'bg-red-50 text-red-700',
  };
  return (
    <span className={`px-2.5 py-1 text-[11px] font-medium rounded-full whitespace-nowrap ${config[level] || 'bg-gray-50 text-gray-600'}`}>
      {level}
    </span>
  );
}
