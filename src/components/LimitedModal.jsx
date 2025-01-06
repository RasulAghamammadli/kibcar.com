import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import EditAdForm from "./EditAdForm";
import ForgetPinForm from "./ForgetPinForm";
import { Link } from "react-router-dom";

const LimitedModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // stop scroll
  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // close modal
  const closeModal = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-lg min-w-[330px] max-w-[440px] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-[#F00000] rounded-t-lg relative">
          <p className="text-white font-semibold text-[16px] text-center">
            Ödemeli ilan
          </p>
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-[14px] right-4 text-white text-lg font-bold"
          >
            ✕
          </button>
        </div>
        <div className="p-5 text-[14px] text-left">
          <p className="mb-[14px]">
            Tekrardan hoşgeldiniz, bedava ilan limitiniz doldu. Ödemeli ilan
            paylaşacaksınız.
          </p>
          <p className="w-fit border border-y-black border-x-0 py-3 pr-[40px] mb-[14px]">
            1 İlan Ücreti: 450 Türk Lirası
          </p>
          <Modal>
            <Modal.Open windowName="forget-pin">
              <div className="flex items-center">
                <input type="radio" id="pay" className="cursor-pointer" />
                <label htmlFor="pay" className="cursor-pointer ml-[7px]">
                  Kredi Kartıyla Ödemeye devam
                </label>
              </div>
            </Modal.Open>
            <Modal.Window name="forget-pin">
              <ForgetPinForm />
            </Modal.Window>
          </Modal>
          <div className="mt-[20px]">
            <Link
              to="/"
              className="rounded-lg bg-red hover:bg-[#882111] text-white p-2 transition-all duration-200"
            >
              Ana sayfa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedModal;
