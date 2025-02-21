import axios from "axios";
import { useRef, useState, useEffect } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function Brand() {
  const { setBrandId, brandId } = useContext(FilterContext);
  const [brandName, setBrandName] = useState("");
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const hasUserSelected = useRef(false);

  const handleSelection = (item) => {
    setBrandId({
      brand: item.id,
    });
    setBrandName(item.name);
    setSearchTerm(item.name);
    hasUserSelected.current = true;
    closeDropdown();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // if selected brand is not equal to the value of the input
    if (hasUserSelected.current) {
      setSearchTerm(brandName);
      return;
    }

    setSearchTerm(value);
    hasUserSelected.current = false;

    if (!isOpen) {
      setIsOpen(true);
    }
    if (value === "") {
      setBrandName("");
      setBrandId("");
    }
  };

  // clear searchTerm
  const clearSearchTerm = () => {
    setSearchTerm("");
    setBrandName("");
    setBrandId("");
    hasUserSelected.current = false;
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
    inputRef.current.blur();

    if (!hasUserSelected.current) {
      setSearchTerm("");
    }
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

  const filteredBrands =
    searchTerm && searchTerm !== brandName
      ? brands.filter((brand) =>
          brand.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : brands;

  useEffect(() => {
    async function getBrands() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/brands`
        );
        setBrands(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBrands();
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
          className={`flex items-center justify-between w-full h-full px-[10px] bg-white border rounded-lg btn shadow-none hover:bg-white ${
            isOpen
              ? "border-[#8F93AD] hover:!border-[#8F93AD]"
              : "border-gray-300"
          }`}
        >
          <div className="max-w-[80%] max-sm:w-full">
            <input
              ref={inputRef}
              id="brand"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              className={`font-primary text-[15px] text-primary font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm ? "mt-[15px]" : "text-primary"
              }`}
            />
            <label
              htmlFor="brand"
              className={`absolute cursor-pointer font-normal left-[11px] bg-transparent transition-all text-start w-fit ${
                searchTerm
                  ? "top-[9px] text-[12px] leading-3 text-secondary"
                  : "top-[18px] text-[15px] leading-3 text-gray-400"
              }`}
            >
              Marka
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
          {filteredBrands.map((brand) => (
            <li key={brand.id} onClick={() => handleSelection(brand)}>
              <a
                className={`rounded-none px-[10px] text-primary ${
                  brand.name === brandName
                    ? "text-red font-semibold hover:text-red"
                    : ""
                }`}
              >
                {brand.name}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default Brand;
