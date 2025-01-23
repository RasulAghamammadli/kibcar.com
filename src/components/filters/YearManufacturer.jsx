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
    setSearchTerm(item.name);
    closeDropdown();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  // clear searchTerm
  const clearSearchTerm = () => {
    setSearchTerm("");
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
              className={`font-primary text-[15px] text-primary font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm ? "mt-[15px]" : "text-primary"
              }`}
            />
            <label
              htmlFor="minYear"
              className={`absolute cursor-pointer font-normal left-[11px] bg-white transition-all text-start w-fit ${
                searchTerm
                  ? "top-[9px] text-[12px] leading-3 text-secondary"
                  : "top-[18px] text-[15px] leading-3 text-gray-400"
              }`}
            >
              Yıl, min.
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
          <li onClick={clearSearchTerm}>
            <label className="flex items-center w-full pr-4 px-[10px] py-2.5 text-primary text-[15px] rounded-none">
              <span className="text-red font-semibold text-[15px]">✕</span>
              Sıfırla
            </label>
          </li>
          {filteredYears.reverse().map((item) => (
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
