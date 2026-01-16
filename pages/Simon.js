import PageDetails from "../Components/Utilites/PageDetails";
import SimonImage from "../public/assets/projects/simongame.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function Simon() {
  const { language } = useTranslation();

  const textContent = {
    en: {
      title: "Simon Game",
      techHeader: "HTML / CSS3 / JavaScript",
      overview: "A browser-based Simon Game using JavaScript, HTML, and CSS. The game challenges users to follow an increasingly complex sequence of sounds and lights to progress through levels. It features a fully responsive design, ensuring smooth and engaging gameplay on both desktop and mobile devices.",
      technologies: ["HTML", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "لعبة سيمون",
      techHeader: "HTML / CSS3 / JavaScript",
      overview: "لعبة سيمون تعمل في المتصفح باستخدام JavaScript و HTML و CSS. تتحدى اللعبة المستخدمين لاتباع تسلسل متزايد التعقيد من الأصوات والأضواء للتقدم عبر المستويات. تتميز بتصميم متجاوب بالكامل، مما يضمن تجربة لعب سلسة وجذابة على أجهزة الكمبيوتر والأجهزة المحمولة.",
      technologies: ["HTML", "CSS3", "JavaScript", "Git"]
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={SimonImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/Play-Simon/"
      Code="https://github.com/yehiaakarim/Play-Simon"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "Simon Game" : "لعبة سيمون"}
    />
  );
}