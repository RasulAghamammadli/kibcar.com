import { useState } from "react";
import chevronDown from "../assets/icons/mobile-chevron-down.svg";

const MobileMarchRadioSelector = ({ label, name, formData, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["km", "mi"];
  const selectedValue = formData[name] || "";

  const handleSelect = (value) => {
    handleChange({ target: { name, value } });
    setIsOpen(false);
  };

  const getDisplayLabel = (val) => {
    if (val === "mi") return "mil";
    return val;
  };

  return (
    <>
      <div className="relative flex">
        <input
          type="text"
          id={name}
          name={name}
          value={getDisplayLabel(selectedValue)}
          className="w-full h-[54px] text-[#212c3a] bg-white border-b border-b-[#eaebf2] rounded-none text-[15px] cursor-pointer outline-none py-[16px] pl-[10px]"
          onClick={() => setIsOpen(true)}
          readOnly
        />
        <img
          src={chevronDown}
          alt=""
          onClick={() => setIsOpen(true)}
          className="absolute right-2 top-[19px] w-4 h-4 cursor-pointer"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 flex justify-center items-end z-50 transition-all duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white w-full max-h-[88dvh] rounded-tl-lg rounded-tr-lg shadow-lg px-[15px] py-[20px] opacity-100 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[60px] flex items-end pb-[10px] justify-center">
              <h2 className="font-medium text-[18px]">{label}</h2>
              <div
                className="cursor-pointer absolute right-[15px] top-[25px] font-medium text-[18px] text-[#8b96ad]"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </div>
            </div>

            <ul className="overflow-y-auto pb-[70px]">
              {options.map((option) => (
                <li
                  className="flex items-center cursor-pointer"
                  key={option}
                  onClick={() => handleSelect(option)}
                >
                  <label className="cursor-pointer flex items-center justify-between w-full text-left pr-[4px] py-[14px] text-[15px] border-b border-[#f1f3f7]">
                    {getDisplayLabel(option)}
                    <input
                      type="radio"
                      className="hidden peer cursor-pointer"
                      checked={selectedValue === option}
                      onChange={() => handleSelect(option)}
                    />
                    <div
                      className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition ${
                        selectedValue === option
                          ? "border-red"
                          : "border-[#eaebf2]"
                      }`}
                    >
                      <div
                        className={`w-[10px] h-[10px] bg-red rounded-full ${
                          selectedValue === option ? "block" : "hidden"
                        }`}
                      ></div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMarchRadioSelector;
