import React, { useEffect, useRef, useState } from "react";
import Title from "../Utilites/Title";
import ProjectItems from "./ProjectItems";
import { useTranslation } from "../contexts/TranslationContext";

import youtubeClonePic from "/public/assets/projects/youtube.jpg";
import EcommercePic from "/public/assets/projects/eCommerce.jpg";
import KeeperPic from "/public/assets/projects/Keep.jpg";
import JobApplicationPic from "/public/assets/projects/Form.jpg";
import SimonPic from "/public/assets/projects/simongame.jpg";
import DrumsPic from "/public/assets/projects/Kit.jpg";
import DicePic from "/public/assets/projects/Adice.jpg";
import toDoListPic from "/public/assets/projects/Dolist.jpg";
import TimePic from "/public/assets/projects/Timing.jpg";
import EmojiPic from "/public/assets/projects/Emoji.jpg";

const Projects = () => {
  const { language, isRTL } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const el = useRef(null);

  const projects = [
    {
      img: youtubeClonePic,
      title: language === "ar" ? "يوتيوب كلون" : "YouTube Clone",
      subTitle: language === "ar" ? "واجهة يوتيوب" : "YouTube Interface",
      referTo: "/youtubeClone",
    },
    {
      img: EcommercePic,
      title: language === "ar" ? "متجر إلكتروني" : "E-commerce",
      subTitle: language === "ar" ? "منصة تسوق" : "Shopping Platform",
      referTo: "/Ecommerce",
    },
    {
      img: KeeperPic,
      title: language === "ar" ? "تطبيق الملاحظات" : "Notes App",
      subTitle: language === "ar" ? "مدير المهام" : "Task Manager",
      referTo: "/Keeper",
    },
    {
      img: JobApplicationPic,
      title: language === "ar" ? "نموذج توظيف" : "Job Application Form",
      subTitle: language === "ar" ? "نموذج تفاعلي" : "Interactive Form",
      referTo: "/JobApplication",
    },
    {
      img: SimonPic,
      title: language === "ar" ? "لعبة سيمون" : "Simon Game",
      subTitle: language === "ar" ? "لعبة ذاكرة" : "Memory Game",
      referTo: "/Simon",
    },
    {
      img: DrumsPic,
      title: language === "ar" ? "درامز افتراضية" : "Virtual Drums",
      subTitle: language === "ar" ? "أداة موسيقية" : "Music Instrument",
      referTo: "/Drums",
    },
    {
      img: DicePic,
      title: language === "ar" ? "لعبة النرد" : "Dice Game",
      subTitle: language === "ar" ? "لعبة حظ" : "Luck Game",
      referTo: "/Dice",
    },
    {
      img: toDoListPic,
      title: language === "ar" ? "قائمة المهام" : "To-Do List",
      subTitle: language === "ar" ? "مدير المهام" : "Task Manager",
      referTo: "/toDoList",
    },
    {
      img: TimePic,
      title: language === "ar" ? "التاريخ والتوقيت" : "Time and Date",
      subTitle: language === "ar" ? "أداة توقيت" : "Timing Tool",
      referTo: "/Time",
    },
    {
      img: EmojiPic,
      title: language === "ar" ? "مختارات إيموجي" : "Emoji Picker",
      subTitle: language === "ar" ? "معاني الايموجي" : "Expression",
      referTo: "/Emoji",
    },
  ];

  const toArabicNumerals = (num) => {
    if (language === "ar") {
      const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
      return num
        .toString()
        .split("")
        .map((digit) => arabicNumerals[digit])
        .join("");
    }
    return num;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= el.current.offsetTop - 400) {
        el.current.classList.remove("notScrollProject");
        el.current.classList.add("scrollProject");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div id="projects" className="py-12 max-w-[1640px] mx-auto p-4">
      <Title
        title={language === "ar" ? "المشاريع" : "projects"}
        style="text-blue-600 uppercase tracking-widest text-2xl"
      />
      <div className= "mb-2">
        {language === "ar" ? (
          <>
            يمكنك زيارة صفحتي علي جيت هاب من{" "}
            <a
              href="https://github.com/yehiaakarim"
              target="_blank"
            >
              <button className="buttonOne">هنا👋</button>
            </a>{" "}
          ويمكنك الضغط علي الصور في معرض الصور التالي لزيارة مشاريعي.
          </>
        ) : (
          <>
            Check Out My GitHub Account From{" "}
            <a
              href="https://github.com/yehiaakarim"
              target="_blank"
            >
              <button className="buttonOne">Here</button>
            </a>{" "}
            and Click on the Pictures in the slider below to go to my Projects.
          </>
        )}
      </div>

      <div
        ref={el}
        className="notScrollProject relative overflow-hidden"
        dir={isRTL ? "rtl" : "ltr"}
      >
        
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-0 md bottom-1/2 z-10 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-all disabled:opacity-50"
          aria-label={language === "ar" ? "السابق" : "Previous"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-0  bottom-1/2 z-10 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-all disabled:opacity-50"
          aria-label={language === "ar" ? "التالي" : "Next"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>

        
        <div ref={sliderRef} className="relative w-[87vw] h-[340px] mx-auto smallScreen">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="h-full w-full px-4">
                <ProjectItems
                  img={project.img}
                  title={project.title}
                  subTitle={project.subTitle}
                  referTo={project.referTo}
                />
              </div>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                currentSlide === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {toArabicNumerals(index + 1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
