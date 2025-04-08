import React from "react";

const MobileButtonOption = ({ id, text, checked, handleCheckboxChange }) => {
  return (
    <div className="h-[38px] rounded-[7px] bg-white">
      <label className="inline-block h-full cursor-pointer">
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={checked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span
          className={`p-[10px] rounded-[7px] text-[14px] leading-none cursor-pointer flex justify-center items-center border h-full transition-all duration-75 ${
            checked
              ? "text-red border-red bg-[#ffe6e5]"
              : "border-[#dfe3e9] text-[#212c3a]"
          }`}
        >
          {text}
        </span>
      </label>
    </div>
  );
};

export default MobileButtonOption;
