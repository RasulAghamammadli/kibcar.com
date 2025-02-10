// import React, { useState, useEffect } from "react";
// import OtpCloseModal from "../assets/icons/close-modal.svg";
// import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

// function OtpModal({ onClose, resendOtp, handleOtpVerification }) {
//   const [otp, setOtp] = useState("");
//   const [showResendMsg, setShowResendMsg] = useState(false);
//   const [resendDisabled, setResendDisabled] = useState(false);
//   const [timer, setTimer] = useState(60);
//   const [errorMsg, setErrorMsg] = useState("");

//   useEffect(() => {
//     let interval;
//     if (resendDisabled) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [resendDisabled]);

//   useEffect(() => {
//     if (timer === 0) {
//       setResendDisabled(false);
//       setTimer(60);
//     }
//   }, [timer]);

//   useEffect(() => {
//     let timeout;
//     if (showResendMsg) {
//       timeout = setTimeout(() => {
//         setShowResendMsg(false);
//       }, 4000);
//     }
//     return () => clearTimeout(timeout);
//   }, [showResendMsg]);

//   const handleChange = (event) => {
//     setOtp(event.target.value);
//   };

//   const handleVerify = () => {
//     if (otp) {
//       handleOtpVerification(otp);
//     } else {
//       setErrorMsg("Lütfen OTP'yi girin");
//     }
//   };

//   const handleResend = () => {
//     const check = resendOtp();
//     if (check) {
//       setShowResendMsg(true);
//       setResendDisabled(true);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="absolute inset-0 bg-black bg-opacity-25"></div>

//       <div className="z-10 bg-white rounded-lg shadow-lg min-w-[330px] max-w-[450px] mx-[15px]">
//         <div className="py-[16px] px-[20px] bg-[#F00000] rounded-t-lg relative">
//           <p className="font-primary font-medium text-[14px] text-center text-white">
//             Kimliğinizi doğrulayın
//           </p>
//           <img
//             onClick={onClose}
//             className="absolute top-[50%] right-[26px] translate-y-[-50%] cursor-pointer"
//             src={OtpCloseModal}
//             alt="OtpCloseModal"
//           />
//         </div>
//         <div className="px-[20px]">
//           <div className="py-[20px]">
//             <p className="text-[#6B6B6B] text-[14px]">
//               Devam etmek için OTP'nizi girin.
//             </p>
//             <p className="text-[#6B6B6B] text-[14px]">
//               OTP kodunu gmail'e gönderilen mektuptan alabilirsiniz.
//             </p>
//           </div>
//           <div>
//             <p className="text-[#6B6B6B] text-[14px] mb-[15px]">
//               OTP'yi girin:
//             </p>
//           </div>
//           <div className="flex gap-x-[20px]">
//             <input
//               type="text"
//               name="otp"
//               value={otp}
//               onChange={handleChange}
//               className="px-4 py-[12px] border rounded w-full outline-none focus:border-[red] transition-all duration-200"
//               placeholder="OTP'yi girin"
//             />
//             <AnimatedButtonWrapper>
//               <button
//                 type="button"
//                 className="px-4 py-[12px] w-full font-bold text-white bg-red rounded-md"
//                 onClick={handleVerify}
//               >
//                 OTP'yi doğrulayın
//               </button>
//             </AnimatedButtonWrapper>
//           </div>
//           <p className="mt-2 ml-1 text-[14px] error text-red">{errorMsg}</p>
//           <div className="flex justify-between mt-4">
//             <span className="pb-4 py-2 font-primary font-medium text-[#6B6B6B] text-[14px] rounded inline-block">
//               OTP'yi almadınız mı?
//               <span
//                 className={`underline text-red ps-1 cursor-pointer ${
//                   resendDisabled ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//                 onClick={!resendDisabled ? handleResend : null}
//               >
//                 {resendDisabled
//                   ? `${timer}s içinde yeniden gönder`
//                   : "Tekrar göndermek için buraya tıklayın"}
//               </span>
//             </span>
//           </div>
//           {showResendMsg && (
//             <p className="text-[#6B6B6B] text-[14px] pb-4">
//               OTP başarıyla yeniden gönderildi!
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OtpModal;

import React, { useState, useEffect, useRef } from "react";
import OtpCloseModal from "../assets/icons/close-modal.svg";
import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

function OtpModal({ onClose, resendOtp, handleOtpVerification }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showResendMsg, setShowResendMsg] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [errorMsg, setErrorMsg] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (resendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendDisabled]);

  useEffect(() => {
    if (timer === 0) {
      setResendDisabled(false);
      setTimer(60);
    }
  }, [timer]);

  useEffect(() => {
    let timeout;
    if (showResendMsg) {
      timeout = setTimeout(() => {
        setShowResendMsg(false);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [showResendMsg]);

  // otp inputs
  const handleChange = (index, event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (otpValue) => {
    if (otpValue) {
      handleOtpVerification(otpValue);
    } else {
      setErrorMsg("Lütfen OTP'yi girin");
    }
  };

  const handleResend = () => {
    const check = resendOtp();
    if (check) {
      setShowResendMsg(true);
      setResendDisabled(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      <div className="z-10 bg-white rounded-lg shadow-lg min-w-[330px] max-w-[450px] mx-[15px]">
        <div className="py-[16px] px-[20px] bg-[#F00000] rounded-t-lg relative">
          <p className="font-primary font-medium text-[14px] text-center text-white">
            Kimliğinizi doğrulayın
          </p>
          <img
            onClick={onClose}
            className="absolute top-[50%] right-[26px] translate-y-[-50%] cursor-pointer"
            src={OtpCloseModal}
            alt="OtpCloseModal"
          />
        </div>
        <div className="px-[20px]">
          <div className="py-[20px]">
            <p className="text-[#6B6B6B] text-[14px]">
              Devam etmek için OTP'nizi girin.
            </p>
            <p className="text-[#6B6B6B] text-[14px]">
              OTP kodunu telefonunuza gelen mesajdan alabilirsiniz.
            </p>
          </div>
          <div>
            <p className="text-[#6B6B6B] text-[14px] mb-[15px]">
              OTP'yi girin:
            </p>
          </div>
          <div className="flex justify-between gap-2 px-5 max-sm:px-0">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                className="w-11 h-11 text-center border rounded outline-none focus:border-[red] transition-all duration-100 text-[16px] max-sm:w-10 max-sm:h-10"
              />
            ))}
          </div>
          <p className="mt-2 ml-1 text-[14px] error text-red">{errorMsg}</p>
          <div className="flex justify-between mt-4">
            <span className="pb-4 py-2 font-primary font-medium text-[#6B6B6B] text-[14px] rounded inline-block">
              OTP'yi almadınız mı?
              <span
                className={`underline text-red ps-1 cursor-pointer ${
                  resendDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={!resendDisabled ? handleResend : null}
              >
                {resendDisabled
                  ? `${timer}s içinde yeniden gönder`
                  : "Tekrar göndermek için buraya tıklayın"}
              </span>
            </span>
          </div>
          {showResendMsg && (
            <p className="text-[#6B6B6B] text-[14px] pb-4">
              OTP başarıyla yeniden gönderildi!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtpModal;
