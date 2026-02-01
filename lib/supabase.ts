import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name_he: string;
  name_en: string;
  slug: string;
  color: string;
  created_at: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface Post {
  id: string;
  title_he: string;
  title_en: string;
  slug: string;
  excerpt_he: string;
  excerpt_en: string;
  content_he: string;
  content_en: string;
  featured_image: string;
  category_id: string;
  published: boolean;
  view_count: number;
  gallery_images?: GalleryImage[];
  packing_list_he?: string;
  fun_facts_he?: string;
  created_at: string;
  updated_at: string;
  categories?: Category;
}
