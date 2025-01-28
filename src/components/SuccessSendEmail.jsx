import React from "react";

const SuccessSend = () => {
  return (
    <div className="min-w-[330px] max-w-[440px]">
      <div className="p-[20px] bg-[#F00000] rounded-t-lg relative">
        <p className="font-primary font-semibold text-[16px] text-center text-white">
          PIN kurtarma
        </p>
      </div>
      <div className="p-[20px]">
        <svg
          viewBox="0 0 24 24"
          className="text-[#16b616] w-10 h-10 mx-auto mb-4"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-[#16b616] text-center text-[16px] leading-snug">
          PIN kurtarma e-postası başarıyla gönderildi.
        </div>
      </div>
    </div>
  );
};

export default SuccessSend;
