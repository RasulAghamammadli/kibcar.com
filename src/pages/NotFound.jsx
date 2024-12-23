import React from "react";

// images
import NoAds from "../assets/images/no-ads.png";

const NotFound = () => {
  return (
    <div className="bg-[#F1F3F7]">
      <h1 className="container py-[20px] font-secondary text-[20px] md:text-[26px] font-bold leading-8 text-primary border-y border-[#eaebf2]">
        Sayfa bulunamadı
      </h1>
      <div className="bg-[#F6F7FA] py-[20px]">
        <div className=" container flex items-center justify-center py-[20px]">
          <img className="h-[200px]" src={NoAds} alt="not-ads" />
        </div>
        <div className="container pb-4">
          <p className="text-[18px] text-[#212c3a]">
            Üzgünüz, aramanıza uygun sonuç bulunamadı.
          </p>
        </div>
        <div className="container">
          <p className="text-[18px] text-[#8d94ad]">
            Lütfen daha uygun arama filtreleri seçin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
