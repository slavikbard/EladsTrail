'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Save, Eye, EyeOff, Image as ImageIcon } from 'lucide-react';

interface Post {
  id: string;
  slug: string;
  title_he: string;
  title_en: string;
  excerpt_he: string;
  excerpt_en: string;
  content_he: string;
  content_en: string;
  category_id: string;
  featured_image: string;
  published: boolean;
  view_count: number;
  gallery_images: string[];
  packing_list_he?: string;
  fun_facts_he?: string;
}

export default function PostEditor() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    loadPosts();
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name_he');

      if (error) throw error;
      setCategories(data || []);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts((data || []).map(post => ({
        ...post,
        gallery_images: post.gallery_images || []
      })));
      setError('');
    } catch (err) {
      setError('שגיאה בטעינת הפוסטים');
      console.error(err);
    }
  };

  const handleSavePost = async () => {
    if (!selectedPost?.slug) {
      setError('יש למלא את ה-slug');
      return;
    }

    setLoading(true);
    try {
      const postData = {
        slug: selectedPost.slug,
        title_he: selectedPost.title_he,
        title_en: selectedPost.title_en,
        excerpt_he: selectedPost.excerpt_he,
        excerpt_en: selectedPost.excerpt_en,
        content_he: selectedPost.content_he,
        content_en: selectedPost.content_en,
        category_id: selectedPost.category_id,
        featured_image: selectedPost.featured_image,
        published: selectedPost.published,
        gallery_images: selectedPost.gallery_images,
        packing_list_he: selectedPost.packing_list_he,
        fun_facts_he: selectedPost.fun_facts_he,
        updated_at: new Date().toISOString()
      };

      if (selectedPost.id) {
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', selectedPost.id);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('posts')
          .insert([postData])
          .select()
          .single();

        if (error) throw error;
        setSelectedPost(data);
      }

      loadPosts();
      setError('');
      alert('הפוסט נשמר בהצלחה!');
    } catch (err: any) {
      setError(`שגיאה בשמירת הפוסט: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = () => {
    if (!newImage || !selectedPost) return;

    setSelectedPost({
      ...selectedPost,
      gallery_images: [...(selectedPost.gallery_images || []), newImage]
    });
    setNewImage('');
  };

  const handleRemoveImage = (index: number) => {
    if (!selectedPost) return;

    const newImages = [...selectedPost.gallery_images];
    newImages.splice(index, 1);
    setSelectedPost({
      ...selectedPost,
      gallery_images: newImages
    });
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm('האם אתה בטוח שברצונך למחוק את הפוסט הזה?')) return;

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;
      setSelectedPost(null);
      loadPosts();
      alert('הפוסט נמחק בהצלחה!');
    } catch (err) {
      setError('שגיאה במחיקת הפוסט');
      console.error(err);
    }
  };

  const createNewPost = () => {
    setSelectedPost({
      id: '',
      title_he: '',
      title_en: '',
      slug: '',
      excerpt_he: '',
      excerpt_en: '',
      content_he: '',
      content_en: '',
      category_id: categories[0]?.id || '',
      featured_image: '',
      published: false,
      view_count: 0,
      gallery_images: []
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#1B263B]">עורך פוסטים</h1>
          <button
            onClick={createNewPost}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            <Plus className="w-5 h-5" />
            פוסט חדש
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-bold text-[#1B263B]">פוסטים ({posts.length})</h2>
            </div>

            <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
              {posts.map(post => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className={`p-3 cursor-pointer transition ${
                    selectedPost?.id === post.id
                      ? 'bg-blue-50 border-r-4 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-[#1B263B] line-clamp-2">{post.title_he}</p>
                      <p className="text-xs text-gray-500 mt-1">{post.slug}</p>
                    </div>
                    {post.published ? (
                      <Eye className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedPost && (
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#1B263B]">
                    {selectedPost.id ? 'ערוך פוסט' : 'פוסט חדש'}
                  </h2>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedPost.published || false}
                      onChange={(e) => setSelectedPost({ ...selectedPost, published: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">פורסם</span>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
                    <input
                      type="text"
                      placeholder="example-post"
                      value={selectedPost.slug}
                      onChange={(e) => setSelectedPost({ ...selectedPost, slug: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">כותרת עברית *</label>
                    <input
                      type="text"
                      value={selectedPost.title_he}
                      onChange={(e) => setSelectedPost({ ...selectedPost, title_he: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">כותרת אנגלית</label>
                    <input
                      type="text"
                      value={selectedPost.title_en}
                      onChange={(e) => setSelectedPost({ ...selectedPost, title_en: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">תקציר עברית</label>
                    <textarea
                      value={selectedPost.excerpt_he}
                      onChange={(e) => setSelectedPost({ ...selectedPost, excerpt_he: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      rows={2}
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">תקציר אנגלית</label>
                    <textarea
                      value={selectedPost.excerpt_en}
                      onChange={(e) => setSelectedPost({ ...selectedPost, excerpt_en: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      rows={2}
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">תוכן עברית</label>
                    <textarea
                      value={selectedPost.content_he}
                      onChange={(e) => setSelectedPost({ ...selectedPost, content_he: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
                      rows={8}
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">תוכן אנגלית</label>
                    <textarea
                      value={selectedPost.content_en}
                      onChange={(e) => setSelectedPost({ ...selectedPost, content_en: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
                      rows={8}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">קטגוריה</label>
                    <select
                      value={selectedPost.category_id || ''}
                      onChange={(e) => setSelectedPost({ ...selectedPost, category_id: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name_he}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL תמונה ראשית</label>
                    <input
                      type="text"
                      value={selectedPost.featured_image}
                      onChange={(e) => setSelectedPost({ ...selectedPost, featured_image: e.target.value })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">גלריית תמונות</label>

                  {selectedPost.gallery_images && selectedPost.gallery_images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {selectedPost.gallery_images.map((img, idx) => (
                        <div key={idx} className="relative group">
                          <img
                            src={img}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-24 object-cover rounded-lg border border-gray-200"
                          />
                          <button
                            onClick={() => handleRemoveImage(idx)}
                            className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded opacity-0 group-hover:opacity-100 transition"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="URL תמונה"
                      value={newImage}
                      onChange={(e) => setNewImage(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <button
                      onClick={handleAddImage}
                      disabled={!newImage}
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSavePost}
                    disabled={loading}
                    className="flex-1 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 flex items-center justify-center gap-2 font-medium"
                  >
                    <Save className="w-5 h-5" />
                    {loading ? 'שומר...' : 'שמור'}
                  </button>

                  {selectedPost.id && (
                    <button
                      onClick={() => handleDeletePost(selectedPost.id)}
                      className="px-6 p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-5 h-5" />
                      מחק
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
