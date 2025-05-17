import PageDetails from "../Components/Utilites/PageDetails";
import toDoListImage from "../public/assets/projects/Dolist.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function ToDoList() {
  const { language } = useTranslation();

  
  const textContent = {
    en: {
      title: "To Do List",
      techHeader: "React.js / CSS3",
      overview: "A To-Do List app using React.js and CSS, enabling users to add, delete, and reorder tasks. Task positions can be adjusted using arrow buttons for simple and precise control over the list order. The app features a responsive layout and clean design for efficient and user-friendly task management.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "قائمة المهام",
      techHeader: "React.js / CSS3",
      overview: "تطبيق قائمة مهام باستخدام React.js و CSS، يمكن المستخدمين من إضافة وحذف وإعادة ترتيب المهام. يمكن تعديل مواقع المهام باستخدام أزرار الأسهم للتحكم البسيط والدقيق في ترتيب القائمة. يتميز التطبيق بتصميم متجاوب ونظيف لإدارة المهام بكفاءة وسهولة.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"] 
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={toDoListImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/React-toDoList/"
      Code="https://github.com/yehiaakarim/React-toDoList"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "To Do List" : "قائمة المهام"}
    />
  );
}