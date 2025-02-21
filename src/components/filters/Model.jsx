import axios from "axios";
import { useEffect, useRef, useState, useContext } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import FilterContext from "../../context/filterContext/FilterContext";

function Model() {
  const { checkedModels, setCheckedModels, brandId, setCheckedModelsIds } =
    useContext(FilterContext);
  const [models, setModels] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const detailsRef = useRef(null);
  const inputRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const modelId = event.target.id;

    setCheckedModels((prevItems) => ({
      ...prevItems,
      [item]: !prevItems[item],
    }));

    setCheckedModelsIds((prevItems) => {
      if (prevItems.includes(modelId)) {
        return prevItems.filter((item) => item !== modelId);
      } else {
        return [...prevItems, modelId];
      }
    });

    setSearchTerm("");
  };

  // clear searchTerm
  const clearSearchTerm = () => {
    setSearchTerm("");
    setCheckedModels({});
    setCheckedModelsIds([]);
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

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getModels() {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/brand-models?brand_id=${brandId?.brand}`
        );
        setModels(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (brandId) {
      getModels();
    } else {
      setModels([]);
      clearSearchTerm();
    }
  }, [brandId]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isOpen]);

  const selectedModels = Object.keys(checkedModels)
    .filter((key) => checkedModels[key])
    .join(", ");

  return (
    <div className="h-full">
      <details
        ref={detailsRef}
        className={`w-full h-full dropdown ${!brandId && "cursor-not-allowed"}`}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary
          style={{
            background: "#fff",
            opacity: !brandId && "0.5",
            border: !brandId && "1px solid #dfe3e9",
          }}
          className={`flex items-center justify-between w-full h-full opacity-100 px-[10px] bg-white rounded-lg btn shadow-none hover:bg-white ${
            isOpen
              ? "border-[#8F93AD] hover:!border-[#8F93AD]"
              : "border-gray-300"
          }`}
          disabled={!brandId}
        >
          <div className="max-w-[80%] max-sm:w-full">
            <input
              ref={inputRef}
              id="model"
              type="text"
              value={searchTerm || selectedModels}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className={`font-primary text-[15px] text-primary font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm || selectedModels ? "mt-[15px]" : "text-primary"
              }`}
              disabled={!brandId}
            />
            <label
              htmlFor="model"
              className={`absolute cursor-pointer font-normal left-[11px] bg-transparent transition-all text-start w-fit ${
                searchTerm || selectedModels
                  ? "top-[9px] text-[12px] leading-3 text-secondary"
                  : "top-[18px] text-[15px] leading-3 text-gray-400"
              }`}
            >
              Model
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
          {filteredModels.map((model) => (
            <li key={model.id} className="flex items-center">
              <label className="flex items-center justify-between w-full pr-4 px-[10px] py-2.5 text-secondary font-primary rounded-none">
                <span className="text-primary font-primary text-[15px]">
                  {model.name}
                </span>
                <input
                  type="checkbox"
                  name={model.name}
                  id={model.id}
                  checked={checkedModels[model.name] || false}
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

export default Model;
