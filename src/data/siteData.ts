export interface Post {
  id: number;
  slug: string;
  title_he: string;
  excerpt_he: string;
  content_he: string;
  category_id: number;
  featured_image: string;
  date: string;
}

export interface Category {
  id: number;
  name_he: string;
  name_en: string;
  slug: string;
  color: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name_he: "ישראל",
    name_en: "Israel",
    slug: "israel",
    color: "#E85D04",
    image: "https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name_he: "אירופה",
    name_en: "Europe",
    slug: "europe",
    color: "#1B263B",
    image: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name_he: "אסיה",
    name_en: "Asia",
    slug: "asia",
    color: "#0A9396",
    image: "https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name_he: "אמריקה",
    name_en: "America",
    slug: "america",
    color: "#94D2BD",
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];



export const POSTS: Post[] = [
  {
    id: 1,
    slug: "yosemite-adventure",
    title_he: "הרפתקה ביוסמיטי - 5 ימים בלב הטבע האמריקאי",
    excerpt_he: "מסלולים מדהימים, נופים עוצרי נשימה, ואוכל טוב - כל מה שצריך לדעת על טיול ליוסמיטי",
    content_he: `יוסמיטי היא אחת מפארקי הלאומיים היפים בארצות הברית, ואני חייב להודות שהציפיות שלי היו גבוהות - אבל המציאות עברה אותן פי כמה.

היום הראשון: הליכה למפלי יוסמיטי
התחלנו עם מסלול קלאסי אך מדהים - ההליכה למפלי יוסמיטי. המסלול הוא כ-12 ק"מ הלוך וחזור, עם עליה של כמעט 800 מטרים. הנוף מלמעלה? פשוט לא יאומן.

היום השני: Half Dome
המסלול המפורסם ביותר בפארק. 22 ק"מ של הליכה עם עליה חדה בסוף דרך כבלים. זה מאתגר, זה מפחיד קצת, אבל השקיעה מהפסגה שווה כל שנייה של מאמץ.

אוכל ומסעדות
אחרי יום ארוך של הליכה, המקום האהוב עליי לאכול היה The Mountain Room Restaurant. המבורגר הביזון שלהם פשוט מדהים, וכמובן בלי קינמון בקינוח.

טיפים לטיול
1. הגיעו מוקדם - החניות מתמלאות מהר
2. קחו הרבה מים - לפחות 3 לטרים לאדם
3. הנעליים שלכם חייבות להיות נוחות ושבורות
4. תכננו את הארוחות מראש - האוכל בפארק יקר

סיכום
יוסמיטי היא יעד חובה לכל אוהב טבע ומסלולים. זה לא טיול קל, אבל החוויה שווה כל טיפה של זיעה.`,
    category_id: 4,
    featured_image: "https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-03-15"
  },
  {
    id: 2,
    slug: "swiss-alps-hiking",
    title_he: "שבוע באלפים השוויצריים - המדריך המלא",
    excerpt_he: "מסלולי הליכה מרהיבים, כפרים מקסימים, וגבינות מעולות - חווית האלפים המושלמת",
    content_he: `האלפים השוויצריים הם חלום של כל חובב הרים. ביליתי שם שבוע שלם, וכל יום היה הרפתקה חדשה.

יום 1-2: צרמט והמטרהורן
התחלנו בצרמט, הכפר המקסים ללא מכוניות. ההליכה לתצפית על המטרהורן הייתה אחת החוויות הכי מרשימות. הפסגה המפורסמת הזו פשוט מרהיבה.

יום 3-4: אינטרלאקן ויונגפראו
המעבר לאינטרלאקן היה קסום. עלינו לתצפית יונגפראו ברכבת - הנוף משם הוא פשוט בלתי אפשרי לתיאור.

אוכל שוויצרי
חובה לנסות פונדו גבינה אותנטי. הלכנו למסעדה משפחתית בגרינדלוולד - הגבינה הייתה מושלמת. כמובן שהקפדנו להימנע מקינמון בכל הקינוחים.

יום 5-7: לוצרן ורגי
סיימנו את הטיול בלוצרן היפהפייה. הליכה לרגי - "מלכת ההרים" - סיפקה נוף של 360 מעלות על כל האזור.

טיפים
- Swiss Travel Pass חוסך המון כסף
- המים מהברזים טהורים לגמרי
- תזמינו מסעדות מראש בעונה

זהו טיול שישאיר אתכם עם זיכרונות לכל החיים.`,
    category_id: 2,
    featured_image: "https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-02-28"
  },
  {
    id: 3,
    slug: "japan-kyoto-temples",
    title_he: "קיוטו - בין מקדשים לגנים יפניים",
    excerpt_he: "חווית יפן המסורתית - מקדשים עתיקים, גנים מדיטטיביים, ואוכל רחוב מעולה",
    content_he: `קיוטו היא העיר המושלמת לחוות את יפן המסורתית. ביליתי שם 5 ימים וכל רגע היה קסום.

המקדשים המפורסמים
התחלתי עם קינקאקו-ג'י (המקדש הזהוב) בבוקר מוקדם. האור של השחר על הזהב פשוט מהפנט. המשכתי לפושימי-אינארי עם אלפי שערי הטוריי האדומים - מסלול הליכה של שעתיים עד לפסגה.

גן הבמבוק של אראשיאמה
ההליכה דרך יער הבמבוק היא חוויה סוריאליסטית. הקולות, האור המסונן - הכל מרגיע להפליא.

אוכל ברחובות גיון
רובע גיון מציע אוכל רחוב מדהים. ניסיתי טקויאקי (כדורי תמנון), יקיטורי, וראמן מסורתי. הקפדתי לבדוק שאין קינמון במנות המתוקות.

התרבות היפנית
השתתפתי בטקס תה מסורתי בגן פילוסופים. זו הייתה חוויה מעוררת השראה של איטיות וקשיבות.

טיפים לטיול
- קנו JR Pass לפני ההגעה
- הלבישו נעליים נוחות להחלפה (נכנסים למקדשים יחפים)
- הורידו אפליקציית Google Translate
- תכבדו את המנהגים המקומיים

קיוטו היא חובה לכל מי שרוצה לחוות את יפן האמיתית.`,
    category_id: 3,
    featured_image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2024-01-20"
  },
  {
    id: 4,
    slug: "israel-negev-desert",
    title_he: "מסע במדבר הנגב - ממכתש רמון לאילת",
    excerpt_he: "שלושה ימים במדבר הישראלי עם מסלולים מדהימים, לינה בכוכבים, וקפה בדואי אמיתי",
    content_he: `המדבר הישראלי מציע חוויות שלא תמצאו בשום מקום אחר בעולם.

יום ראשון: מכתש רמון
התחלנו בשביל הצבעים - מסלול של 5 שעות בתוך המכתש. הצבעים של הסלעים משתנים לאורך היום, וזה פשוט מדהים. סיימנו ביום בצימר במצפה רמון עם נוף לכוכבים.

יום שני: עין עבדת ונחל צין
מסלול מים קצר אך מרטיב בעין עבדת, עם מפלים קטנים ובריכות טבעיות. המשכנו לנחל צין - ההליכה שם מאתגרת יותר אבל הנוף פשוט בלתי נשכח.

יום שלישי: אילת והים האדום
סיימנו את הטיול עם צלילה בשמורת האלמוגים. המים הצלולים והאלמוגים הצבעוניים - חוויה מדהימה.

אוכל במדבר
עצרנו בחאן ברק (Khan Beersheba) לארוחת צהריים - הקבב שלהם מעולה. בערב נהנינו מקפה בדואי אמיתי ליד המדורה.

טיפים למדבר
- קחו 4 ליטר מים לאדם ליום
- כובע ומשקפי שמש הם חובה
- התחילו הליכות מוקדם בבוקר
- בדקו תחזית מזג אוויר - בחורף יכול להיות קר מאוד

המדבר הנגב הוא אוצר טבע ישראלי שכדאי לגלות.`,
    category_id: 1,
    featured_image: "https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg?auto=compress&cs=tinysrgb&w=1200",
    date: "2023-12-10"
  },
  
];

// Helper functions
export const getPostBySlug = (slug: string): Post | undefined => {
  return POSTS.find(post => post.slug === slug);
};

export const getCategoryById = (id: number): Category | undefined => {
  return CATEGORIES.find(cat => cat.id === id);
};

export const getPostsByCategory = (categoryId: number): Post[] => {
  return POSTS.filter(post => post.category_id === categoryId);
};

export const getAllPosts = (): Post[] => {
  return POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getRecentPosts = (limit: number = 3): Post[] => {
  return getAllPosts().slice(0, limit);
};
