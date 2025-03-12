import React from "react";

export const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
