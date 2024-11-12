import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";
const Price = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } =
    useContext(FilterContext);

  return (
    <div className="flex justify-between items-center rounded-lg border border-gray-300 h-full bg-white ">
      <div className="relative w-[50%] h-full pt-[10px] px-2.5  border-gray-300 focus-within:border focus-within:border-[#8F93AD] focus-within:rounded-l-md">
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="peer cursor-pointer placeholder-transparent overflow-hidden w-full text-gray-900 text-[15px] focus:outline-none mt-[9px] "
          placeholder="Minimum Price"
        />
        <label
          htmlFor="minPrice"
          className="absolute cursor-pointer left-0 top-[7px] pl-[0.6rem] pr-[0.1rem] text-[12px] leading-4 transition-all w-full text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[7px]  peer-focus:text-[12px] peer-focus:leading-4 font-primary text-secondary"
        >
          Price, min.
        </label>
      </div>
      <div className="relative w-[50%] h-full border-l border-[#e2e2e2] pt-[10px] px-2.5 focus-within:border focus-within:border-[#8F93AD] focus-within:rounded-r-md">
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="peer cursor-pointer placeholder-transparent w-full text-[15px] text-gray-900 focus:outline-none mt-[9px]"
          placeholder="Maximum Price"
        />
        <label
          htmlFor="maxPrice"
          className="absolute cursor-pointer left-0 top-[7px] pl-[0.6rem] pr-[0.1rem] text-[12px] leading-4 transition-all w-full text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[7px]  peer-focus:text-[12px] peer-focus:leading-4 font-primary text-secondary"
        >
          max.
        </label>
      </div>
    </div>
  );
};

export default Price;
