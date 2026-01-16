import PageDetails from "../Components/Utilites/PageDetails";
import youtubeCloneImage from "../public/assets/projects/youtube.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function YoutubeClone() {
  const { language } = useTranslation();

  
  const textContent = {
    en: {
      title: "Youtube Clone",
      techHeader: "React.js / CSS3 / official YouTube API",
      overview: "A YouTube Clone using React.js with support for dark/light modes, integrating the official YouTube Data API. It features text and voice search functionality, allowing users to find videos efficiently across devices. aslo allows Watch Later, History and Playlits. The app replicates core YouTube features with a responsive UI and real-time content fetching."
    },
    ar: {
      title: "موقع مثل يوتيوب",
      techHeader: "React.js / CSS3 / الAPI الرسمي ليوتيوب",
      overview: "نسخة مثل يوتيوب باستخدام React.js مع دعم الوضع الداكن والفاتح، مع الAPI الرسمي من يوتيوب. تتميز بوظيفة البحث النصي والصوتي، مما يسمح للمستخدمين بالعثور على مقاطع الفيديو بكفاءة عبر الأجهزة. يوجد بة مزايا مثل شاهد لاحقا, الفيديوهات التي تم مشاهدتها وإنشاء قوائم تشغيل. التطبيق يكرر ميزات يوتيوب الأساسية مع واجهة مستخدم متجاوبة وجلب محتوى في الوقت الفعلي."
    }
  };

  const currentContent = textContent[language];

  return (
    <>
      <PageDetails
        img={youtubeCloneImage}
        title={currentContent.title}
        techHeader={currentContent.techHeader}
        overView={currentContent.overview}
        Site="https://yehiaakarim.github.io/youtubeClone/"
        Code="https://github.com/yehiaakarim/youtubeClone"
        AllTech={language === 'en'
          ? ["React.js", "CSS3", "the official YouTube Data API", "JavaScript", "Git"]
          : ["React.js", "CSS3", "الAPI الرسمي من يوتيوب", "JavaScript", "Git"]}
        headTitle={language === 'en' ? "Youtube Clone" : "موقع مثل يوتيوب"} />
    </>
  );
}