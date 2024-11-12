import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function GearBox() {
  const [gearBoxs, setGearBoxs] = useState([]);
  const { checkedGearBox, setCheckedGearBox, setCheckedGearBoxIds } =
    useContext(FilterContext);
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const itemId = event.target.id;

    setCheckedGearBox((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));
    setCheckedGearBoxIds((prevItems) => {
      if (prevItems.includes(itemId)) {
        return prevItems.filter((item) => item !== itemId);
      } else {
        return [...prevItems, itemId];
      }
    });
    setSearchTerm(""); // Clear search term after selection
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

  const filteredGearBoxs = gearBoxs.filter((gearBox) =>
    gearBox.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getGearBoxs() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-transmissions`
        );
        setGearBoxs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getGearBoxs();
  }, []);

  const selectedOptions = Object.keys(checkedGearBox).filter(
    (item) => checkedGearBox[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Gear Box" : selectedOptions.join(", ");
  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isOpen]);

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary
          className={`flex items-center justify-between w-full h-full px-[10px] bg-white border rounded-lg btn shadow-none hover:bg-white  ${
            isOpen
              ? "border-[#8F93AD] hover:!border-[#8F93AD]"
              : "border-gray-300"
          }`}
        >
          <div className="max-w-[80%]">
            <input
              id="gearBox"
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder={summaryText}
              className={`font-primary text-[15px] font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm ? "mt-[9px]" : ""
              }`}
            />
            <label
              htmlFor="gearBox"
              className={`${
                searchTerm
                  ? "absolute cursor-pointer font-normal left-0 top-[8px] pl-[0.6rem] pr-[0.1rem] text-[12px] leading-3 transition-all duration-300 w-full text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[8px]  peer-focus:text-[12px] peer-focus:leading-3 font-primary text-secondary"
                  : "hidden"
              } `}
            >
              Gear Box
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
          {filteredGearBoxs.map((item) => (
            <li className="flex items-center">
              <label className="flex items-center justify-between w-full pr-4 px-[10px] py-2.5 text-secondary font-primary rounded-none">
                <span className="text-primary font-primary text-[15px]">
                  {item.name}
                </span>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.id}
                  checked={checkedGearBox[item.name] || false}
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

export default GearBox;
