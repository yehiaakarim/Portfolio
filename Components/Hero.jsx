import React, { useRef, useEffect } from "react";
import Title from "../Components/Utilites/Title";
import Typed from "typed.js";
import Image from "next/image";
import Icons from "./Utilites/Icons";
import Resume from "./Resume";
import { useTranslation } from "../Components/contexts/TranslationContext";
import { useTheme } from "../Components/contexts/ThemeContext";

const Hero = () => {
  const { language } = useTranslation();
  const { isDarkMode } = useTheme();
  const el = useRef();

  
  const textContent = {
    en: {
      subtitle: "Your vision, my code—let’s make magic.",
      greeting: "Hello, I'm",
      name: "Yehia Abdlkarim",
      typedStrings: ["a frontend developer"]
    },
    ar: {
      subtitle: "أنت بالفكرة، وأنا بالتنفيذ — لنبني واقع ساحر.",
      greeting: "مرحبًا أنا",
      name: "يحيي عبدالكريم",
      typedStrings: ["مطور واجهات أمامية"]
    }
  };

  const currentContent = textContent[language];

  const options = {
    strings: currentContent.typedStrings,
    startDelay: 300,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    showCursor: false 
  };

  useEffect(() => {
    const typed = new Typed(el.current, options);
    return () => typed.destroy();
  }, [language]);

  const subtitleColorClass = isDarkMode ? "text-white" : "text-gray-600";

  return (
    <div id="home" className="flex w-full min-h-screen items-center justify-center pt-28 py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl px-4">
        
        <div className="flex-1 text-center md:text-left">
          <Title
            style={`text-sm mb-2 sm:mb-6 uppercase ${subtitleColorClass} colored`}
            title={currentContent.subtitle}
          />
          <h2 className="text-1xl md:text-2xl lg:text-5xl mb-2">
            {currentContent.greeting} <span className="text-purple-600">{currentContent.name}</span>
          </h2>
          <h1 ref={el} className="text-3xl md:text-4xl lg:text-6xl mb-2"></h1>
          <Icons styles="flex items-center mt-4 justify-center md:justify-start gap-3 text-blue-600" />
          <Resume />
        </div>

        
        <div className="flex-1 flex justify-center relative w-full max-w-xs md:max-w-md">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image
              src="/assets/yehia.jpg"
              alt="Yehia Akarim"
              fill
              sizes="(max-width: 768px) 16rem, 20rem" 
              className="object-cover object-top" 
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;