'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Save } from 'lucide-react';

interface Post {
  id: string;
  slug: string;
  title_he: string;
  excerpt_he: string;
  content_he: string;
  category_id: number;
  subcategory_id?: number;
  featured_image: string;
  author: string;
  reading_time: string;
  difficulty?: string;
  is_family_friendly?: boolean;
}

interface PostImage {
  id: string;
  image_url: string;
  order: number;
}

export default function PostEditor() {
  const [posts, setPosts] = useState<(Post & { images: PostImage[] })[]>([]);
  const [selectedPost, setSelectedPost] = useState<(Post & { images: PostImage[] }) | null>(null);
  const [newPost, setNewPost] = useState<Partial<Post>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newImages, setNewImages] = useState<string[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          id,
          slug,
          title_he,
          excerpt_he,
          content_he,
          category_id,
          subcategory_id,
          featured_image,
          author,
          reading_time,
          difficulty,
          is_family_friendly,
          post_images (
            id,
            image_url,
            order
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts((data || []).map(post => ({
        ...post,
        images: post.post_images || []
      })));
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
      if (selectedPost.id) {
        const { error } = await supabase
          .from('posts')
          .update(selectedPost)
          .eq('id', selectedPost.id);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('posts')
          .insert([selectedPost])
          .select()
          .single();

        if (error) throw error;
        setSelectedPost(data);
      }

      loadPosts();
      setError('');
    } catch (err) {
      setError('שגיאה בשמירת הפוסט');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = async (imageUrl: string) => {
    if (!selectedPost?.id) {
      setError('יש לשמור את הפוסט תחילה');
      return;
    }

    setLoading(true);
    try {
      const order = (selectedPost.images?.length || 0) + 1;
      const { error } = await supabase
        .from('post_images')
        .insert([{
          post_id: selectedPost.id,
          image_url: imageUrl,
          order
        }]);

      if (error) throw error;
      loadPosts();
      setNewImages([]);
    } catch (err) {
      setError('שגיאה בהוספת התמונה');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    try {
      const { error } = await supabase
        .from('post_images')
        .delete()
        .eq('id', imageId);

      if (error) throw error;
      loadPosts();
    } catch (err) {
      setError('שגיאה במחיקת התמונה');
      console.error(err);
    }
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
    } catch (err) {
      setError('שגיאה במחיקת הפוסט');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <h1 className="text-3xl font-bold text-[#1B263B] mb-6">עורך פוסטים</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {/* רשימת פוסטים */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="font-bold text-[#1B263B]">פוסטים</h2>
              <button
                onClick={() => setSelectedPost({
                  id: '',
                  title_he: '',
                  slug: '',
                  excerpt_he: '',
                  content_he: '',
                  category_id: 1,
                  featured_image: '',
                  author: '',
                  reading_time: '',
                  images: []
                } as any)}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
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
                  <p className="font-medium text-sm text-[#1B263B] line-clamp-2">{post.title_he}</p>
                  <p className="text-xs text-gray-500 mt-1">{post.slug}</p>
                </div>
              ))}
            </div>
          </div>

          {/* עורך הפוסט */}
          {selectedPost && (
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-[#1B263B] mb-6">ערוך פוסט</h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="כותרת"
                    value={selectedPost.title_he}
                    onChange={(e) => setSelectedPost({ ...selectedPost, title_he: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="slug"
                    value={selectedPost.slug}
                    onChange={(e) => setSelectedPost({ ...selectedPost, slug: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <textarea
                    placeholder="תקציר"
                    value={selectedPost.excerpt_he}
                    onChange={(e) => setSelectedPost({ ...selectedPost, excerpt_he: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    rows={2}
                  />

                  <textarea
                    placeholder="תוכן"
                    value={selectedPost.content_he}
                    onChange={(e) => setSelectedPost({ ...selectedPost, content_he: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    rows={6}
                  />

                  <input
                    type="text"
                    placeholder="URL תמונה ראשית"
                    value={selectedPost.featured_image}
                    onChange={(e) => setSelectedPost({ ...selectedPost, featured_image: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <select
                    value={selectedPost.category_id || 1}
                    onChange={(e) => setSelectedPost({ ...selectedPost, category_id: parseInt(e.target.value) })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="1">יעדים</option>
                    <option value="2">טיפים</option>
                    <option value="3">ריביו</option>
                  </select>

                  <select
                    value={selectedPost.difficulty || ''}
                    onChange={(e) => setSelectedPost({ ...selectedPost, difficulty: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">בחר רמת קושי</option>
                    <option value="קל">קל</option>
                    <option value="בינוני">בינוני</option>
                    <option value="קשה">קשה</option>
                    <option value="אתגרי">אתגרי</option>
                  </select>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPost.is_family_friendly || false}
                      onChange={(e) => setSelectedPost({ ...selectedPost, is_family_friendly: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">מתאים למשפחות</span>
                  </label>

                  <button
                    onClick={handleSavePost}
                    disabled={loading}
                    className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    שמור
                  </button>

                  {selectedPost.id && (
                    <button
                      onClick={() => handleDeletePost(selectedPost.id)}
                      className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-5 h-5" />
                      מחוק פוסט
                    </button>
                  )}
                </div>

                {/* גלריה של תמונות */}
                {selectedPost.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-[#1B263B] mb-4">גלריית תמונות</h3>

                    <div className="space-y-2 mb-4">
                      {selectedPost.images?.map((img) => (
                        <div key={img.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-600 truncate">{img.image_url}</span>
                          <button
                            onClick={() => handleDeleteImage(img.id)}
                            className="p-1 text-red-500 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="URL תמונה"
                        value={newImages[0] || ''}
                        onChange={(e) => setNewImages([e.target.value])}
                        className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <button
                        onClick={() => handleAddImage(newImages[0])}
                        disabled={loading || !newImages[0]}
                        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
