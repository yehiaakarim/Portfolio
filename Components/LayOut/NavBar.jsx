import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSideBar } from "../Redux/SideBarSlice";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import List from "../Utilites/List";
import { useRouter } from "next/router";
import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "../contexts/TranslationContext";
import ParticlesBackground from "../Utilites/ParticlesBackground";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, isRTL, toggleLanguage } = useTranslation();
  const [linksColor, setLinksColor] = useState("#1f2937");
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [timeSpent, setTimeSpent] = useState(0);
  const timerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTime = parseInt(localStorage.getItem("timeSpent")) || 0;
    setTimeSpent(savedTime);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      } else {
        if (!timerRef.current) {
          timerRef.current = setInterval(() => {
            setTimeSpent((prev) => {
              const newTime = prev + 1;
              localStorage.setItem("timeSpent", newTime);
              return newTime;
            });
          }, 1000);
        }
      }
    };

    if (!document.hidden) {
      timerRef.current = setInterval(() => {
        setTimeSpent((prev) => {
          const newTime = prev + 1;
          localStorage.setItem("timeSpent", newTime);
          return newTime;
        });
      }, 1000);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (timerRef.current) clearInterval(timerRef.current);
      localStorage.setItem("timeSpent", timeSpent);
    };
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const timeUnits = {
      hr: language === "ar" ? "ساعة" : "hr",
      min: language === "ar" ? "دقيقة" : "min",
      sec: language === "ar" ? "ثانية" : "sec",
    };

    return `${hours.toString().padStart(2, "0")} ${timeUnits.hr} ,${minutes
      .toString()
      .padStart(2, "0")} ${timeUnits.min} ,${secs
      .toString()
      .padStart(2, "0")} ${timeUnits.sec}`;
  };

  const resetTimer = () => {
    setTimeSpent(0);
    localStorage.setItem("timeSpent", 0);
  };

  useEffect(() => {
    if (
      router.asPath === "/youtubeClone" ||
      router.asPath === "/Ecommerce" ||
      router.asPath === "/Keeper"
    ) {
      setNavBg("transparent");
      setLinksColor("white");
    } else {
      setNavBg(isDarkMode ? "#1a202c" : "#ecf0f3");
      setLinksColor(isDarkMode ? "white" : "#1f2937");
    }
  }, [router, isDarkMode]);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.SideBarSlice.sideBarState);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    document.addEventListener("scroll", handleShadow);
    return () => document.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${navBg}`,
        direction: isRTL ? "rtl" : "ltr",
      }}
      className={`${
        shadow
          ? "fixed top-0 left-0 w-full z-[100] blur-effect-theme"
          : "fixed top-0 left-0 w-full z-[100]"
      } ${isDarkMode ? "dark" : ""}`}
    >
      <ParticlesBackground isDarkMode={isDarkMode} />

      <div className="max-w-[1640px] mx-auto p-4 relative z-[110]">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <AiOutlineMenu
              size={40}
              className={`cursor-pointer ${
                linksColor === "white"
                  ? "text-white"
                  : isDarkMode
                  ? "text-white"
                  : "text-gray-800"
              }`}
              onClick={() => dispatch(handleSideBar(true))}
            />
          </div>

          <div
            className={`flex flex-col items-center gap-0 text-sm font-bold ${
              isDarkMode ? "text-white-300" : "text-orange-500"
            }`}
          >
            <span className="font-medium font-bold">
              {language === "en"
                ? "Viewing this site for:"
                : "مدة تصفحك للموقع:"}
            </span>
            <span className="font-medium">{formatTime(timeSpent)}</span>
            <button
              onClick={resetTimer}
              className={`px-2 py-1 rounded-md text-sm font-medium ${
                isDarkMode
                  ? "bg-gray-700 text-white-200 hover:bg-white-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-500"
              }`}
            >
              {language === "en" ? "Reset Timer" : "اعد تشغيل العداد"}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex h-14 items-center gap-6">
              <List
                styles={`flex items-center gap-8 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
                linkStyles="text-sm uppercase"
                closeSideBar={false}
              />

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-700 text-yellow-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
              </button>

              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <FaLanguage size={20} />
                <span className="ml-1 text-xs">
                  {language === "en" ? "AR" : "EN"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative md:hidden">
          <div
            className={`${
              state ? "fixed top-0 left-0 w-full h-screen bg-black/70" : ""
            }`}
          >
            <div
              className={`${
                state
                  ? `p-4 fixed top-0 ${
                      isRTL ? "right-0" : "left-0"
                    } w-[45%] h-screen ${
                      isDarkMode ? "bg-gray-900" : "bg-white"
                    } duration-500 overflow-y-auto`
                  : `p-4 fixed top-0 ${
                      isRTL ? "right-[-200%]" : "left-[-200%]"
                    } duration-500`
              }`}
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-2">
                <div
                  className={`cursor-pointer rounded-full p-3 ${
                    isDarkMode ? "shadow-gray-700" : "shadow-gray-400"
                  }`}
                >
                  <AiOutlineClose
                    size={25}
                    onClick={() => dispatch(handleSideBar(false))}
                    className={isDarkMode ? "text-white" : "text-gray-800"}
                  />
                </div>
              </div>

              <List
                linkStyles={`text-sm uppercase py-4 border-b mb-4 sm:mb-8 ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
                closeSideBar={true}
              />

              <div className="flex flex-col gap-4 mt-6">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? "bg-gray-700 text-yellow-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <span>{language === "en" ? "" : ""}</span>
                  {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
                </button>

                <button
                  onClick={toggleLanguage}
                  className={`p-2 rounded-full flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <span>{language === "en" ? "" : ""}</span>
                  <div className="flex items-center">
                    <FaLanguage size={20} />
                    <span className="mx-2 text-xs">
                      {language === "en" ? "العربية" : "English"}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
