import React, { useState } from "react";
import "./index.css"; // 样式文件

interface CircleIconTextProps {
  img: any;
  content: string;
  title: string;
}

const CircleIconText: React.FC<CircleIconTextProps> = ({
  img,
  content,
  title,
}) => {
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  // const handleMouseMove = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   // 获取鼠标位置并计算偏移量，范围在 [-15px, 15px] 之间
  //   const { offsetX, offsetY } = event.nativeEvent;
  //   const width = event.currentTarget.offsetWidth;
  //   const height = event.currentTarget.offsetHeight;

  //   const x = ((offsetX - width / 2) / (width / 2)) * 15; // 按比例计算x轴偏移量
  //   const y = ((offsetY - height / 2) / (height / 2)) * 15; // 按比例计算y轴偏移量

  //   setOffset({ x, y });
  // };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const width = event.currentTarget.offsetWidth;
    const height = event.currentTarget.offsetHeight;

    // 计算相对于圆心的鼠标位置
    const centerX = width / 2;
    const centerY = height / 2;
    const x = offsetX - centerX;
    const y = offsetY - centerY;

    // 计算鼠标与圆心之间的角度
    const angleDeg = Math.atan2(y, x) * (180 / Math.PI); // 将弧度转换为角度
    setAngle(angleDeg);

    // 计算偏移量，模拟跟随鼠标的移动效果
    const offsetXPercent = (x / centerX) * 15;
    const offsetYPercent = (y / centerY) * 15;
    setOffset({ x: offsetXPercent, y: offsetYPercent });
  };

  return (
    <div
      className="circle-container " // block  w-[280px] h-[280px] 2xl:w-[300px] 2xl:h-[300px] rounded-[50%] border-[1px] p-8 flex justify-center items-center flex-col
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setOffset({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: hovered
          ? `translate(${offset.x}px, ${offset.y}px)`
          : "translate(0, 0)",

        // background: `conic-gradient(from ${angle}deg, red, #bbb)`,
        // @ts-ignore
        "--border-angle": `${angle}deg`,
      }}
    >
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

export default CircleIconText;
