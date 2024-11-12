import { useRef, useEffect, useState, useContext } from "react";
import axios from "axios";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function YearManufacturer() {
  const { selectedYearManufactured, setSelectedYearManufactured } =
    useContext(FilterContext);
  const [years, setYears] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const detailsRef = useRef(null);
  const inputRef = useRef(null);

  const handleSelection = (item) => {
    setSelectedYearManufactured(item.name);
    setSearchTerm("");
    closeDropdown();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
    inputRef.current.blur();
  };

  const handleDetailsClick = (e) => {
    e.preventDefault();
    if (isOpen) {
      closeDropdown();
    } else {
      setIsOpen(true);
      if (detailsRef.current) {
        detailsRef.current.setAttribute("open", "true");
      }
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };

  const filteredYears = years.filter((year) =>
    year.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getVehicleYears() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-years`
        );
        setYears(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getVehicleYears();
  }, []);

  // outside close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        open={isOpen}
        onClick={handleDetailsClick}
      >
        <summary
          className={`flex items-center justify-between w-full h-full px-[10px] bg-white border rounded-lg rounded-r-none btn shadow-none hover:bg-white  ${
            isOpen
              ? "border-[#8F93AD] hover:!border-[#8F93AD]"
              : "border-gray-300"
          }`}
        >
          <div className="max-w-[64%]">
            <input
              id="minYear"
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={selectedYearManufactured || "Year"}
              className={`font-primary text-[15px] font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm ? "mt-[9px]" : ""
              }`}
            />
            <label
              htmlFor="minYear"
              className={`${
                searchTerm
                  ? "absolute cursor-pointer font-normal left-0 top-[8px] pl-[0.6rem] pr-[0.1rem] text-[12px] leading-3 transition-all w-full text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[8px]  peer-focus:text-[12px] peer-focus:leading-3 font-primary text-secondary"
                  : "hidden"
              } `}
            >
              Year
            </label>
          </div>
          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </summary>
        <ul className="p-2 px-0 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-0.5 rounded-lg max-h-[210px] overflow-y-auto">
          {filteredYears.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a href="" className="rounded-none px-[10px] text-primary">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default YearManufacturer;
