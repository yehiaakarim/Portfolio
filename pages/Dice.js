import PageDetails from "../Components/Utilites/PageDetails";
import DiceImage from "../public/assets/projects/Adice.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function Dice() {
  const { language } = useTranslation();

  
  const textContent = {
    en: {
      title: "A Dice Game",
      techHeader: "HTML / CSS3 / JavaScript",
      overview: "A browser-based Dice Game using JavaScript, HTML, and CSS3 to test players' luck in a fun, interactive way. Players roll virtual dice, and the game dynamically determines the winner based on randomized outcomes. The game features smooth animations, responsive design, and clear visual feedback for an engaging user experience.",
      technologies: ["HTML", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "لعبة الزهر",
      techHeader: "HTML / CSS3 / JavaScript",
      overview: "لعبة زهر تعمل في المتصفح باستخدام JavaScript و HTML و CSS3 لاختبار حظ اللاعبين بطريقة ممتعة وتفاعلية. يقوم اللاعبون برمي النرد الافتراضي، وتحدد اللعبة الفائز ديناميكيًا بناءً على النتائج العشوائية. تتميز اللعبة برسوميات متحركة سلسة وتصميم متجاوب وردود فعل مرئية واضحة لتجربة مستخدم جذابة.",
      technologies: ["HTML", "CSS3", "JavaScript", "Git"] 
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={DiceImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/Play-Dice/"
      Code="https://github.com/yehiaakarim/Play-Dice"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "Dice Game" : "لعبة الزهر"}    />
  );
}