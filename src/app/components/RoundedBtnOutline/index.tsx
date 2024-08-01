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

const RoundedButtonOutline: React.FC<RoundedButtonProps> = ({
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
      className={`rounded-button glow-on-hover2 ${className}`}
      style={{
        // width: "150px",
        // height: "50px",
        color: color || "white",
        backgroundColor: backgroundColor || "",
        backgroundImage: backgroundImage || "",
      }}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" className="w-6 h-6 mr-4" />}
      {text}
    </button>
  );
};

export default RoundedButtonOutline;
