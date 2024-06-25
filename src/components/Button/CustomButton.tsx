import React from "react";

interface ButtonProps {
  title: string;
  className?: any;
  onClick?: () => void;
}

const CustomButton = ({ title, className, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-blue-400 rounded-xl py-2 text-white ${className} text-center shadow-xl hover:cursor-pointer`}
    >
      {title}
    </div>
  );
};

export { CustomButton };
