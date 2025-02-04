import React from "react";
import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-[#b61616] w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12 0A12 12 0 1 0 24 12 12.014 12.014 0 0 0 12 0Zm4.95 16.95a1 1 0 0 1-1.414 0L12 13.414l-3.536 3.536a1 1 0 0 1-1.414-1.414L10.586 12 7.05 8.464a1 1 0 1 1 1.414-1.414L12 10.586l3.536-3.536a1 1 0 1 1 1.414 1.414L13.414 12l3.536 3.536a1 1 0 0 1 0 1.414Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-[30px] mb-[20px] text-gray-900 font-semibold text-center">
            Ödeme Başarısız!
          </h3>
          <p className="text-gray-600 my-2">
            Ödemeniz işlenirken bir hata oluştu. Lütfen tekrar deneyin veya
            farklı bir ödeme yöntemi kullanın.
          </p>
          <p className="text-gray-600">
            Sorun devam ederse bizimle iletişime geçin.
          </p>
          <div className="py-8 text-center">
            <Link
              to="/"
              className="rounded-lg bg-red hover:bg-[#882111] text-white font-semibold p-3 transition-all duration-200"
            >
              ANA SAYFAYA GERİ DÖN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fail;
