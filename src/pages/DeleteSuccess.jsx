import React from "react";
import { Link } from "react-router-dom";

const DeleteSuccess = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white p-6  md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-[#16b616] w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-[30px] mb-[20px] text-gray-900 font-semibold text-center">
            İlan başarıyla silindi!
          </h3>
          <p className="text-gray-600 my-2">
            İlanınız başarıyla silindi. Başka bir işlem yapmak için ana sayfaya
            geri dönün.
          </p>
          <p>İyi günler!</p>
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

export default DeleteSuccess;
