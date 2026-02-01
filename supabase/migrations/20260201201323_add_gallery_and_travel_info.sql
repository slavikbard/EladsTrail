/*
  # Add Gallery and Travel Information to Posts

  1. Changes
    - Add `gallery_images` column (JSONB) to store array of gallery images with captions
    - Add `packing_list_he` column (TEXT) to store packing recommendations in Hebrew
    - Add `fun_facts_he` column (TEXT) to store interesting facts in Hebrew
  
  2. Notes
    - Using JSONB for gallery_images to store structured data: [{"url": "...", "caption": "..."}]
    - All new columns are nullable to support existing posts
*/

-- Add gallery and travel info columns
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'posts' AND column_name = 'gallery_images'
  ) THEN
    ALTER TABLE posts ADD COLUMN gallery_images JSONB DEFAULT '[]'::jsonb;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'posts' AND column_name = 'packing_list_he'
  ) THEN
    ALTER TABLE posts ADD COLUMN packing_list_he TEXT;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'posts' AND column_name = 'fun_facts_he'
  ) THEN
    ALTER TABLE posts ADD COLUMN fun_facts_he TEXT;
  END IF;
END $$;
