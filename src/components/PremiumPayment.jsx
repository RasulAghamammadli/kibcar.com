import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PremiumPayment = ({ onClose }) => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const [selectedOption, setSelectedOption] = useState(2);
  const [iframeUrl, setIframeUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (window.innerWidth < 575) {
      document.body.style.overflow = "hidden";
    }
    setIsVisible(true);
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

  const durations = [
    { id: 1, label: "1 gün / 140,00 TL" },
    { id: 2, label: "5 gün / 400,00 TL" },
    { id: 3, label: "15 gün / 900,00 TL" },
    { id: 4, label: "30 gün / 1200,00 TL" },
  ];

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/premium`,
        {
          announcement_id: Number(id),
          service_id: durations[selectedOption].id,
        }
      );

      if (response.data.success) {
        const token = response.data.token;

        // iframe url
        const paytrIframeUrl = `https://www.paytr.com/odeme/guvenli/${token}`;
        setIframeUrl(paytrIframeUrl);
      }
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      setErrorMsg("Ödeme sırasında bir hata oluştu, lütfen tekrar deneyiniz.");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeModal}
    >
      {!iframeUrl ? (
        <div
          className="bg-white rounded-lg shadow-lg min-w-[330px] max-w-[455px] max-sm:max-w-[100%] max-sm:rounded-none max-sm:h-[100dvh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center p-6 px-[30px] pl-[22px] relative rounded-t-lg border border-b-[#f6f7fa] max-sm:p-[14px] max-sm:rounded-none max-sm:justify-center">
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
            <p className="text-black font-semibold text-[18px] ml-[5px] max-sm:text-center max-sm:text-[16px] max-sm:font-medium">
              Premium yap
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
            İlanınız ana sayfada görünecek ve hizmet süresi bitene kadar sabit
            kalacaktır.
          </div>
          <div className="p-[10px] text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] border border-[#f6f7fa]">
            SATIN ALINAN SÜRE VE ÜCRET
          </div>
          <div className="px-[30px] text-[15px] text-[#212c3a] max-sm:px-[15px]">
            {durations.map((duration, index) => (
              <label
                key={duration.id}
                className="flex items-center cursor-pointer py-[11px] border-b border-b-[#f6f7fa]"
              >
                <input
                  type="radio"
                  name="duration"
                  className="hidden peer"
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
                <span className="ml-[10px] text-[#212c3a]">
                  {duration.label}
                </span>
              </label>
            ))}
          </div>
          <div className="p-[10px] text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] border border-[#f6f7fa]">
            ÖDEME YÖNTEMİNİ SEÇİN
          </div>
          <div className="py-[12px] px-[30px] text-[15px] flex items-center max-sm:p-[15px]">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
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
          <div className="relative py-[20px] px-[30px] w-full text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] rounded-b-lg border border-t-[#f6f7fa] max-sm:rounded-none max-sm:px-[15px] max-sm:h-[calc(100dvh-15px)]">
            <button
              type="button"
              className="rounded-lg text-white text-[16px] py-2 px-4 min-w-[80px] w-full h-[45px] bg-[#4b8af9] hover:bg-[#1a6af7] transition-all duration-200 max-sm:fixed max-sm:bottom-[30px] max-sm:left-0 max-sm:right-0 max-sm:mx-auto max-sm:w-[calc(100%-30px)]"
              onClick={handlePayment}
            >
              Öde
            </button>
          </div>
        </div>
      ) : (
        <div
          className="bg-white rounded-lg shadow-lg min-w-[330px] max-w-[600px] max-sm:max-w-[100%] max-sm:rounded-none max-sm:h-[100dvh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center p-6 px-[30px] pl-[22px] relative rounded-t-lg border border-b-[#f6f7fa] max-sm:p-[14px] max-sm:rounded-none max-sm:justify-center">
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
            <p className="text-black font-semibold text-[18px] ml-[5px] max-sm:text-center max-sm:text-[16px] max-sm:font-medium">
              Premium yap
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-[24px] right-[30px] text-[#b6b6b6] text-lg max-sm:right-[100%] max-sm:left-[15px] max-sm:top-[16px]"
            >
              ✕
            </button>
          </div>
          <iframe
            src={iframeUrl}
            title="PayTR Payment"
            frameBorder="0"
            className="w-[600px] h-[80dvh] max-sm:w-[100vw] max-sm:h-[100dvh]"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PremiumPayment;
