import React, { useState, useEffect } from "react";

const MobileFeatureSelector = ({ options, selectedOptions, handleChange }) => {
  const [selected, setSelected] = useState(selectedOptions);

  useEffect(() => {
    setSelected(selectedOptions);
  }, [selectedOptions]);

  const handleSelection = (value) => {
    const isSelected = selected.includes(value);
    const newSelection = isSelected
      ? selected.filter((id) => id !== value)
      : [...selected, value];

    setSelected(newSelection);
    handleChange(value, !isSelected);
  };

  return (
    <div className="flex flex-wrap gap-[10px]">
      {options.map((option) => (
        <div key={option.id} className="h-[38px] rounded-[7px] bg-white">
          <label className="inline-block h-full cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              name="optionSelector"
              value={option.id}
              checked={selected.includes(option.id)}
              onChange={() => handleSelection(option.id)}
            />
            <span
              className={`p-[10px] rounded-[7px] text-[14px] leading-none cursor-pointer flex justify-center items-center border h-full transition-all duration-75 ${
                selected.includes(option.id)
                  ? "text-red border-red bg-[#ffe6e5]"
                  : "border-[#dfe3e9] text-[#212c3a]"
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

export default MobileFeatureSelector;
