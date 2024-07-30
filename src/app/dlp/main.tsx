"use client";
import React from "react";
import Image from "next/image";
import "../components/index.css";
import "./index.css";
import RoundedButton from "../components/RoundedBtn";

const DLPMainSection = () => {
  return (
    <div className="dlp dlp-container mx-auto mt-20 py-4 px-4">
      <div className="background-section">
        <div className="glow-bg-2 bg-contain bg-[80%] 2xl:bg-[60%]"></div>
        <div className="content">
          <h1 className="title text-[80px] 2xl:text-[110px] font-semibold text-[#FFFFFF] text-opacity-90">
            <>Data Labeling Platform</>
          </h1>
          <h2 className="text-[28px] mt-2 font-semibold">高效数据标注平台</h2>
          <div className="flex items-center justify-center mt-10">
            <RoundedButton
              text={"登录"}
              onClick={() => console.log("登录")}
              className="mr-10"
              backgroundImage="linear-gradient(to right, #86A0FF, #001AFF)"
            />
            <RoundedButton
              text={"操作演示"}
              onClick={() => console.log("操作演示")}
              backgroundColor={"rgba(206, 206, 206, 0.52)"}
            />
          </div>
        </div>
      </div>

      <div className="flex pt-20 2xl:pt-20 items-center justify-center">
        <div className="w-[900px] 2xl:w-[1200px] video-wrapper">
          <video
            width="100%"
            height="auto"
            preload="metadata"
            autoPlay
            muted
            playsInline
            loop
          >
            <source
              src="https://www.taskade.com/static_images/landing/agent-multi-background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="glow-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default DLPMainSection;
