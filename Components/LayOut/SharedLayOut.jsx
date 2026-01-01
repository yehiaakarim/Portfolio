import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "../contexts/TranslationContext";

const SharedLayOut = ({ children }) => {
  const { isDarkMode } = useTheme();
  const { isRTL } = useTranslation();

  return (
    <div 
      className={`min-h-screen w-screen overflow-x-hidden ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <NavBar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default SharedLayOut;