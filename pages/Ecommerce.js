import PageDetails from "../Components/Utilites/PageDetails";
import EcommerceImage from "../public/assets/projects/eCommerce.jpg";
import { useTranslation } from "../Components/contexts/TranslationContext";

export default function Ecommerce() {
  const { language } = useTranslation();

  
  const textContent = {
    en: {
      title: "E-Commerce",
      techHeader: "React.js / CSS3 / JSON API",
      overview: "A dynamic e-commerce website using React.js, CSS3, and JSON APIs to manage user authentication, signup, and secure sessions. The platform includes a shopping cart, checkout system, and supports both Arabic and English languages with dark/light mode toggle. It delivers a responsive, multilingual shopping experience tailored for modern users across all devices.",
      technologies: ["React.js", "CSS3", "JavaScript", "JSON API", "Git"]
    },
    ar: {
      title: "متجر إلكتروني",
      techHeader: "React.js / CSS3 / JSON API",
      overview: "موقع تجارة إلكترونية ديناميكي باستخدام React.js و CSS3 وِ JSON API لإدارة المصادقة والتسجيل والجلسات الآمنة. تتضمن المنصة عربة تسوق ونظام دفع، وتدعم اللغتين العربية والإنجليزية مع تبديل الوضع المظلم/الفاتح. يوفر تجربة تسوق متعددة اللغات وسريعة الاستجابة مصممة للمستخدمين عبر جميع الأجهزة.",
      technologies: ["React.js", "CSS3", "JavaScript", "JSON API", "Git"] 
    }
  };

  const currentContent = textContent[language];

  return (
    <PageDetails
      img={EcommerceImage}
      title={currentContent.title}
      techHeader={currentContent.techHeader}
      overView={currentContent.overview}
      Site="https://yehiaakarim.github.io/E-commerce/"
      Code="https://github.com/yehiaakarim/E-commerce"
      AllTech={currentContent.technologies}
      headTitle={language === 'en' ? "E-commerce" : "متجر الكتروني"}    />
  );
}