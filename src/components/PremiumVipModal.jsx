import React, { useEffect, useState } from "react";

// components
import Modal from "./Modal";
import ForgetPinForm from "./ForgetPinForm";

const PremiumVipModal = ({ car, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const [selectedOption, setSelectedOption] = useState(2);

  useEffect(() => {
    if (window.innerWidth < 575) {
      document.body.style.overflow = "hidden";
    }

    setIsVisible(true);
    setSelectedOption(2);

    return () => {
      if (window.innerWidth < 575) {
        document.body.style.overflow = "auto";
      }
      setIsVisible(false);
    };
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const modalContent = {
    vip: {
      title: "VIP yap",
      description: `İlanınız VIP bölümünde tüm ilanların üzerinde ve ${car?.brand?.name} ${car?.brand_model?.name} kategorisinde rastgele bir sırayla görünecektir.`,
      durations: [
        "1 gün / 100,00 TL",
        "5 gün / 300,00 TL",
        "15 gün / 500,00 TL",
        "30 gün / 800,00 TL",
      ],
    },
    premium: {
      title: "Premium yap",
      description:
        "İlanınız ana sayfada görünecek ve hizmet süresi bitene kadar sabit kalacaktır.",
      durations: [
        "1 gün / 140,00 TL",
        "5 gün / 400,00 TL",
        "15 gün / 900,00 TL",
        "30 gün / 1200,00 TL",
      ],
    },
  };

  const { title, description, durations } = modalContent[type] || {};

  if (!title) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-lg min-w-[330px] max-w-[455px] max-sm:max-w-[100%] max-sm:rounded-none max-sm:h-[100dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center p-6 px-[30px] pl-[22px] relative rounded-t-lg border border-b-[#f6f7fa] max-sm:p-[14px] max-sm:rounded-none max-sm:justify-center">
          {type === "vip" ? (
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="-5 -5 24 24"
              x="333"
              y="312"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.75.5h-7.5L.5 5.143 8 13.5l7.5-8.357L11.75.5zM7.39 8.53L5.374 3.177l1.535-.002 1.128 3.96 1.175-3.96 1.413.002-2.02 5.35-1.215.001z"
                fill="#FF3D00"
              />
            </svg>
          ) : (
            ""
          )}
          {type === "premium" ? (
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="-5 -4 25 24"
              x="359"
              y="312"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.56 5.7L7.5.5 4.44 5.7 0 3.1l1.875 7.15v3.25h11.25v-3.25L15 3.1l-4.44 2.6z"
                fill="#FF9F2B"
              />
            </svg>
          ) : (
            ""
          )}
          <p className="text-black font-semibold text-[18px] ml-[5px] max-sm:text-center max-sm:text-[16px] max-sm:font-medium">
            {title}
          </p>
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-[24px] right-[30px] text-[#b6b6b6] text-lg max-sm:right-[100%] max-sm:left-[15px] max-sm:top-[16px]"
          >
            ✕
          </button>
        </div>
        <div className="py-[25px] px-[30px] text-[#8d94ad] max-sm:p-[15px] max-sm:text-[#212c3a]">
          {description}
        </div>
        <div className="p-[10px] text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] border border-[#f6f7fa]">
          SATIN ALINAN SÜRE VE ÜCRET
        </div>
        <div className="px-[30px] text-[15px] text-[#212c3a] max-sm:px-[15px]">
          {durations.map((duration, index) => (
            <label
              key={index}
              className={`flex items-center cursor-pointer py-[11px] border-b border-b-[#f6f7fa] max-sm:py-[14px] ${
                index === 3 && "border-none"
              }`}
            >
              <input
                type="radio"
                name="duration"
                className="hidden peer cursor-pointer"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
              />
              <div
                className={`w-[22px] h-[22px] rounded-full border flex items-center justify-center transition ${
                  selectedOption === index
                    ? "border-[#007eff]"
                    : "border-[#eaebf2]"
                }`}
              >
                <div
                  className={`w-3 h-3 bg-[#007eff] rounded-full ${
                    selectedOption === index ? "block" : "hidden"
                  }`}
                ></div>
              </div>
              <span className="ml-[10px] text-[#212c3a]">{duration}</span>
            </label>
          ))}
        </div>
        <div className="p-[10px] text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] border border-[#f6f7fa]">
          ÖDEME YÖNTEMİNİ SEÇİN
        </div>
        <div className="py-[12px] px-[30px] text-[15px] flex items-center max-sm:p-[15px]">
          <label htmlFor="pay" className="flex items-center cursor-pointer">
            <input
              type="radio"
              id="pay"
              className="hidden peer cursor-pointer"
              checked={isSelected}
              onChange={() => setIsSelected(!isSelected)}
            />
            <div
              className={`w-[22px] h-[22px] rounded-full border flex items-center justify-center transition ${
                isSelected ? "border-[#007eff]" : "border-[#eaebf2]"
              }`}
            >
              <div
                className={`w-3 h-3 bg-[#007eff] rounded-full ${
                  isSelected ? "peer-checked:block" : "hidden"
                }`}
              ></div>
            </div>
            <span className="ml-[10px] text-[#212c3a]">
              Kredi kartıyla ödemeye devam
            </span>
          </label>
        </div>

        <div
          className={`relative py-[20px] px-[30px] w-full text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] rounded-b-lg border border-t-[#f6f7fa] max-sm:rounded-none max-sm:px-[15px] max-sm:h-[calc(100dvh-15px)]`}
        >
          <Modal>
            <Modal.Open windowName="forget-pin">
              <button className="rounded-lg text-white text-[16px] py-2 px-4 min-w-[80px] w-full h-[45px] bg-[#4b8af9] hover:bg-[#1a6af7] transition-all duration-200 max-sm:fixed max-sm:bottom-[30px] max-sm:left-0 max-sm:right-0 max-sm:mx-auto max-sm:w-[calc(100%-30px)]">
                Öde
              </button>
            </Modal.Open>
            <Modal.Window name="forget-pin">
              <ForgetPinForm />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PremiumVipModal;
