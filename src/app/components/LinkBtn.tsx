"use client";
import React from "react";
import Link from "next/link";

const LinkBtn = ({ title, url, className }: any) => {
  return (
    <div>
      <Link
        href={url}
        className={`tracking-wider text-center sm:text-left px-7 inline-block py-1.5 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-b from-[#9800ED] to-[#6456FE] hover:bg-slate-200 text-white ${className}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default LinkBtn;
