import React from "react";

const Button = ({
  className = "",
  variant = "default",
  children,
  ...props
}) => {
  let gradient = "bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E]";
  if (variant === "orange") {
    gradient = "bg-gradient-to-r  from-[#FF7A7A] via-[#F65900] to-[#F65900]";
  }
  return (
    <button
      className={`text-white font-semibold text-base 
        rounded-lg px-6 py-2 shadow-xl shadow-[#FFAE0042]
         ${gradient}
          active:scale-95 transition-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
