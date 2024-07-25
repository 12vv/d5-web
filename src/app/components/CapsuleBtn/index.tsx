import type { NextPage } from "next";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full shadow-[0px_4px_4px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(4px)] rounded-[20px] [background:linear-gradient(180deg,_rgba(159,_187,_215,_0.6),_rgba(114,_100,_214,_0.6))] overflow-hidden flex flex-col items-end justify-start pt-[34.2px] px-4 pb-0 box-border relative gap-[53.2px] leading-[normal] tracking-[normal] text-justify text-[36px] text-white font-abel ${className}`}
    >
      <div className="mt-[-93.2px] self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-0 pl-px gap-[17.3px] shrink-0">
        <img className="h-10 w-10 relative" alt="" src="/group-121730.svg" />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[4.5px] box-border min-w-[201px]">
          <img
            className="self-stretch h-[26.5px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/data-labeling-platform.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-1.5 box-border max-w-full">
        <div className="h-[67.8px] flex-1 relative shrink-0 max-w-full">
          <div className="absolute top-[0px] left-[0px] [filter:blur(86.7px)] rounded-[179.15px] bg-darkviolet w-[358.3px] h-[357.1px]" />
          <a className="[text-decoration:none] absolute top-[2px] left-[152.1px] leading-[32px] text-[inherit] z-[1]">
            点击试用
          </a>
        </div>
      </div>
      <img
        className="w-[54.3px] h-[54.3px] absolute !m-[0] bottom-[22.6px] left-[83.1px] z-[1]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default Root;
