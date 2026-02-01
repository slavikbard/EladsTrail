/*
  # Fix Security Issues

  ## Changes

  1. **Add Index on Foreign Key**
     - Create index on `posts.category_id` to improve query performance
  
  2. **Fix RLS Policies**
     - Remove overly permissive policies with USING/WITH CHECK (true)
     - Remove duplicate SELECT policies for authenticated users
     - Keep only public read access for published content
     - Remove unrestricted INSERT/UPDATE policies
  
  ## Security Improvements
  
  - Posts: Only published posts are readable by everyone
  - Categories: Readable by everyone
  - Write operations are now blocked until proper authentication is implemented
  
  ## Notes
  
  - Write operations (INSERT/UPDATE/DELETE) are currently disabled
  - When authentication is added, new policies should be created with proper user checks
  - The Auth DB Connection Strategy warning requires Supabase dashboard configuration
*/

-- Add index on foreign key for better query performance
CREATE INDEX IF NOT EXISTS idx_posts_category_id ON posts(category_id);

-- Drop all existing policies to rebuild them properly
DROP POLICY IF EXISTS "Anyone can view categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can insert categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can update categories" ON categories;

DROP POLICY IF EXISTS "Anyone can view published posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users can view all posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users can insert posts" ON posts;
DROP POLICY IF EXISTS "Authenticated users can update posts" ON posts;

-- Categories: Public read access only
CREATE POLICY "Public read access to categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Posts: Public read access for published posts only
CREATE POLICY "Public read access to published posts"
  ON posts FOR SELECT
  TO anon, authenticated
  USING (published = true);