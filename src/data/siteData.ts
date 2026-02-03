export interface Post {
  id: number;
  slug: string;
  title_he: string;
  excerpt_he: string;
  content_he: string;
  category_id: number;
  subcategory_id?: number;
  featured_image: string;
  images: string[]; // חדש: גלריית תמונות
  date: string;
}

export interface Subcategory {
  id: number;
  category_id: number;
  name_he: string;
  name_en: string;
  slug: string;
}

export interface Category {
  id: number;
  name_he: string;
  name_en: string;
  slug: string;
  color: string;
  image: string;
  description_he?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name_he: "יעדים",
    name_en: "Destinations",
    slug: "destinations",
    color: "#E85D04",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
    description_he: "המדריך המלא ליעדים הכי מרהיבים בעולם"
  },
  {
    id: 2,
    name_he: "מסלולי חלומות",
    name_en: "Bucket List Hikes",
    slug: "bucket-list-hikes",
    color: "#1B263B",
    image: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800",
    description_he: "המסלולים הקשוחים והמאתגרים ביותר"
  },
  {
    id: 3,
    name_he: "טיפים לטיול",
    name_en: "Travel Tips",
    slug: "travel-tips",
    color: "#0A9396",
    image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
    description_he: "כל מה שצריך לדעת לפני היציאה לדרך"
  },
  {
    id: 4,
    name_he: "אוכל ושתייה",
    name_en: "Food & Drinks",
    slug: "food-drinks",
    color: "#94D2BD",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    description_he: "אוכל רחוב, מתכונים מקומיים והמקומות הכי טובים"
  }
];

export const SUBCATEGORIES: Subcategory[] = [
  { id: 1, category_id: 1, name_he: "מסלולים בישראל", name_en: "Israel Hikes", slug: "israel-hikes" },
  { id: 2, category_id: 1, name_he: "באלי ואינדונזיה", name_en: "Bali & Indonesia", slug: "bali-indonesia" },
  { id: 3, category_id: 1, name_he: "טרקים באירופה", name_en: "Europe Trails", slug: "europe-trails" },
  { id: 4, category_id: 1, name_he: "הרפתקאות באסיה", name_en: "Asia Adventures", slug: "asia-adventures" },
  { id: 5, category_id: 2, name_he: "מסלולים קשוחים", name_en: "Hardcore Trails", slug: "hardcore-trails" },
  { id: 6, category_id: 2, name_he: "טיפוס להרי געש", name_en: "Volcano Climbs", slug: "volcano-climbs" },
  { id: 7, category_id: 2, name_he: "צפייה בחיות בר", name_en: "Wildlife Spots", slug: "wildlife-spots" },
  { id: 8, category_id: 3, name_he: "ארוז נכון", name_en: "Packing", slug: "packing" },
  { id: 9, category_id: 3, name_he: "תקציב וחיסכון", name_en: "Budget", slug: "budget" },
  { id: 10, category_id: 3, name_he: "בטיחות", name_en: "Safety", slug: "safety" },
  { id: 11, category_id: 3, name_he: "ויזות ומסמכים", name_en: "Visas", slug: "visas" },
  { id: 12, category_id: 4, name_he: "אוכל רחוב", name_en: "Street Food", slug: "street-food" },
  { id: 13, category_id: 4, name_he: "מתכונים מקומיים", name_en: "Local Recipes", slug: "local-recipes" },
  { id: 14, category_id: 4, name_he: "המקומות הכי טובים", name_en: "Best Spots", slug: "best-spots" }
];

export const POSTS: Post[] = [
  {
    id: 1,
    slug: "mt-hermon-winter-trek",
    title_he: "טרק חורף להר חרמון - הפסגה המושלגת של ישראל",
    excerpt_he: "8 שעות של טיפוס בשלג, רוחות קרות, ונוף שעוצר נשימה מהפסגה הגבוהה במדינה",
    content_he: `הר חרמון בחורף הוא חוויה אחרת לגמרי. התחלנו את הטרק ב-5 בבוקר, כשהטמפרטורה הייתה מינוס 5 מעלות.

המסלול מתחיל מחניון הגולן ועולה בהדרגה דרך שטח סלעי ומושלג. הציוד שלקחנו: מקלות הליכה, נעלי טרקינג חורף, שכבות בגדים, ומלא מים חמים בתרמוס.

אחרי 4 שעות הגענו לפסגה. הרוח נשבה בעוצמה של 60 קמ"ש, אבל הנוף פיצה על הכל. מהפסגה רואים את רמת הגולן, הכנרת, ואפילו את דמשק ביום בהיר.

טיפים חשובים:
- אל תעלו בלי ניסיון חורף
- בדקו תחזית מזג אוויר
- התחילו מוקדם
- קחו ציוד חירום

החזרה הייתה קלה יותר, וסיימנו עם ארוחה חמה בדרוזית בכפר מסעדה.`,
    category_id: 1,
    subcategory_id: 1,
    featured_image: "https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1166245/pexels-photo-1166245.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2024-01-15"
  },
  {
    id: 2,
    slug: "bali-rice-terraces-trek",
    title_he: "טרק במדרגות האורז של באלי - המסלול הירוק",
    excerpt_he: "מסלול של 3 ימים דרך מדרגות האורז המפורסמות, כפרים מסורתיים, ואנשים מדהימים",
    content_he: `מדרגות האורז של באלי הן אחד הדברים היפים שראיתי. התחלנו את הטרק מכפר תגלללנג והלכנו צפונה.

יום 1: הליכה בין המדרגות הירוקות. העובדים בשדות היו ידידותיים מאוד והזמינו אותנו לקפה.

יום 2: עצרנו בכפר קטן ללינה אצל משפחה מקומית. הם בישלו לנו נאסי גורנג מסורתי - אורז מטוגן עם ביצה וירקות.

יום 3: המשכנו לג'טילווי, איזור מדרגות האורז המושלמות. הנוף כאן הוא כמו ציור.

עלויות:
- לינה: 150,000 רופיה ללילה (כ-40 שקל)
- אוכל: 50,000 רופיה ליום
- מדריך: 500,000 רופיה ל-3 ימים

זה טרק קל יחסית, מתאים למשפחות. הנופים פשוט בלתי אפשריים.`,
    category_id: 1,
    subcategory_id: 2,
    featured_image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2481593/pexels-photo-2481593.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2024-01-10"
  },
  {
    id: 3,
    slug: "mont-blanc-circuit",
    title_he: "מעגל מון בלאן - 11 ימים באלפים",
    excerpt_he: "170 קילומטר דרך שלוש מדינות, עליה של 10,000 מטר, והנופים הכי יפים באירופה",
    content_he: `מעגל מון בלאן הוא אחד המסלולים הקלאסיים באירופה. 11 ימים של הליכה דרך צרפת, איטליה ושווייץ.

התחלנו בלה טור, צרפת. כל יום הלכנו בין 12-18 קילומטר, עם עליות של 800-1200 מטר.

היום הקשה ביותר היה המעבר של קול דה לה סיין - 2665 מטר. 4 שעות של עליה חדה, אבל הנוף מהפאס היה שווה הכל.

הלנו במקלטים הרריים (refuges) - מבנים פשוטים עם מיטות משותפות וארוחות. העלות כ-50 יורו ללילה כולל ארוחת ערב וצהריים.

האוכל היה מצוין: פונדו גבינה צרפתי, פיצה איטלקית טריה, שוקולד שווייצרי. כמובן בלי קינמון בשום דבר.

טיפים:
- הזמינו מקלטים מראש
- התכוננו לכל מזג אוויר
- קחו מקלות הליכה
- תקציב: כ-700 יורו ל-11 ימים

זה המסלול שכל אוהב הרים חייב לעשות פעם בחיים.`,
    category_id: 1,
    subcategory_id: 3,
    featured_image: "https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2024-01-05"
  },
  {
    id: 4,
    slug: "annapurna-base-camp",
    title_he: "טרק לבסיס אנאפורנה - 10 ימים בהימלאיה",
    excerpt_he: "מ-1000 מטר ל-4130 מטר, דרך יערות במבוק, כפרי גורונג, ופסגות מושלגות",
    content_he: `טרק אנאפורנה בייס קמפ הוא אחד הטרקים הכי יפים בנפאל. פחות צפוף מאוורסט, אבל לא פחות מרשים.

יום 1-3: הליכה מפוקהרה דרך יערות הבמבוק. הלנו בג'ונסונים - בתי הארחה משפחתיים עם מחיר של 500 רופי ללינה.

יום 4-7: עליה הדרגתית לפסגות. בכפר צ'ומרונג נפגשנו עם טרקרים אחרים ושתינו תה צ'אי מסורתי.

יום 8: הגעה לבסיס - 4130 מטר. הטמפרטורה -10 מעלות, אבל הנוף של פסגת אנאפורנה מעל העננים פשוט הכניע.

יום 9-10: הירידה מהירה יותר.

עלויות:
- היתר טרק: 3000 רופי
- אוכל: 1500 רופי ליום
- מדריך (אופציונלי): 2500 רופי ליום
- סה"כ: כ-1200 דולר לכל הטרק

האוכל בטרק: דאל באט (אורז ועדשים), מומו (כופתאות), תה צ'אי חם. פשוט אבל טעים.

זהו טרק שמשנה אותך לגמרי.`,
    category_id: 1,
    subcategory_id: 4,
    featured_image: "https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3732594/pexels-photo-3732594.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-12-28"
  },
  {
    id: 5,
    slug: "patagonia-w-trek",
    title_he: "W טרק בפטגוניה - הטרק הקשה של דרום אמריקה",
    excerpt_he: "5 ימים של רוחות פראיות, קרחונים כחולים, וההרים הכי דרמטיים בעולם",
    content_he: `ה-W טרק בפארק טורס דל פיינה, צ'ילה, הוא אחד הטרקים הקשוחים בעולם. לא בגלל המרחק, אלא בגלל התנאים.

יום 1: עליה לבסיס טורס. 22 קילומטר הלוך חזור, 900 מטר עליה. הרוחות כאן מגיעות ל-100 קמ"ש. ראינו אנשים ממש עפים מהרוח.

יום 2-3: הליכה לקרחון גריי. קרחון כחול ענק עם קרחונים צפים במים. הטמפרטורה 5 מעלות.

יום 4-5: המעבר לבאללה פרנצ'ס - עמק מוקף בפסגות חדות. הנוף הכי דרמטי שראיתי.

לנו במקלטים של הפארק. העלות 40 דולר ללילה, אוכל נוסף 25 דולר.

טיפים קריטיים:
- בגדי רוח איכותיים - חובה
- שכבות חמות
- ציוד עמיד למים
- מים ואוכל יקרים בפארק

תקציב כולל: כ-800 דולר ל-5 ימים כולל אוטובוסים, לינה, אוכל.

הטרק הזה לא לחלשי לב, אבל הוא שווה כל טיפת זיעה.`,
    category_id: 2,
    subcategory_id: 5,
    featured_image: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-12-20"
  },
  {
    id: 6,
    slug: "mt-rinjani-volcano-climb",
    title_he: "טיפוס להר געש רינג'אני - הלילה בלוע הר הגעש",
    excerpt_he: "3 ימים של טיפוס קשה, שינה בלוע הר געש, וזריחה מפסגה של 3726 מטר",
    content_he: `הר געש רינג'אני בלומבוק, אינדונזיה, הוא אחד הטיפוסים הקשוחים ביותר שעשיתי.

יום 1: התחלנו ב-7 בבוקר. 10 שעות של טיפוס מ-600 מטר ל-2639 מטר. הגענו למחנה בשולי הלוע בשמיים.

יום 2: ירידה ללוע הר הגעש. בתוך הלוע יש אגם בצבע טורקיז פנטסטי ומעיינות חמים. שחינו במעיינות - חוויה סוריאליסטית.

יום 3: קימה ב-2 בלילה לטיפוס לפסגה. 4 שעות של טיפוס חד בחושך, דרך חול געשי רופף. כל 3 צעדים קדימה, צעד אחד אחורה.

הגענו לפסגה בזריחה. הנוף: מעל העננים, הר געש אגונג ב רקע, והלוע מלמטה. אחד הרגעים הכי יפים בחיים.

עלויות:
- טרק מאורגן: 3,500,000 רופיה (כ-850 שקל)
- כולל מדריך, נושא ציוד, אוכל, אוהלים

זה טרק קשה. צריך כושר גופני טוב. אבל החוויה שווה פי כמה.`,
    category_id: 2,
    subcategory_id: 6,
    featured_image: "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/53389/volcano-lava-eruption-volcanic-53389.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-12-15"
  },
  {
    id: 7,
    slug: "serengeti-safari-trek",
    title_he: "טרק ספארי בסרנגטי - צפייה בחיות הבר הגדולות",
    excerpt_he: "5 ימים של ספארי רגלי עם מדריכים מקומיים, אריות, פילים, וזריחות אפריקאיות",
    content_he: `ספארי רגלי בסרנגטי, טנזניה, זו חוויה שמשנה את הפרספקטיבה על הטבע.

יום 1-2: ספארי רגלי באזור נגורונגורו. המדריך שלנו, אדוארד, הוציא אותנו למסלולים שרק מקומיים מכירים. ראינו עדר פילים מטר אחד, זברות, ג'ירפות.

יום 3: סרנגטי נשיונל פארק. כאן עשינו ספארי משולב - חלק ברגל, חלק בג'יפ. ראינו גאון של אריות שוכב מתחת לעץ.

יום 4-5: המעקב אחרי ההגירה הגדולה. מיליוני גנו ו זברות נודדים. זה נראה כמו סרט טבע.

האוכל: ארוחות מדגם של ניאמה צ'ומה (בשר צלוי), אוגאלי (דייסת תירס), סמבוזה. פשוט אבל טעים.

עלויות:
- ספארי מאורגן: 2500 דולר ל-5 ימים
- כולל מדריך, לינה, אוכל, כניסה לפארק

טיפי בטיחות:
- תמיד עם מדריך
- שמרו מרחק מהחיות
- לא לצלם עם פלאש

זה טרק יקר, אבל החוויה של לראות את החיות בטבע שלהן - אין על זה.`,
    category_id: 2,
    subcategory_id: 7,
    featured_image: "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/158179/lion-big-cat-predator-savanna-158179.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-12-10"
  },
  {
    id: 8,
    slug: "packing-list-ultimate-guide",
    title_he: "המדריך המלא לאריזת תרמיל - מה באמת צריך",
    excerpt_he: "אחרי 50 טרקים ב-20 מדינות, זה בדיוק מה שאני לוקח בכל טרק",
    content_he: `אחרי שנים של טרקים, למדתי מה באמת צריך ומה רק משקל מיותר.

ביגוד (שכבות):
- חולצות טכניות x3 (1 לובשים, 2 רזרבה)
- מכנסיים טכניים ארוכים x2
- מכנסי טרקינג קצרים x1
- שכבת חום (פליז)
- מעיל רוח עמיד למים
- גרביים טכניים x4
- תחתונים x4
- כובע/כיסוי ראש

נעליים:
- נעלי טרקינג ראשיות (שבורות!)
- סנדלים/קרוקס למחנה

ציוד שינה:
- שק שינה (תלוי באקלים)
- מזרון מתנפח
- כרית מתנפחת

ציוד בישול (אם לא במקלט):
- מבער גז קטן
- סיר טיטניום
- כוס מתקפלת
- סכו"ם

אלקטרוניקה:
- פאוור בנק 20000mAh
- כבלים
- פנס ראש
- מצלמה

עזרה ראשונה:
- פלסטרים לשפשופים (חובה!)
- משכך כאבים
- תרופות אישיות
- טיפות עיניים

טואלטיקה:
- משחת שיניים קטנה
- מברשת שיניים
- סבון ביו
- נייר טואלט (חצי גליל)
- מגבת מיקרופייבר

אחר:
- סכין רב שימושי
- חבל דק
- שקיות אשפה
- נרתיק עמיד למים למסמכים

משקל כולל: 10-12 ק"ג

הכלל הזהב שלי: אם לא השתמשתי בזה ב-2 הטרקים האחרונים - לא לוקח!`,
    category_id: 3,
    subcategory_id: 8,
    featured_image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2403401/pexels-photo-2403401.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2128036/pexels-photo-2128036.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-12-05"
  },
  {
    id: 9,
    slug: "budget-trekking-guide",
    title_he: "איך לעשות טרקים בתקציב נמוך - המדריך המלא",
    excerpt_he: "טרקים לא חייבים לעלות הון. איך עשיתי 3 טרקים במחיר של 1",
    content_he: `הרבה אנשים חושבים שטרקים זה יקר. האמת? אפשר לעשות את זה בתקציב נמוך מאוד.

טיפ 1: תכננו בעצמכם
במקום טרק מאורגן ב-2000 דולר, תכננו בעצמכם. דוגמה: טרק באנאפורנה:
- טרק מאורגן: 1500 דולר
- עצמאי: 400 דולר (כולל היתרים, לינה, אוכל)

טיפ 2: טסו בזול
השתמשו ב:
- Skyscanner לטיסות זולות
- טיסות חיבור (לפעמים זול יותר)
- טוסו באמצע שבוע

טיפ 3: לינה
- במקום מלונות: הוסטלים (8-15 דולר)
- במקום מקלטים יקרים: קמפינג (חינם)
- גסט האוזים מקומיים (5-10 דולר)

טיפ 4: אוכל
- קנו באוכל בשווקים מקומיים
- בשלו בעצמכם
- אכלו איפה שהמקומיים אוכלים

טיפ 5: ציוד
- קנו ציוד משומש
- שכרו במקום לקנות
- השתמשו בציוד רב פעמי

דוגמה אמיתית - הטרק שלי בפטגוניה:
- טיסות (מתל אביב): 850 דולר
- אוטובוסים פנימיים: 80 דולר
- לינה (5 לילות במקלטים): 200 דולר
- אוכל: 125 דולר
- כניסה לפארק: 0 (אזרח צ'ילאני/ארגנטינאי)
סה"כ: 1255 דולר

אותו טרק במאורגן? 3500 דולר לפחות.

החיסכון: 2245 דולר = עוד טרק שלם!`,
    category_id: 3,
    subcategory_id: 9,
    featured_image: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/915972/pexels-photo-915972.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-12-01"
  },
  {
    id: 10,
    slug: "safety-tips-solo-trekking",
    title_he: "בטיחות בטרקים סולו - 10 כללים שהצילו אותי",
    excerpt_he: "טרקים לבד זה מדהים, אבל צריך לדעת את הכללים. הנה מה שלמדתי הדרך הקשה",
    content_he: `אני עושה הרבה טרקים לבד. זה נותן חופש מדהים, אבל דורש זהירות מיוחדת.

כלל 1: ספרו למישהו
תמיד השארתי תוכנית מפורטת עם:
- מסלול מדוייק
- נקודות ביקור
- מועדי צ'ק-אין
- מספרי חירום

כלל 2: GPS ומפות
אני תמיד לוקח:
- GPS ייעודי (לא רק טלפון)
- מפות אופליין
- מצפן פיזי

כלל 3: מים ואוכל עודף
כלל האצבע: קחו 50% יותר ממה שאתם חושבים שצריך.

כלל 4: ערכת חירום
תמיד איתי:
- משקפת חירום
- מצתת
- שריקה
- כיסוי חירום כסוף
- פנס ראש עם סוללות רזרבה

כלל 5: מזג אוויר
בדקתי תחזית לפני, אבל תמיד הייתי מוכן לגרוע ביותר.

כלל 6: פגשו אנשים
בטרקים פופולריים, יצרתי קשר עם טרקרים אחרים. אפשר לא ללכת ביחד, אבל טוב לדעת שיש מישהו באזור.

כלל 7: האמינו לאינסטינקט
אם משהו מרגיש לא בסדר - תפנו.

כלל 8: נעליים מכף רגל
כפות רגל בעייתיות = סוף הטרק. תמיד בדקתי את הנעליים לפני.

כלל 9: ביטוח מקיף
ביטוח טרקינג/הרים הוא חובה. לא כדאי לחסוך פה.

כלל 10: דעו את היכולות שלכם
אני לא מתחיל טרקים שמעבר ליכולות שלי. בונים בהדרגה.

סיפור אישי:
בטרק באנאפורנה, החלטתי לא לעלות לפסגה בגלל מזג אוויר גרוע. 3 אנשים עלו. 2 חזרו עם כוויות קור. 1 פונה במסוק.

בטיחות תמיד קודמת לפסגה.`,
    category_id: 3,
    subcategory_id: 10,
    featured_image: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-11-25"
  },
  {
    id: 11,
    slug: "visa-guide-adventure-travelers",
    title_he: "מדריך ויזות למטיילים - כל מה שצריך לדעת",
    excerpt_he: "איזה מדינות צריך ויזה מראש, איזה בכניסה, ואיך להוציא הכל בזול",
    content_he: `אחד הדברים המבלבלים בטיולים זה ויזות. הנה המדריך המעודכן שלי.

מדינות ללא ויזה לישראלים:
- אירופה: רוב המדינות (90 יום)
- דרום אמריקה: ברזיל, ארגנטינה, צ'ילה, פרו (90 יום)
- אסיה: תאילנד (30 יום), יפן (90 יום), סינגפור (30 יום)

ויזה בכניסה (VOA - Visa On Arrival):
- אינדונזיה: 500,000 רופיה (35 דולר) - 30 יום
- נפאל: 30 דולר - 30 יום
- טנזניה: 50 דולר - 90 יום
- בוליביה: 160 דולר - 30 יום

ויזה מראש (צריך להגיש בשגרירות):
- סין: 140 דולר + תהליך מסובך
- וייטנאם: 25 דולר - e-visa מקוון
- הודו: 80 דולר - e-visa מקוון
- קניה: 50 דולר - e-visa

טיפים חשובים:
1. בדקו 6 חודשי תוקף בדרכון
2. דפים ריקים - ויזות תופסות עמוד שלם
3. שמרו קבלות תשלום
4. צלמו את הדרכון (backup במייל)

הטריק שלי לחיסכון:
במקום ויזה בשגרירות, לפעמים כדאי להגיע למדינה שכנה ולעשות ויזה בכניסה (זול יותר).

עלויות ויזות בטרק אסיה שלי:
- אינדונזיה: 35 דולר
- נפאל: 30 דולר
- הודו: 80 דולר
- תאילנד: חינם
סה"כ: 145 דולר

זה לא הרבה, אבל צריך לתכנן מראש!`,
    category_id: 3,
    subcategory_id: 11,
    featured_image: "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-11-20"
  },
  {
    id: 12,
    slug: "best-street-food-asia",
    title_he: "10 המנות הכי טובות של אוכל רחוב באסיה",
    excerpt_he: "מפאד תאי בבנגקוק ועד באן מי בהאנוי - המנות שאתם חייבים לנסות",
    content_he: `אוכל רחוב באסיה זה אחד הדברים הכי טובים בטיול. הנה המנות האהובות עליי.

1. פאד תאי - תאילנד
מקום: רחוב ח'או סאן, בנגקוק
מחיר: 60 באט (7 שקל)
נודלס אורז מטוגן עם ביצה, חצילים חמוצים, בוטנים. המנה הלאומית.

2. באן מי - וייטנאם
מקום: הוי אן, וייטנאם
מחיר: 20,000 דונג (3 שקל)
לחמניה צרפתית עם פטה, בשר, ירקות כבושים. פריזאי-וייטנאמי מושלם.

3. נאסי גורנג - אינדונזיה
מקום: כל פינה ברחוב באובוד, באלי
מחיר: 25,000 רופיה (6 שקל)
אורז מטוגן עם ירקות, ביצה, וקרקר קרופוק. פשוט אבל ממכר.

4. מומו - נפאל
מקום: ת'אמל, קטמנדו
מחיר: 150 רופי (5 שקל)
כופתאות על קיטור או מטוגנות, במילוי ירקות או בשר. עם רוטב עגבניות חריף.

5. ראמן - יפן
מקום: יוקוהמה
מחיר: 800 ין (25 שקל)
מרק עשיר עם נודלס, ביצה, בשר, ירקות. נחמה ביום קר.

6. סאטיי - אינדונזיה
שיפודי בשר/עוף צלויים עם רוטב בוטנים. ריח הפחמים = פרגון.

7. דאל באט - נפאל
אורז עם עדשים, ירקות, ופיקלס. המנה שאכלתי כל יום בטרק אנאפורנה.

8. טקויאקי - יפן
כדורי בצק עם תמנון, רוטב, בונית קטנה. אוסקה היא המלכה.

9. קאו מאן גאי - תאילנד
אורז עם עוף, מרק עוף, רוטב ג'ינג'ר. פשוט ומושלם.

10. גאדו גאדו - אינדונזיה
סלט ירקות עם ביצה קשה ורוטב בוטנים. צמחוני וטעים.

הכלל שלי: אם יש תור של מקומיים - זה המקום הנכון!`,
    category_id: 4,
    subcategory_id: 12,
    featured_image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-11-15"
  },
  {
    id: 13,
    slug: "hummus-recipe-jerusalem",
    title_he: "המתכון לחומוס ירושלמי מושלם",
    excerpt_he: "אחרי שנסעתי בכל העולם, חזרתי לחומוס הכי טוב - הירושלמי. הנה המתכון",
    content_he: `אחרי שאכלתי חומוס בכל העולם, אין כמו החומוס הירושלמי. הנה איך מכינים אותו.

מרכיבים:
- 500 גרם חומוס יבש (לא מקופסה!)
- 1 כפית סודה לשתייה
- מים קרים
- טחינה גולמית איכותית (300 גרם)
- 3 שיני שום
- מיץ מ-2 לימונים
- כמון
- מלח
- פפריקה למעלה
- שמן זית
- פטרוזיליה

הכנה:
1. השריית החומוס (לילה):
טבלו את החומוס במים קרים עם הסודה. זה יבשל אותו.

2. בישול (90 דקות):
בשלו עם מים טריים עד שהחומוס רך ממש. קצף שמתכין - הסירו.

3. מיקס הטחינה:
טחנו שום עם מלח, הוסיפו לימון, טחינה, מים צוננים. ערבבו עד קרמי.

4. הטחינה:
טחנו את החומוס (שמרו מעט מים הבישול). הוסיפו את תערובת הטחינה בהדרגה.

5. עיטור:
חומוס במרכז, גומה, שמן זית, פפריקה, פטרוזיליה, חומוס שלמים.

הסוד:
הכל בטמפרטורה! החומוס חם, הטחינה קרה. זה נותן את הקרמיות.

איפה לאכול בירושלים:
- אבו שוקרי
- לינה
- פינתי
כל אחד יגיד שהשלו הכי טוב. תנסו את כולם.

המחיר בחוץ לארץ: 15-20 שקל למנה
בירושלים: 30-35 שקל למנה גדולה

שווה לעשות בבית!`,
    category_id: 4,
    subcategory_id: 13,
    featured_image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/4106481/pexels-photo-4106481.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-11-10"
  },
  {
    id: 14,
    slug: "best-food-spots-bali",
    title_he: "15 המקומות הכי טובים לאכול באובוד, באלי",
    excerpt_he: "לא עוד מסעדות תיירותיות. אלה המקומות שהמקומיים אוכלים בהם",
    content_he: `אובוד מלא במסעדות תיירותיות יקרות. אבל יש גם מקומות מקומיים מדהימים.

ארוחת בוקר:
1. Bali Buda
קפה אורגני, ג'ינג'ר שוט, טוסטים עם אבוקדו. 75,000 רופיה.

2. Warung Biah Biah
נאסי גורנג מקומי. 25,000 רופיה. פשוט וטעים.

צהריים:
3. Warung Makan Bu Rus
דאל באט אינדונזי - נאסי קמפור עם 5 תוספות. 30,000 רופיה.

4. Bebek Tepi Sawah
ברווז קריספי עם אורז. הסיגנצ'ר של המקום. 85,000 רופיה.

5. Ibu Oka
בבי גולינג - חזיר צעיר על שיפוד. המקום המפורסם. 50,000 רופיה.

ערב:
6. Locavore
מסעדת גורמה (אוקיי, זו יקרה אבל שווה פעם אחת). 1,500,000 רופיה לתפריט ניסיון.

7. Warung Bintangbali
מבחר מנות מקומיות במחירי רצפה. 40,000 רופיה.

קינוח:
8. Gelato Secrets
גלידה איטלקית אמיתית. 35,000 רופיה.

9. Bali Buda - עוגות טבעוניות
20,000 רופיה.

משקאות:
10. Seniman Coffee Studio
הקפה הכי טוב באובוד. 45,000 רופיה.

11. Juice Ja Cafe
מיצים טריים. 35,000 רופיה.

ארוחות ספיישל:
12. Yellow Flower Cafe
מנות מיוחדות, אוירה נחמדה. 100,000 רופיה.

13. Sari Organik
בתוך שדות האורז. 80,000 רופיה.

14. Sawah Terrace
נוף מדרגות אורז. 120,000 רופיה.

15. Night Market Gianyar (20 דקות מאובוד)
אוכל רחוב מקומי. 30,000 רופיה לארוחה שלמה.

הטיפ שלי: כל מקום עם warung בשם = מקומי ואותנטי!

תקציב יומי:
- זול: 100,000 רופיה (25 שקל)
- בינוני: 300,000 רופיה (75 שקל)
- מפנק: 600,000+ רופיה (150+ שקל)`,
    category_id: 4,
    subcategory_id: 14,
    featured_image: "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-11-05"
  },
  {
    id: 15,
    slug: "coffee-culture-around-world",
    title_he: "תרבות הקפה סביב העולם - מאתיופיה לוייטנאם",
    excerpt_he: "איך שותים קפה ב-10 מדינות שונות, והיכן מצאתי את הקפה הכי טוב",
    content_he: `קפה זה לא רק משקה. זו תרבות. הנה המסע שלי אחרי הקפה המושלם.

1. אתיופיה - הבית של הקפה
טקס הקפה האתיופי: קלייה של פולים טריים, טחינה ידנית, הגשה בג'בנה (קנקן חרס).
הטעם: פירותי, חמוץ, מורכב.
היכן: אדיס אבבה

2. איטליה - האספרסו הקלאסי
הכלל: קפה קצר, חזק, בעמידה ליד הבר.
אספרסו: זריקה חזקה של קפאין.
קפוצ'ינו: רק בבוקר!
היכן: ונציה, רומא

3. תורכיה - קפה טורקי
הכנה: קפה דק מאוד, מבושל בפינג'אן עם סוכר.
שתייה: עם התחתית שקועה בתחתית.
קריאה בסקל: מסורת מעניינת.
היכן: איסטנבול

4. וייטנאם - קפה עם חלב מרוכז
קפה פין: קפה חזק מטפטף על קרח ו חלב מרוכז מתוק.
זול: 20,000 דונג (3 שקל)
ממכר!
היכן: הא נוי, הו צ'י מין

5. יפן - הדיוק היפני
קפה טפטוף יפני: V60, Chemex.
דיוק בטמפרטורה, במשקל, בזמן.
הטעם: נקי, מאוזן.
היכן: טוקיו

6. ניו זילנד - פלאט וויט
המצאה קיווית: אספרסו עם חלב מוקצף מיקרו.
מתון, קרמי, מושלם.
היכן: אוקלנד, וולינגטון

7. קולומביה - הקפה המסורתי
פוחה: קפה קולומביאני עם חלב חם.
טינטו: קפה חזק ומתוק.
היכן: בוגוטה, קרטחנה

8. ישראל - קפה הפוך
הקפה שלנו: חזק, עם הרבה חלב.
קפוצ'ינו ישראלי ≠ קפוצ'ינו איטלקי
היכן: תל אביב, ירושלים

9. אוסטרליה - Long Black
כמו אמריקנו אבל מדויק יותר.
תרבות הקפה באוסטרליה ענקית.
היכן: מלבורן (בירת הקפה)

10. נפאל - תה צ'אי (בונוס - לא קפה)
אוקיי, זה תה. אבל ה-milk tea הנפאלי הוא ממכר.
היכן: כל טרק בהימלאיה

הקפה הכי טוב שלי?
וייטנאם. קר, מתוק, חזק, זול. מנצח.

אבל לכל מקום יש את הקסם שלו. קפה זה לא רק טעם - זו החוויה.`,
    category_id: 4,
    subcategory_id: 14,
    featured_image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    date: "2023-11-01"
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return POSTS.find(post => post.slug === slug);
};

export const getCategoryById = (id: number): Category | undefined => {
  return CATEGORIES.find(cat => cat.id === id);
};

export const getSubcategoryById = (id: number): Subcategory | undefined => {
  return SUBCATEGORIES.find(sub => sub.id === id);
};

export const getPostsByCategory = (categoryId: number): Post[] => {
  return POSTS.filter(post => post.category_id === categoryId);
};

export const getPostsBySubcategory = (subcategoryId: number): Post[] => {
  return POSTS.filter(post => post.subcategory_id === subcategoryId);
};

export const getSubcategoriesByCategory = (categoryId: number): Subcategory[] => {
  return SUBCATEGORIES.filter(sub => sub.category_id === categoryId);
};

export const getAllPosts = (): Post[] => {
  return POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getRecentPosts = (limit: number = 3): Post[] => {
  return getAllPosts().slice(0, limit);
};
