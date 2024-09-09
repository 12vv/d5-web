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
            探索 AI 给予
            <br />
            数据标注的全新方式
          </>
        </h1>
        <h2 className="text-[18px] 2xl:text-[20px] text-[#FFFFFF] text-opacity-40">
          <>
            <p className="mt-4">
              第五维度通过提升人工智能模型训练所使用的数据质量和数量
            </p>
            <p className="mt-4">
              专注于从数据角度提升人工智能产品的安全性和可靠性，从根本上增强人工智能产品的应用效果
            </p>
          </>
        </h2>
      </div>
    </div>
  );
};

export default BigTitleSection;
