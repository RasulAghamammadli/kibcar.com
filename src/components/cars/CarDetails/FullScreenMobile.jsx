import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CarSlider.module.css";

function FullscreenMobile({
  showFullSlider,
  setShowFullSlider,
  carImages,
  car,
  handleFavoriteClick,
  isFavorite,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  console.log(car);

  const settings = {
    dots: false,
    initialSlide: showFullSlider,
    dotsClass: false,
    infinite: true,
    arrows: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setCurrentSlide,
  };

  useEffect(() => {
    if (showFullSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFullSlider]);

  useEffect(() => {
    setCurrentSlide(showFullSlider);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 overflow-hidden">
      <nav className="flex justify-between items-center h-[55px] font-medium text-base leading-5 text-white px-[8px]">
        <div className="hover:bg-[#FFFFFF26] rounded-lg">
          <button onClick={() => setShowFullSlider(null)}>
            <svg
              width="35"
              height="35"
              fill="none"
              viewBox="-5 -6 35 35"
              x="420"
              y="239"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.51 6.99L6.49 19.01M18.51 19.01L6.49 6.99"
                stroke="#fff"
                strokeWidth="1.7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${styles.counter} visible opacity-[1] bottom-0 left-0 translate-x-0 bg-transparent text-[14px]`}
        >
          {currentSlide + 1} / {carImages.length}
        </div>
        <div
          onClick={handleFavoriteClick}
          className="group flex items-center gap-x-2 cursor-pointer"
        >
          <svg
            width="30"
            height="30"
            fill={isFavorite ? "#e11d48" : "none"}
            viewBox="-5 -5 32 30"
            x="64"
            y="413"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:stroke-rose-600"
            stroke={isFavorite ? "#e11d48" : "#fff"}
          >
            <path
              d="M17.725 2.193a5.204 5.204 0 00-2.593-.693c-1.66 0-3.148.785-4.13 2.016C10.015 2.286 8.529 1.5 6.866 1.5c-.94 0-1.82.253-2.591.693C2.62 3.143 1.5 4.97 1.5 7.07c0 .601.094 1.178.265 1.717.921 4.296 9.237 9.713 9.237 9.713s8.31-5.417 9.232-9.713c.17-.539.266-1.116.266-1.717 0-2.099-1.12-3.926-2.775-4.877z"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </nav>
      {/* Slider */}
      <div className={`${styles["slider-container"]}  relative full-slider`}>
        <Slider {...settings} ref={sliderRef}>
          {carImages.map((item, index) => (
            <div className="relative w-[620px] h-[470px] " key={index}>
              <div className="absolute max-h-full max-w-full bg-black top-14 left-0 right-0 bottom-0 z-10">
                <img
                  src={item.original}
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <ul className="flex justify-between items-center p-[10px] fixed bottom-0 left-0 w-[100%] bg-black">
        <li className="mb-[10px] max-w-[80%]">
          <p className="text-[18px] w-fit font-[500] leading-[22px] text-[#f9f9f9] overflow-hidden whitespace-nowrap text-ellipsis">
            {car?.price} {car?.price_currency}
          </p>
          <p className="w-[100%] text-[16px] font-[400] leading-[22px] text-[#f9f9f9] overflow-hidden whitespace-nowrap text-ellipsis">
            {car?.brand?.name} {car?.brand_model?.name},{" "}
            {car?.engine_volume_liters} L, {car?.vehicle_year?.name} yıl,{" "}
            {car?.mileage} {car?.mileage_measurement_unit}
          </p>
        </li>
        <li className="flex justify-center items-center bg-[#3db460] w-[50px] h-[50px] rounded-[100%] text-center cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#269547]">
          <a href="#">
            <svg
              width="29"
              height="28"
              fill="none"
              viewBox="-5 -5 29 28"
              x="388"
              y="413"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.625 11.515l3.31 1.84c.476.263.684.823.497 1.333-.95 2.593-3.73 3.962-6.345 3.007C6.73 15.74 2.76 11.77.805 6.413-.15 3.797 1.219 1.017 3.812.068c.51-.187 1.07.021 1.334.496.612 1.104 1.226 2.208 1.839 3.31.287.518.22 1.133-.174 1.575L5.266 7.187c1.1 2.678 3.369 4.947 6.047 6.047l1.738-1.545a1.349 1.349 0 011.574-.174z"
                fill="#fff"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FullscreenMobile;
