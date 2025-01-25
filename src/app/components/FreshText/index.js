import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./style.css";

export default function FreshText(props) {
  const { text } = props;
  useEffect(() => {
    gsap.config({ trialWarn: false });
    console.clear();

    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType("#target", { type: "chars" }); // Use SplitType

    split.chars.forEach((chars, index) => {
      console.log("line", chars, "index", index);
      const target = chars;
      console.log("target", target); // Get the DOM element within the line
      const anim = gsap.fromTo(
        target,
        { xPercent: 0, delay: 0.5, color: "#808080" }, // Initial state
        {
          xPercent: 0,
          delay: 1,
          color: "#FFFFFF", // Change color to white
          ease: "none",
          scrollTrigger: {
            trigger: target,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              // Change color as you scroll
              const progress = self.progress.toFixed(1) + 0.16;
              console.log("progress", progress);
              gsap.set(target, {
                color: `rgba(250, 250, 250, ${progress})`,
              });
            },
          },
        }
      );
    });
  }, []);

  return (
    <div className="parent">
      <div className="child">
        <h2 id="target" className="heading2">
          <div className="text">
            {/* {text} */}
            {/* 自研数据清洗系统{" "}
                    <span className="text-[#FFE500]">fresh ideas</span>, 打造开箱即用的数据生成与标注平台 */}

            <p className="mt-2">第五维度专注于利用自研算法</p>
            <br />
            <p className="mt-2">将AI技术融入数据标注与整理，将学术科研</p>
            <br />
            <p className="mt-2">成果转化为人人可用的定制化数据标注工具</p>
            <br />
            <p className="mt-2">与生成式数据整理工具</p>
            {/* <p className="mt-2">自研数据清洗系统</p>{" "}<br />
                        <p className="mt-2">打造开箱即用的数据生成与标注平台</p> */}
          </div>
        </h2>
      </div>
      {/* Rest of your code */}
    </div>
  );
}
