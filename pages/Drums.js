import PageDetails from "../Components/Utilites/PageDetails";
import DrumsImage from "../public/assets/projects/Kit.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function Drums() {
  const { language } = useTranslation();

  
  const textContent = {
    en: {
      title: "Drum Kit",
      techHeader: "HTML / CSS3 / JavaScript",
      overview: "An interactive Drum Kit game using HTML, CSS, and JavaScript, playable on both desktop and mobile devices. Users can trigger drum sounds using keyboard keys, mouse clicks, or touch gestures on supported screens. The app includes visual feedback, responsive design, and realistic sound effects for an immersive music experience.",
      technologies: ["HTML", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "لعبة درامز",
      techHeader: "HTML / CSS3 / JavaScript",
      overview: "لعبة درامز تفاعلية باستخدام HTML و CSS و JavaScript، قابلة للعب على أجهزة الكمبيوتر المكتبية والأجهزة المحمولة. يمكن للمستخدمين تشغيل أصوات الطبلة باستخدام مفاتيح لوحة المفاتيح أو نقرات الماوس أو لمس الشاشات المدعومة. يتضمن التطبيق ردود فعل بصرية وتصميمًا متجاوبًا وتأثيرات صوتية واقعية لتجربة موسيقية غامرة.",
      technologies: ["HTML", "CSS3", "JavaScript", "Git"] 
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={DrumsImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/Drums/"
      Code="https://github.com/yehiaakarim/Drums"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "Drum Kit" : "لعبة درامز"}    />
  );
}