import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ViaEmail = ({ showNewModal }) => {
  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirmEmail = async () => {
    if (email.trim() === "") {
      setErrorMsg("Lütfen e-posta adresinizi giriniz.");
      return;
    }

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/forget-pin`,
        {
          announcement_id: Number(id),
          pin_method: "email",
          email: email,
        }
      );

      if (response.data.success === true) {
        setEmail("");
        showNewModal("success-send-email");
      }
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      if (error.response?.status === 403) {
        setErrorMsg("Girilen e-posta adresi doğru değil.");
      } else if (error.response?.status === 422) {
        setErrorMsg("Lütfen geçerli bir e-posta adresi giriniz.");
      } else if (error.response?.status === 404) {
        setErrorMsg("İlan bulunamadı.");
      } else if (error.response?.status === 400) {
        setErrorMsg("Bugün bu ilan için PIN kurtarma limiti aşıldı.");
      } else {
        setErrorMsg("Bir hata oluştu, lütfen tekrar deneyiniz.");
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMsg("");
  };

  return (
    <div className="min-w-[330px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          PIN kurtarma
        </p>
      </div>
      <div className="p-[20px] py-[15px]">
        <p className="text-[#333] text-[14px] pb-2 leading-snug">
          Lütfen e-posta adresinizi giriniz.
        </p>
        <div className="flex justify-between gap-x-[20px] text-[14px]">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-[12px] border rounded w-full lg:min-w-[220px] max-w-[200px] outline-none focus:border-[#4c88f9] transition-all duration-200"
            placeholder="E-posta adresi"
          />
          <button
            onClick={handleConfirmEmail}
            className="text-white rounded-md max-w-[100px] bg-[#4c88f9] hover:bg-[#2a59af] shadow-none hover:shadow-none px-[10px] py-[12px] w-full font-primary text-[14px] font-normal transition-all duration-200"
          >
            <p>Göndermek</p>
          </button>
        </div>
        <p className="mt-2 ml-1 text-[14px] error text-red">{errorMsg}</p>
        <button
          onClick={() => showNewModal("pin-methods")}
          className="mt-1 ml-1 text-[15px] underline text-link"
        >
          Geri
        </button>
      </div>
    </div>
  );
};

export default ViaEmail;
