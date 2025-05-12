import { useState } from "react";
const PaymentType = ({ label, type, setPaymentOptions, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (type) => {
    setPaymentOptions((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleChange = (type) => {
    setIsChecked(!isChecked);
    handleCheckboxChange(type); // Call the passed onChange function
  };
  return (
    <div className="h-full bg-white rounded-lg ">
      <label className="inline-block cursor-pointer h-full w-full">
        <input
          type="checkbox"
          className="sr-only"
          name={name}
          value={type}
          checked={isChecked}
          onChange={() => handleChange(type)}
        />
        <span
          className={`py-[15px] px-[6px] max-xl:px-[10px] rounded-lg text-[15px] leading-none cursor-pointer flex flex-1 justify-center items-center border transition-all duration-100 hover:border-[#8F93AD] ${
            !isChecked && "border-gray-300"
          } h-full ${
            isChecked ? "text-red border-red hover:border-red bg-[#ffe6e5]" : ""
          }`}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default PaymentType;
