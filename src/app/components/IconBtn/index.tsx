import React from "react";

const IconBtn = ({ icon, text, ...props }: any) => {
  return (
    <button
      {...props}
      className="h-[80px] text-[18px] xl:h-[100px] xl:text-[24px] 2xl:h-[120px] 2xl:text-[30px]  2xl:px-8   flex items-center justify-center px-4 py-4 bg-[#D9D9D9] text-white rounded hover:bg-blue-700 bg-opacity-30 rounded-lg"
    >
      {icon && <img src={icon} alt="icon" className="w-8 h-8 mr-4" />}
      {text}
    </button>
  );
};

export default IconBtn;
