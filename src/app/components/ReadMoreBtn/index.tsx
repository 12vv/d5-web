import React from "react";
import { DownOutlined } from "@ant-design/icons";

const ReadMoreBtn = ({ label = "向下滑动了解更多", offset = 0 }) => {
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: window.pageYOffset + windowHeight + offset,
      behavior: "smooth",
    });
  };

  return (
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
  );
};

export default ReadMoreBtn;
