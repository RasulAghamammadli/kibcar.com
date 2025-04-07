import React, { useState, useEffect } from "react";

const MobileOptionSelector = ({ options, selectedOption, handleChange }) => {
  const [selected, setSelected] = useState(selectedOption);

  useEffect(() => {
    setSelected(selectedOption);
  }, [selectedOption]);

  const handleSelection = (value) => {
    setSelected(value);
    handleChange(value);
  };

  return (
    <div className="flex flex-wrap gap-[10px]">
      {options.map((option) => (
        <div key={option.id} className="h-[38px] rounded-[7px] bg-white">
          <label className="inline-block h-full cursor-pointer">
            <input
              type="radio"
              className="sr-only"
              name="optionSelector"
              value={option.id}
              checked={selected === option.id}
              onChange={() => handleSelection(option.id)}
            />
            <span
              className={`p-[10px] rounded-[7px] text-[14px] leading-none cursor-pointer flex justify-center items-center border h-full transition-all duration-75 ${
                selected !== option.id
                  ? "border-[#dfe3e9] text-[#212c3a]"
                  : "text-red border-red bg-[#ffe6e5]"
              }`}
            >
              {option.name}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default MobileOptionSelector;
