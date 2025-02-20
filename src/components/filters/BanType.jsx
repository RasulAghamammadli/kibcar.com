import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function BanType() {
  const [banTypes, setBanTypes] = useState([]);
  const { checkedBanType, setCheckedBanType, setCheckedBanTypeIds } =
    useContext(FilterContext);
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const banTypeId = event.target.id;

    setCheckedBanType((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));

    setCheckedBanTypeIds((prevItems) => {
      if (prevItems.includes(banTypeId)) {
        return prevItems.filter((id) => id !== banTypeId);
      } else {
        return [...prevItems, banTypeId];
      }
    });
    setSearchTerm("");
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
    setCheckedBanType({});
    setCheckedBanTypeIds([]);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (detailsRef.current) {
      detailsRef.current.setAttribute("open", "true");
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    if (detailsRef.current) {
      detailsRef.current.setAttribute("open", "true");
    }
  };

  const filteredBanTypes = banTypes.filter((banType) =>
    banType.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function fetchBanTypes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-categories`
        );
        setBanTypes(response.data);
      } catch (error) {
        console.error("Error fetching ban types:", error);
      }
    }
    fetchBanTypes();
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isOpen]);

  const selectedOptions = Object.keys(checkedBanType)
    .filter((key) => checkedBanType[key])
    .join(", ");

  return (
    <div className="w-full h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary
          className={`flex items-center justify-between w-full h-full px-[10px] bg-white border rounded-lg btn shadow-none hover:bg-white ${
            isOpen
              ? "border-[#8F93AD] hover:!border-[#8F93AD]"
              : "border-gray-300"
          }`}
        >
          <div className="max-w-[80%] max-sm:w-full">
            <input
              ref={inputRef}
              id="banType"
              type="text"
              value={searchTerm || selectedOptions}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`font-primary text-[15px] text-primary font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm || selectedOptions ? "mt-[15px]" : "text-primary"
              }`}
            />
            <label
              htmlFor="banType"
              className={`absolute cursor-pointer font-normal left-[11px] bg-transparent transition-all text-start w-fit ${
                searchTerm || selectedOptions
                  ? "top-[9px] text-[12px] leading-3 text-secondary"
                  : "top-[16px] text-[15px] leading-4 text-gray-400"
              }`}
            >
              Gövde Tipi
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
          {filteredBanTypes.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center justify-between w-full pr-4 px-[10px] py-2.5 text-secondary font-primary rounded-none">
                <span className="text-primary font-primary text-[15px]">
                  {item.name}
                </span>
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                  checked={checkedBanType[item.name] || false}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 form-checkbox accent-red"
                />
              </label>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default BanType;
