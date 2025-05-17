import React from "react";
import { icons } from "../../Data/data.js";
import { useTranslation } from "../contexts/TranslationContext";
import { useTheme } from "../contexts/ThemeContext";

const Icons = ({ styles }) => {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles} grid grid-cols-3 sm:grid-cols-3 gap-4`}>
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.url || item.text}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center justify-center rounded-lg p-4 transition-all duration-300 hover:scale-105 ${item.color} ${
            isDarkMode ? "bg-gray-800" : "bg-white shadow-lg shadow-gray-200"
          }`}
        >
          <item.icon className="text-3xl mb-2" />
          <span className="text-sm font-medium text-center mob">
            {item.name[language]}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Icons;