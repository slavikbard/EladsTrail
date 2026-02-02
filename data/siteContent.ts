export interface Category {
  id: string;
  name_he: string;
  name_en: string;
  slug: string;
  color: string;
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
  gallery_images?: GalleryImage[];
  packing_list_he?: string;
  fun_facts_he?: string;
  created_at: string;
}

export interface SiteMetadata {
  title_he: string;
  title_en: string;
  description_he: string;
  description_en: string;
  author: string;
  social: {
    instagram?: string;
    twitter?: string;
    email?: string;
  };
}

export const siteMetadata: SiteMetadata = {
  title_he: "אלעד טרוול - מסעות וטיולים",
  title_en: "Elad Travel - Journeys and Trips",
  description_he: "בלוג טיולים אישי - חוויות, מסלולים, והמלצות מסביב לעולם",
  description_en: "Personal travel blog - experiences, routes, and recommendations from around the world",
  author: "Elad",
  social: {
    email: "contact@eladtravel.blog"
  }
};

export const categories: Category[] = [
  {
    id: "e3362143-0ee0-4464-86fc-5ca3d08e63f1",
    name_he: "ישראל",
    name_en: "Israel",
    slug: "israel",
    color: "#0077B6"
  },
  {
    id: "6fb253f0-8085-451c-951c-345f83aef1a8",
    name_he: "עולמי",
    name_en: "Global",
    slug: "global",
    color: "#E85D04"
  },
  {
    id: "19305e16-d131-4a76-8937-abe09be951c9",
    name_he: "קולינריה",
    name_en: "Culinary",
    slug: "culinary",
    color: "#D62828"
  }
];

export const posts: Post[] = [
  {
    id: "2c002850-88c9-458c-9c21-4c9169e36034",
    title_he: "פורטוגל: שביל החוף של רוטה ויסנטינה",
    title_en: "Portugal: The Rota Vicentina Coastal Trail",
    slug: "portugal-rota-vicentina",
    excerpt_he: "טיול רגלי לאורך החוף המערבי של פורטוגל. צוקים דרמטיים, כפרי דייגים, ופסקדה דל דיה.",
    excerpt_en: "A walking trail along Portugal's western coast. Dramatic cliffs, fishing villages, and pescada del dia.",
    content_he: `רוטה ויסנטינה היא אחת החוויות הכי מיוחדות שעשיתי. 226 קילומטר לאורך החוף המערבי של פורטוגל, בין צוקים דרמטיים לחופים שקטים.

כל יום התחיל עם פאסטל דה נאטה וקפה בינגו בכפר הקרוב, והסתיים עם ארוחת ערב בטברנה מקומית. המנה האהובה עליי? פסקדה דל דיה - דג טרי של היום, בגריל פשוט עם שום ושמן זית.

השביל עצמו הוא מאתגר אבל מתגמל. יש קטעים שעוברים בצוקים גבוהים מעל האוקיינוס, ויש כאלה שיורדים לחופים סמויים שאפשר להגיע אליהם רק ברגל. בכל פינה יש נוף חדש, בכל כפר יש סיפור.

הפורטוגלים הם בעלי אירוח מדהימים. בכל מקום שעצרנו, קיבלנו חיוך, המלצה איפה לאכול, ולפעמים גם כוסית ויניו ורדה לדרך.`,
    content_en: `Rota Vicentina is one of the most special experiences I've had. 226 kilometers along Portugal's western coast, between dramatic cliffs and quiet beaches.

Each day started with pastel de nata and cafe bica in the nearest village, and ended with dinner at a local taverna. My favorite dish? Pescada del dia - fresh fish of the day, simply grilled with garlic and olive oil.

The trail itself is challenging but rewarding. There are sections that pass on high cliffs above the ocean, and others that descend to hidden beaches accessible only on foot. Every corner has a new view, every village has a story.

The Portuguese are amazing hosts. Everywhere we stopped, we received a smile, a recommendation where to eat, and sometimes even a glass of vinho verde for the road.`,
    featured_image: "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category_id: "6fb253f0-8085-451c-951c-345f83aef1a8",
    published: true,
    created_at: "2026-02-01T18:21:50.636Z",
    gallery_images: [
      {
        url: "https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "החוף הפראי של רוטה ויסנטינה - אחד היפים באירופה"
      },
      {
        url: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שבילי החוף המרהיבים לאורך האוקיינוס האטלנטי"
      },
      {
        url: "https://images.pexels.com/photos/3254549/pexels-photo-3254549.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "הצוקים הדרמטיים של חוף אלגארבה"
      },
      {
        url: "https://images.pexels.com/photos/2166477/pexels-photo-2166477.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "כפרי דייגים מסורתיים לאורך הדרך"
      },
      {
        url: "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שקיעה מרהיבה על האוקיינוס האטלנטי"
      },
      {
        url: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "אוכל פורטוגלי מסורתי - פירות ים טריים"
      }
    ],
    packing_list_he: `🥾 נעלי הליכה נוחות - השביל ארוך אבל לא קשה מדי
🧢 כובע וקרם הגנה - השמש חזקה בחוף
💨 מעיל רוח - רוחות חזקות מהאוקיינוס
👙 בגד ים - חופים מדהימים לאורך הדרך
📱 סוללה חיצונית וכרטיס SIM מקומי
💧 בקבוק מים גדול - לא תמיד יש מקורות מים
🎒 תרמיל קל ונוח - הליכה למספר ימים
🗺️ אפליקציית ניווט - השביל מסומן אבל כדאי GPS
🍫 חטיפי אנרגיה - בין כפרים יש מרחקים
📷 מצלמה - הנופים פשוט מטורפים`,
    fun_facts_he: `🌊 רוטה ויסנטינה הוא אחד משבילי החוף היפים באירופה - 450 ק״מ לאורך החוף הדרום-מערבי של פורטוגל!

🏖️ השביל עובר דרך חופים בתוליים שאפשר להגיע אליהם רק ברגל - ריקים לחלוטין!

🐟 פורטוגל היא אחת ממדינות אירופה עם צריכת הדגים הגבוהה ביותר לנפש - ולמה לא? הדגים פה מעולים!

🌅 חוף אודסייה (Odeceixe) הוא אחד המקומות הכי פוטוגניים - הנהר פוגש את הים.

🏘️ הכפרים לאורך השביל שמרו על האותנטיות שלהם - בתים לבנים, דייגים מקומיים, ואווירה רגועה.

💶 פורטוגל היא אחת המדינות הזולות במערב אירופה - ארוחה מלאה עם יין 15-20 יורו.`
  },
  {
    id: "3b6ecf10-28d7-4165-b125-f0dae736038a",
    title_he: "שוק מחנה יהודה: מסלול אוכל אולטימטיבי",
    title_en: "Mahane Yehuda Market: The Ultimate Food Trail",
    slug: "mahane-yehuda-food-trail",
    excerpt_he: "מסלול קולינרי דרך השוק הכי תוסס בירושלים. מבורקסים בבוקר ועד ערק בלילה.",
    excerpt_en: "A culinary trail through Jerusalem's most vibrant market. From bourekas in the morning to arak at night.",
    content_he: `שוק מחנה יהודה הוא לא סתם שוק - זה חוויה שמשלבת היסטוריה, תרבות ואוכל מדהים. התחלנו את הבוקר בשעה 7, כשהשוק עוד מתעורר. הריחות של בורקסים טריים, קפה טרקי וזעתר טרי ממלאים את האוויר.

התחנה הראשונה: בורקסים במאפיית עזריאל. הבצק פריך מבחוץ, התבנית עסיסית מבפנים. אכלנו בעמידה, כמו שצריך, עם כוס עמבה חמוצה.

המשכנו לסיור בדוכני הפירות והירקות, טעמנו תמרים טריים, רימונים מתוקים ותאנים שהגיעו הבוקר. כל סוחר מספר סיפור, כל מוצר בא עם המלצה אישית.

השיא היה בערב - הסעודה בבר יהושע. דגים טריים על הגריל, סלט ירושלמי מושלם, וכמובן - כוסית ערק עם לימון וקרח. זה הסוג של ערב שזוכרים לכל החיים.`,
    content_en: `Mahane Yehuda Market is not just a market - it's an experience that combines history, culture, and amazing food. We started the morning at 7 AM, when the market was still waking up. The smells of fresh bourekas, Turkish coffee, and fresh zaatar fill the air.

First stop: bourekas at Azrieli Bakery. The dough crispy on the outside, the filling juicy inside. We ate standing up, as you should, with a glass of sour amba.

We continued to tour the fruit and vegetable stalls, tasted fresh dates, sweet pomegranates, and figs that arrived this morning. Every vendor tells a story, every product comes with a personal recommendation.

The peak was in the evening - dinner at Bar Yehoshua. Fresh grilled fish, perfect Jerusalem salad, and of course - a glass of arak with lemon and ice. This is the kind of evening you remember for life.`,
    featured_image: "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category_id: "19305e16-d131-4a76-8937-abe09be951c9",
    published: true,
    created_at: "2026-02-01T18:21:50.636Z",
    gallery_images: [
      {
        url: "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שוק מחנה יהודה - לב ירושלים הפועם"
      },
      {
        url: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "דוכני תבלינים צבעוניים בשוק"
      },
      {
        url: "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "פירות וירקות טריים מהשדה"
      },
      {
        url: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "ברים ומסעדות בשוק בערב"
      },
      {
        url: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "חלבה ומתוקים מסורתיים"
      },
      {
        url: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "סטריט פוד ישראלי אותנטי"
      }
    ],
    packing_list_he: `👟 נעליים נוחות - הרבה הליכה ועמידה
💰 מזומן - חלק מהדוכנים לא מקבלים כרטיסים
🎒 תיק קטן או תיק גב - לשאת קניות
📱 טלפון עם מקום לתמונות - תרצו לצלם הכל!
🧴 ג׳ל לחיטוי ידיים - אוכלים הרבה דברים ביד
💧 בקבוק מים - יכול להיות חם בשוק
🕶️ משקפי שמש - השוק חלקו בחוץ
🍽️ בטן ריקה - צריך מקום לכל האוכל הטוב!
🧺 שקית בד לקניות - ידידותי לסביבה
💳 תקציב נדיב - קשה להתאפק`,
    fun_facts_he: `🏛️ שוק מחנה יהודה הוא אחד השווקים העתיקים בירושלים - פועל מאז 1887!

🌃 בערבים השוק הופך לאזור בילוי עם ברים ומסעדות - חוויה שונה לחלוטין מהבוקר!

🍇 ביום שישי לפני שבת השוק מלא בתיירים ומקומיים - אווירה חגיגית במיוחד.

🎨 האמן האורבני Solomon Souza צייר ציורי קיר מדהימים בתריסי החנויות - אמנות רחוב ברמה עולמית!

🥙 בשוק יש מעל 250 עסקים - מאוכל רחוב ועד מסעדות משובחות.

☕ הקפה בשוק הוא מהטובים בעיר - קפה עזריאלי, קפה יום טוב, ועוד.`
  },
  {
    id: "22067169-4011-4a1d-8d5c-6242861b6264",
    title_he: "שביל ישראל: המקטע הכי יפה בצפון",
    title_en: "Israel Trail: The Most Beautiful Northern Section",
    slug: "israel-trail-north",
    excerpt_he: "עברתי את אחד המקטעים הכי מאתגרים בשביל ישראל. בין הרי הגליל, נחלים זורמים ואוכל דרוזי מדהים.",
    excerpt_en: "I completed one of the most challenging sections of the Israel Trail. Between the Galilee mountains, flowing streams, and amazing Druze food.",
    content_he: `המסלול הזה היה כל מה שחלמתי עליו ויותר. התחלנו בשעות הבוקר המוקדמות, כשהשמש רק מתחילה לעלות מעל הרי הגליל. האוויר היה קריר והשקט היה מוחלט. כל צעד על השביל הזה הוא סיפור בפני עצמו - מנחלים זורמים ועד תצפיות עוצרות נשימה.

הדגש של היום היה בהחלט העצירה בכפר הדרוזי, שם טעמנו פיתה טרייה עם זעתר מקומי, לבנה ביתית, וקפה ששילב את הטעם המושלם של קרדמון. זה הסוג של אוכל שאי אפשר למצוא במסעדות - זה אמיתי, ביתי, ומלא באהבה.

המשכנו את המסלול דרך שבילים מאתגרים, חצינו נחלים וטיפסנו על סלעים. כל פינה הייתה הפתעה חדשה, כל תצפית הייתה שווה את המאמץ. אם אתם מחפשים מסלול שמשלב טבע מדהים עם חוויה קולינרית אמיתית - זה המקום.`,
    content_en: `This trail was everything I dreamed of and more. We started in the early morning hours, as the sun was just beginning to rise over the Galilee mountains. The air was cool and the silence was absolute. Every step on this trail is a story in itself - from flowing streams to breathtaking viewpoints.

The highlight of the day was definitely the stop at the Druze village, where we tasted fresh pita with local zaatar, homemade labneh, and coffee that combined the perfect taste of cardamom. This is the kind of food you can't find in restaurants - it's real, homemade, and full of love.

We continued the trail through challenging paths, crossed streams, and climbed rocks. Every corner was a new surprise, every viewpoint was worth the effort. If you're looking for a trail that combines stunning nature with a real culinary experience - this is the place.`,
    featured_image: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category_id: "e3362143-0ee0-4464-86fc-5ca3d08e63f1",
    published: true,
    created_at: "2026-02-01T18:21:50.636Z",
    gallery_images: [
      {
        url: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שביל ישראל בצפון - נוף הררי מדהים"
      },
      {
        url: "https://images.pexels.com/photos/4666757/pexels-photo-4666757.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "הר מירון - הפסגה הגבוהה בישראל (1,208 מטר)"
      },
      {
        url: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שביל מטולה - ביאדונים"
      },
      {
        url: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "נחל עמוד - מסלול מים קסום"
      },
      {
        url: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "פריחת האביב בגליל העליון"
      },
      {
        url: "https://images.pexels.com/photos/161172/cycling-bike-trail-scenic-161172.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שקיעה על שביל ישראל"
      }
    ],
    packing_list_he: `🥾 נעלי הליכה טובות - השטח מאתגר
💧 מים מים מים - לפחות 3 ליטר ליום בקיץ
🧢 כובע רחב שוליים - השמש בצפון חזקה
🧴 קרם הגנה 50 - לא לוותר!
🎒 תרמיל נוח עם כיסוי גשם (בחורף)
🍫 חטיפי אנרגיה ופירות יבשים
🔦 פנס ראש - למקרה שהלילה מגיע
📱 סוללה חיצונית למכשיר
🗺️ אפליקציית ניווט (Israel Hiking Map)
💊 ערכת עזרה ראשונה`,
    fun_facts_he: `🥾 שביל ישראל הוא השביל הארוך ביותר במזרח התיכון - 1,100 ק״מ מדן ועד אילת!

🏔️ המקטע הצפוני נחשב למאתגר ביותר בשביל - עם עליות ומורדות חדות וטמפרטורות קיצוניות.

🌸 האביב הוא העונה המושלמת - פריחה מרהיבה וטמפרטורות נעימות.

💧 בשביל יש נקודות מים רבות, אבל תמיד כדאי לבדוק מראש באפליקציה.

🏕️ ישנם אתרי לינה רשמיים לאורך השביל - צימרים, קמפינג וכפרים.

👥 הקהילה של שביל ישראל היא מדהימה - תמיד תמצאו עזרה וחברים בדרך!`
  },
  {
    id: "805cd54c-6053-46a9-9f83-0e636ef28af7",
    title_he: "אלבניה עם החבר'ה: הפנינה הבלקנית",
    title_en: "Albania with Friends: The Balkan Pearl",
    slug: "albania-alps-tirana",
    excerpt_he: "אלבניה שלא הכרתם: מסע עם חברים בין נופים אלפיניים פראיים, אוכל מקומי משובח שמשאיר טעם של עוד, וחיי לילה תוססים בלב טירנה. פנינה בלקנית אמיתית.",
    excerpt_en: "Albania you didn't know: a journey with friends between wild Alpine landscapes, excellent local food that leaves you wanting more, and vibrant nightlife in the heart of Tirana. A real Balkan gem.",
    content_he: `אלבניה היא הסוד השמור של הבלקן. ארץ של הרים דרמטיים, אנשים חמים, ואוכל שמתחרה בכל מקום באירופה - במחיר שליש.

התחלנו באלפים האלבניים - Valbona ו-Theth. שני עמקים מבודדים שמחוברים על ידי אחד השבילים היפים באירופה. הטיול בין העמקים לוקח יום שלם, דרך מעבר הרים בגובה 1,800 מטר, עם נוף של פסגות מושלגות בכל כיוון.

בדרך הכרנו את האירוח האלבני האותנטי - בתים פרטיים בכפרים, שבהם המשפחה מכינה ארוחות ביתיות עם כל מה שגדל בחצר. ראקיה ביתית לפני הארוחה, בשר כבש על האש, גבינה טרייה, וירקות מהגינה. פשוט, אמיתי, מושלם.

אחרי ההרים, ירדנו לטירנה - הבירה הכי צבעונית באירופה. בניינים צבועים בכל צבעי הקשת, רחובות תוססים, ברים על כל פינה. הלכנו לאכול בבאזר i Ri - שוק האוכל המקומי, טעמנו קוקורץ (קבב אלבני), ביירק (מאפה במילוי), וטעמנו כל סוגי הראקיה האפשריים.

הערב האחרון היה על החוף האלבני, Riviera Albanike. מים טורקיז, חופים לבנים, ומסעדות דגים עם המחירים הכי נמוכים שראיתי. דג טרי של היום, סלט ים תיכוני, וקפה טורקי לסיום. חברים טובים, מקום מדהים, זיכרונות לכל החיים.`,
    content_en: `Albania is the Balkans' best-kept secret. A country of dramatic mountains, warm people, and food that competes with anywhere in Europe - at a third of the price.

We started in the Albanian Alps - Valbona and Theth. Two isolated valleys connected by one of the most beautiful trails in Europe. The hike between the valleys takes a full day, through a mountain pass at 1,800 meters, with views of snow-capped peaks in every direction.

Along the way we experienced authentic Albanian hospitality - private homes in villages, where the family prepares home-cooked meals with everything grown in the yard. Homemade rakia before the meal, grilled lamb, fresh cheese, and vegetables from the garden. Simple, real, perfect.

After the mountains, we descended to Tirana - the most colorful capital in Europe. Buildings painted in all colors of the rainbow, bustling streets, bars on every corner. We went to eat at Pazari i Ri - the local food market, tasted qofte (Albanian kebab), byrek (stuffed pastry), and sampled every possible type of rakia.

The last evening was on the Albanian coast, Riviera Albanike. Turquoise waters, white beaches, and fish restaurants with the lowest prices I've seen. Fresh fish of the day, Mediterranean salad, and Turkish coffee to finish. Good friends, amazing place, memories for life.`,
    featured_image: "https://res.cloudinary.com/dwi0ey5cv/image/upload/c_scale,w_1200,q_auto,f_auto/v1770049225/MatzegetAlbania_vo28lk.png",
    category_id: "6fb253f0-8085-451c-951c-345f83aef1a8",
    published: true,
    created_at: "2026-02-01T19:22:49.746Z",
    gallery_images: [
      {
        url: "https://images.pexels.com/photos/2682541/pexels-photo-2682541.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "ההרים הארורים (Albanian Alps) - נוף הררי מדהים"
      },
      {
        url: "https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "טירנה - הבירה הצבעונית והאנרגטית"
      },
      {
        url: "https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "החוף האלבני - הריביירה של הבלקן"
      },
      {
        url: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "ארכיטקטורה מסורתית בכפרים ההרריים"
      },
      {
        url: "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "אוכל אלבני מסורתי - השפעות איטלקיות וטורקיות"
      },
      {
        url: "https://images.pexels.com/photos/2901223/pexels-photo-2901223.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שקיעה מדהימה על הרים הארורים"
      }
    ],
    packing_list_he: `👙 בגד ים לחופים המטורפים בדרום - חובה!
👟 נעליים נוחות להליכה בטירנה - הרבה רחובות מרוצפים
🥾 נעלי הליכה לטיול בהרים הארורים
🧥 ג׳קט קל לערבים - יכול להיות קריר בהרים
📱 כרטיס SIM מקומי - זול ונוח
💶 מזומן (לקים אלבניים) - לא כל מקום מקבל כרטיסים
🕶️ משקפי שמש - השמש חזקה בקיץ
🎒 תיק יום קטן לטיולים
📷 מצלמה - המקומות פוטוגניים במיוחד
🍷 מקום בבטן לראקיה - המשקה הלאומי!`,
    fun_facts_he: `🏛️ אלבניה הייתה מבודדת לחלוטין מהעולם במשך עשורים (1944-1991) תחת שלטון קומוניסטי קיצוני - מה ששימר בה אותנטיות נדירה!

🏰 בטירנה יש למעלה מ-700,000 בונקרים שנבנו בתקופה הקומוניסטית - כעת חלקם הפכו לבתי קפה ואטרקציות תיירותיות.

🗻 הרי אלבניה נקראים "Bjeshkët e Namuna" (הרים ארורים) - השם ניתן על ידי טורקים שניסו לכבוש אותם ונכשלו.

🍴 המטבח האלבני הוא תערובת מושלמת של השפעות איטלקיות, יווניות וטורקיות - והכל ממש זול!

🏖️ הריביירה האלבנית נחשבת ל"ריביירה החדשה" - חופים מהממים במחירים שפויים לעומת יוון ואיטליה.

🦅 הנשר הוא הסמל הלאומי של אלבניה - הדגל הוא הנשר הדו-ראשי על רקע אדום.`
  },
  {
    id: "b8921249-3bc8-4eb5-9b71-12c888ae6b82",
    title_he: "אפריקה: המסע אל הפסגות",
    title_en: "Africa: Journey to the Peaks",
    slug: "africa-kilimanjaro-meru-safari",
    excerpt_he: "האתגר האולטימטיבי: כיבוש פסגות הקילימנג'רו והר מרו, מסע פראי בספארי בעקבות חמשת הגדולים, וטיפוס על \"הר האלוהים\" (Ol Doinyo Lengai). אפריקה ללא פילטרים.",
    excerpt_en: "The ultimate challenge: conquering the peaks of Kilimanjaro and Mount Meru, a wild safari following the Big Five, and climbing the \"Mountain of God\" (Ol Doinyo Lengai). Africa without filters.",
    content_he: `קילימנג'רו - 5,895 מטר. הפסגה הגבוהה ביותר באפריקה. זה לא סתם טיול, זה מסע. שבעה ימים של עלייה מתמדת, דרך חמישה אזורי אקלים שונים - מיערות גשם טרופיים ועד למדבר קרחוני בפסגה.

הלילה האחרון לפני הפסגה הוא הקשה ביותר. יוצאים בחצות, בחושך מוחלט, כשהטמפרטורה מתחת לאפס. כל צעד הוא מאבק עם הגובה, עם הקור, עם הקול בראש שאומר לך לוותר. אבל כשהשמש עולה ואתה עומד על גג אפריקה - אין תחושה כמוה.

הר מרו היה האימון המושלם לפני הקילימנג'רו. 4,566 מטר של טיפוס טכני יותר, עם נוף מדהים של הסוואנה למטה וקילימנג'רו באופק.

בין ההרים, יצאנו לספארי בסרנגטי. לראות אריות בטבע, פילים במרחק נגיעה, ועדרי גנו עצומים נודדים - זה מזכיר לך כמה קטן אתה בעולם הזה.

האתגר המיוחד היה Ol Doinyo Lengai - הר הגעש הפעיל היחיד שמפריש לבה קרבונטיטית. טיפוס לילי לפסגה, כשהאדמה עוד חמה מתחת לרגליים, ונוף של שקיעה מעל אגם נטרון. אפריקה במיטבה.`,
    content_en: `Kilimanjaro - 5,895 meters. The highest peak in Africa. This is not just a hike, it's a journey. Seven days of constant ascent, through five different climate zones - from tropical rainforests to glacial desert at the summit.

The last night before the summit is the hardest. You leave at midnight, in total darkness, when the temperature is below zero. Every step is a struggle with altitude, with cold, with the voice in your head telling you to give up. But when the sun rises and you stand on the roof of Africa - there's no feeling like it.

Mount Meru was the perfect training before Kilimanjaro. 4,566 meters of more technical climbing, with stunning views of the savanna below and Kilimanjaro on the horizon.

Between the mountains, we went on a safari in Serengeti. Seeing lions in nature, elephants within touching distance, and huge herds of migrating wildebeest - it reminds you how small you are in this world.

The special challenge was Ol Doinyo Lengai - the only active volcano that secretes carbonatite lava. Night climbing to the summit, when the earth is still hot under your feet, and a view of sunset over Lake Natron. Africa at its best.`,
    featured_image: "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category_id: "6fb253f0-8085-451c-951c-345f83aef1a8",
    published: true,
    created_at: "2026-02-01T19:22:49.746Z",
    gallery_images: [
      {
        url: "https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "פסגת קילימנג׳רו - גג אפריקה (5,895 מטר)"
      },
      {
        url: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "מכתש הקילימנג׳רו עם הקרחונים האגדיים"
      },
      {
        url: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "הסרנגטי - חיית הבר המדהימה של אפריקה"
      },
      {
        url: "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1920",
        caption: "ג׳ירפות בסרנגטי - מפגש עם חיית הבר"
      },
      {
        url: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שקיעה אפריקאית מהפסגה"
      },
      {
        url: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "הר מרו - הטיפוס המאתגר לפני הקילימנג׳רו"
      }
    ],
    packing_list_he: `🥾 מקלות הליכה טלסקופיים - הכרחיים לטיפוס הארוך
💧 כדורים לטיהור מים - המים בהר לא תמיד בטוחים
🔦 פנס ראש חזק לטיפוס הלילי בקילימנג׳רו
🧤 כפפות חמות וכובע צמר - לטמפרטורות מתחת לאפס בפסגה
🧥 ביגוד שכבות - מטרופי בבסיס לקפוא בפסגה
😷 מסכת אבק או בנדנה - השבילים מאובקים
🩺 תרופות למחלת גובה - Diamox (להתייעץ עם רופא)
🔋 סוללות חילוף - הקור מרוקן אותן מהר
🧴 קרם הגנה 50+ - השמש חזקה בגובה
💊 אנטיביוטיקה ותרופות למערכת העיכול`,
    fun_facts_he: `🏔️ הר הקילימנג׳רו הוא ההר הגבוה ביותר בעולם שעומד בפני עצמו - הוא לא חלק מרכס הרים!

🌋 הקילימנג׳רו הוא וולקן רדום, והתפרצותו האחרונה הייתה לפני כ-360,000 שנה.

❄️ קרחוני הקילימנג׳רו מתכווצים במהירות - חוקרים מעריכים שיעלמו עד 2030.

🦁 הסרנגטי מארח את ההגירה הגדולה ביותר של יונקים על פני כדור הארץ - למעלה מ-2 מיליון בעלי חיים!

🌋 Ol Doinyo Lengai הוא הוולקן היחיד בעולם שמפרץ לבה קרבונטית - הלבה שחורה בלילה ולבנה ביום!

🗻 5% בלבד מהמטפסים על הקילימנג׳רו מגיעים לפסגה בגלל מחלת גובה ומזג אויר קיצוני.`
  },
  {
    id: "d2559786-866f-4a7e-b0ad-d9e92560574b",
    title_he: "בולגריה: פסגת המוסלה והבלקן הפראי",
    title_en: "Bulgaria: Musala Peak and the Wild Balkans",
    slug: "bulgaria-musala-plovdiv",
    excerpt_he: "טיפוס אל פסגת המוסלה (Musala) - הגג של הבלקן, לצד שוטטות בסמטאות העיר העתיקה של פלובדיב וחופי בורגס העסיסיים. שילוב של אתגר פיזי וקולינריה בלקנית.",
    excerpt_en: "Climbing to Musala Peak - the roof of the Balkans, alongside wandering the ancient streets of Plovdiv and the lush beaches of Burgas. A combination of physical challenge and Balkan cuisine.",
    content_he: `המוסלה - 2,925 מטר מעל פני הים. הפסגה הגבוהה ביותר בבלקן כולו. כשמתחילים את הטיפוס בשעות הבוקר המוקדמות, האוויר קריר וצלול. השביל מתפתל בין יעדי אורן עתיקים, חולף על פני אגמים אלפיניים קפואים, ועולה בהדרגה אל הפסגה.

המאמץ הפיזי הוא אמיתי. הגובה מרגיש, האוויר דליל, והרגליים מתחילות להכביד. אבל כשמגיעים לפסגה, והמבט נפרש על פני כל רכס רילה - זה שווה כל טיפה זעה.

אחרי הפסגה, ירדנו לפלובדיב - העיר העתיקה שבה הזמן כאילו עצר. סמטאות אבן צרות, בתים צבעוניים מהמאה ה-19, ושוק מקומי תוסס. פה הכרנו את הקולינריה הבלגרית האמיתית: באניצה (עיסת שעועית מתובלת), קברמה (תבשיל בשר איטי), וכמובן - ראקיה ביתית שמחממת את הנשמה.

הסיום היה בבורגס, על חוף הים השחור. אחרי ימים של טיפוס, הקפיצה למים הקרים של הים השחור הייתה גאולה טהורה.`,
    content_en: `Musala - 2,925 meters above sea level. The highest peak in the entire Balkans. When you start the climb in the early morning hours, the air is cool and clear. The trail winds between ancient pine forests, passes frozen alpine lakes, and gradually climbs to the summit.

The physical effort is real. The altitude is felt, the air is thin, and the legs start to weigh heavy. But when you reach the summit, and the view spreads over the entire Rila ridge - it's worth every drop of sweat.

After the summit, we descended to Plovdiv - the ancient city where time seems to have stopped. Narrow stone alleys, colorful 19th-century houses, and a bustling local market. Here we met real Bulgarian cuisine: banitsa (spiced bean paste), kavarma (slow-cooked meat stew), and of course - homemade rakia that warms the soul.

The finale was in Burgas, on the Black Sea coast. After days of climbing, the jump into the cold waters of the Black Sea was pure redemption.`,
    featured_image: "https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category_id: "6fb253f0-8085-451c-951c-345f83aef1a8",
    published: true,
    created_at: "2026-02-01T19:22:49.746Z",
    gallery_images: [
      {
        url: "https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "פסגת המוסלה - הנקודה הגבוהה ביותר בבולגריה (2,925 מטר)"
      },
      {
        url: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "הרי רילה המרהיבים בשלכת"
      },
      {
        url: "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "העיר העתיקה של פלובדיב - אחת הערים המיושבות העתיקות בעולם"
      },
      {
        url: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "כפר בולגרי מסורתי ברכס הבלקן"
      },
      {
        url: "https://images.pexels.com/photos/5340271/pexels-photo-5340271.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שוק מקומי בבולגריה - חווית אוכל אותנטית"
      },
      {
        url: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שקיעה מרהיבה מהפסגה"
      }
    ],
    packing_list_he: `🥾 נעלי הליכה חסינות מים - חובה לשטח ההררי
🧥 מעיל רוח קל ונושם - מזג האויר משתנה במהירות בגובה
🧣 ביגוד תרמי לפסגת המוסלה - טמפרטורות יכולות לרדת מאוד
🎒 תרמיל נוח ל-2-3 ימים
💧 בקבוקי מים - לפחות 2 ליטר ליום
🍫 חטיפי אנרגיה ומזון קל
🔦 פנס ראש עם סוללות רזרבה
🗺️ מפה והמלצה לאפליקציית ניווט (Maps.me)
📷 מצלמה - הנופים מרהיבים!
💊 ערכת עזרה ראשונה בסיסית`,
    fun_facts_he: `🏛️ פלובדיב היא אחת מהערים העתיקות בעולם המיושבות ברציפות - מעל 6,000 שנה של היסטוריה!

⛰️ פסגת המוסלה היא הגבוהה ביותר ברכס הבלקן ובחצי האי כולו.

🏔️ שבעת האגמים של רילה הם אחד האתרים הטבעיים המפורסמים ביותר בבולגריה - כל אגם קרוי על שם צורתו: "הדמעה", "העין", "הכליה" ועוד.

🌹 בולגריה היא יצרנית "שמן הוורדים" הגדולה בעולם - 70% מהייצור העולמי!

🎭 התיאטרון הרומי בפלובדיב הוא אחד השמורים ביותר בעולם - והוא עדיין משמש להופעות!

💰 בולגריה היא אחת המדינות הזולות ביותר באירופה - ארוחה טובה עולה 10-15 לבים (כ-25 שקל).`
  },
  {
    id: "b4a40735-f744-452d-833b-e6c63bc5cdcb",
    title_he: "ישראל: לחרוש את הארץ",
    title_en: "Israel: Plowing Through the Land",
    slug: "israel-trails-complete",
    excerpt_he: "לחרוש את הארץ מצפון ועד דרום. מהנחלים הזורמים בגליל ועד לשקט המהפנט של המדבר. הבית שבו הכל התחיל.",
    excerpt_en: "Plowing through the land from north to south. From the flowing streams of Galilee to the mesmerizing silence of the desert. The home where it all began.",
    content_he: `ישראל היא הבית. המקום שבו למדתי מה זה טיול אמיתי, מה זה לאתגר את הגוף ואת הנפש, ומה זה להתאהב בשביל.

שביל ישראל - 1,100 קילומטר מדן ועד אילת. עברתי אותו פעמיים, ובכל פעם הוא מלמד אותי משהו חדש. הפעם הראשונה הייתה כשהייתי בן 16, עוד לא ידעתי מה אני עושה, הציוד היה כבד מדי, והמוטיבציה באה מהסקרנות הטהורה.

הגליל - נחלי מים זורמים, יערות ירוקים, וכפרים דרוזים שבהם האוכל הוא האמיתי ביותר. פיתה טרייה מהטאבון, לבנה ביתית, זעתר מהגינה, וקפה עם קרדמון. כל ארוחה היא חוויה.

הכרמל - טיפוס על שביל ים אל הר, עם נוף של הים מצד אחד והעמק מצד שני. המעברים לא פשוטים, אבל התצפיות שוות את כל המאמץ.

המדבר - זה המקום האהוב עליי ביותר. שקט מוחלט, נופים שנראים כמו מאדים, והרגשה של חופש מוחלט. מכתש רמון, עין עקב, נחל צאלים - כל מקום הוא עולם בפני עצמו.

ישראל קטנה, אבל יש בה מספיק מסלולים כדי לטייל כל החיים. מהשלג בחרמון ועד לשונית האלמוגים באילת. זה הבית, ותמיד אשוב אליו.`,
    content_en: `Israel is home. The place where I learned what a real hike is, what it means to challenge the body and soul, and what it means to fall in love with a trail.

Israel Trail - 1,100 kilometers from Dan to Eilat. I've walked it twice, and each time it teaches me something new. The first time was when I was 16, I didn't know what I was doing yet, the gear was too heavy, and the motivation came from pure curiosity.

Galilee - flowing water streams, green forests, and Druze villages where the food is the most authentic. Fresh pita from the taboon, homemade labneh, zaatar from the garden, and coffee with cardamom. Every meal is an experience.

Carmel - climbing the Sea to Mountain trail, with a view of the sea on one side and the valley on the other. The passages are not easy, but the viewpoints are worth all the effort.

The Desert - this is my favorite place. Absolute silence, landscapes that look like Mars, and a feeling of absolute freedom. Ramon Crater, Ein Akev, Nahal Tze'elim - every place is a world of its own.

Israel is small, but it has enough trails to hike for a lifetime. From the snow on Hermon to the coral reef in Eilat. This is home, and I will always come back to it.`,
    featured_image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category_id: "e3362143-0ee0-4464-86fc-5ca3d08e63f1",
    published: true,
    created_at: "2026-02-01T19:22:49.746Z",
    gallery_images: [
      {
        url: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "נופי ישראל המגוונים - מהגליל למדבר"
      },
      {
        url: "https://images.pexels.com/photos/7363180/pexels-photo-7363180.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "ים המלח - הנקודה הנמוכה ביותר בעולם"
      },
      {
        url: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "מכתש רמון - פלא טבע במדבר"
      },
      {
        url: "https://images.pexels.com/photos/3914752/pexels-photo-3914752.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "טיול בנחלים בצפון הארץ"
      },
      {
        url: "https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "שקיעה בים התיכון"
      },
      {
        url: "https://images.pexels.com/photos/8850186/pexels-photo-8850186.jpeg?auto=compress&cs=tinysrgb&w=1920",
        caption: "חורף ישראלי - פריחה במדבר"
      }
    ],
    packing_list_he: `🥾 נעלי הליכה איכוותיות - חובה לשטח הישראלי
💧 מים מים מים - 3-4 ליטר ליום בקיץ
🧢 כובע רחב שוליים - השמש אכזרית
🧴 קרם הגנה 50+ - להתמרח כל שעתיים
👕 ביגוד קל ונושם בשכבות
🕶️ משקפי שמש איכותיות
🎒 תרמיל נוח עם כיסוי גשם
📱 Israel Hiking Map - האפליקציה הטובה ביותר
🔦 פנס ראש + סוללות חילוף
🏕️ ציוד קמפינג אם תכננתם לינות בשטח
💊 ערכת עזרה ראשונה מלאה
🍫 חטיפי אנרגיה ומזון קל`,
    fun_facts_he: `🌍 בישראל אפשר לעבור מהים התיכון למדבר בשעה וחצי נסיעה בלבד - מגוון אקלימי מטורף!

⛰️ שביל ישראל (1,100 ק״מ) חוצה את כל הארץ מדן ועד אילת - אחד השבילים היפים בעולם.

🏖️ ישראל היא המדינה היחידה בעולם עם חופים על 4 ימים שונים: תיכון, סוף, מלח וכנרת!

🦎 במדבר הישראלי חיים כ-100 מיני זוחלים - כולל נחשים וצבים נדירים.

🌺 בישראל יש מעל 2,800 מיני צמחים - 150 מהם ייחודיים רק לארץ!

☀️ בישראל יש כ-300 ימי שמש בשנה - זה המון זמן לטיולים!`
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug && post.published);
}

export function getPostsByCategory(categoryId: string): Post[] {
  return posts.filter(post => post.category_id === categoryId && post.published);
}

export function getAllPublishedPosts(): Post[] {
  return posts.filter(post => post.published).sort((a, b) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export const FALLBACK_IMAGE = "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920";
