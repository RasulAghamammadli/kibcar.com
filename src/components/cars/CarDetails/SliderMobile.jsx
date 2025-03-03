import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import styles from "./CarSlider.module.css";

function SliderMobile({ carImages, setShowFullSlider }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setCurrentSlide,
  };

  return (
    <div
      className={`${styles["slider-container"]} relative mb-slider h-[330px]`}
    >
      <Slider {...settings} ref={sliderRef}>
        {carImages.map((item, index) => (
          <div
            className="relative h-[330px] p-4 text-center cursor-pointer"
            key={index}
            onClick={() => setShowFullSlider(true)}
          >
            <div className="flex justify-center absolute top-0 h-full left-0 w-full z-10 ">
              <img src={item.original} className="object-cover w-full h-full" />
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full  bg-cover bg-center bg-no-repeat blur-2xl  z-0"
              style={{ backgroundImage: `url(${item.original})` }}
            ></div>
          </div>
        ))}
      </Slider>
      <div className={`${styles.mobileCounter}`}>
        {/* Display the slide counter */}
        {currentSlide + 1} / {carImages.length}
      </div>
    </div>
  );
}

export default SliderMobile;
