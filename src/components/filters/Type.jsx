import { useContext, useEffect } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function Type() {
  const { selectedType, setSelectedType } = useContext(FilterContext);

  const handleChange = (value) => {
    setSelectedType(value);
  };
  useEffect(() => setSelectedType("all"), []);
  const options = ["all", "new", "drove"];

  return (
    <div className="flex justify-between border border-gray-300 rounded-lg h-full">
      {options.map((option) => (
        <label
          key={option}
          className={`first:rounded-l-md  even:border-x-[1px] even:border-gray-300 last:rounded-r-md py-[15px] px-[20px] cursor-pointer flex flex-1 justify-center items-center transition-all duration-100 ${
            selectedType === option
              ? "bg-red text-white"
              : "bg-white text-secondary"
          }`}
          onClick={() => handleChange(option)}
        >
          <input
            type="radio"
            name="type"
            value={option}
            checked={selectedType === option}
            onChange={() => {}}
            className="hidden"
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  );
}

export default Type;
