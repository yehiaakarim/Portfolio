import React from "react";

const Title = ({ title, style }) => {
  return (
    <div>
      <p className={style}>{title}</p>
    </div>
  );
};

export default Title;
