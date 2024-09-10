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

const RectButton: React.FC<RoundedButtonProps> = ({
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
      className={`rect-button glow-on-hover2 ${className}`}
      style={{
        color: color || "white",
        backgroundColor: backgroundColor || "",
        backgroundImage: backgroundImage || "",
      }}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" className="w-6 h-6 mr-2" />}
      {text}
    </button>
  );
};

export default RectButton;
