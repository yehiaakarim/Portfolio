import React from "react";
import Title from "../Utilites/Title";
import SubTitle from "../Utilites/SubTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { RxDoubleArrowUp } from "react-icons/rx";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "../contexts/TranslationContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { language } = useTranslation();

  const contactContent = {
    en: {
      title: "contact",
      subtitle: "get in touch"
    },
    ar: {
      title: "اتصل بي",
      subtitle: "تواصل معي"
    }
  };

  const currentContent = contactContent[language];

  return (
    <div 
      id="contact" 
      className={`max-w-[1640px] mx-auto px-4 py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <Title
        title={currentContent.title}
        style={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} uppercase tracking-widest text-2xl`}
      />
      <SubTitle title={currentContent.subtitle} />
      <div className="grid md:grid-cols-2 gap-12 w-full mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
      <div className={`${isDarkMode ? 'shadow-gray-700' : 'shadow-gray-400'} rounded-full p-3 flex items-center justify-center mt-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} cursor-pointer hover:scale-110 transition duration-300`}>
        <Link href="/">
          <RxDoubleArrowUp size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;