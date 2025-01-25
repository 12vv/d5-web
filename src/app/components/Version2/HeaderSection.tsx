"use client";
import React, { useState, useEffect } from "react";
import "../index.css";
import IconBtn from "../IconBtn";
import CapsuleBtn from "../MainBtn";
import RoundedButton2 from "../RoundedBtn2";
import ReadMoreBtn from "../ReadMoreBtn";
import { ImageFollowMouse } from "../ImageFollowMouse";
import GlowLine from "../GrowLine";
import LOGO from "../Model";

const HeaderSection = () => {
  return (
    <>
      {/* <iframe
        src="https://my.spline.design/untitled-410df56b872a72765d5642b26f5f8d7c/"
        width="100%"
        height="100%"
      ></iframe> */}

      <iframe
        src="https://my.spline.design/untitled-410df56b872a72765d5642b26f5f8d7c/"
        // width="100%"
        // height="100px"
        frameBorder="0"
        style={{
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden",
          height: "90%",
          // width: "80%",
          position: "absolute",
          top: "-40px",
          // left: "10px",
          right: "0px",
          bottom: "0px",
        }}
        className="w-0 md:w-[100%] min-[1701px]:w-[80%]"
      ></iframe>
      <div className="container mx-auto mt-24 md:mt-36 py-0 px-0 header-section min-[1701px]:mt-28 min-[1701px]:px-4">
        {/* <GlowLine /> */}

        {/* <LOGO /> */}
        <div className="flex flex-col justify-between h-[80vh]">
          <div className="flex rounded-lg xl:flex-row justify-between w-full min-[1701px]:h-[60vh]">
            <div className="text-[54px] md:text-[70px] min-[1701px]:text-[90px] font-extrabold">
              <div className="flex flex-col justify-between h-full">
                {/* <img
            className="h-[60px] lg:h-[90px] 2xl:h-[120px] rounded-r-lg object-cover md:rounded-none md:rounded-r-lg"
            src={"/images/header-logo.png"}
            alt=""
          /> */}
                {/* <p className="ml-20">让天下再没有</p>
            <p className="gradient-text">难用的数据</p>
            <span className="blinking-cursor">|</span> */}
                <div>
                  <p className="">消除天下</p>
                  <p className="gradient-text">难用的数据</p>

                  <div className="w-2/4  md:mr-[50px] xl:[mr-200px] md:w-[100%]">
                    <div className="css-typing text-[12px] md:text-[18px] min-[1701px]:text-[22px] mt-[20px]">
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
                  </div>
                </div>
                <div className="flex mt-10">
                  <RoundedButton2
                    text="申请试用"
                    onClick={() => {
                      window.open(
                        "https://t0zagqubvm5.feishu.cn/share/base/form/shrcnSJalPUBI8tzZT50oymXvUh",
                        "_blank"
                      );
                    }}
                    icon={"/images/icons/icon-rocket.png"}
                    className="text-[20px] min-[1701px]:text-[30px] px-[28px] py-[10px] min-[1701px]:px-[40px] min-[1701px]:py-[15px] mr-[10px] min-[1701px]:mr-[40px]"
                  />
                  {/* <div className="glow-bg-small"></div> */}
                </div>
              </div>
            </div>

            {/* <div className="flex justify-between flex-col xl:flex-row flex-1"> */}
            {/* <ImageFollowMouse /> */}
            {/* <div className="w-full h-full">
              
                <img
                  className="rounded-r-lg object-cover md:rounded-none md:rounded-r-lg  h-full"
                  src={"/images/logos/3dlogo.png"}
                  alt=""
                />
              </div> */}
            {/* </div> */}
          </div>

          <div className="flex justify-center">
            <ReadMoreBtn />
          </div>
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
