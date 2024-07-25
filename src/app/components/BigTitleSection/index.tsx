import React from "react";
import "./index.css";

interface BackgroundSectionProps {
  backgroundImage: string;
}

const BigTitleSection: React.FC<BackgroundSectionProps> = ({
  backgroundImage,
}) => {
  return (
    <div
      className="background-section"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="glow-bg-2 bg-contain bg-[80%] 2xl:bg-[60%]"></div>
      <div className="content">
        <h1 className="title text-[80px] 2xl:text-[110px] font-semibold text-[#FFFFFF] text-opacity-90">
          <>
            Build Your Ultimate
            <br />
            AI Agent Workforce
          </>
        </h1>
        <h2 className="subtitle leading-7 text-[12px] 2xl:text-[22px] text-[#FFFFFF] text-opacity-40">
          <>
            杭州第五维度有限责任公司是一家成立于2024年的初创公司
            <br />
            专注于从数据角度提升人工智能产品的安全性和可靠性
          </>
        </h2>
      </div>
    </div>
  );
};

export default BigTitleSection;
