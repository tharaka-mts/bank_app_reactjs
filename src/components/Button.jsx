import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 rounded-[10px] px-6 bg-blue-gradient font-poppins font-regular text-[17px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
