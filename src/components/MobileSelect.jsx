import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// icons
import car from "../assets/icons/mobile-brand.svg";
import chevronLeft from "../assets/icons/chevron-left.svg";
import chevronDown from "../assets/icons/mobile-chevron-down.svg";
import search from "../assets/icons/advanced-select-search.svg";
import clear from "../assets/icons/mobile-cancel.svg";

const MobileSelect = ({
  label,
  name,
  options,
  formData,
  handleChange,
  error,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = (option) => {
    handleChange({ target: { name, value: option.id } });
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    handleChange({ target: { name, value: "" } });
  };

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // edit page
  const isEditAdvertisement = /^\/edit-advertisement\/\d+$/.test(
    location.pathname
  );

  const isDisabledField =
    isEditAdvertisement &&
    (name === "brand" || name === "brand_model" || name === "vehicle_color");

  return (
    <>
      <div
        className={`relative flex ${
          name === "brand_model" && !formData.brand ? "hidden" : ""
        }`}
      >
        {name === "brand" && formData[name] === "" ? (
          <img
            src={car}
            alt=""
            className="absolute left-0 top-[9px] cursor-pointer"
            onClick={() => {
              if (!isDisabledField) {
                setIsOpen(true);
              }
            }}
          />
        ) : null}
        <input
          type="text"
          id={name}
          name={name}
          value={options.find((o) => o.id === formData[name])?.name || ""}
          className={`w-full h-[54px] text-[#212c3a] bg-white rounded-none border-b text-[15px] cursor-pointer outline-none ${
            formData[name]
              ? "pt-[31px] pb-[8px] leading-0"
              : "pt-[16px] py-[16px]"
          }  ${
            (name === "brand_model" ||
              name === "vehicle_market" ||
              name === "city" ||
              (name === "brand" && !formData.brand)) &&
            !error
              ? "border-none"
              : error
              ? "border-b-[#ff586d]"
              : "border-b-[#eaebf2]"
          }
            ${
              isDisabledField
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }
          `}
          onClick={() => {
            if (!isDisabledField) {
              setIsOpen(true);
            }
          }}
          disabled={isDisabledField}
          readOnly
        />
        <label
          htmlFor={name}
          className={`absolute text-[#8d94ad] transition-all duration-200 cursor-pointer ${
            formData[name] ? "text-[13px] top-[8px]" : "text-[15px] top-[16px]"
          } ${name === "brand" && formData[name] === "" ? "left-[45px]" : ""}`}
          onClick={() => {
            if (!isDisabledField) {
              setIsOpen(true);
            }
          }}
        >
          {label}
        </label>
        {!formData[name] ? (
          <img
            src={chevronDown}
            alt=""
            onClick={() => {
              if (!isDisabledField) {
                setIsOpen(true);
              }
            }}
            className="absolute right-2 top-[19px] w-4 h-4 cursor-pointer"
          />
        ) : !isDisabledField ? (
          <img
            src={clear}
            alt=""
            onClick={handleClear}
            className="absolute right-2 top-[19px] w-4 h-4 cursor-pointer"
          />
        ) : null}
      </div>
      {/* Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/30 flex justify-center z-50 transition-all duration-200 ${
            name === "brand" || name === "brand_model" || name === "city"
              ? "items-center"
              : "items-end"
          }`}
          onClick={handleClose}
        >
          <div
            className={`relative bg-white w-full overflow-y-auto shadow-lg px-[15px] opacity-100 transition-all duration-200 ${
              name === "brand" || name === "brand_model" || name === "city"
                ? "h-[100dvh] "
                : "max-h-[88dvh] rounded-tl-lg rounded-tr-lg"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {name === "brand" || name === "brand_model" || name === "city" ? (
              <div className="fixed w-full top-0 left-0 bg-white px-[15px] py-[12px] z-10 border-b border-[#f1f3f7]">
                <h2 className="font-medium w-full leading-0 text-center mb-[10px]">
                  {label.replace(/\*$/, "")}
                </h2>
                <div
                  className="absolute left-0 top-0 rounded-md flex items-center justify-center w-[40px] h-[48px]"
                  onClick={handleClose}
                >
                  <img
                    src={chevronLeft}
                    alt=""
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      (name === "brand" && "Örneğin, BMW") ||
                      (name === "brand_model" && "Seri ara") ||
                      (name === "city" && "Şehir ara")
                    }
                    className="w-full h-[40px] pl-[36px] pr-[10px] text-[15px] text-[#0b0b0b] bg-[#f6f7fa] rounded-[7px] border border-[#f6f7fa] focus:outline-none placeholder:text-[#8b96ad]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <img
                    src={search}
                    alt=""
                    className="absolute top-[12px] left-[12px] w-4"
                  />
                </div>
              </div>
            ) : (
              <div className="h-[60px] flex items-end pb-[10px] justify-center">
                <h2 className=" font-medium">{label.replace(/\*$/, "")}</h2>
                <div
                  className="cursor-pointer absolute right-[15px] top-[25px] font-medium text-[18px] text-[#8b96ad]"
                  onClick={handleClose}
                >
                  ✕
                </div>
              </div>
            )}

            <ul
              className={`overflow-y-auto pb-[70px] ${
                name === "brand" || name === "brand_model" || name === "city"
                  ? "mt-[100px]"
                  : ""
              }`}
            >
              {name === "brand" || name === "brand_model" || name === "city" ? (
                <>
                  {filteredOptions.map((option) => (
                    <li
                      className="flex items-center cursor-pointer"
                      key={option.id}
                      onClick={() => handleSelect(option)}
                    >
                      <label
                        htmlFor="item"
                        className="cursor-pointer flex items-center justify-between w-full text-left pr-[4px] py-[14px] text-[15px] border-b border-[#f1f3f7]"
                      >
                        {option.name}
                        <input
                          type="radio"
                          id="item"
                          className="hidden peer cursor-pointer"
                          checked={isSelected}
                          onChange={() => setIsSelected(!isSelected)}
                        />
                        <div
                          className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition ${
                            isSelected || formData[name] === option.id
                              ? "border-red"
                              : "border-[#eaebf2]"
                          }`}
                        >
                          <div
                            className={`w-[10px] h-[10px] bg-red rounded-full ${
                              isSelected || formData[name] === option.id
                                ? "peer-checked:block"
                                : "hidden"
                            }`}
                          ></div>
                        </div>
                      </label>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {options.map((option) => (
                    <li
                      className="flex items-center cursor-pointer"
                      key={option.id}
                      onClick={() => handleSelect(option)}
                    >
                      <label
                        htmlFor="item"
                        className="cursor-pointer flex items-center justify-between w-full text-left pr-[4px] py-[14px] text-[15px] border-b border-[#f1f3f7]"
                      >
                        {option.name}
                        <input
                          type="radio"
                          id="item"
                          className="hidden peer cursor-pointer"
                          checked={isSelected}
                          onChange={() => setIsSelected(!isSelected)}
                        />
                        <div
                          className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition ${
                            isSelected || formData[name] === option.id
                              ? "border-red"
                              : "border-[#f6f7fa]"
                          }`}
                        >
                          <div
                            className={`w-[10px] h-[10px] bg-red rounded-full ${
                              isSelected || formData[name] === option.id
                                ? "peer-checked:block"
                                : "hidden"
                            }`}
                          ></div>
                        </div>
                      </label>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSelect;
