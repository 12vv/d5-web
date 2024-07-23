"use client";
import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, description, imgUrl }: any) => {
  return (
    <section id="about" className="flex">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-2 sm:grid-cols-12">
          <div className="col-span-7 mr-0 lg:mr-32  place-self-center text-center sm:text-left justify-self-start">
            <h1 className=" mb-4 text-xl sm:text-2xl lg:text-2xl lg:leading-normal font-extrabold bg-gradient-to-b   from-[#9800ED] to-[#6456FE] text-transparent bg-clip-text ">
              <span>{title}</span>
              <br></br>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-sm mb-6">
              {description}
            </p>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src={imgUrl}
                alt="hero image"
                unoptimized
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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

export default ProjectCard;
