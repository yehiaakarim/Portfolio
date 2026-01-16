import PageDetails from "../Components/Utilites/PageDetails";
import TimeImage from "../public/assets/projects/Timing.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function Time() {
  const { language } = useTranslation();

  
  const textContent = {
    en: {
      title: "World Time And Date",
      techHeader: "React.js / CSS3",
      overview: "A World Time and Date app using React.js and CSS, displaying the current time and date for multiple cities worldwide. It supports various time zones including GMT, EDT, and others, updating in real-time. The app features a clean, responsive interface for easy comparison of global time differences.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "الوقت والتاريخ العالمي",
      techHeader: "React.js / CSS3",
      overview: "تطبيق الوقت والتاريخ العالمي باستخدام React.js و CSS، يعرض الوقت والتاريخ الحالي لعدة مدن حول العالم. يدعم التطبيق مناطق زمنية متعددة بما في ذلك توقيت غرينتش (GMT) والتوقيت الشرقي (EDT) وغيرها، مع تحديث في الوقت الفعلي. يتميز التطبيق بواجهة نظيفة ومتجاوبة لمقارنة فروق التوقيت العالمية بسهولة.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"] 
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={TimeImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/React-time/"
      Code="https://github.com/yehiaakarim/React-time"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "World Time And Date" : "الوقت و التاريخ العالمي"}
    />
  );
}