import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function Store() {
  const {
    checkedMarketAssembled,
    setCheckedMarketAssembled,
    setCheckedMarketAssembledIds,
  } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const [markets, setMarkets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const itemId = event.target.id;

    setCheckedMarketAssembled((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));

    setCheckedMarketAssembledIds((prevItems) => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter((id) => id !== itemId);
      } else {
        return [...prevItems, itemId];
      }
    });

    setSearchTerm(""); // Clear search term after selection
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
    setCheckedMarketAssembled({});
    setCheckedMarketAssembledIds([]);
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

  const filteredMarkets = markets.filter((market) =>
    market.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getMarkets() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-markets`
        );
        setMarkets(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMarkets();
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isOpen]);

  const selectedOptions = Object.keys(checkedMarketAssembled)
    .filter((key) => checkedMarketAssembled[key])
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
              id="market"
              type="text"
              value={searchTerm || selectedOptions}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`cursor-pointer font-primary text-[15px] text-primary font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm || selectedOptions ? "mt-[15px]" : "text-primary"
              }`}
              readOnly
            />
            <label
              htmlFor="market"
              className={`absolute cursor-pointer font-normal left-[11px] bg-transparent transition-all text-start w-fit ${
                searchTerm || selectedOptions
                  ? "top-[8px] text-[12px] leading-4 text-secondary"
                  : "top-[16px] text-[15px] leading-4 text-gray-400"
              }`}
            >
              Neresi için üretildi
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
        <ul className="p-2 px-0 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-0.5 rounded-lg max-h-[335px] overflow-y-auto max-sm:max-h-[235px]">
          <li onClick={clearSearchTerm}>
            <label className="flex items-center w-full pr-4 px-[10px] py-2.5 text-primary text-[15px] rounded-none">
              <span className="text-red font-semibold text-[15px]">✕</span>
              Sıfırla
            </label>
          </li>
          {filteredMarkets.map((item) => (
            <li key={item.id} className="flex items-center">
              <label className="flex items-center justify-between w-full pr-4 px-[10px] py-2.5 text-secondary font-primary rounded-none">
                <span className="text-primary font-primary text-[15px]">
                  {item.name}
                </span>
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                  checked={checkedMarketAssembled[item.name] || false}
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

export default Store;
