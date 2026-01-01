import React from "react";
import { useTranslation } from "../Components/contexts/TranslationContext";

const Resume = () => {
  const { language } = useTranslation();

  function downloadResume() {
    
    const link = document.createElement('a');
    link.href = '/assets/Yehia Abdelkarim Front-End.pdf';
    link.download = 'Yehia Abdelkarim Front-End.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <button
        className="p-2 mx-auto flex justify-center items-center my-6 duration-300 hover:scale-105 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        onClick={downloadResume}
      >
        {language === 'ar' ? 'تحميل السي ڨي' : 'Download Resume'}
      </button>
    </div>
  );
};

export default Resume;