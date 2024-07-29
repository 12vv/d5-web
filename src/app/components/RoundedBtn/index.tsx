import React from "react";
import "./index.css";

interface RoundedButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  className?: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  onClick,
  color,
  backgroundColor,
  backgroundImage,
  className,
}) => {
  return (
    <button
      className={`rounded-button ${className}`}
      style={{
        width: "150px",
        height: "50px",
        color: color || "white",
        backgroundColor: backgroundColor || "",
        backgroundImage: backgroundImage || "",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
