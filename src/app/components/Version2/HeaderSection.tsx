"use client";
import React, { useState, useEffect } from "react";
import "../index.css";
import IconBtn from "../IconBtn";
import CapsuleBtn from "../MainBtn";
import RoundedButton2 from "../RoundedBtn2";
import ReadMoreBtn from "../ReadMoreBtn";
// import Spline from "@splinetool/react-spline";
import InteractiveCircle from "../InteractiveCircle";

const HeaderSection = () => {
  return (
    <>
      <div className="container mx-auto mt-36 py-4 px-8 header-section">
        <div className="flex flex-col rounded-lg  xl:flex-row justify-between w-full">
          <div className="text-[60px] xl:text-[80px] 2xl:text-[90px] font-extrabold">
            {/* <img
            className="h-[60px] lg:h-[90px] 2xl:h-[120px] rounded-r-lg object-cover md:rounded-none md:rounded-r-lg"
            src={"/images/header-logo.png"}
            alt=""
          /> */}
            {/* <p className="ml-20">让天下再没有</p>
            <p className="gradient-text">难用的数据</p>
            <span className="blinking-cursor">|</span> */}
            <p className="">消除天下</p>
            <p className="gradient-text">难用的数据</p>

            <div className="w-2/4 mr-[50px] xl:[mr-200px]">
              <div className="css-typing text-[18px] 2xl:text-[22px] mt-[20px] w-[80%]">
                <p className="">
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  人工智能大模型训练前的
                  <span className="font-bold">
                    数据清洗、数据标注、数据扩充
                  </span>
                  等服
                </p>
                <p className="">
                  务。并提供包括模型预训练、微调、定制化数据库在内的一站式人
                </p>
                <p className="">工智能模型训练解决方案。</p>
              </div>

              <div className="flex mt-10">
                <RoundedButton2
                  text="申请试用"
                  onClick={() => {}}
                  icon={"/images/icons/icon-rocket.png"}
                  className="text-[20px] 2xl:text-[30px] px-[28px] py-[10px] 2xl:px-[40px] 2xl:py-[15px] mr-[10px] 2xl:mr-[40px]"
                />
                <div className="glow-bg-small"></div>
              </div>
            </div>
          </div>
          <div className="">
            {/* <div className="glow-bg"></div> */}
            {/* <InteractiveCircle /> */}
            <img
              className="h-[420px] 2xl:h-[600px] rounded-r-lg object-cover md:rounded-none md:rounded-r-lg"
              src={"/images/logos/3dlogo.png"}
              alt=""
            />
            {/* <Spline scene="https://prod.spline.design/sb9Tkk-eAMm69fFr/scene.splinecode" /> */}
          </div>
        </div>

        <div className="flex justify-between pt-5 2xl:pt-20 flex-col xl:flex-row">
          <div className="w-[530px] 2xl:w-[800px] video-wrapper relative h-full"></div>
        </div>

        <div className="flex justify-center">
          <ReadMoreBtn />
        </div>

        {/* <section className="flex">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="lg:w-[650px] lg:h-[650px] relative w-[250px] h-[250px]">
              <Image
                src="/images/bg.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="ml-0 lg:ml-32 col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-2xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                致力為您
              </span>
              <br></br>
              <span>思考出最有效率的方案</span>
              <br></br>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-sm mb-6 lg:text-lg">
              客製化網站、套版網站、內部系統以及APP開發都是我們可以服務的範圍。我們致力於思考如何從使用者的角度出發，和您一起打造最佳的體驗！
            </p>
            <div>
              <Link
                href="/#about"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                了解更多
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  資訊
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      </div>
    </>
  );
};

export default HeaderSection;
