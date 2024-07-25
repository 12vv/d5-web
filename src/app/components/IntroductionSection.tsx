"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkBtn from "./LinkBtn";
import "./index.css";
import VerticalTab from "../components/VerticalTab";

const IntroductionSection = () => {
  const tabs = [
    <div style={{ height: "100%", width: "100%" }}>
      <p>
        杭州第五维度有限责任公司是一家成立于2024年的初创公司，专注于从数据角度提升人工智能产品的安全性和可靠性
      </p>
    </div>,
    <div style={{ height: "100%", width: "100%" }}>Tab 2 Content</div>,
    <div style={{ height: "100%", width: "100%" }}>Tab 3 Content</div>,
  ];

  return (
    <div className="container mx-auto mt-44 py-4 px-4 header-section">
      <div className="flex items-center  rounded-lg  md:flex-row justify-between pt-5 2xl:pt-[140px] w-full">
        <div>
          <img
            className="h-[160px] lg:h-[290px] 2xl:h-[600px] rounded-r-lg object-cover md:rounded-none md:rounded-r-lg"
            src={"/images/logos/logo-big.png"}
            alt=""
          />
        </div>

        <div className="flex items-center flex-col">
          <div className="flex mb-20">
            <img
              className="mr-10 w-[250px] 2xl:w-[400px]"
              src="/images/text.svg"
            />
            <img
              className=" w-[150px] 2xl:w-[250px]"
              src="/images/text-en.svg"
            />
          </div>
          <div>
            <VerticalTab tabs={tabs} interval={2000} />
          </div>
          <div className="sc-28ff5a11-6 fwReyO flex mt-20">
            <button className="sc-28ff5a11-7 ciVYpW" key={1}>
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="content-icons outliner"
                src="/images/icons/Vector1.svg"
              />
            </button>
            <button className="sc-28ff5a11-7 eGucya" key={2}>
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="content-icons chat"
                src="/images/icons/Vector2.svg"
              />
            </button>
            <button className="sc-28ff5a11-7 eGucya" key={3}>
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="content-icons ai"
                src="/images/icons/Vector3.svg"
              />
            </button>
            <button className="sc-28ff5a11-7 eGucya" key={4}>
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="content-icons rewrite"
                src="/images/icons/Vector4.svg"
              />
            </button>
            <button className="sc-28ff5a11-7 eGucya" key={5}>
              <img
                alt=""
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="content-icons summarize"
                src="/images/icons/Vector5.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
