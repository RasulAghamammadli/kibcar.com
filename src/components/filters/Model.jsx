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
  const initialCheckedModelState = {};

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
    setSearchTerm(""); // Clear the search term after each selection
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

  const selectedOptions = Object.keys(checkedModels).filter(
    (item) => checkedModels[item]
  );

  const summaryText =
    selectedOptions.length === 0 ? "Model" : selectedOptions.join(", ");

  useEffect(() => {
    setCheckedModels(initialCheckedModelState);
    setCheckedModels([]);
  }, [brandId]);

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
    getModels();
  }, [brandId]);
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
        className={`w-full h-full dropdown ${!brandId && "cursor-not-allowed"}`}
        onToggle={(e) => setIsOpen(e.target.open)}
      >
        <summary
          className={`flex items-center justify-between w-full h-full px-[10px] bg-white opacity-100 rounded-lg btn shadow-none hover:bg-white ${
            isOpen
              ? "border-[#8F93AD] hover:!border-[#8F93AD]"
              : "border-gray-300"
          }`}
          // disabled={!brandId}
        >
          <div className="max-w-[80%]">
            <input
              ref={inputRef}
              id="model"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder={summaryText}
              className={`font-primary text-[15px] font-normal w-full bg-transparent border-none focus:outline-none text-start overflow-hidden whitespace-nowrap overflow-ellipsis ${
                searchTerm ? "mt-[9px]" : ""
              }`}
              // disabled={!brandId}
            />
            <label
              htmlFor="model"
              className={`${
                searchTerm
                  ? "absolute cursor-pointer font-normal left-0 top-[8px] pl-[0.6rem] pr-[0.1rem] text-[12px] leading-3 transition-all w-full text-start peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:top-[8px]  peer-focus:text-[12px] peer-focus:leading-3 font-primary text-secondary"
                  : "hidden"
              } `}
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
        <ul className="p-2 px-0 z-[1] shadow menu dropdown-content bg-base-100 flex flex-col flex-nowrap justify-start w-full mt-0.5 rounded-lg max-h-[210px] overflow-y-auto">
          {filteredModels.map((model) => (
            <li key={model.id} className="flex items-center">
              <label className="flex items-center justify-between w-full pr-4 px-[10px] py-2.5 text-secondary rounded-none font-primary">
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
