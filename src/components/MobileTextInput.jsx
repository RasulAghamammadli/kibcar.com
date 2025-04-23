import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// icons
import clear from "../assets/icons/mobile-cancel.svg";

const MobileTextInput = ({
  type,
  label,
  name,
  formData,
  handleChange,
  handleInput,
  error,
}) => {
  const location = useLocation();
  const [isFocused, setIsFocused] = useState(false);
  const isLabelFloating = isFocused || formData[name];

  const handleClear = () => {
    handleChange({ target: { name, value: "" } });
  };

  // stop scroll for number input
  const handleWheel = (event) => {
    event.target.blur();
  };

  // edit page
  const isEditAdvertisement = /^\/edit-advertisement\/\d+$/.test(
    location.pathname
  );

  return (
    <div className="relative flex flex-col">
      {name === "phone" && (isFocused || formData[name]) ? (
        <span className="absolute top-[31px] text-[#212c3a] text-[15px] leading-4 pointer-events-none">
          +90
        </span>
      ) : null}
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name] || ""}
        onChange={name === "phone" ? handleInput : handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onWheel={name === "phone" ? handleWheel : null}
        className={`w-full h-[54px] pr-[34px] text-[#212c3a] rounded-none bg-white text-[15px] cursor-pointer outline-none
            ${
              isLabelFloating
                ? "pt-[31px] pb-[8px] leading-0"
                : "pt-[16px] py-[16px]"
            }
            ${
              error
                ? "border-b border-b-[#ff586d]"
                : name === "vin_code" ||
                  name === "phone" ||
                  (name === "name" && isEditAdvertisement)
                ? "border-b-0"
                : "border-b border-b-[#eaebf2]"
            }
            ${name === "phone" ? "pl-[34px]" : ""}
          `}
        required
      />
      <label
        htmlFor={name}
        className={`absolute text-[#8d94ad] transition-all duration-200 cursor-pointer ${
          isLabelFloating ? "text-[13px] top-[8px]" : "text-[15px] top-[16px]"
        }`}
      >
        {label}
      </label>
      {formData[name] && (
        <img
          src={clear}
          alt=""
          className="absolute right-2 top-[19px] w-4 h-4 cursor-pointer"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default MobileTextInput;
