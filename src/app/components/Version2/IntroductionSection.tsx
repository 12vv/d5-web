"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkBtn from "../LinkBtn";
import "./index.css";
import VerticalTab from "../VerticalTab";
import CardBlock from "../cardblock";
import CircleIconText from "../InteractiveCircle";
import FreshText from "../../components/FreshText";

const IntroductionSection = () => {
  const tabs = [
    <div style={{ height: "100%", width: "100%" }} key={1}>
      <p>
        杭州第五维度有限责任公司是一家成立于2024年的初创公司，专注于
        <span className="text-[#A8B1FF]">从数据角度</span>
        提升人工智能产品的<span className="text-[#A8B1FF]">安全性</span>和
        <span className="text-[#A8B1FF]">可靠性</span>
      </p>
    </div>,
    <div style={{ height: "100%", width: "100%" }} key={2}>
      公司为客户提供人工智能大模型训练前的
      <span className="text-[#A8B1FF]">数据清洗、标注、扩充</span>
      等服务。并提供包括
      <span className="text-[#A8B1FF]">模型预训练、微调、定制化数据库</span>
      在内的一站式人工智能模型训练解决方案
    </div>,
    <div style={{ height: "100%", width: "100%" }} key={3}>
      目前，公司拥有多家稳定的
      <span className="text-[#A8B1FF]">国企、外企、民企</span>客户；国内外
      <span className="text-[#A8B1FF]">著名高校</span>及
      <span className="text-[#A8B1FF]">互联网头部公司</span>
      等合作伙伴。同时拥有著名投资机构和
      <span className="text-[#A8B1FF]">政府扶持</span>带来的商务与科研资源
    </div>,
  ];

  return (
    <div className="header-section line-bg flex flex-col  items-center">
      <div className="flex flex-col rounded-lg  xl:flex-row justify-between w-[80%] items-center mt-[100px] md:mt-[200px] min-[1701px]:mt-[230px]">
        <div className="text-[40px] min-[1701px]:text-[60px] font-extrabold">
          {/* <img
            className="h-[60px] lg:h-[90px] 2xl:h-[120px] rounded-r-lg object-cover md:rounded-none md:rounded-r-lg"
            src={"/images/header-logo.png"}
            alt=""
          /> */}
          {/* <p className="ml-20">让天下再没有</p>
            <p className="gradient-text">难用的数据</p>
            <span className="blinking-cursor">|</span> */}
          {/* <div className="">关于</div>
          <div className="gradient-text mt-0">第五维度</div>
          <div className="text-[40px]">D5 DATA</div> */}
        </div>
        <div className="flex flex-col items-end text-[14px] md:text-[24px] min-[1701px]:text-[30px] justify-around">
          <FreshText />
          {/* <p className="mt-2">第五维度专注于利用自研算法</p>
          <p className="mt-2">将AI技术融入数据标注与整理，将学术科研</p>
          <p className="mt-2">成果转化为人人可用的定制化数据标注工具</p>
          <p className="mt-2">与生成式数据整理工具</p> */}
          {/* <p className="mt-2">自研数据清洗系统</p>
          <p className="mt-2">打造开箱即用的数据生成与标注平台</p> */}
        </div>
      </div>
      {/* <div className="glow-bg"></div> */}

      <div className="flex justify-between 2xl:pt-20 flex-col xl:flex-row mt-[140px] 2xl:mt-[180px]  w-[90%] ">
        <div className="">
          {/* <CardBlock
            title={"# 数据标注 #"}
            content={"将原始数据通过标注转化为可供模型学习的高质量数据"}
            img={"/images/intro1.svg"}
          /> */}
          <CircleIconText
            title={"# 数据标注 #"}
            content={"将原始数据通过标注转化为可供模型学习的高质量数据"}
            img={"/images/intro1.svg"}
          />
        </div>
        <div className="flex justify-end">
          {/* <CardBlock
            title={"# 数据清洗 #"}
            content={"将原始数据将被提升为模型训练可以使用的高质量数据"}
            img={"/images/intro2.svg"}
          /> */}

          <CircleIconText
            title={"# 数据清洗 #"}
            content={"将原始数据将被提升为模型训练可以使用的高质量数据"}
            img={"/images/intro2.svg"}
          />
        </div>
        <div className="">
          {/* <CardBlock
            title={"# 数据扩充 #"}
            content={"利用原始数据大幅提升高质量数据的数量"}
            img={"/images/intro3.svg"}
          /> */}

          <CircleIconText
            title={"# 数据扩充 #"}
            content={"利用原始数据大幅提升高质量数据的数量"}
            img={"/images/intro3.svg"}
          />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="container mx-auto mt-36 py-4 px-4 header-section">
  //     <div className="flex items-center  rounded-lg  md:flex-row justify-between pt-5 2xl:pt-[140px] w-full">
  //       <div className="w-2/4 ml-20">
  //         <img
  //           className="h-[420px] 2xl:h-[600px] rounded-r-lg object-cover md:rounded-none md:rounded-r-lg"
  //           src={"/images/logos/logo-big.png"}
  //           alt=""
  //         />
  //       </div>

  //       <div className="flex items-end flex-col mr-10">
  //         <div className="flex mb-20">
  //           <img
  //             className="mr-10 w-[300px] 2xl:w-[400px]"
  //             src="/images/text.svg"
  //           />
  //           <img
  //             className=" w-[200px] 2xl:w-[250px]"
  //             src="/images/text-en.svg"
  //           />
  //         </div>
  //         <div>
  //           <VerticalTab tabs={tabs} interval={2000} />
  //         </div>
  //         <div className="sc-28ff5a11-6 fwReyO flex mt-20">
  //           <button className="sc-28ff5a11-7 ciVYpW" key={1}>
  //             <img
  //               alt=""
  //               loading="lazy"
  //               width="30"
  //               height="30"
  //               decoding="async"
  //               data-nimg="1"
  //               className="content-icons outliner"
  //               src="/images/icons/Vector1.svg"
  //             />
  //           </button>
  //           <button className="sc-28ff5a11-7 eGucya" key={2}>
  //             <img
  //               alt=""
  //               loading="lazy"
  //               width="30"
  //               height="30"
  //               decoding="async"
  //               data-nimg="1"
  //               className="content-icons chat"
  //               src="/images/icons/Vector2.svg"
  //             />
  //           </button>
  //           <button className="sc-28ff5a11-7 eGucya" key={3}>
  //             <img
  //               alt=""
  //               loading="lazy"
  //               width="30"
  //               height="30"
  //               decoding="async"
  //               data-nimg="1"
  //               className="content-icons ai"
  //               src="/images/icons/Vector3.svg"
  //             />
  //           </button>
  //           <button className="sc-28ff5a11-7 eGucya" key={4}>
  //             <img
  //               alt=""
  //               loading="lazy"
  //               width="30"
  //               height="30"
  //               decoding="async"
  //               data-nimg="1"
  //               className="content-icons rewrite"
  //               src="/images/icons/Vector4.svg"
  //             />
  //           </button>
  //           <button className="sc-28ff5a11-7 eGucya" key={5}>
  //             <img
  //               alt=""
  //               loading="lazy"
  //               width="30"
  //               height="30"
  //               decoding="async"
  //               data-nimg="1"
  //               className="content-icons summarize"
  //               src="/images/icons/Vector5.svg"
  //             />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default IntroductionSection;
