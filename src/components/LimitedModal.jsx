import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import ForgetPinForm from "./ForgetPinForm";

const LimitedModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

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
          <p className="w-fit border border-y-black border-x-0 py-3 pr-[60px] mb-[14px]">
            1 İlan Ücreti: <span className="font-bold">450 Türk Lirası</span>
          </p>
          <div className="flex items-center">
            <input
              type="radio"
              id="pay"
              className="cursor-pointer"
              onChange={() => setIsSelected(!isSelected)}
            />
            <label htmlFor="pay" className="cursor-pointer ml-[7px]">
              Kredi Kartıyla Ödemeye devam
            </label>
          </div>
          <div className="mt-[16px] flex gap-2">
            <Link
              to="/"
              className="rounded-md bg-red hover:bg-[#882111] text-center min-w-[80px] text-white p-2 transition-all duration-200"
            >
              Ana sayfa
            </Link>
            <Modal>
              <Modal.Open windowName="forget-pin">
                <button
                  disabled={!isSelected}
                  className={`rounded-md text-white py-2 px-4 min-w-[80px] bg-[#1aad1a] transition-all duration-200 hover:bg-[green] ${
                    isSelected
                      ? "opacity-100"
                      : "opacity-50 hover:bg-[#1aad1a] cursor-not-allowed"
                  }`}
                >
                  Devam et
                </button>
              </Modal.Open>
              <Modal.Window name="forget-pin">
                <ForgetPinForm />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedModal;
