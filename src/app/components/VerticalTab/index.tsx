import React, { useState, useEffect, ReactNode } from "react";
import "./index.css";

interface VerticalTabsProps {
  tabs: ReactNode[];
  interval?: number;
}

const VerticalTab: React.FC<VerticalTabsProps> = ({
  tabs,
  interval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const switchTab = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    };

    const intervalId = setInterval(switchTab, interval);

    return () => clearInterval(intervalId);
  }, [tabs.length, interval]);

  return (
    <div className="vertical-tabs">
      <div
        className="tabs-container w-[400px]"
        style={{
          transform: `translateY(-${(activeIndex * 100) / tabs.length}%)`,
        }}
      >
        {tabs.map((tab, index) => (
          <div key={index} className="tab-content">
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTab;
