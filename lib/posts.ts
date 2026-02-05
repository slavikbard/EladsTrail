import { supabase } from './supabase';

export interface Post {
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
  created_at: string;
  updated_at: string;
  packing_list_he?: string;
  fun_facts_he?: string;
}

export interface Category {
  id: string;
  name_he: string;
  name_en: string;
  slug: string;
  color: string;
  created_at: string;
}

export async function getPublishedPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
}

export async function getRecentPosts(limit: number = 6): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }

  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data;
}

export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('category_id', categoryId)
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  return data || [];
}

export async function getAllCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name_he');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    console.error('Error fetching category:', error);
    return null;
  }

  return data;
}

export async function incrementPostViews(postId: string): Promise<void> {
  await supabase.rpc('increment_post_views', { post_id: postId });
}
