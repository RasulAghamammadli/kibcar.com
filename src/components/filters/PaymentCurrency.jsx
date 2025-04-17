import { useEffect, useRef, useState } from "react";
import chivronBottom from "../../assets/icons/chivron-bottom-gray.svg";
import { useContext } from "react";
import FilterContext from "../../context/filterContext/FilterContext";

function PaymentCurrency() {
  const { selectedCurrency, setSelectedCurrency } = useContext(FilterContext);
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (item) => {
    setSelectedCurrency(item.name);
    setIsOpen(false);
  };

  const currencies = [
    { id: 1, name: "USD" },
    { id: 2, name: "EUR" },
    { id: 3, name: "STG" },
  ];

  useEffect(() => {
    setSelectedCurrency("USD");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-[40%] h-full">
      <div ref={detailsRef} className="relative w-full h-full">
        <button
          type="button"
          className={`flex items-center justify-between flex-nowrap w-full h-full px-[8px] bg-white border rounded-lg btn shadow-none hover:bg-white ${
            isOpen ? "border-[#8F93AD]" : "border-gray-300"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="font-primary text-[14px] font-normal">
            {selectedCurrency || "Currency"}
          </p>
          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <ul className="absolute z-[1] left-0 right-0 p-2 px-0 shadow menu bg-base-100 flex justify-start w-full mt-0.5 rounded-lg">
            {currencies.map((item) => (
              <li key={item.id} onClick={() => handleSelection(item)}>
                <a
                  className={`rounded-none px-[10px] block w-full text-left ${
                    selectedCurrency === item.name
                      ? "text-red font-semibold hover:text-red"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PaymentCurrency;
