import PageDetails from "../Components/Utilites/PageDetails";
import JobApplicationImage from "../public/assets/projects/Form.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function JobApplication() {
  const { language } = useTranslation();

  const textContent = {
    en: {
      title: "Job Application Form",
      techHeader: "React.js / CSS3",
      overview: "A Job Application Form using React.js and CSS3, designed to collect detailed applicant information. The form supports multiple submissions, CV uploads, and captures sections like personal info, skills, education, experience, and references. It features a user-friendly interface and robust structure for efficient data handling and submission.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    },
    ar: {
      title: "نموذج التقدم لوظيفة",
      techHeader: "React.js / CSS3",
      overview: "نموذج التقدم لوظيفة باستخدام React.js و CSS3، مصمم لجمع معلومات مفصلة عن المتقدم. يدعم اكثر من طلب تقدم للوظيفة، تحميل السيرة الذاتية، ويشمل أقسامًا مثل المعلومات الشخصية، المهارات، التعليم، الخبرة، والمراجع. يتميز بواجهة سهلة الاستخدام وهيكل قوي لمعالجة البيانات وإرسالها بكفاءة.",
      technologies: ["React.js", "CSS3", "JavaScript", "Git"]
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={JobApplicationImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/React-form/"
      Code="https://github.com/yehiaakarim/React-form"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "Job Application Form" : "نموذج التقدم لوظيفة"}    />
  );
}