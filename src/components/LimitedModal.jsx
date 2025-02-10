import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LimitedModal = ({ onClose, paymentToken }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(true);
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // close modal
  const closeModal = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // start payment
  const handlePayment = () => {
    if (paymentToken) {
      // iframe url
      const paytrIframeUrl = `https://www.paytr.com/odeme/guvenli/${paymentToken}`;
      setIframeUrl(paytrIframeUrl);
    } else {
      console.error("Ödeme tokeni bulunamadı.");
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 max-sm:items-end ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {!iframeUrl ? (
        <div
          className="bg-white rounded-lg shadow-lg min-w-[330px] max-w-[455px] max-sm:max-w-[100%] max-sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 px-[30px] relative rounded-t-lg border border-b-[#f6f7fa] max-sm:p-[18px] max-sm:rounded-t-2xl">
            <p className="text-black font-semibold text-[18px] max-sm:text-center max-sm:text-[16px]">
              Ödemeli ilan
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-[24px] right-[30px] text-[#b6b6b6] text-lg max-sm:right-[100%] max-sm:left-[15px] max-sm:top-[17px]"
            >
              ✕
            </button>
          </div>

          <div className="py-[25px] px-[30px] text-[#8d94ad] max-sm:p-[15px] max-sm:text-[#212c3a]">
            Tekrardan hoşgeldiniz, bedava ilan limitiniz doldu. Ödemeli ilan
            paylaşacaksınız.
          </div>
          <div className="p-[10px] text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] border border-[#f6f7fa]">
            İLAN ÜCRETİ
          </div>
          <p className="py-[12px] px-[30px] text-[15px] text-[#212c3a] max-sm:p-[15px]">
            1 İlan Ücreti: 450 Türk Lirası
          </p>
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
                className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition ${
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
          <div className="flex flex-col gap-3 py-[20px] px-[30px] w-full text-center text-[12px] text-[#8d94ad] bg-[#fbfcff] rounded-b-lg border border-t-[#f6f7fa] max-sm:px-[15px] max-sm:rounded-none">
            <button
              type="button"
              onClick={handlePayment}
              className="rounded-lg text-white text-[16px] py-2 px-4 min-w-[80px] h-[45px] bg-[#4b8af9] hover:bg-[#1a6af7] transition-all duration-200 max-sm:h-[40px]"
            >
              Öde
            </button>
            <Link
              to="/"
              className="rounded-lg bg-red hover:bg-[#882111] flex items-center justify-center min-w-[80px] h-[45px] text-[16px] text-white transition-all duration-200 max-sm:h-[40px]"
            >
              Ana sayfa
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="bg-white rounded-lg shadow-lg min-w-[330px] max-w-[600px] max-sm:max-w-[100%] max-sm:rounded-none max-sm:h-[100dvh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 px-[30px] relative rounded-t-lg border border-b-[#f6f7fa] max-sm:p-[18px] max-sm:rounded-t-none">
            <p className="text-black font-semibold text-[18px] max-sm:text-center max-sm:text-[16px]">
              Ödemeli ilan
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-[24px] right-[30px] text-[#b6b6b6] text-lg max-sm:right-[100%] max-sm:left-[15px] max-sm:top-[17px]"
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

export default LimitedModal;
