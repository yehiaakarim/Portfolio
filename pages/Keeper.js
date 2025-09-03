import PageDetails from "../Components/Utilites/PageDetails";
import KeeperImage from "../public/assets/projects/Keep.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function Keeper() {
  const { language } = useTranslation();

  const textContent = {
    en: {
      title: "Keeper",
      techHeader: "React.js / CSS3",
      overview: "A Keeper App inspired by Google Keep, using React.js and CSS to let users create, edit, and rearrange notes. Users can drag and drop notes to change their position and customize note colors for better organization. The app offers a clean, responsive UI and a smooth, interactive note-taking experience.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "مسجل الملاحظات",
      techHeader: "React.js / CSS3",
      overview: "تطبيق مسجل الملاحظات مستوحى من Google Keep، يستخدم React.js و CSS لتمكين المستخدمين من إنشاء وتحرير وإعادة ترتيب الملاحظات. يمكن للمستخدمين سحب الملاحظات وإفلاتها لتغيير موضعها وتخصيص ألوان الملاحظات لتنظيم أفضل. يوفر التطبيق واجهة مستخدم نظيفة وسريعة الاستجابة وتجربة تفاعلية سلسة لتدوين الملاحظات.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={KeeperImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/React-Keeper/"
      Code="https://github.com/yehiaakarim/React-Keeper"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "Keeper" : "مسجل الملاحظات"}
    />
  );
}