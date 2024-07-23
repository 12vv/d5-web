"use client";
import React from "react";
import Link from "next/link";

const CardBlock = ({ content, img }: any) => {
  return (
    <div className="block max-w-[14rem]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat flex justify-center">
        <img className="rounded-t-lg " src={img} alt="" />
      </div>
      <div className="p-6">
        <p className="text-base text-center text-neutral-200 dark:text-neutral-200">
          {content}
        </p>
      </div>
    </div>
  );
};

export default CardBlock;
