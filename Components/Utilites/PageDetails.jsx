import React from "react";
import Image from "next/image";
import Head from "next/head";
import Title from "./Title";
import SubTitle from "./SubTitle";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useTranslation } from "../contexts/TranslationContext";
import { useTheme } from "../contexts/ThemeContext";

const PageDetails = ({
  img,
  title,
  techHeader,
  overView,
  Site,
  Code,
  AllTech,
  headTitle,
}) => {
  const { language, isRTL } = useTranslation();
  const { isDarkMode } = useTheme();

  const translations = {
    en: {
      project: "Project",
      overview: "Overview",
      site: "Site",
      code: "Code",
      technologies: "Technologies",
      back: "Back",
    },
    ar: {
      project: "المشروع",
      overview: "نظرة عامة",
      site: "الموقع",
      code: "الكود",
      technologies: "التقنيات",
      back: "رجوع",
    },
  };

  const t = translations[language];

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Head>
        <link rel="icon" href="/favicons/default-icon.svg" />
        <title>{headTitle}</title>
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={img}
            alt="/"
          />
          <div
            className={`absolute top-0 left-0 w-full h-[50vh] ${
              isDarkMode ? "bg-black/80" : "bg-black/70"
            } z-10 flex items-center justify-center text-white`}
          >
            <div className={isRTL ? "text-right" : "text-left"}>
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4">
                {title}
              </h4>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl">
                {techHeader}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`max-w-[1640px] mx-auto p-4 ${
          isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        <Title
          title={t.project}
          style={`${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          } uppercase tracking-widest text-2xl`}
        />
        <SubTitle title={t.overview} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-6">
          <div>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
              {overView}
            </p>
            <div className="flex items-center gap-2 my-6">
              <a href={Site} target="_blank" rel="noopener noreferrer">
                <button
                  className={`block p-3 w-24 text-center rounded ${
                    isDarkMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white`}
                >
                  {t.site}
                </button>
              </a>
              <a href={Code} target="_blank" rel="noopener noreferrer">
                <button
                  className={`block p-3 w-24 text-center rounded ${
                    isDarkMode
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-gray-500 hover:bg-gray-600"
                  } text-white`}
                >
                  {t.code}
                </button>
              </a>
            </div>
          </div>
          <div
            className={`p-2 rounded-xl w-1/2 text-center ${
              isDarkMode
                ? "shadow-lg shadow-gray-800 bg-gray-800"
                : "shadow-lg shadow-gray-400 bg-white"
            }`}
          >
            <h4 className="mb-3">{t.technologies}</h4>
            {AllTech.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 py-4 text-center"
              >
                <div className="flex-shrink-0">
                  <RiRadioButtonFill
                    size={15}
                    className={isDarkMode ? "text-blue-400" : "text-blue-600"}
                  />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/#projects"
            className={`underline text-xl md:text-2xl lg:text-4xl py-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
