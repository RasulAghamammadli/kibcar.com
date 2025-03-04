import { useEffect } from "react";
import PropTypes from "prop-types";
import { useCarContext } from "../../../context/CarContext";

function CarDetailsCom({ car }) {
  const { setCurrentCar } = useCarContext();

  useEffect(() => {
    setCurrentCar(car);
    return () => setCurrentCar(null); // Clean up when component unmounts
  }, [car, setCurrentCar]);

  return (
    <div className="grid grid-cols-12 pb-[30px] border-b border-solid border-[#E2E2E2]">
      <div className="col-span-6 md:col-span-6 xl:col-span-3  mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-secondary">Şehir</p>
          <p className="font-primary text-[14px] text-secondary">Marka</p>
          <p className="font-primary text-[14px] text-secondary">Model</p>
          <p className="font-primary text-[14px] text-secondary">Model Yılı</p>
          <p className="font-primary text-[14px] text-secondary">Gövde Tipi</p>
          <p className="font-primary text-[14px] text-secondary">Renk</p>
          <p className="font-primary text-[14px] text-secondary">Motor</p>
          <p className="font-primary text-[14px] text-secondary">Kilometre</p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.city?.name ? car.city?.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.brand.name ? car.brand.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.brand_model.name ? car.brand_model.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_year?.name ? car.vehicle_year?.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_category?.name ? car.vehicle_category?.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_color.name ? car.vehicle_color.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {/* 2.3 L/130 hp/Diesel */}
            {car.engine_volume_liters + " L / " + car.fuel_type.name
              ? car.engine_volume_liters + " L / " + car.fuel_type.name
              : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {Number(car.mileage_in_km || 0).toLocaleString()} km
          </p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[6px] md:mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-secondary">Şanzıman</p>
          <p className="font-primary text-[14px] text-secondary">Vites</p>
          <p className="font-primary text-[14px] text-secondary">Yeni</p>
          <p className="font-primary text-[14px] text-secondary">
            Koltuk sayısı
          </p>
          <p className="font-primary text-[14px] text-secondary">Sahipler</p>
          <p className="font-primary text-[14px] text-secondary">Pazar</p>
          <p className="font-primary text-[14px] text-secondary">Durumu</p>
        </div>
      </div>
      <div className="col-span-6 md:col-span-6 xl:col-span-3 mt-[6px] md:mt-[30px]">
        <div className="flex flex-col gap-y-[6px] mr-[20px]">
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_transmission.name
              ? car.vehicle_transmission.name
              : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.gear.name ? car.gear.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_status == "USED" ? "Hayır" : "Evet"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {/* {numberOfSeats} */}
            {car.number_of_seats != null ? car.number_of_seats : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_prior_owner.id === 4
              ? "4 ve daha fazla"
              : car.vehicle_prior_owner.id}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {car.vehicle_market.name ? car.vehicle_market.name : "-"}
          </p>
          <p className="font-primary text-[14px] text-[#212c3a]">
            {getSituationText(car.is_crashed, car.is_painted)}
          </p>
        </div>
      </div>
    </div>
  );
}

function getSituationText(isCrashed, isPainted) {
  if (isCrashed === 1 && isPainted === 1) {
    return "Kazalı ve boyalı";
  } else if (isCrashed === 1) {
    return "Kazalı, boyanmadı";
  } else if (isPainted === 1) {
    return "Kazasız, ama boyandı";
  } else {
    return "Kazasız, boyanmadı";
  }
}

CarDetailsCom.propTypes = {
  car: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string,
    }),
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    brand_model: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    vehicle_year: PropTypes.shape({
      name: PropTypes.string,
    }),
    vehicle_category: PropTypes.shape({
      name: PropTypes.string,
    }),
    vehicle_color: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    engine_volume_liters: PropTypes.number.isRequired,
    fuel_type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    mileage_in_km: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    vehicle_transmission: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    gear: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    vehicle_status: PropTypes.string.isRequired,
    number_of_seats: PropTypes.string,
    vehicle_market: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    is_crashed: PropTypes.number.isRequired,
    is_painted: PropTypes.number.isRequired,
  }).isRequired,
};

export default CarDetailsCom;
