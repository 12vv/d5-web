import React from "react";
import Image from "next/image";

const LearnMore = () => {
  return (
    <div className="container mx-auto px-12 py-4">
      <div className="text-[30px] 2xl:text-[35px]">了解更多</div>
      <div className="text-[30px] 2xl:text-[35px]">关于第五维度</div>
      <div className="flex flex-row">
        <div className="2xl:w-[550px] 2xl:h-[850px] relative w-[350px] h-[450px] mt-[20px] mr-[10px]">
          <Image
            style={{ display: "inline-block" }}
            onClick={() => {
              window.location.href =
                "https://mp.weixin.qq.com/s/3xRidLs6CAJAlKoirey8iw";
            }}
            src="/images/p1.png"
            alt="hero image"
            priority={true}
            unoptimized
            className="rounded-2xl cursor-pointer"
            width={500}
            height={500}
          />
        </div>

        <div className="2xl:w-[550px] 2xl:h-[850px] relative w-[350px] h-[450px] mt-[20px] ">
          <Image
            style={{ display: "inline-block" }}
            onClick={() => {
              window.location.href =
                "https://mp.weixin.qq.com/s/wd_B5x231U0LukSFeFCnpA";
            }}
            src="/images/p2.png"
            alt="hero image"
            priority={true}
            unoptimized
            className="rounded-2xl cursor-pointer"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
