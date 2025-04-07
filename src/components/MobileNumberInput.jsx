import React from "react";

// icons
import clear from "../assets/icons/mobile-cancel.svg";

const MobileNumberInput = ({ label, name, formData, handleChange }) => {
  // stop scroll
  const handleWheel = (event) => {
    event.target.blur();
  };

  const handleClear = () => {
    handleChange({ target: { name, value: "" } });
  };

  return (
    <div className="relative hidden max-sm:flex">
      <input
        type="number"
        id={name}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        onWheel={handleWheel}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/\./g, "");
          if (name === "enginePower") {
            if (e.target.value.length > 4) {
              e.target.value = e.target.value.slice(0, 4);
            }
          }
        }}
        className={`w-full h-[54px] text-[#212c3a] bg-white border-b border-b-[#eaebf2] text-[15px] cursor-pointer outline-none ${
          formData[name]
            ? "pt-[31px] pb-[8px] leading-0"
            : "pt-[16px] py-[16px]"
        }`}
      />
      <label
        htmlFor={name}
        className={`absolute text-[#8d94ad] transition-all duration-200 cursor-pointer ${
          formData[name] ? "text-[13px] top-[8px]" : "text-[15px] top-[16px]"
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

export default MobileNumberInput;
