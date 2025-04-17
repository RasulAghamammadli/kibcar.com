import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";

import phoneDetails from "../../../assets/images/phone-details.png";
import FullscreenMode from "./FullscreenMode";
import ProfileCard from "./ProfileCard";
import AttentionNote from "./AttentionNote";
import CarDetailsCom from "./CarDetailsCom";
import CreativeButton from "./CreativeButton";
import CarSlider from "./CarSlider";
import {
  clearFormatPhoneNumber,
  formatPhoneNumber,
  hideLastTwoDigits,
} from "../../../utils/help";
import Modal from "../../Modal";
import DeleteAdForm from "../../DeleteAdForm";
import EditAdForm from "../../EditAdForm";
import { IoFlagOutline } from "react-icons/io5";
import ComplainForm from "../../ComplainForm";
import ReadMore from "../../ReadMore";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import GetPinMethods from "../../GetPinMethods";
import ViaSms from "../../ViaSms";
import ViaEmail from "../../ViaEmail";
import SuccessSendEmail from "../../SuccessSendEmail";
import PremiumPayment from "../../PremiumPayment";
import VipPayment from "../../VipPayment";

function DetailsPC({ car, showFullSlider, setShowFullSlider, carImages, id }) {
  const [number, setNumber] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // modal functions
  const openVipModal = () => setActiveModal("vip");
  const openPremiumModal = () => setActiveModal("premium");
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    checkCarDataAndAct(car.id, () => setIsFavorite(true));
  }, [car.id]);

  function saveCarData(carData) {
    const existingData = localStorage.getItem("carDataList");
    let carDataList = existingData ? JSON.parse(existingData) : [];
    carDataList.push(carData);
    localStorage.setItem("carDataList", JSON.stringify(carDataList));
  }

  function removeCarData(carId) {
    const existingData = localStorage.getItem("carDataList");
    let carDataList = existingData ? JSON.parse(existingData) : [];
    carDataList = carDataList.filter((car) => car.id !== carId);
    localStorage.setItem("carDataList", JSON.stringify(carDataList));
  }

  function checkCarDataAndAct(carId, actionCallback) {
    const data = localStorage.getItem("carDataList");
    const carDataList = data ? JSON.parse(data) : [];
    const foundCar = carDataList.find((car) => car.id === carId);
    if (foundCar) {
      actionCallback(foundCar);
    }
  }

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeCarData(car.id);
    } else {
      saveCarData(car);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="container relative">
      <ul className="flex items-center gap-[10px] py-[16px] font-primary font-medium border-b border-solid border-[#E2E2E2] uppercase text-[16px] text-[#212c3a]">
        <li className="underline">{car.brand.name}</li> -
        <li className="underline">{car.brand_model.name}</li> -
        <li>İlan № {car.id}</li>
      </ul>
      {/* fixed while scrolling */}
      <div className="navigation-container">
        <div className="navigation flex md:flex-row flex-col gap-y-4 md:gap-y-0  items-center justify-between py-[15px] ">
          <h2 className="text-[#212c3a] text-center md:text-start text-[24px]  font-bold leading-8">
            {car.brand.name} {car.brand_model.name},{" "}
            {car.engine_volume_liters + " L"}, {car.vehicle_year.name} yıl,{" "}
            {Number(car.mileage).toLocaleString()}{" "}
            {car.mileage_measurement_unit === "mi" ? "mil" : "km"}
          </h2>
          <div className="flex items-center gap-x-[30px]">
            <button
              className="group flex items-center space-x-[4px] rounded-md justify-center bg-white"
              onClick={handleFavoriteClick}
            >
              <svg
                width="32"
                height="30"
                fill={isFavorite ? "#e11d48" : "none"}
                viewBox="-5 -5 32 30"
                x="64"
                y="413"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  isFavorite ? "stroke-rose-600" : "group-hover:stroke-rose-600"
                }
                stroke={isFavorite ? "#e11d48" : "#212c3a"}
              >
                <path
                  d="M17.725 2.193a5.204 5.204 0 00-2.593-.693c-1.66 0-3.148.785-4.13 2.016C10.015 2.286 8.529 1.5 6.866 1.5c-.94 0-1.82.253-2.591.693C2.62 3.143 1.5 4.97 1.5 7.07c0 .601.094 1.178.265 1.717.921 4.296 9.237 9.713 9.237 9.713s8.31-5.417 9.232-9.713c.17-.539.266-1.116.266-1.717 0-2.099-1.12-3.926-2.775-4.877z"
                  strokeWidth="1.5"
                />
              </svg>
              <p
                className={`font-primary text-[14px] font-medium leading-[21px] ${
                  isFavorite
                    ? "text-rose-600"
                    : "text-[#212c3a] group-hover:text-rose-600"
                }`}
              >
                {isFavorite ? "Favorilere kaydedildi" : "Favorilere kaydet"}
              </p>
            </button>

            <Modal>
              <Modal.Open windowName="complain">
                <button
                  className="group flex items-center space-x-[4px]  rounded-md justify-center bg-white "
                  to={""}
                >
                  <IoFlagOutline
                    size="22px"
                    className="mr-[2px] group-hover:text-rose-600"
                  />
                  <p className="font-primary text-[14px] font-medium leading-[21px] text-[#212c3a] group-hover:text-rose-600  ">
                    Şikayet
                  </p>
                </button>
              </Modal.Open>
              <Modal.Window name="complain" svgColor="#B1B8C6">
                <ComplainForm />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
      <div className="sliderX flex lg:flex-row flex-col  justify-between items-start lg:gap-x-[30px] lg:g-y-0 gap-y-8">
        <div className="lg:w-[65%] w-full">
          {showFullSlider != null && (
            <FullscreenMode
              car={car}
              showFullSlider={showFullSlider}
              setShowFullSlider={setShowFullSlider}
              handleFavoriteClick={handleFavoriteClick}
              isFavorite={isFavorite}
              carImages={carImages}
              slideIndex={1}
              clearFormatPhoneNumber={clearFormatPhoneNumber}
            />
          )}
          <CarSlider
            showFullSlider={showFullSlider}
            setShowFullSlider={setShowFullSlider}
            carImages={carImages}
          />
          <ul className=" pt-[20px] pb-[20px] picture-list pl-[20px] border-b border-solid border-[#E2E2E2] text-[12px]">
            <li>Güncellendi: {car.updated_date}</li>
          </ul>
          <CarDetailsCom car={car} />
          <div className="flex flex-col">
            {car.additional_information && (
              <div className="border-b border-solid border-[#E2E2E2] pb-[30px] mt-[30px]">
                {car.additional_information}
              </div>
            )}
            {car.features.length > 0 && (
              <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-3 pt-[30px] pb-[30px] border-b border-solid border-[#e2e2e2]">
                {car.features.map((feature) => {
                  return (
                    <p
                      key={feature.id}
                      className="bg-[#F6F7FA] p-[10px] rounded-[35px] leading-[17px] text-[15px] font-secondary"
                    >
                      {feature.name}
                    </p>
                  );
                })}
              </div>
            )}
            <div className="flex items-center justify-between mt-[30px]">
              <div className="flex gap-x-[20px]">
                {car.car_dealership === null && (
                  <Modal>
                    <Modal.Open windowName="edit">
                      <button className="font-primary text-[14px] underline text-[#212c3a] hover:text-link">
                        Düzelt
                      </button>
                    </Modal.Open>
                    <Modal.Window name="edit">
                      <EditAdForm />
                    </Modal.Window>
                    <Modal.Open windowName="delete">
                      <button className="font-primary text-[14px] underline text-[#212c3a] hover:text-link">
                        İlanı sil
                      </button>
                    </Modal.Open>
                    <Modal.Window name="delete">
                      <DeleteAdForm car={car} />
                    </Modal.Window>
                    <Modal.Open windowName="pin-methods">
                      <button className="font-primary text-[14px] underline text-[#212c3a] hover:text-link">
                        PIN'i unuttum
                      </button>
                    </Modal.Open>
                    <Modal.Window name="pin-methods">
                      <GetPinMethods />
                    </Modal.Window>
                    <Modal.Window name="via-sms">
                      <ViaSms car={car} />
                    </Modal.Window>
                    <Modal.Window name="via-email">
                      <ViaEmail />
                    </Modal.Window>
                    <Modal.Window name="success-send-email">
                      <SuccessSendEmail />
                    </Modal.Window>
                  </Modal>
                )}
              </div>
              <p className="font-primary text-[14px] text-[#212c3a]">
                İlan numarası: {id}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full sticky top-[77px]">
          <div className="bg-[#f6f7fa] p-[30px] w-full rounded-lg">
            <h2 className="text-[26px] font-bold leading-8 text-primary">
              {Number(car.price).toLocaleString()} {car.price_currency}
            </h2>
            {!car.car_dealership && <ProfileCard car={car} />}
            <div className="flex gap-x-5">
              {car.car_dealership && (
                <div className="flex items-center my-4">
                  <img
                    className="w-[50px] h-[50px] rounded-lg mr-3"
                    src={car.car_dealership_logo}
                    alt="brandImg"
                  />
                  <p>{car.car_dealership.name}</p>
                </div>
              )}
            </div>
            <div
              onClick={() => setNumber((prev) => !prev)}
              className={`py-[10px] bg-[#3db460] rounded-xl hover:bg-[#269547] ${
                number ? "hidden" : "block"
              }`}
            >
              <p className="text-center font-primary text-white text-[14px] cursor-pointer">
                Numarayı göster
              </p>
              <div
                className={`justify-center flex items-center gap-x-[10px] font-secondary text-[18px] font-bold leading-7 text-white visible h-8 pt-[5px] cursor-pointer`}
              >
                <img
                  className="w-6 h-6"
                  src={phoneDetails}
                  alt="phoneDetails"
                />
                {car.user
                  ? hideLastTwoDigits(
                      formatPhoneNumber(car.car_dealership.phone1)
                    )
                  : hideLastTwoDigits(
                      formatPhoneNumber(car.creator.guest_phone.phone)
                    )}
              </div>
            </div>
            <div className={number ? "flex items-center" : "hidden"}>
              <div
                className={`flex items-start gap-x-[10px]  text-[22px] font-bold leading-7 text-[#212c3a] visible`}
              >
                {/* make it red*/}
                <svg
                  width="29"
                  height="28"
                  fill="none"
                  viewBox="-5 -5 29 28"
                  x="359"
                  y="413"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.625 11.515l3.31 1.84c.476.263.684.823.497 1.333-.95 2.593-3.73 3.962-6.345 3.007C6.73 15.74 2.76 11.77.805 6.413-.15 3.797 1.219 1.017 3.812.068c.51-.187 1.07.021 1.334.496.612 1.104 1.226 2.208 1.839 3.31.287.518.22 1.133-.174 1.575L5.266 7.187c1.1 2.678 3.369 4.947 6.047 6.047l1.738-1.545a1.349 1.349 0 011.574-.174z"
                    fill="#B62C17"
                  />
                </svg>
                <div>
                  {car.car_dealership ? (
                    <div className="flex flex-col space-y-[8px]">
                      <a
                        href={`tel:${clearFormatPhoneNumber(
                          car.car_dealership.phone1
                        )}`}
                        className="hover:text-[#B62C17]"
                      >
                        {formatPhoneNumber(car.car_dealership.phone1)}
                      </a>
                      <a
                        href={`tel:${clearFormatPhoneNumber(
                          car.car_dealership.phone2
                        )}`}
                        className="hover:text-[#B62C17]"
                      >
                        {formatPhoneNumber(car.car_dealership.phone2)}
                      </a>
                      <a
                        href={`tel:${clearFormatPhoneNumber(
                          car.car_dealership.phone3
                        )}`}
                        className="hover:text-[#B62C17]"
                      >
                        {formatPhoneNumber(car.car_dealership.phone3)}
                      </a>
                    </div>
                  ) : (
                    <a
                      href={`tel:${clearFormatPhoneNumber(
                        car.creator.guest_phone.phone
                      )}`}
                      className="hover:text-[#B62C17]"
                    >
                      {formatPhoneNumber(car.creator.guest_phone.phone)}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={number ? "flex items-center" : "hidden"}>
              {!car.car_dealership && <AttentionNote />}
            </div>

            {car.car_dealership && (
              <>
                <div className="pt-[17px] mt-[15px] border-t border-solid border-[#E2E2E2] flex-col flex gap-y-[20px]">
                  <p className="text-black font-primary text-[14px] font-normal">
                    {car.car_dealership.slogan}
                  </p>
                  <div className="text-secondary font-primary text-[14px] font-normal">
                    <ReadMore
                      text={car.car_dealership.description}
                      maxLength={220}
                    />
                  </div>
                  <Link
                    to={`/dealership/${car.car_dealership.id}`}
                    className="text-secondary font-primary text-[14px] font-normal underline pb-[20px]"
                  >
                    {car.car_dealership_announcement_count} ilan
                  </Link>
                </div>

                <div className="pt-[17px] border-t border-solid border-[#E2E2E2] flex flex-col gap-y-[11px]">
                  {/* <div className="flex items-center">
                    <FaClock size="18px" color="#B1B8C6" className="mr-2" />
                    <p className="text-[15px] font-primary  uppercase text-primary">
                      Günlük: 09:00-19:00
                    </p>
                  </div> */}
                  <div className="flex items-center">
                    <FaMapMarkerAlt
                      size="18px"
                      color="#B1B8C6"
                      className="mr-2"
                    />
                    <p className="text-[15px]  uppercase text-primary underline">
                      {car.car_dealership.address}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/dealership/${car.car_dealership.id}`}
                  className="flex flex-col mt-[25px] py-[15px] text-white px-[40px] text-center font-primary bg-link rounded-md leading-[17px]"
                >
                  Galeriye git
                </Link>
              </>
            )}
          </div>
          <div className="grid grid-cols-12 space-x-2 mt-[20px]">
            {/* <Link className="col-span-4">
                  <CreativeButton
                    title="İleriye götür"
                    price="3"
                    icon={
                      <svg
                        width="26"
                        height="24"
                        fill="none"
                        viewBox="-5 -5 26 24"
                        x="307"
                        y="312"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.786 13.5h6.428v-6H15.5L8 .5l-7.5 7h4.286v6z"
                          fill="#77C81D"
                        />
                      </svg>
                    }
                  />
                </Link> */}
            <button type="button" className="col-span-6" onClick={openVipModal}>
              <CreativeButton
                title="Vip"
                price="100"
                icon={
                  <svg
                    width="26"
                    height="24"
                    fill="none"
                    viewBox="-5 -5 26 24"
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
                }
              />
            </button>
            <button
              type="button"
              className="col-span-6"
              onClick={openPremiumModal}
            >
              <CreativeButton
                title="Premium"
                price="140"
                icon={
                  <svg
                    width="25"
                    height="24"
                    fill="none"
                    viewBox="-5 -5 26 24"
                    x="359"
                    y="312"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.56 5.7L7.5.5 4.44 5.7 0 3.1l1.875 7.15v3.25h11.25v-3.25L15 3.1l-4.44 2.6z"
                      fill="#FF9F2B"
                    />
                  </svg>
                }
              />
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {activeModal === "premium" && <PremiumPayment onClose={closeModal} />}
      {activeModal === "vip" && <VipPayment onClose={closeModal} car={car} />}
    </div>
  );
}

export default DetailsPC;
