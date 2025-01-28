import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// components
import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

function EditAdForm({ onCloseModal, showNewModal }) {
  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [edtiPin, setEditPin] = useState("");
  const navigate = useNavigate();

  // PIN check API
  const handleCheckPin = async () => {
    if (edtiPin.trim() === "") {
      setErrorMsg("Lütfen PIN'i yazın!");
      return;
    }

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/pin-code/check`,
        {
          announcement_id: id,
          pin_code: edtiPin,
        }
      );

      if (response.data.success === true) {
        navigate(`/edit-advertisement/${id}`);
        onCloseModal();
      }
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      setErrorMsg("PIN kodu yanlış!");
    }
  };

  const handlePinChange = (e) => {
    setEditPin(e.target.value);
    setErrorMsg("");
  };

  return (
    <div className="min-w-[330px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          Kimliğinizi doğrulayın
        </p>
      </div>
      <div className="p-[20px]">
        <div>
          <p className="text-[#333] text-[14px] leading-snug">
            Devam etmek için reklamınızın PIN kodunu girin.
          </p>
          <p className="text-[#333] text-[14px]  pb-2 leading-snug">
            İlan sitede yayınlandığında Kibcar.com tarafından size gönderilen
            mailden PIN kodunuzu alabilirsiniz.
          </p>
          <p className="text-[#333] text-[14px]">
            {/* You can get the OTP code from the letter sent to you on gmail */}
          </p>
        </div>
        <div>
          <p className="text-[#333] text-[14px] mb-[15px]">İlanın PIN'i:</p>
        </div>
        <div className="flex gap-x-[20px] text-[14px]">
          <input
            type="text"
            name="pin"
            value={edtiPin}
            onChange={handlePinChange}
            className="px-4 py-[12px] border rounded w-full lg:min-w-[220px] outline-none focus:border-[red] transition-all duration-200"
            placeholder="PIN girin"
          />
          <AnimatedButtonWrapper>
            <button
              onClick={handleCheckPin}
              className="btn-search text-white rounded-md bg-red hover:bg-[#882111] shadow-none hover:shadow-none px-[10px] py-[12px] w-full font-primary text-[14px] font-normal"
            >
              <p>Onayla</p>
            </button>
          </AnimatedButtonWrapper>
        </div>
        <p className="mt-2 ml-1 text-[14px] error text-red">{errorMsg}</p>
        <button
          onClick={() => showNewModal("pin-methods")}
          className="mt-1 ml-1 text-[15px] underline text-link"
        >
          PIN kodunuzu mu unuttunuz?
        </button>
      </div>
    </div>
  );
}

export default EditAdForm;
