import React from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "../contexts/TranslationContext";

const ContactInfo = () => {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();

  const englishContent = {
    title: "Yehia Abdelkarim",
    subtitle: "Front-end Developer",
    description: [
      "I'm available for full-time roles or freelance opportunities.",
      "I'm eager to build responsive, high-quality projects using Next.js and React.js.",
      "Open to collaborating, fixing, or polishing existing projects.",
    ],
  };

  const arabicContent = {
    title: "يحيى عبدالكريم",
    subtitle: "مطور واجهات أمامية",
    description: [
      "أنا متاح للعمل بدوام كامل أو فرص العمل الحر.",
      "أنا متحمس لبناء مشاريع عالية الجودة باستخدام Next.js و React.js.",
      "مستعد للتعاون أو إصلاح أو تحسين المشاريع الحالية.",
    ],
  };

  const content = language === "ar" ? arabicContent : englishContent;

  return (
    <div
      className={`p-4 rounded-xl shadow-lg ${
        isDarkMode
          ? "shadow-gray-700 bg-gray-800 text-white"
          : "shadow-gray-400 bg-white text-black"
      } h-auto`}
    >
      <Image
        src="/assets/contact.jpg" 
        alt="contact/img"
        width={800} 
        height={600} 
        className="rounded-xl duration-300 hover:scale-105"
        style={{
          width: "100%", 
          height: "auto",
          objectFit: "cover",
        }}
      />
      <h2
        className="my-8 text-3xl md:text-5xl lg:text-6xl"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {content.title}
      </h2>
      <p
        className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {content.subtitle}
      </p>
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        {content.description.map((paragraph, index) => (
          <p
            key={index}
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } mt-2 mb-2`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
