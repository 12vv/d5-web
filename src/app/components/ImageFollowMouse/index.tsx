import { useState } from "react";
import "./index.css";

export const ImageFollowMouse = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    // 获取鼠标相对于图片中心的偏移
    const offsetX = clientX - (rect.left + rect.width / 2);
    const offsetY = clientY - (rect.top + rect.height / 2);

    // 根据偏移值计算旋转角度，放大倍率可以根据需求调整
    const rotateX = (offsetY / rect.height) * 20; // 20 度的范围
    const rotateY = (offsetX / rect.width) * -20; // 反方向旋转

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    // 鼠标移出时重置旋转
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="image-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
      }}
    >
      <img src="/images/logos/3ddlogo.svg" alt="3D Image" />
    </div>
  );
};
