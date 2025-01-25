import React, { useEffect, useRef, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const ReadMoreBtn = ({ label = "向下滑动了解更多", offset = 0 }) => {
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: window.pageYOffset + windowHeight + offset,
      behavior: "smooth",
    });
  };

  const [showIcon, setShowIcon] = useState(true); // 控制导航栏的显示或隐藏
  const lastScrollY = useRef(0); // 保存上一次的滚动位置

  useEffect(() => {
    // 监听窗口的滚动事件
    window.addEventListener("scroll", listenScroll);

    // 组件卸载时清除事件监听
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);

  const listenScroll = () => {
    const currentScrollY = window.scrollY;

    // 如果向下滚动，隐藏导航栏；如果向上滚动，显示导航栏
    if (currentScrollY > lastScrollY.current) {
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }

    lastScrollY.current = currentScrollY;
  };

  return (
    showIcon && (
      <button
        onClick={handleScroll}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          color: "#ffffff6e",
        }}
        className="flex items-center flex-col"
      >
        {label}
        <DownOutlined style={{ marginTop: 10 }} />
      </button>
    )
  );
};

export default ReadMoreBtn;
