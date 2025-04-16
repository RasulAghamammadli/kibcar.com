import { useEffect, useState } from "react";

// icons
import chevronDown from "../assets/icons/mobile-chevron-down.svg";

const MobileCurrencySelector = ({ label, name, formData, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    formData.price_currency || "usd"
  );

  const options = [
    { id: "usd", name: "USD" },
    { id: "eur", name: "EUR" },
    { id: "stg", name: "STG" },
  ];

  const handleSelect = (value) => {
    setSelectedValue(value);
    handleChange({ target: { name: name, value } });
    setIsOpen(false);
  };

  // set default 'usd'
  useEffect(() => {
    if (!formData.price_currency) {
      handleChange({ target: { name: "price_currency", value: "usd" } });
    }
  }, [formData.price_currency, handleChange]);

  return (
    <>
      <div className="relative flex">
        <input
          type="text"
          id={name}
          name={name}
          value={options.find((o) => o.id === selectedValue)?.name || ""}
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

      {/* Modal */}
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
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                >
                  <label className="cursor-pointer flex items-center justify-between w-full text-left pr-[4px] py-[14px] text-[15px] border-b border-[#f1f3f7]">
                    {option.name}
                    <input
                      type="radio"
                      className="hidden peer cursor-pointer"
                      checked={selectedValue === option.id}
                      onChange={() => handleSelect(option.id)}
                    />
                    <div
                      className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition ${
                        selectedValue === option.id
                          ? "border-red"
                          : "border-[#eaebf2]"
                      }`}
                    >
                      <div
                        className={`w-[10px] h-[10px] bg-red rounded-full ${
                          selectedValue === option.id ? "block" : "hidden"
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

export default MobileCurrencySelector;
