import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import phoneDetails from "../../../assets/images/phone-details.png";
import vipIcon from "../../../assets/icons/vip-icon.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import ProfileCard from "./ProfileCard";
import AttentionNote from "./AttentionNote";
import CarDetailsCom from "./CarDetailsCom";
import CreativeButton from "./CreativeButton";
import SliderMobile from "./SliderMobile";
import { formatPhoneNumber, clearFormatPhoneNumber } from "../../../utils/help";
import ReadMore from "../../ReadMore";
import Modal from "../../Modal";
import EditAdForm from "../../EditAdForm";
import DeleteAdForm from "../../DeleteAdForm";
import { IoFlagOutline } from "react-icons/io5";
import ComplainForm from "../../ComplainForm";
import FullscreenMobile from "./FullScreenMobile";
import GetPinMethods from "../../GetPinMethods";
import ViaSms from "../../ViaSms";
import ViaEmail from "../../ViaEmail";
import SuccessSendEmail from "../../SuccessSendEmail";
import PremiumPayment from "../../PremiumPayment";
import VipPayment from "../../VipPayment";

function DetailsMobile({
  car,
  showFullSlider,
  setShowFullSlider,
  carImages,
  id,
}) {
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
    <div className="relative">
      <a
        href={`tel:${
          car.car_dealership
            ? clearFormatPhoneNumber(car.car_dealership.phone1)
            : clearFormatPhoneNumber(car.creator.guest_phone.phone)
        }`}
        className="fixed h-[48px] justify-center flex items-center gap-x-2 bg-[#3db460] rounded-xl hover:bg-[#269547] w-[calc(100%-32px)] right-4 left-4 bottom-4"
      >
        <img
          className="w-[18px] h-[18px]"
          src={phoneDetails}
          alt="phoneDetails"
        />
        <p className="text-[15px] text-white">Ara</p>
      </a>
      <ul className="container flex items-center gap-[10px] py-[8px] font-primary  uppercase text-[14px] text-[#b4b5b9]">
        <li>{car.brand.name}</li> •<li>{car.brand_model.name}</li>
      </ul>
      {/* fixed while scrolling */}
      {car.car_dealership && (
        <Link
          to={`/dealership/${car.car_dealership.id}`}
          className="container flex items-center  mb-[15px]  pt-4 border-t border-[#eaebf2]"
        >
          <img
            className="w-[50px] h-[50px] rounded-xl mr-3 "
            src={car.car_dealership_logo}
            alt="brandImg"
          />
          <div className="flex-1">
            <p>{car.car_dealership.name}</p>
            <p className="text-[15px] font-primary text-[#8d94ad]">
              {car.car_dealership_announcement_count} ilan
            </p>
          </div>
          <MdOutlineArrowForwardIos />
        </Link>
      )}
      <div className="sliderX flex lg:flex-row flex-col  justify-between items-start lg:gap-x-[30px] lg:g-y-0 gap-y-8">
        <div className="w-full">
          {showFullSlider != null && (
            <FullscreenMobile
              car={car}
              showFullSlider={showFullSlider}
              setShowFullSlider={setShowFullSlider}
              handleFavoriteClick={handleFavoriteClick}
              isFavorite={isFavorite}
              carImages={carImages}
              slideIndex={1}
            />
          )}
          <SliderMobile
            showFullSlider={showFullSlider}
            setShowFullSlider={setShowFullSlider}
            carImages={carImages}
          />
          <div className="container flex flex-col pt-[15px]">
            <h2 className="text-[26px] font-bold leading-8 text-primary ">
              {Number(car.price).toLocaleString()} {car.price_currency}
            </h2>
            <h2 className="text-[#212c3a] text-start text-[20px] leading-6 py-[15px] border-b border-solid border-[#E2E2E2]">
              {car.brand.name} {car.brand_model.name},{" "}
              {car.engine_volume_liters + " L"}, {car.vehicle_year.name} yıl,{" "}
              {Number(car.mileage).toLocaleString()}{" "}
              {car.mileage_measurement_unit}
            </h2>
            <div to={""} className="grid grid-cols-12 space-x-2 my-[15px] ">
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
              <button
                type="button"
                className="col-span-6"
                onClick={openVipModal}
              >
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
                      viewBox="-5 -5 25 24"
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
            <CarDetailsCom car={car} />
            <div className="py-[15px]">
              {car.additional_information && (
                <ReadMore text={car.additional_information} maxLength={200} />
              )}
            </div>
            <div className="flex flex-row flex-wrap gap-x-[20px] gap-y-3 pt-[15px] border-t border-solid border-[#e2e2e2]">
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
            {!car.car_dealership ? (
              <ProfileCard car={car} />
            ) : (
              <>
                <div className="flex items-center justify-between mb-[15px] mt-4 pt-4 border-t border-[#eaebf2]">
                  <div>
                    <p>{car.car_dealership.name}</p>
                    {/* <p className="text-[15px] font-primary  uppercase text-[#8d94ad]">
                      Günlük: 09:00-19:00
                    </p> */}
                  </div>

                  <img
                    className="w-[50px] h-[50px] rounded-full "
                    src={car.car_dealership_logo}
                    alt="brandImg"
                  />
                </div>
                <p className="text-[15px]  uppercase text-primary underline">
                  {car.car_dealership.address}
                </p>
              </>
            )}
            <div className="flex justify-between items-center p-[10px] bg-[#f8f9fd] rounded-[7px]">
              <a
                href={`tel:${
                  car.user
                    ? formatPhoneNumber(car.car_dealership.phone1)
                    : formatPhoneNumber(car.creator.guest_phone.phone)
                }`}
                className={`flex items-center gap-x-[10px]  text-[15px]  text-link`}
              >
                {/* make it red*/}
                <svg
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="-5 -5 29 28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.625 11.515l3.31 1.84c.476.263.684.823.497 1.333-.95 2.593-3.73 3.962-6.345 3.007C6.73 15.74 2.76 11.77.805 6.413-.15 3.797 1.219 1.017 3.812.068c.51-.187 1.07.021 1.334.496.612 1.104 1.226 2.208 1.839 3.31.287.518.22 1.133-.174 1.575L5.266 7.187c1.1 2.678 3.369 4.947 6.047 6.047l1.738-1.545a1.349 1.349 0 011.574-.174z"
                    fill="#4C88F9"
                  />
                </svg>
                {car.user
                  ? formatPhoneNumber(car.car_dealership.phone1)
                  : formatPhoneNumber(car.creator.guest_phone.phone)}
              </a>
              <a className="text-[15px]  text-link underline">Ara</a>
              {/* <AttentionNote /> */}
            </div>
            <div className="pb-[15px] border-b border-solid border-[#E2E2E2]">
              {!car.car_dealership ? (
                <AttentionNote />
              ) : (
                <Link
                  to={`/dealership/${car.car_dealership.id}`}
                  className="flex flex-col mt-[15px] py-[15px] text-white px-[40px] text-center font-primary bg-link rounded-md leading-[17px]"
                >
                  Salona git
                </Link>
              )}
            </div>
            <div className="grid grid-cols-12 space-x-1 pt-[15px]">
              <p className="col-span-6 text-[15px] text-[#8d94ad]">
                İlan numarası:
              </p>
              <p className="col-span-6 text-[15px] text-[#8d94ad]">{id}</p>
            </div>
            <div className="grid grid-cols-12 space-x-1 pt-[5px]">
              <p className="col-span-6 text-[15px] text-[#8d94ad]">
                Güncellendi:
              </p>
              <p className="col-span-6 text-[15px] text-[#8d94ad]">
                {car.updated_date}
              </p>
            </div>
            <div className="flex items-center justify-between mt-[20px]">
              <div className="flex gap-x-[20px] pb-[15px] w-[100%] border-b border-[#E2E2E2]">
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
            </div>
            <div className="py-[15px]">
              <Modal>
                <Modal.Open windowName="complain">
                  <button className="group flex items-center space-x-[4px]  rounded-md justify-center bg-white ">
                    <IoFlagOutline size="22px" className="mr-[2px]" />
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
      </div>

      {/* Payment Modal */}
      {activeModal === "premium" && <PremiumPayment onClose={closeModal} />}
      {activeModal === "vip" && <VipPayment onClose={closeModal} car={car} />}
    </div>
  );
}

export default DetailsMobile;
