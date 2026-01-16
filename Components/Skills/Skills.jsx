import React, { useRef, useEffect } from "react";
import Title from "../Utilites/Title";
import SubTitle from "../Utilites/SubTitle";
import { skills } from "../../Data/data";
import SkillsItem from "./SkillsItem";
import { useTranslation } from "../contexts/TranslationContext"; 

const Skills = () => {
  const { language, isRTL } = useTranslation(); 
  const el = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= el.current.offsetTop - 490) {
        el.current.classList.remove("notScroll");
        el.current.classList.add("isScrolling");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const translations = {
    title: language === "ar" ? "المهارات" : "skills",
    subtitle: language === "ar" ? "أنا متخصص في:" : "I specialize in:"
  };

  return (
    <div 
      id="skills" 
      className="max-w-[1640px] mx-auto p-4 py-20"
      dir={isRTL ? "rtl" : "ltr"} 
    >
      <Title
        title={translations.title}
        style="text-blue-600 uppercase tracking-widest text-2xl"
      />
      <SubTitle title={translations.subtitle} />
      <div ref={el} className="notScroll">
        <SkillsItem endPoint={skills} />
      </div>
    </div>
  );
};

export default Skills;