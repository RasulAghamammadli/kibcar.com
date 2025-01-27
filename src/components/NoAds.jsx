import NoAdsImage from "../assets/images/no-ads.png";

function NoAds() {
  return (
    <div className="bg-[#F1F3F7]">
      <h1 className="container py-[14px] max-sm:py-[8px] font-secondary text-[16px] max-sm:text-[13px] uppercase font-bold leading-8 text-primary border-y border-[#eaebf2]">
        İlanlar
      </h1>
      <div className="py-[30px] max-sm:py-[15px] bg-[#F6F7FA]">
        <div className=" container flex items-center justify-center py-[20px]">
          <img className="h-[200px]" src={NoAdsImage} alt="not-ads" />
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
}

export default NoAds;
