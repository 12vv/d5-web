"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardBlock from "./cardblock";
import IconTitle from "./iconTitle";
import LinkBtn from "../components/LinkBtn";

const ExampleSection = () => {
  return (
    <section id="example" className="lg:pt-16 lg:pb-0">
      <IconTitle title="部分案例" />
      <div className="container mt-18 mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_26.666666%)] justify-center place-items-center w-full">
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/pic2.png"
            }
            content={"電商及各類應用網站"}
          />
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/pic4.jpg"
            }
            content={"餐飲系統"}
          />
          <CardBlock
            img={
              "https://static-1318552943.cos.ap-singapore.myqcloud.com/macro/ui/pic6.jpg"
            }
            content={"手機應用APP/小程式開發"}
          />
        </div>
      </div>

      <div className="container mt-24 mx-auto px-12 py-4 flex flex-col content-center justify-center text-center">
        這些領域都在不斷發展，為我們的生活和工作帶來了許多機遇和挑戰。如果您對其中某個領域有更具體的問題，歡迎隨時詢問！
        <LinkBtn title={"查看更多"} url={"/projects"} className="mt-10" />
      </div>
    </section>
  );
};

export default ExampleSection;
