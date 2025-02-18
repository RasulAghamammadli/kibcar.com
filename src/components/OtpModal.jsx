import React, { useState, useRef, useEffect } from "react";
import OtpCloseModal from "../assets/icons/close-modal.svg";

function OtpModal({
  onClose,
  handleOtpVerification,
  resendOtp,
  otpExpTime,
  retryOtp,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(120);
  const [errorMsg, setErrorMsg] = useState("");
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]);
  const timerRef = useRef(null);

  // OTP inputs
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

  // Backspace
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Verify OTP
  const handleVerify = (otpValue) => {
    if (otpValue) {
      handleOtpVerification(otpValue);
    } else {
      setErrorMsg("Lütfen OTP'yi girin");
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (isResending) return; // stop dblClick (dblRequest)
    setIsResending(true);
    try {
      await resendOtp();
      setOtp(["", "", "", "", "", ""]);
    } catch (error) {
      console.error("OTP tekrar gönderme hatası:", error);
    } finally {
      setTimeout(() => setIsResending(false), 2000);
    }
  };

  // Format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `0${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  // OTP Expire Time
  useEffect(() => {
    if (otpExpTime) {
      const now = Math.floor(Date.now() / 1000);
      const remainingTime = otpExpTime - now;
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
    }
  }, [otpExpTime]);

  // First input focus
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // OTP Timer
  useEffect(() => {
    if (timeLeft > 0) {
      timerRef.current = setTimeout(
        () => setTimeLeft((prev) => prev - 1),
        1000
      );
    }
    return () => clearTimeout(timerRef.current);
  }, [timeLeft]);

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
        <div className="p-[20px]">
          <div className="mb-[15px]">
            <p className="text-[#6B6B6B] text-[14px]">
              Devam etmek için OTP'yi girin.
            </p>
            <p className="text-[#6B6B6B] text-[14px]">
              OTP kodunu telefon numaranıza gelen mesajdan alabilirsiniz.
            </p>
          </div>
          <div className="flex justify-between text-[14px] mb-[15px]">
            <p className="text-[#6B6B6B]">OTP'yi girin:</p>
          </div>
          <div className="flex justify-between gap-2 px-5 max-sm:px-0">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                inputMode="numeric"
                pattern="\d*"
                autoComplete="one-time-code"
                aria-label={`OTP karakteri ${index + 1}`}
                value={digit}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                className="w-11 h-11 text-center border border-[#E4E4E4] rounded outline-none focus:border-link transition-all duration-100 text-[16px] max-sm:w-10 max-sm:h-10"
              />
            ))}
          </div>
          <div className="text-[14px] text-[#6B6B6B] mt-[15px]">
            {timeLeft > 0 ? (
              <p>
                Kalan süre:{" "}
                <span className="text-link font-semibold">
                  {formatTime(timeLeft)}
                </span>
              </p>
            ) : retryOtp === "RETRY_LIMIT" ? (
              <p className="text-[14px] text-red">
                OTP yeniden gönderme sınırına ulaştınız, lütfen geri dönün.
              </p>
            ) : (
              <p>
                Süre bitti,{" "}
                <span
                  onClick={handleResendOtp}
                  className="text-link underline hover:no-underline cursor-pointer font-semibold"
                >
                  OTP'yi yeniden gönder
                </span>
              </p>
            )}
          </div>
          {errorMsg && <p className="mt-2 text-[14px] text-red">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
}

export default OtpModal;
