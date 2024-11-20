import NoAdsImage from "../assets/images/no-ads.png";
function Lease() {
  return (
    <div className="container flex justify-center items-center">
      <div className="py-[20px]">
        <div className="container flex items-center justify-center py-[20px]">
          <img className="h-[200px]" src={NoAdsImage} alt="not-ads" />
        </div>
        <div className="container pb-4">
          <p className="text-[18px] text-center text-[#212c3a]">
            Heyecan verici şeyler yolda! Takipte kalın, yakında özel bir şey
            geliyor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lease;
