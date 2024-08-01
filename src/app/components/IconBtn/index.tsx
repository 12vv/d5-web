import React from "react";
import "./index.css";

const IconBtn = ({ icon, text, ...props }: any) => {
  return (
    <button
      {...props}
      className="icon-btn h-[60px] text-[18px] xl:h-[70px] xl:text-[22px] 2xl:h-[90px] 2xl:text-[30px]  2xl:px-8 flex items-center justify-center px-4 py-4 bg-[#D9D9D9] text-white rounded bg-opacity-30 rounded-lg"
    >
      {icon && <img src={icon} alt="icon" className="w-8 h-8 mr-4" />}
      <span>{text}</span>
    </button>
  );
};

export default IconBtn;
