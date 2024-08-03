import React from 'react';

// Button component nhận vào các thuộc tính như children, type, và các thuộc tính khác như className, bgColor, và textColor
const Button = ({ children, type, bgColor, textColor, className, ...props }) => {
  // CSS cơ bản và các thuộc tính
  const buttonClass = `w-full py-2 px-4 font-bold rounded focus:outline-none ${bgColor} ${textColor} ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      {...props} 
    >
      {children} 
    </button>
  );
};

export default Button;
