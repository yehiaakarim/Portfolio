import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handleSideBar } from "../Redux/SideBarSlice.js";
import { useTranslation } from "../contexts/TranslationContext";

const List = ({ styles, linkStyles, closeSideBar }) => {
  const dispatch = useDispatch();
  const { language } = useTranslation();
  
  
  const translations = {
    home: ['Home', 'الرئيسية'],
    about: ['About', 'عني'],
    skills: ['Skills', 'المهارات'],
    projects: ['Projects', 'المشاريع'],
    contact: ['Contact', 'اتصل بي']
  };

  const handleCloseSideBar = () => {
    if (closeSideBar) {
      dispatch(handleSideBar(false));
    } else {
      return false;
    }
  };

  return (
    <ul className={styles}>
      <Link href="/" onClick={handleCloseSideBar}>
        <li className={linkStyles}>
          <strong>{translations.home[language === 'en' ? 0 : 1]}</strong>
        </li>
      </Link>
      <Link href="/#about" onClick={handleCloseSideBar}>
        <li className={linkStyles}>
          <strong>{translations.about[language === 'en' ? 0 : 1]}</strong>
        </li>
      </Link>
      <Link href="/#skills" onClick={handleCloseSideBar}>
        <li className={linkStyles}>
          <strong>{translations.skills[language === 'en' ? 0 : 1]}</strong>
        </li>
      </Link>
      <Link href="/#projects" onClick={handleCloseSideBar}>
        <li className={linkStyles}>
          <strong>{translations.projects[language === 'en' ? 0 : 1]}</strong>
        </li>
      </Link>
      <Link href="/#contact" onClick={handleCloseSideBar}>
        <li className={linkStyles}>
          <strong>{translations.contact[language === 'en' ? 0 : 1]}</strong>
        </li>
      </Link>
    </ul>
  );
};

export default List;