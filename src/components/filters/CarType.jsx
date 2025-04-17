import { useContext, useEffect } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function CarType() {
  const { selectedCarType, setSelectedCarType } = useContext(FilterContext);

  const handleChange = (value) => {
    setSelectedCarType(value);
  };

  useEffect(() => setSelectedCarType("all"), []);

  const options = ["all", "Car Dealerships", "Personal"];

  const optionLabels = {
    all: "Tümü",
    "Car Dealerships": "Galeri",
    Personal: "Sahibinden",
  };

  return (
    <div className="flex justify-between border border-gray-300 rounded-lg h-full">
      {options.map((option) => (
        <label
          key={option}
          className={`first:rounded-l-md first:px-[4px] even:border-x-[1px] even:px-[4px] even:border-gray-300 last:rounded-r-md last:px-[25px] py-[15px] cursor-pointer flex flex-1 justify-center items-center transition-all duration-100 ${
            selectedCarType === option
              ? "bg-red text-white"
              : "bg-white text-secondary"
          }`}
          onClick={() => handleChange(option)}
        >
          <input
            type="radio"
            name="type"
            value={option}
            checked={selectedCarType === option}
            onChange={() => {}}
            className="hidden"
          />
          {optionLabels[option]}
        </label>
      ))}
    </div>
  );
}

export default CarType;
