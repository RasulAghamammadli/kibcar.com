import React from "react";

const MobileSwitchOption = ({
  id,
  title,
  description,
  checked,
  handleCheckboxChange,
}) => {
  return (
    <label htmlFor={id} className="block pt-[12px] px-[15px]">
      <div className="flex items-center justify-between mb-[12px]">
        <h3 className="text-[15px] text-[#212c3a]">{title}</h3>
        <label className="relative inline-block w-[52px] h-[32px] cursor-pointer">
          <input
            type="checkbox"
            id={id}
            name={id}
            checked={checked}
            onChange={handleCheckboxChange}
            className="sr-only peer"
          />
          <div className="w-[51px] h-[31px] bg-[#78788029] rounded-full peer-checked:bg-[#3db460] transition-colors duration-300 ease-in-out"></div>
          <div className="absolute top-[2px] left-[2px] w-[27px] h-[27px] bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-[20px]"></div>
        </label>
      </div>
      <p
        className={`whitespace-normal text-[#8d94ad] text-[14px] leading-[17px] pb-[10px] border-b border-[#eaebf2] ${
          id === "is_painted" ? "border-b-0" : ""
        }`}
      >
        {description}
      </p>
    </label>
  );
};

export default MobileSwitchOption;
