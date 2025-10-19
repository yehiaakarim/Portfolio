import PageDetails from "../Components/Utilites/PageDetails";
import EmojiImage from "../public/assets/projects/Emoji.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function Emoji() {
  const { language } = useTranslation();

  const textContent = {
    en: {
      title: "Emojipedia",
      techHeader: "React.js / CSS3",
      overview: "An Emojipedia site using React.js, JavaScript, and CSS to display a collection of emojis. Each emoji is rendered with its name and exact meaning to help users understand its proper use. The app features a clean UI and responsive layout, making emoji exploration simple and engaging.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "قاموس الإيموجي",
      techHeader: "React.js / CSS3",
      overview: "تطبيق لقائمة الإيموجيات باستخدام React.js و JavaScript و CSS لعرض مجموعة من الإيموجيات. يتم عرض كل إيموجي مع اسمه ومعناه الدقيق لمساعدة المستخدمين على فهم استخدامه الصحيح. يتميز التطبيق بواجهة مستخدم نظيمة وتصميم متجاوب، مما يجعل استكشاف الإيموجيات بسيطًا وجذابًا.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={EmojiImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/React-Emojis/"
      Code="https://github.com/yehiaakarim/React-Emojis"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "Emojipedia" : "معاني الايموجي"}    />
  );
}