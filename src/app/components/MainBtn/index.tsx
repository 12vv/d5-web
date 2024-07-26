import type { NextPage } from "next";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`p-5 w-[250px] 2xl:w-[400px] flex flex-row items-center justify-center shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(4px)] rounded-[20px] [background:linear-gradient(180deg,_rgba(159,_187,_215,_0.6),_rgba(114,_100,_214,_0.6))] overflow-hidden box-border leading-[normal] tracking-[normal]  text-[36px] text-white font-abel ${className}`}
    >
      <div className=" box-border max-w-full">
        <img
          className=""
          loading="lazy"
          alt=""
          src="/images/icons/icon-rocket.png"
        />
      </div>

      <div className="max-w-full text-[30px] 2xl:text-[50px]">
        <a className="[text-decoration:none] z-[1]">点击试用</a>
      </div>
    </div>
  );
};

export default Root;
