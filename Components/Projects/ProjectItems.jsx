import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../contexts/TranslationContext";
const ProjectItems = ({ img, title, subTitle, referTo }) => {
  const { language } = useTranslation();

  return (
    <div className="relative flex items-center justify-center h-full w-full group">
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg shadow-gray-400 hover:scale-105 transition-transform duration-300">
        
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={img}
            alt={`${title} project`}
            fill 
            className=" group-hover:opacity-10 transition-opacity duration-300"
            sizes="100vw"
            priority={false}
            quality={75}
          />
        </div>

        
        <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0 p-4 text-center z-10 bg-gradient-to-r from-[#e0e4ff]/0 to-[#e0e4ff]/0">
          <h3 className="text-xl md:text-2xl text-Black tracking-wider">
            {title}
          </h3>
          <h4 className="pb-2 pt-1 md:pb-4 md:pt-2 text-Black text-sm md:text-base">
            {subTitle}
          </h4>
          <Link
            href={referTo}
            className="underline text-Black font-medium md:font-bold"
          
            rel="noopener noreferrer"
          >
            <p className="text-lg md:text-xl tracking-wider">
              {language === "ar" ? "معلومات اكثر" : "More Info"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
