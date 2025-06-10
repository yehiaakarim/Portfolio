import React, { useState } from "react";
import SubTitle from "./Utilites/SubTitle";
import Title from "./Utilites/Title";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./contexts/ThemeContext";
import { useTranslation } from "./contexts/TranslationContext";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const { language, isRTL } = useTranslation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  
  const content = {
    en: {
      title: "about",
      subtitle: "Get to Know Me",
      description: [
        "My name is Yehia Abdelkarim, and I am from Cairo, Egypt. I graduated from the Faculty of Engineering at Ain Shams University. I am eager to apply my strong problem-solving skills and keen attention to detail to develop engaging, responsive, and user-friendly interfaces.",
        "I successfully finished The Complete Full-Stack Web Development Bootcamp on Udemy and earned a certificate of completion [",
        "Course Link",
        "]. I specialize in building mobile-responsive front-end applications that seamlessly integrate with APIs and various back-end technologies. My technical skill set includes HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js, and TypeScript.",
      ],
      projectsLink: "Check out some of my latest projects.",
    },
    ar: {
      title: "عني",
      subtitle: "تعرّف عليّ",
      description: [
        "اسمي يحيى عبد الكريم، وأنا من القاهرة، مصر. تخرجت من كلية الهندسة بجامعة عين شمس. أنا متحمس لتطبيق مهاراتي القوية في حل المشكلات والاهتمام الدقيق بالتفاصيل لتطوير واجهات جذابة وسريعة الاستجابة وسهلة الاستخدام.",
        "لقد أكملت بنجاح دورة تطوير الويب الكاملة (Full-Stack) على Udemy وحصلت على شهادة إتمام [",
        "رابط الدورة",
        "]. أتخصص في بناء تطبيقات الواجهة الأمامية المتوافقة مع الهواتف المحمولة والتي تندمج بسلاسة مع واجهات برمجة التطبيقات (APIs) وتقنيات الخلفية المختلفة. تشمل مهاراتي الفنية HTML و CSS و JavaScript و Tailwind CSS و React.js و Next.js و TypeScript.",
      ],
      projectsLink: "تحقق من بعض أحدث مشاريعي.",
    },
  };

  const currentContent = content[language];

  return (
    <div
      id="about"
      className={`max-w-[1640px] mx-auto p-4 ${
        isDarkMode ? "dark" : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className={`flex flex-col md:flex-row justify-between items-center gap-8 ${
          isRTL ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-2/3 mx-auto">
          <Title
            title={currentContent.title}
            style="text-blue-600 uppercase tracking-widest text-2xl"
          />
          <SubTitle title={currentContent.subtitle} />
          <p className={`py-2 w-full ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            {currentContent.description[0]}
            {currentContent.description[1]}
            <a
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?srsltid=AfmBOorDWyrbvcy_cewWw_c_Yof5VVZ8O6-40sIbFyVgxPy1_LG9uBiD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <strong> {currentContent.description[2]} </strong>
            </a>
            {currentContent.description[3]}
          </p>
          <Link href="/#projects">
            <p
              className={`py-2 underline cursor-pointer ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {currentContent.projectsLink}
            </p>
          </Link>
        </div>
        <div className="cursor-pointer" onClick={openModal}>
          <Image
            width={500}
            height={600}
            alt="about/image"
            src="/assets/about.jpg"
            className="w-full md:w-96 h-auto object-cover rounded-xl duration-300 hover:scale-105"
          />
        </div>
      </div>

      
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-auto"
          onClick={closeModal}
        >
          <div className="min-h-full flex flex-col items-center justify-center p-4">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div className="max-w-[90vw] max-h-[80vh] overflow-auto mt-20">
                <Image
                  src="/assets/about.jpg"
                  alt="about/image - full size"
                  width={1600}
                  height={1990}
                  className="object-contain"
                />
              </div>

              
              <div className="w-full flex justify-center mt-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;