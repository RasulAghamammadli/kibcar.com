import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

function EditAdForm({ onCloseModal, showNewModal }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [pin, setPin] = useState("");

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const onConfirm = () => {
    if (pin != 1111) {
      setErrorMsg("Wrong Pin!");
    } else {
      navigate(`/edit-advertisement/${id}`);
    }
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
            value={pin}
            onChange={handlePinChange}
            className="px-4 py-[12px] border rounded w-full lg:min-w-[220px]"
            placeholder="PIN girin"
          />
          <AnimatedButtonWrapper>
            <button
              onClick={onConfirm}
              className="px-[10px] py-[12px] w-full font-bold text-white bg-red rounded-md "
            >
              Onayla
            </button>
          </AnimatedButtonWrapper>
        </div>
        <button
          onClick={() => showNewModal("pin-methods")}
          className="mt-2 ml-1 text-[15px] underline text-link"
        >
          PIN kodunuzu mu unuttunuz?
        </button>
        <p className="mt-1 ml-1 text-[14px] error text-red">{errorMsg}</p>
      </div>
    </div>
  );
}

export default EditAdForm;
