import React from "react";
import Image from "next/image";

const SkillsItem = ({ endPoint }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-8">
      {endPoint.map((item, index) => (
        <div
          key={index}
          
          className="flex flex-col items-center p-4 shadow-lg rounded-lg shadow-gray-400 hover:scale-105 transition-transform duration-300 min-h-[160px] justify-center"
        >
          <div className="w-20 h-20 relative mb-3"> 
            <Image
              src={item.img}
              alt={item.text}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 90px, 100px"
            />
          </div>
          
          <p className="font-bold text-sm md:text-base text-center whitespace-pre-line leading-tight normal-case">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsItem;