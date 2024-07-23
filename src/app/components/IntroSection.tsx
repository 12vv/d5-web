"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";

const IntroSection = () => {
  return (
    <section id="about" className="flex">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-2 sm:grid-cols-12">
          <div className="col-span-7 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
            <h1 className=" mb-4 text-xl sm:text-2xl lg:text-4xl lg:leading-normal font-extrabold bg-gradient-to-b   from-[#9800ED] to-[#6456FE] text-transparent bg-clip-text ">
              <span>互聯網軟件開發、應用開發、移動應用開發</span>
              <br></br>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
              開發各種軟件應用程序，包括網站、手機應用和其他數字平台。這些技術不斷演進，為我們的日常生活提供了無數便利亦為企業提供無限機會。
            </p>
            <div>
              <LinkBtn title={"更多業務"} url={"/#contact"} />
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="lg:w-[650px] lg:h-[650px] relative w-[250px] h-[250px]">
              <Image
                src="https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/pic1.png"
                alt="hero image"
                priority={true}
                unoptimized
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
