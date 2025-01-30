import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ViaSms = ({ car, showNewModal }) => {
  const { id } = useParams();
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className="min-w-[330px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          PIN kurtarma
        </p>
      </div>
      <div className="p-[20px] py-[15px]">
        <p className="text-[#333] text-[14px] mb-[10px] leading-[20px]">
          SMS ile PIN alma.
        </p>
        <p className="text-[#333] text-[14px] mb-[10px] leading-[20px]">
          Hizmetin fiyatı - <span className="font-bold">100 TL</span>
        </p>
        <p className="text-[#037f03] text-[14px] leading-[20px]">
          Bir{" "}
          <a
            href={`/car-details/${id}`}
            className="text-[#1e6e9d] underline hover:no-underline"
          >
            {car?.brand?.name} {car?.brand_model?.name}
          </a>{" "}
          reklamı için ödeme yapıyorsunuz.
        </p>
        <div className="text-[14px] mt-[16px]">
          <label
            htmlFor="pay"
            className="flex items-center cursor-pointer mb-[10px]"
          >
            <input
              type="radio"
              id="pay"
              className="hidden peer cursor-pointer"
              checked={isSelected}
              onChange={() => setIsSelected(!isSelected)}
            />
            <div
              className={`w-[14px] h-[14px] rounded-full border flex items-center justify-center transition ${
                isSelected ? "border-[#007eff]" : "border-[#eaebf2]"
              }`}
            >
              <div
                className={`w-2 h-2 bg-[#007eff] rounded-full ${
                  isSelected ? "peer-checked:block" : "hidden"
                }`}
              ></div>
            </div>
            <span className="ml-[10px] text-[#212c3a]">Banka kartı</span>
          </label>
          <label htmlFor="pin" className="flex items-center cursor-pointer">
            <input
              type="radio"
              id="pin"
              className="hidden peer cursor-pointer"
              checked={isSelected}
              onChange={() => setIsSelected(!isSelected)}
            />
            <div
              className={`w-[14px] h-[14px] rounded-full border flex items-center justify-center transition ${
                isSelected ? "border-[#007eff]" : "border-[#eaebf2]"
              }`}
            >
              <div
                className={`w-2 h-2 bg-[#007eff] rounded-full ${
                  isSelected ? "peer-checked:block" : "hidden"
                }`}
              ></div>
            </div>
            <span className="ml-[10px] text-[#212c3a]">
              SMS ile PIN alma / 100.00 TL
            </span>
          </label>
          <button
            type="button"
            className="rounded-md text-white text-[16px] my-[8px] mt-[16px] py-2 px-[10px] h-[40px] bg-[#4b8af9] hover:bg-[#1a6af7] transition-all duration-200"
            onClick={() => showNewModal("success-send-email")}
          >
            Öde
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViaSms;
