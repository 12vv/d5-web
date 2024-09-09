"use client";
import React from "react";
import Link from "next/link";

const RoundCardBlock = ({ title, content, img }: any) => {
  return (
    <div className="block w-[250px] h-[250px] 2xl:w-[300px] 2xl:h-[300px] rounded-[50%] border-[1px] p-8 flex justify-center items-center flex-col">
      <div className="relative overflow-hidden bg-cover bg-no-repeat flex justify-center">
        <img
          className="w-[50px] h-[50px] 2xl:w-[80px] 2xl:h-[80px]"
          src={img}
          alt=""
        />
      </div>
      <div className="m-4">
        <p className="text-[20px] 2xl:text-[30px] text-center pb-4">{title}</p>
        <p className="text-center text-neutral-200 dark:text-neutral-200 text-[13px] 2xl:text[18px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default RoundCardBlock;
