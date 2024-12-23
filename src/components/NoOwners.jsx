import NoAdsImage from "../assets/images/no-ads.png";

function NoOwners() {
  return (
    <div className="min-h-[441px]">
      <div className="py-[20px]">
        <div className="container flex items-center justify-center py-[20px]">
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

export default NoOwners;
