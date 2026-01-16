import React, { useState } from "react";
import SubTitle from "./Utilites/SubTitle";
import Title from "./Utilites/Title";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./contexts/ThemeContext";
import { useTranslation } from "./contexts/TranslationContext";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const { isDarkMode } = useTheme();
  const { language, isRTL } = useTranslation();

  const images = ["/assets/about2.jpg", "/assets/about.jpg", "/assets/about3.jpg", "/assets/about4.jpg"];

  const handlePrevClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsFading(false);
    }, 10);
  };

  const handleNextClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 500);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const content = {
    en: {
      title: "about",
      subtitle: "Get to Know Me",
      description: [
        "My name is Yehia Abdelkarim, I am from Cairo, Egypt. I graduated from Faculty of Engineering, Ain Shams University. ",
        <>
          I completed a <strong>6-month</strong> internship at <strong>Potential Soft</strong> and i am now working at the same company as a full-time Frontend Developer. 
          I have successfully completed <strong>four</strong> web development courses
          on Udemy and earned <strong>four</strong> certificates of completion.
          During these courses, I gained deep knowledge of Next.js, React.js, TypeScript, JavaScript, Node.js, Express.js, Nest.js, PostgreSQL, MongoDB, Databases and more. I specialise in building mobile-responsive front-end applications that
          seamlessly integrate with APIs and various back-end technologies. I am eager to apply my strong problem-solving skills and keen attention to detail to develop engaging, responsive, and user-friendly interfaces. 
           Check out the courses I’ve completed:
        </>,
      ],
      courseLinks: {
        link1: {
          text: "[React.js & Next.js Course]",
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?srsltid=AfmBOootlHzWgSfdRBQc8E82NIaHKwluIdb7joxUezmdQt7qWE5oqZSa",
        },
        link2: {
          text: "[TypeScript Course]",
          url: "https://www.udemy.com/course/understanding-typescript/?couponCode=KEEPLEARNING",
        },
        link3: {
          text: "[Javascript, Node.js and Databases Course]",
          url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/?srsltid=AfmBOorDWyrbvcy_cewWw_c_Yof5VVZ8O6-40sIbFyVgxPy1_LG9uBiD",
        },
        link4: {
          text: "[Git Bootcamp Course]",
          url: "https://www.udemy.com/course/git-and-github-bootcamp/?srsltid=AfmBOop98L0qfuBHNxULdHVlaYMaH7HbP1iGLEMoDpKaDzMXDKV87PLs",
        },
      },
      projectsLink: "Check out some of my latest projects.",
      certifications: "Certifications",
    },
    ar: {
      title: "عني",
      subtitle: "تعرّف عليّ",
      description: [
        "اسمي يحيى عبد الكريم، أنا من القاهرة، مصر. تخرجت من كلية الهندسة بجامعة عين شمس. ",
        <>لقد أنهيتُ تدريبًا لمدة <strong> ٦ أشهر </strong> في شركة <strong>Potential Soft </strong>
         وأعمل الآن في نفس الشركة كمطوّر واجهات أمامية بدوام كامل.
          لقد اتممت دراسة <strong>اربعة</strong> كورسات في تطوير الواجهات
          الأمامية والخلفية للمواقع الألكترونية من موقع يوديمي وحصلت علي{" "}
          <strong>اربعة</strong> شهادات لأتمامي هذة الكورسات. خلال هذة الكورسات
          اكتسبت معلومات غزيرة في Next.js, React.js, TypeScript,
          JavaScript, Node.js, Express.js, Nest.js, PostgreSQL, MongoDB, Databases وغيرهم. أتخصص في بناء تطبيقات
          الواجهة الأمامية المتوافقة مع الهواتف المحمولة والتي تندمج بسلاسة مع
          واجهات برمجة التطبيقات (APIs) وتقنيات الBackend المختلفة. أنا متحمس لتطبيق مهاراتي القوية في حل المشكلات والاهتمام الدقيق بالتفاصيل لتطوير واجهات جذابة وسريعة الاستجابة وسهلة الاستخدام. اطّلع على الدورات التي أنهيتها:


        </>,
      ],
      courseLinks: {
        link1: {
          text: "[كورس React.js & Next.js]",
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?srsltid=AfmBOootlHzWgSfdRBQc8E82NIaHKwluIdb7joxUezmdQt7qWE5oqZSa",
        },
        link2: {
          text: "[كورس TypeScript]",
          url: "https://www.udemy.com/course/understanding-typescript/?couponCode=KEEPLEARNING",
        },
        link3: {
          text: "[كورس Javascript, Node.js & Databases]",
          url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/?srsltid=AfmBOorDWyrbvcy_cewWw_c_Yof5VVZ8O6-40sIbFyVgxPy1_LG9uBiD",
        },
        link4: {
          text: "[كورس Git Bootcamp]",
          url: "https://www.udemy.com/course/git-and-github-bootcamp/?srsltid=AfmBOop98L0qfuBHNxULdHVlaYMaH7HbP1iGLEMoDpKaDzMXDKV87PLs",
        },
      },
      projectsLink: "تحقق من بعض أحدث مشاريعي.",
      certifications: "الشهادات",
    },
  };

  const currentContent = content[language];

  return (
    <div
      id="about"
      className={`max-w-[1640px] mx-auto p-4 ${isDarkMode ? "dark" : ""}`}
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
          <p
            className={`py-2 w-full ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {currentContent.description[0]}
            {currentContent.description[1]}
            {language === "en" && (
              <>
                <a
                  href={currentContent.courseLinks.link1.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link1.text} </strong>
                </a>
                ,
                <a
                  href={currentContent.courseLinks.link2.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link2.text} </strong>
                </a>
                ,
                <a
                  href={currentContent.courseLinks.link3.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link3.text} </strong>
                </a>,
                <a
                  href={currentContent.courseLinks.link4.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link4.text} </strong>
                </a>.
              </>
            )}
            {language === "ar" && (
              <>
                <a
                  href={currentContent.courseLinks.link1.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link1.text} </strong>
                </a>
                ,
                <a
                  href={currentContent.courseLinks.link2.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link2.text} </strong>
                </a>
                ,
                <a
                  href={currentContent.courseLinks.link3.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link3.text} </strong>
                </a>,
                <a
                  href={currentContent.courseLinks.link4.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <strong> {currentContent.courseLinks.link4.text} </strong>
                </a>.
              </>
            )}
          </p>
          <Link href="/#projects">
            <span
              className={`py-2 underline ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <Link href="/#projects">{currentContent.projectsLink}</Link>
            </span>
          </Link>
        </div>
        <div className="relative w-full md:w-96 h-auto">
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-lg">{currentContent.certifications}</p>
          </div>
          <div
            className={`relative w-full h-auto duration-500 transition-opacity ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              key={currentImageIndex}
              width={500}
              height={600}
              alt={`about/image-${currentImageIndex + 1}`}
              src={images[currentImageIndex]}
              className="w-full h-auto object-cover rounded-xl duration-300 hover:scale-105 cursor-pointer"
              onClick={openModal}
            />
          </div>
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <button
                onClick={handlePrevClick}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors duration-300 bg-blue-600 hover:bg-blue-700`}
                aria-label="Previous image"
              >
                &lt;
              </button>
              <button
                onClick={handleNextClick}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors duration-300 bg-blue-600 hover:bg-blue-700`}
                aria-label="Next image"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-auto cursor-pointer"
          onClick={closeModal}
        >
          <div className="min-h-full flex flex-col items-center justify-center p-4">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div className="max-w-[90vw] max-h-[80vh] overflow-auto mt-20">
                <Image
                  src={images[currentImageIndex]}
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