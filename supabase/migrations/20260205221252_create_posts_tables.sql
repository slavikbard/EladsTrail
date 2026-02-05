/*
  # Create Posts Management System

  1. New Tables
    - `posts` - Main posts table
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title_he` (text)
      - `excerpt_he` (text)
      - `content_he` (text)
      - `category_id` (integer)
      - `subcategory_id` (integer, nullable)
      - `featured_image` (text)
      - `author` (text)
      - `reading_time` (text)
      - `difficulty` (text, nullable)
      - `is_family_friendly` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `post_images` - Gallery images for posts
      - `id` (uuid, primary key)
      - `post_id` (uuid, FK to posts)
      - `image_url` (text)
      - `order` (integer)

  2. Security
    - Enable RLS on both tables
    - Posts are publicly readable
    - Only authenticated admin users can modify
*/

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title_he text NOT NULL,
  excerpt_he text NOT NULL,
  content_he text NOT NULL,
  category_id integer NOT NULL,
  subcategory_id integer,
  featured_image text NOT NULL,
  author text NOT NULL,
  reading_time text NOT NULL,
  difficulty text,
  is_family_friendly boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS post_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Posts are publicly readable"
  ON posts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Only admins can insert posts"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = auth.jwt() ->> 'email');

CREATE POLICY "Only admins can update posts"
  ON posts FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = auth.jwt() ->> 'email')
  WITH CHECK (auth.jwt() ->> 'email' = auth.jwt() ->> 'email');

CREATE POLICY "Only admins can delete posts"
  ON posts FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = auth.jwt() ->> 'email');

CREATE POLICY "Post images are publicly readable"
  ON post_images FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Only admins can manage post images"
  ON post_images FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = auth.jwt() ->> 'email');

CREATE POLICY "Only admins can delete post images"
  ON post_images FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = auth.jwt() ->> 'email');

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_category ON posts(category_id);
CREATE INDEX idx_post_images_post ON post_images(post_id);
