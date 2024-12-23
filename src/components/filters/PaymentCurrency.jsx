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
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[40%] h-full">
      <details
        ref={detailsRef}
        className="w-full h-full dropdown"
        onToggle={handleToggle}
      >
        <summary
          className={`flex items-center justify-between w-full h-full px-[10px] bg-white border rounded-lg btn shadow-none hover:bg-white ${
            isOpen
              ? "border-[#8F93AD]  hover:!border-[#8F93AD]"
              : "border-gray-300"
          }`}
        >
          <div>
            <p className="font-primary text-[14px] font-normal">
              {selectedCurrency || "Currency"}
            </p>
          </div>
          <img
            src={chivronBottom}
            alt="chivron-Bottom"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </summary>
        <ul className="p-2 px-0 shadow menu dropdown-content z-[1] bg-base-100 flex justify-start w-full mt-0.5 rounded-lg ">
          {currencies.map((item) => (
            <li key={item.id} onClick={() => handleSelection(item)}>
              <a className="rounded-none px-[10px]">{item.name}</a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default PaymentCurrency;
