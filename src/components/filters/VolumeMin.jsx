import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function VolumeMin() {
  const [engineVolumes, setEngineVolumes] = useState([]);
  const { selectedVolumeMin, setSelectedVolumeMin } = useContext(FilterContext);
  const [volumeName, setVolumeName] = useState("");
  const detailsRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelection = (item) => {
    setSelectedVolumeMin(item.name);
    setSearchTerm(item.name);
    setVolumeName(item.name);
    closeDropdown();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
    if (e.target.value === "") {
      setVolumeName("");
    }
  };

  // clear searchTerm
  const clearSearchTerm = () => {
    setSearchTerm("");
    setVolumeName("");
    setSelectedVolumeMin("");
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

  useEffect(() => {
    async function getEngineVolumes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-engine-volumes`
        );
        setEngineVolumes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEngineVolumes();
  }, []);

  const filteredEngineVolumes =
    searchTerm && searchTerm !== volumeName
      ? engineVolumes.filter((volume) =>
          volume.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : engineVolumes;

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
              id="volumeMin"
              ref={inputRef}
              type="number"
              value={searchTerm}
              onChange={handleInputChange}
              className={`font-primary text-[15px] text-primary font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm ? "mt-[15px]" : "text-primary"
              }`}
            />
            <label
              htmlFor="volumeMin"
              className={`absolute cursor-pointer font-normal left-[11px] bg-transparent transition-all text-start w-[70%] overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm
                  ? "top-[7px] text-[12px] leading-4 text-secondary"
                  : "top-[15px] text-[15px] leading-5 text-gray-400"
              }`}
            >
              Hacim (cm<sup>3</sup>), min.
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
          {filteredEngineVolumes.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a
                href=""
                className={`rounded-none px-[10px] text-primary ${
                  item.name === volumeName
                    ? "text-red font-semibold hover:text-red"
                    : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default VolumeMin;
