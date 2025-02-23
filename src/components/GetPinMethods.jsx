import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

function GetPinMethods({ onCloseModal, showNewModal, setSharedData }) {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    if (value === "sms") {
      showNewModal("via-sms");
    } else if (value === "email") {
      showNewModal("via-email");
    }
  };

  // async function handleClick(method) {
  //   await handleForgetPin(id, method);
  //   showNewModal("forget-pin");
  // }

  // const handleForgetPin = async (id, method) => {
  //   console.log(import.meta.env.VITE_REACT_APP_API_URL);
  //   try {
  //     const response = await axios.post(
  //       `${
  //         import.meta.env.VITE_REACT_APP_API_URL
  //       }/api/announcements/forget-pin`,
  //       {
  //         announcement_id: id,
  //         pin_method: method,
  //       }
  //     );

  //     if (response.data.success == true) {
  //       const resToken = response.data.token;
  //       setSharedData(`https://www.paytr.com/odeme/guvenli/${resToken}`);
  //     }
  //   } catch (error) {
  //     //   setForgetPinModal(false);

  //     console.log(error);
  //   }
  // };

  return (
    <div className="min-w-[330px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          PIN Kurtarma
        </p>
      </div>
      <div className="p-[20px]">
        <div className="flex flex-col">
          <label className="flex items-center mb-4 cursor-pointer w-fit">
            <input
              type="radio"
              value="SMS"
              checked={selectedOption === "sms"}
              onChange={() => handleOptionChange("sms")}
              onClick={() => showNewModal("via-sms")}
              className="form-radio accent-red h-5 w-5 cursor-pointer"
            />
            <span className="ml-2 text-base">SMS yoluyla</span>
          </label>
          <label className="flex items-center cursor-pointer w-fit">
            <input
              type="radio"
              value="email"
              checked={selectedOption === "email"}
              onChange={() => handleOptionChange("email")}
              onClick={() => showNewModal("via-email")}
              className="form-radio accent-red h-5 w-5 cursor-pointer"
            />
            <span className="ml-2 text-base">E-posta adresi yoluyla</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default GetPinMethods;
