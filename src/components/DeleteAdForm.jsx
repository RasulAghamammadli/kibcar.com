import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// components
import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

function DeleteAdForm({ onCloseModal, showNewModal }) {
  const { id } = useParams();
  const [deleteAdErrorMsg, setDeleteAdErrorMsg] = useState("");
  const [deletePin, setDeletePin] = useState("");
  const navigate = useNavigate();

  // PIN check API
  const handleCheckPin = async () => {
    if (deletePin.trim() === "") {
      setDeleteAdErrorMsg("Lütfen PIN'i yazın!");
      return;
    }

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/pin-code/check`,
        {
          announcement_id: id,
          pin_code: deletePin,
        }
      );

      if (response.data.success === true) {
        await handleDeleteApi();
      }
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      setDeleteAdErrorMsg("PIN kodu yanlış!");
    }
  };

  // Ad delete API
  const handleDeleteApi = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            pin_code: deletePin,
          },
        }
      );

      if (response.status === 204) {
        onCloseModal?.();
        navigate("/delete-success");
      } else {
        setDeleteAdErrorMsg("İlan silinirken bir hata oluştu.");
      }
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      setDeleteAdErrorMsg("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const handleDeletePinChange = (e) => {
    setDeletePin(e.target.value);
    setDeleteAdErrorMsg("");
  };

  return (
    <div className="min-w-[330px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          İlanı sil
        </p>
      </div>
      <div className="p-[20px]">
        <div>
          <p className="text-[#333] text-[14px] pb-2 leading-snug">
            Lütfen ilanın silinmesini onaylamak için PIN kodunu girin. PIN
            kodunu, ilan sitede yayınlandığında kibcar.com'dan size gönderilen
            e-postada bulabilirsiniz.
          </p>
        </div>
        <div>
          <p className="text-[#333] text-[14px] mb-[15px]">İlanın PIN'i:</p>
        </div>
        <div className="flex gap-x-[20px] text-[14px]">
          <input
            type="text"
            name="pin"
            value={deletePin}
            onChange={handleDeletePinChange}
            className="px-4 py-[12px] border rounded w-full lg:min-w-[220px] max-w-[150px] outline-none focus:border-[red] transition-all duration-200"
            placeholder="PIN girin"
          />
          <AnimatedButtonWrapper>
            <button
              onClick={handleCheckPin}
              className="btn-search text-white rounded-md bg-red hover:bg-[#882111] shadow-none hover:shadow-none px-[10px] py-[12px] w-full font-primary text-[14px] font-normal max-sm:w-full"
            >
              <p>Onayla</p>
            </button>
          </AnimatedButtonWrapper>
        </div>
        <p className="mt-2 ml-1 text-[14px] error text-red">
          {deleteAdErrorMsg}
        </p>
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

export default DeleteAdForm;
