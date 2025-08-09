import React from "react";

const Button = ({ className = "", children, ...props }) => {
  return (
    <button
      className={`text-white font-semibold text-base 
        rounded-lg px-6 py-2 shadow-xl shadow-[#FFAE0042]
         bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E]
          active:scale-95 transition-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
