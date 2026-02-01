/*
  # Create Blog Schema for Elad's Trail

  ## Overview
  Creates the database structure for a travel & food blog with posts, categories, and related content.

  ## New Tables
  
  ### `categories`
  - `id` (uuid, primary key): Unique identifier for each category
  - `name_he` (text): Hebrew name for the category
  - `name_en` (text): English name for the category
  - `slug` (text, unique): URL-friendly identifier
  - `color` (text): Category color for tags
  - `created_at` (timestamptz): Creation timestamp

  ### `posts`
  - `id` (uuid, primary key): Unique identifier for each post
  - `title_he` (text): Hebrew title
  - `title_en` (text): English title
  - `slug` (text, unique): URL-friendly identifier
  - `excerpt_he` (text): Hebrew excerpt/summary
  - `excerpt_en` (text): English excerpt/summary
  - `content_he` (text): Full Hebrew content
  - `content_en` (text): Full English content
  - `featured_image` (text): Image URL
  - `category_id` (uuid): Foreign key to categories
  - `published` (boolean): Publication status
  - `view_count` (integer): Number of views
  - `created_at` (timestamptz): Creation timestamp
  - `updated_at` (timestamptz): Last update timestamp

  ## Security
  - Enable RLS on both tables
  - Public read access for published content
  - Authenticated admin access for write operations

  ## Notes
  1. Initial setup includes sample categories (Israel, Global, Culinary)
  2. Sample posts will be added for demonstration
  3. All content supports both Hebrew and English
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_he text NOT NULL,
  name_en text NOT NULL,
  slug text UNIQUE NOT NULL,
  color text DEFAULT '#E85D04',
  created_at timestamptz DEFAULT now()
);

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_he text NOT NULL,
  title_en text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt_he text NOT NULL,
  excerpt_en text NOT NULL,
  content_he text NOT NULL,
  content_en text NOT NULL,
  featured_image text NOT NULL,
  category_id uuid REFERENCES categories(id),
  published boolean DEFAULT false,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories (public read)
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for posts (public read for published posts)
CREATE POLICY "Anyone can view published posts"
  ON posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can view all posts"
  ON posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert posts"
  ON posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample categories
INSERT INTO categories (name_he, name_en, slug, color) VALUES
  ('ישראל', 'Israel', 'israel', '#0077B6'),
  ('עולמי', 'Global', 'global', '#E85D04'),
  ('קולינריה', 'Culinary', 'culinary', '#D62828')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample posts
INSERT INTO posts (title_he, title_en, slug, excerpt_he, excerpt_en, content_he, content_en, featured_image, category_id, published) VALUES
  (
    'שביל ישראל: המקטע הכי יפה בצפון',
    'Israel Trail: The Most Beautiful Northern Section',
    'israel-trail-north',
    'עברתי את אחד המקטעים הכי מאתגרים בשביל ישראל. בין הרי הגליל, נחלים זורמים ואוכל דרוזי מדהים.',
    'I completed one of the most challenging sections of the Israel Trail. Between the Galilee mountains, flowing streams, and amazing Druze food.',
    'המסלול הזה היה כל מה שחלמתי עליו ויותר. התחלנו בשעות הבוקר המוקדמות, כשהשמש רק מתחילה לעלות מעל הרי הגליל. האוויר היה קריר והשקט היה מוחלט. כל צעד על השביל הזה הוא סיפור בפני עצמו - מנחלים זורמים ועד תצפיות עוצרות נשימה.\n\nהדגש של היום היה בהחלט העצירה בכפר הדרוזי, שם טעמנו פיתה טרייה עם זעתר מקומי, לבנה ביתית, וקפה ששילב את הטעם המושלם של קרדמון. זה הסוג של אוכל שאי אפשר למצוא במסעדות - זה אמיתי, ביתי, ומלא באהבה.\n\nהמשכנו את המסלול דרך שבילים מאתגרים, חצינו נחלים וטיפסנו על סלעים. כל פינה הייתה הפתעה חדשה, כל תצפית הייתה שווה את המאמץ. אם אתם מחפשים מסלול שמשלב טבע מדהים עם חוויה קולינרית אמיתית - זה המקום.',
    'This trail was everything I dreamed of and more. We started in the early morning hours, as the sun was just beginning to rise over the Galilee mountains. The air was cool and the silence was absolute. Every step on this trail is a story in itself - from flowing streams to breathtaking viewpoints.\n\nThe highlight of the day was definitely the stop at the Druze village, where we tasted fresh pita with local zaatar, homemade labneh, and coffee that combined the perfect taste of cardamom. This is the kind of food you can''t find in restaurants - it''s real, homemade, and full of love.\n\nWe continued the trail through challenging paths, crossed streams, and climbed rocks. Every corner was a new surprise, every viewpoint was worth the effort. If you''re looking for a trail that combines stunning nature with a real culinary experience - this is the place.',
    'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    (SELECT id FROM categories WHERE slug = 'israel'),
    true
  ),
  (
    'שוק מחנה יהודה: מסלול אוכל אולטימטיבי',
    'Mahane Yehuda Market: The Ultimate Food Trail',
    'mahane-yehuda-food-trail',
    'מסלול קולינרי דרך השוק הכי תוסס בירושלים. מבורקסים בבוקר ועד ערק בלילה.',
    'A culinary trail through Jerusalem''s most vibrant market. From bourekas in the morning to arak at night.',
    'שוק מחנה יהודה הוא לא סתם שוק - זה חוויה שמשלבת היסטוריה, תרבות ואוכל מדהים. התחלנו את הבוקר בשעה 7, כשהשוק עוד מתעורר. הריחות של בורקסים טריים, קפה טרקי וזעתר טרי ממלאים את האוויר.\n\nהתחנה הראשונה: בורקסים במאפיית עזריאל. הבצק פריך מבחוץ, התבנית עסיסית מבפנים. אכלנו בעמידה, כמו שצריך, עם כוס עמבה חמוצה.\n\nהמשכנו לסיור בדוכני הפירות והירקות, טעמנו תמרים טריים, רימונים מתוקים ותאנים שהגיעו הבוקר. כל סוחר מספר סיפור, כל מוצר בא עם המלצה אישית.\n\nהשיא היה בערב - הסעודה בבר יהושע. דגים טריים על הגריל, סלט ירושלמי מושלם, וכמובן - כוסית ערק עם לימון וקרח. זה הסוג של ערב שזוכרים לכל החיים.',
    'Mahane Yehuda Market is not just a market - it''s an experience that combines history, culture, and amazing food. We started the morning at 7 AM, when the market was still waking up. The smells of fresh bourekas, Turkish coffee, and fresh zaatar fill the air.\n\nFirst stop: bourekas at Azrieli Bakery. The dough crispy on the outside, the filling juicy inside. We ate standing up, as you should, with a glass of sour amba.\n\nWe continued to tour the fruit and vegetable stalls, tasted fresh dates, sweet pomegranates, and figs that arrived this morning. Every vendor tells a story, every product comes with a personal recommendation.\n\nThe peak was in the evening - dinner at Bar Yehoshua. Fresh grilled fish, perfect Jerusalem salad, and of course - a glass of arak with lemon and ice. This is the kind of evening you remember for life.',
    'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg',
    (SELECT id FROM categories WHERE slug = 'culinary'),
    true
  ),
  (
    'פורטוגל: שביל החוף של רוטה ויסנטינה',
    'Portugal: The Rota Vicentina Coastal Trail',
    'portugal-rota-vicentina',
    'טיול רגלי לאורך החוף המערבי של פורטוגל. צוקים דרמטיים, כפרי דייגים, ופסקדה דל דיה.',
    'A walking trail along Portugal''s western coast. Dramatic cliffs, fishing villages, and pescada del dia.',
    'רוטה ויסנטינה היא אחת החוויות הכי מיוחדות שעשיתי. 226 קילומטר לאורך החוף המערבי של פורטוגל, בין צוקים דרמטיים לחופים שקטים.\n\nכל יום התחיל עם פאסטל דה נאטה וקפה בינגו בכפר הקרוב, והסתיים עם ארוחת ערב בטברנה מקומית. המנה האהובה עליי? פסקדה דל דיה - דג טרי של היום, בגריל פשוט עם שום ושמן זית.\n\nהשביל עצמו הוא מאתגר אבל מתגמל. יש קטעים שעוברים בצוקים גבוהים מעל האוקיינוס, ויש כאלה שיורדים לחופים סמויים שאפשר להגיע אליהם רק ברגל. בכל פינה יש נוף חדש, בכל כפר יש סיפור.\n\nהפורטוגלים הם בעלי אירוח מדהימים. בכל מקום שעצרנו, קיבלנו חיוך, המלצה איפה לאכול, ולפעמים גם כוסית ויניו ורדה לדרך.',
    'Rota Vicentina is one of the most special experiences I''ve had. 226 kilometers along Portugal''s western coast, between dramatic cliffs and quiet beaches.\n\nEach day started with pastel de nata and cafe bica in the nearest village, and ended with dinner at a local taverna. My favorite dish? Pescada del dia - fresh fish of the day, simply grilled with garlic and olive oil.\n\nThe trail itself is challenging but rewarding. There are sections that pass on high cliffs above the ocean, and others that descend to hidden beaches accessible only on foot. Every corner has a new view, every village has a story.\n\nThe Portuguese are amazing hosts. Everywhere we stopped, we received a smile, a recommendation where to eat, and sometimes even a glass of vinho verde for the road.',
    'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
    (SELECT id FROM categories WHERE slug = 'global'),
    true
  )
ON CONFLICT (slug) DO NOTHING;