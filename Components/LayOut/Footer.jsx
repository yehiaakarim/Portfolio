import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "../contexts/TranslationContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();
  const currentYear = new Date().getFullYear();

  
  const toArabicNumerals = (num) => {
    const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num.toString().replace(/\d/g, (digit) => arabicNumerals[digit]);
  };

  const translations = {
    en: {
      phone: "01270006230",
      messenger: "Messenger",
      gmail: "Gmail",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
      copyright: "All rights reserved",
      name: "Yehia Abdelkarim",
    },
    ar: {
      phone: toArabicNumerals("01270006230"),
      messenger: "ماسنجر",
      gmail: "جي ميل",
      linkedin: "لينكد إن",
      github: "جيت هاب",
      whatsapp: "واتساب",
      copyright: "جميع الحقوق محفوظة",
      name: "يحيي عبدالكريم",
    },
  };

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-[#5651e5] to-[#709dff]"
      } text-white p-4 text-center`}
    >
      <div className="grid grid-cols-3 max-[550px]:grid-cols-3 md:flex gap-6 my-4 justify-center items-center">
        <div className="flex flex-col items-center">
          <a
            href="tel:01270006230"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:scale-105 flex flex-col items-center"
          >
            <FaPhone size={30} />
            <span className="text-sm font-medium mt-1 cursor-pointer">
              {translations[language].phone}
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://m.me/yehiakarimsoliman"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:scale-105 flex flex-col items-center"
          >
            <FaFacebookMessenger size={30} />
            <span className="text-sm font-medium mt-1 cursor-pointer">
              {translations[language].messenger}
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://mail.google.com/mail/u/0/#search/yehiaabdelkarimsoliman%40gmail.com?compose=CllgCJftMJSLDxsvrCSdTtcSNDLbfWxwrjWNjjDXGDDMcHxfdKcstfMtRgkHgJvjjhKddrjMVrg"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:scale-105 flex flex-col items-center"
          >
            <FaEnvelope size={30} />
            <span className="text-sm font-medium mt-1 cursor-pointer">
              {translations[language].gmail}
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/yehiaabdelkarim/"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:scale-105 flex flex-col items-center"
          >
            <FaLinkedinIn size={30} />
            <span className="text-sm font-medium mt-1 cursor-pointer">
              {translations[language].linkedin}
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://github.com/yehiaakarim"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:scale-105 flex flex-col items-center"
          >
            <FaGithub size={30} />
            <span className="text-sm font-medium mt-1 cursor-pointer">
              {translations[language].github}
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="https://wa.link/9afcky"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:scale-105 flex flex-col items-center"
          >
            <FaWhatsapp size={30} />
            <span className="text-sm font-medium mt-1 cursor-pointer">
              {translations[language].whatsapp}
            </span>
          </a>
        </div>
      </div>
      <h4>
        {translations[language].copyright} &#169; {translations[language].name}{" "}
        {language === "ar" ? toArabicNumerals(currentYear) : currentYear}
      </h4>
    </div>
  );
};
export default Footer;
