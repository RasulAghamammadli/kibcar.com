import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ViaSms = ({ car }) => {
  const { id } = useParams();
  const [isSelected, setIsSelected] = useState(true);
  const [iframeUrl, setIframeUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/forget-pin`,
        {
          announcement_id: Number(id),
          pin_method: "phone",
        }
      );

      if (response.data.success === true) {
        const token = response.data.token;

        // iframe url
        const paytrIframeUrl = `https://www.paytr.com/odeme/guvenli/${token}`;
        setIframeUrl(paytrIframeUrl);
      }
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      if (error.response?.status === 400) {
        setErrorMsg("Bugün bu ilan için PIN kurtarma limiti aşıldı.");
      } else if (error.response?.status === 404) {
        setErrorMsg("İlan bulunamadı.");
      } else {
        setErrorMsg("Bir hata oluştu, lütfen tekrar deneyiniz.");
      }
    }
  };

  return (
    <>
      {!iframeUrl ? (
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
              ilanı için ödeme yapıyorsunuz.
            </p>
            <div className="text-[14px] mt-[10px]">
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
              <p className="mt-[10px] text-[14px] error text-red">{errorMsg}</p>
              <button
                type="button"
                className="rounded-md outline-none text-white text-[16px] my-[8px] mt-[16px] py-2 px-[10px] h-[40px] bg-[#4b8af9] hover:bg-[#1a6af7] transition-all duration-200"
                onClick={handlePayment}
              >
                Öde
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-w-[330px] h-full">
          <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
            <p className="font-primary font-semibold text-[16px] text-center text-white">
              Ödeme
            </p>
          </div>
          <iframe
            src={iframeUrl}
            title="PayTR Payment"
            frameBorder="0"
            className="w-[40vw] h-[80dvh] max-md:w-[92vw]"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ViaSms;
