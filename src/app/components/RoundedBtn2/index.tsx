import React from "react";
import "./index.css";

interface RoundedButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  className?: string;
  icon?: any;
}

const RoundedButton2: React.FC<RoundedButtonProps> = ({
  text,
  onClick,
  color,
  backgroundColor,
  backgroundImage,
  className,
  icon,
}) => {
  return (
    <button
      className={`rounded-button glow-on-hover ${className}`}
      style={{
        // width: "150px",
        // height: "50px",
        color: color || "white",
        backgroundColor: backgroundColor || "",
        backgroundImage: backgroundImage || "",
      }}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" className="w-8 h-8 mr-2" />}
      {text}
    </button>
  );
};

export default RoundedButton2;
