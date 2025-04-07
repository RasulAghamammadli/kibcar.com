import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// images & icons
import backView from "../assets/images/back-view.svg";
import frontView from "../assets/images/front-view.svg";
import insideView from "../assets/images/inside-view.svg";
import addMore from "../assets/images/add-more.svg";
import { IoIosClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

// components
import "react-toastify/dist/ReactToastify.css";
import AnimatedButtonWrapper from "../components/AnimatedButtonWrapper";
import OtpModal from "../components/OtpModal";
import LimitedModal from "../components/LimitedModal";

// components for mobile view
import MobileSelect from "../components/MobileSelect";
import MobileNumberInput from "../components/MobileNumberInput";
import MobileMarchSelect from "../components/MobileMarchSelect";
import MobileOptionSelector from "../components/MobileOptionSelector";
import MobileFeatureSelector from "../components/MobileFeatureSelector";
import MobileSwitchOption from "../components/MobileSwitchOption";

function NewAdvertisement() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [brands, setBrands] = useState([]);
  const [brandModels, setBrandModels] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [gears, setGears] = useState([]);
  const [gearBoxs, setGearBoxs] = useState([]);
  const [years, setYears] = useState([]);
  const [banTypes, setBanTypes] = useState([]);
  const [colors, setColors] = useState([]);
  const [engineVolumes, setEngineVolumes] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [owners, setOwners] = useState([]);
  const [cities, setCities] = useState([]);

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [paymentToken, setPaymentToken] = useState(null);
  const [otpExpTime, setOtpExpTime] = useState(null);
  const [retryOtp, setRetryOtp] = useState("");
  const [carFeatures, setCarFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [error, setError] = useState("");

  const seatNumbers = [
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      name: "2",
    },
    {
      id: 3,
      name: "3",
    },
    {
      id: 4,
      name: "4",
    },
    {
      id: 5,
      name: "5",
    },
    {
      id: 6,
      name: "6",
    },
    {
      id: 7,
      name: "7",
    },
    {
      id: 8,
      name: "8+",
    },
    {
      id: 0,
      name: "Bahsedilmesin",
    },
  ];

  const handleInput = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Only keep numbers
    setFormData((prev) => ({
      ...prev,
      userTel: value,
    }));

    // Set error based on regex
    if (!/^[1-9][0-9]{9}$/.test(value)) {
      setError("Lütfen geçerli bir 10 haneli telefon numarası girin.");
    } else {
      setError("");
    }
  };

  const handleCheckboxChangeForCarFeatures = (featureId) => (event) => {
    if (event.target.checked) {
      setSelectedFeatures([...selectedFeatures, featureId]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
    }
  };

  const [PictureErrorMsg, setPictureErrorMsg] = useState("");

  useEffect(() => {
    async function getDefaultOptions() {
      try {
        const brandsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/brands`
        );
        setBrands(brandsRes.data);

        const vehicleFeaturesRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-features`
        );
        setCarFeatures(vehicleFeaturesRes.data);

        const fuelTypesRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/fuel-types`
        );
        setFuelTypes(fuelTypesRes.data);

        const gearsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/gears`
        );
        setGears(gearsRes.data);

        const gearBoxsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-transmissions`
        );
        setGearBoxs(gearBoxsRes.data);

        const yearsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-years`
        );
        setYears(yearsRes.data.reverse());

        const banTypeRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-categories`
        );
        setBanTypes(banTypeRes.data);

        const colorsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-colors`
        );
        setColors(colorsRes.data);

        const ownersRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-prior-owners`
        );
        setOwners(ownersRes.data);

        const volumesRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-engine-volumes`
        );
        setEngineVolumes(volumesRes.data);

        const marketsRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/vehicle-markets`
        );
        setMarkets(marketsRes.data);

        const citiesRes = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/cities`
        );
        setCities(citiesRes.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDefaultOptions();
  }, []);

  const initialData = {
    brand: "",
    fuelType: "",
    model: "",
    gear: "",
    banType: "",
    gearBox: "",
    march: "",
    marchNum: "",
    year: "",
    color: "",
    engineVolume: "",
    price: "",
    currencyValue: "",
    enginePower: "",
    howManyDoYouOwn: "",
    marketAssembled: "",
    hasStroke: false,
    hasColor: false,
    needRepair: false,
    seatNum: "",
    carStatus: "",
    credit: false,
    barter: false,
    vinCode: "",
    moreInfo: "",
    alloyWheels: false,
    centralLocking: false,
    leatherSalon: false,
    seatVentilation: false,
    usa: false,
    parkingRadar: false,
    xenonLamps: false,
    hatch: false,
    airConditioning: false,
    nearViewCamera: false,
    rainSensor: false,
    seatHeating: false,
    sideCurtains: false,
    userName: "",
    userCity: "",
    userEmail: "",
    userTel: "",
    uploadedImages: [],
    images: [],
    vehicle_front_view_image: null,
    vehicle_back_view_image: null,
    vehicle_front_panel_image: null,
    imagesFiles: [],
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    async function getModels() {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/brand-models?brand_id=${formData.brand}`
        );
        setBrandModels(response.data);
      } catch (error) {
        setBrandModels([]);
        console.log(error);
      }
    }
    getModels();

    // model is cleared when brand is empty
    setFormData((prevData) => ({
      ...prevData,
      model: "",
    }));
  }, [formData.brand]);

  useEffect(() => {
    if (
      !formData.seatNum &&
      seatNumbers.length > 0 &&
      window.innerWidth <= 576
    ) {
      setFormData((prev) => ({
        ...prev,
        seatNum: seatNumbers[seatNumbers.length - 1].id,
      }));
    }
  }, [formData.seatNum]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  }

  function validateImageCount(uploadedImages) {
    const minImages = 3;
    const maxImages = 21;
    const numberOfUploadedImages = uploadedImages;

    if (numberOfUploadedImages < minImages) {
      return `Lütfen en az ${minImages} adet resim yükleyin.`;
    } else if (numberOfUploadedImages > maxImages) {
      return `En fazla ${maxImages} resim yükleyebilirsiniz.`;
    } else if (
      formData.vehicle_front_view_image === null ||
      formData.vehicle_back_view_image === null ||
      formData.vehicle_front_panel_image === null
    ) {
      return "Ön, arka ve iç görünüm resimlerini eklemeniz gerekiyor.";
    }

    return ""; // No error
  }

  const handleImageUpload = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Use the original file's name or create a new one if necessary
      const filename = file.name || `image_${new Date().getTime()}`;
      const newImage = {
        src: URL.createObjectURL(file),
        flipped: 0,
        type: file.type,
        name: filename,
      };

      // updated form data
      let updatedFormData = { ...formData };

      // Directly use the file object
      if (index === 0) {
        updatedFormData.vehicle_front_view_image = new File([file], filename, {
          type: file.type,
        });
      } else if (index === 1) {
        updatedFormData.vehicle_back_view_image = new File([file], filename, {
          type: file.type,
        });
      } else if (index === 2) {
        updatedFormData.vehicle_front_panel_image = new File([file], filename, {
          type: file.type,
        });
      } else {
        // add images to imagesFiles
        updatedFormData.imagesFiles = [
          ...formData.imagesFiles,
          new File([file], filename, { type: file.type }),
        ];
      }

      let updatedImages = [...formData.uploadedImages];
      updatedImages[index] = newImage;

      updatedFormData.uploadedImages = updatedImages;

      setFormData(updatedFormData);
    }
  };

  const rotateImage = (index, direction) => {
    const updatedImages = formData.uploadedImages.map((img, i) =>
      i === index
        ? {
            ...img,
            flipped: img.flipped + (direction === "clockwise" ? 90 : -90),
          }
        : img
    );

    setFormData({
      ...formData,
      uploadedImages: updatedImages,
    });
  };

  const removeImage = (index) => {
    let updatedFormData = { ...formData };
    let updatedImages = [...formData.uploadedImages];

    // Remove images for the first three fixed slots (keep as null)
    if (index === 0) {
      updatedFormData.vehicle_front_view_image = null;
      updatedImages[0] = null;
    } else if (index === 1) {
      updatedFormData.vehicle_back_view_image = null;
      updatedImages[1] = null;
    } else if (index === 2) {
      updatedFormData.vehicle_front_panel_image = null;
      updatedImages[2] = null;
    } else {
      // Remove dynamic images completely
      let updatedFiles = [...formData.imagesFiles];
      let fileIndex = index - 3;
      if (updatedFiles[fileIndex]) {
        updatedFiles.splice(fileIndex, 1);
        updatedImages.splice(index, 1);
      }
      updatedFormData.imagesFiles = updatedFiles;
    }

    // Preserve null for the first three fixed slots
    updatedFormData.uploadedImages = updatedImages.map((img, idx) =>
      idx < 3 ? img ?? null : img
    );

    setFormData(updatedFormData);
  };

  const imageSlots = formData.uploadedImages.map((image, index) => {
    if (image) {
      return (
        <div
          key={Math.random() * 1000}
          className="col-span-6 md:w-[185px] h-[150px] bg-[#F6F7FA] border border-[#eaebf2] relative rounded-[7px] overflow-hidden max-sm:col-span-4 max-sm:max-h-[110px]"
        >
          <img
            src={image.src}
            alt={`Uploaded image ${index}`}
            className="object-cover w-full h-full rounded-[7px]"
            style={{ transform: `rotate(${image.flipped}deg)` }}
          />
          <div className="absolute w-[100%] h-[150px] left-0 top-0 max-sm:h-[110px] max-sm:w-full">
            <div>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-[5px] right-[5px] !text-[35px] text-red z-40 w-[25px] h-[25px] bg-imgActions rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#ffff66]"
              >
                <IoIosClose />
              </button>
              <div className="flex gap-x-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    rotateImage(index, "clockwise");
                  }}
                  className="absolute bottom-[5px] right-[5px] !text-[24px] text-red z-40 w-[25px] h-[25px] bg-imgActions rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#ffff66]"
                >
                  ↻
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    rotateImage(index, "counterclockwise");
                  }}
                  className="absolute bottom-[5px] left-[5px] !text-[24px] text-red z-40 w-[25px] h-[25px] bg-imgActions rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#ffff66]"
                >
                  ↺
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  // Add placeholders to imageSlots if they're not already replaced by an uploaded image
  [
    { src: frontView, tag: "Ön Görünüm" },
    { src: backView, tag: "Arka Görünüm" },
    { src: insideView, tag: "İç Görünüm" },
  ].forEach((placeholder, index) => {
    if (!formData.uploadedImages[index]) {
      imageSlots.splice(
        index,
        0,
        <div className="col-span-6 max-sm:col-span-4">
          <div
            key={`placeholder-${index}`}
            className="md:w-[185px] h-[150px] relative flex rounded-[7px] items-center justify-center bg-[#F6F7FA] mb-2 border border-[#eaebf2] hover:border-[#3273ec] transition-all duration-200 max-sm:max-h-[110px] max-sm:mb-[2px]"
          >
            <input
              type="file"
              id={`file-upload-${index}`}
              style={{ display: "none" }}
              onChange={(e) => handleImageUpload(e, index)}
              accept="image/*"
            />
            <div>
              <img
                src={placeholder.src}
                alt={`Placeholder ${index}`}
                className="md:w-[140px] m-auto cursor-pointer lg:m-0"
                onClick={() =>
                  document.getElementById(`file-upload-${index}`).click()
                }
              />
            </div>
          </div>
          <p className="text-secondary text-center max-sm:text-[12px]">
            {placeholder.tag}
          </p>
        </div>
      );
    }
  });

  // Always show the "Add More" button
  imageSlots.push(
    <div
      key="add-more"
      className={`col-span-6 cursor-pointer md:w-[185px] h-[150px] relative flex rounded-[7px] items-center justify-center bg-[#F6F7FA] hover:bg-[#ebedf3] transition-all duration-100 max-sm:border max-sm:border-[#f1f3f7]  ${
        formData.imagesFiles.length === 0
          ? "max-sm:h-[50px] max-sm:col-span-12"
          : "max-sm:h-[110px] max-sm:col-span-4"
      }`}
      onClick={() => document.getElementById("file-upload-add-more").click()}
    >
      <input
        type="file"
        id="file-upload-add-more"
        style={{ display: "none" }}
        onChange={(e) =>
          handleImageUpload(
            e,
            formData.uploadedImages.length < 3
              ? 3
              : formData.uploadedImages.length
          )
        }
        accept="image/*"
        multiple
      />
      <div
        className={`flex flex-col justify-center items-center gap-2 text-[#4C88F9] max-sm:text-[14px] ${
          formData.imagesFiles.length === 0 ? "max-sm:flex-row" : ""
        }`}
      >
        <img
          src={addMore}
          alt="Add more"
          className={`w-[40px] m-auto lg:m-0 ${
            formData.imagesFiles.length === 0 ? "max-sm:w-[20px]" : ""
          }`}
        />
        Fotoğraf Ekle
      </div>
    </div>
  );

  // handle limited modal
  const handleLimitedModal = () => {
    setModalType("limited");
  };

  const closeModal = () => {
    setModalType(null);
  };

  // create announcement
  const saveAnnouncement = async (otp) => {
    try {
      // Form Data
      const params = {
        vehicle_category: formData.banType,
        fuel_type: formData.fuelType,
        gear: formData.gear,
        vehicle_transmission: formData.gearBox,
        vehicle_year: formData.year,
        vehicle_prior_owner: formData.howManyDoYouOwn,
        vehicle_status: formData.carStatus,
        mileage: formData.march,
        mileage_measurement_unit: formData.marchNum,
        vehicle_color: formData.color,
        price: formData.price,
        vehicle_engine_volume: formData.engineVolume,
        engine_power: formData.enginePower,
        vehicle_market: formData.marketAssembled,
        number_of_seats: formData.seatNum,
        loan: formData.credit,
        barter: formData.barter,
        is_crashed: formData.hasStroke,
        is_painted: formData.hasColor,
        for_spare_parts: formData.needRepair,
        vin_code: formData.vinCode,
        additional_information: formData.moreInfo,
        vehicle_front_view_image: formData.vehicle_front_view_image,
        vehicle_back_view_image: formData.vehicle_back_view_image,
        vehicle_front_panel_image: formData.vehicle_front_panel_image,
        brand_model: formData.model,
        city: formData.userCity,
        price_currency: formData.currencyValue,
        name: formData.userName,
        email: formData.userEmail,
        phone: formData.userTel,
        brand: formData.brand,
        otp: otp,
      };

      // vehicle features
      selectedFeatures.forEach((id, index) => {
        params[`vehicle_features_${index}`] = id;
      });

      // images files
      formData.imagesFiles.forEach((file, index) => {
        params[`images_${index}`] = file;
      });

      const headers = { "Content-Type": "multipart/form-data" };

      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements`,
        params,
        { headers }
      );

      if (response?.status === 201) {
        navigate("/create-success");
      } else if (response?.status === 200) {
        setPaymentToken(response?.data?.token);
        setShowOtpModal(false);
        handleLimitedModal();
      }
    } catch (error) {
      console.error("Announcement error:", error.response);
      if (error?.response?.data?.cause === "FALSE_OTP") {
        toast.error("Doğru OTP'yi girin.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else if (error?.response?.data?.cause === "NOT_REQUESTED") {
        toast.error("OTP talebi yapılmadı. Lütfen önce OTP isteyin.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else if (error?.response?.data?.cause === "EXPIRED") {
        toast.error("OTP süresi doldu, lütfen tekrar isteyin.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else if (error?.response?.status === 422) {
        toast.error(error?.response?.data?.message, {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else if (error) {
        toast.error("Bir hata oluştu, lütfen tekrar deneyin.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    }
  };

  // form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // OTP request
    const requestOtp = async () => {
      try {
        // phone param
        const params = { phone: formData.userTel };

        const response = await axios.post(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/announcements/otp/request`,
          params
        );

        if (response.status === 202 && response.data.success === true) {
          setOtpExpTime(response.data.expAge);
          setShowOtpModal(true);
          toast.success("OTP gönderildi.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        } else {
          toast.error(response.data.message, {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.error("OTP request error:", error);

        if (error.response) {
          const { status } = error.response;
          if (status === 500) {
            toast.error("Telefon numarası gereklidir.", {
              position: "bottom-right",
              autoClose: 3000,
            });
          } else if (status === 400) {
            toast.error("Bugün için OTP isteklerinin sınırına ulaştınız.", {
              position: "bottom-right",
              autoClose: 3000,
            });
          } else {
            toast.error("Bir hata oluştu, lütfen tekrar deneyin.", {
              position: "bottom-right",
              autoClose: 3000,
            });
          }
        } else {
          toast.error("Bağlantı hatası, lütfen internetinizi kontrol edin.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      }
    };

    const errorMessage = validateImageCount(formData.uploadedImages.length);
    const picSection = document.getElementById("picturesSection");
    const errorMsg = document.getElementById("error");

    if (errorMessage) {
      setPictureErrorMsg(errorMessage);
      errorMsg.classList.remove("hidden");
      picSection.scrollIntoView({ behavior: "smooth" });
      return;
    } else {
      errorMsg.classList.add("hidden");
      // OTP request
      requestOtp();
    }
  };

  // OTP Modal verification
  const handleOtpVerification = (otp) => {
    saveAnnouncement(otp);
  };

  // Resend OTP
  const resendOtp = async () => {
    try {
      const params = { phone: formData.userTel };

      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/api/announcements/otp/resend`,
        params
      );

      if (response.data.success) {
        setOtpExpTime(response.data.expAge);
        toast.success("OTP tekrar gönderildi.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else {
        handleOtpResendError(response);
      }
    } catch (error) {
      if (error.response) {
        handleOtpResendError(error.response);
      } else {
        console.error("OTP yeniden gönderme hatası:", error);
        toast.error("Bir hata oluştu, lütfen tekrar deneyin.", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    }
  };

  // handle resend otp errors
  const handleOtpResendError = (response) => {
    const { status, data } = response;
    const { message, cause } = data;

    if (status === 422) {
      toast.error("Telefon numarası gereklidir.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
    if (cause === "NOT_REQUESTED") {
      toast.error("OTP talebi yapılmadı. Lütfen önce OTP isteyin.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else if (cause === "RETRY_LIMIT") {
      setRetryOtp("RETRY_LIMIT");
      toast.error("OTP yeniden gönderme sınırına ulaştınız.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else if (cause === "TOO_LATE") {
      toast.error("OTP süresi doldu, lütfen tekrar isteyin.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else if (cause === "TOO_EARLY") {
      const secondsMatch = message.match(/\d+/);
      const waitSeconds = secondsMatch ? parseInt(secondsMatch[0], 10) : 0;
      toast.warning(
        `OTP'yi ${waitSeconds} saniye içinde tekrar gönderebilirsiniz`,
        {
          position: "bottom-right",
          autoClose: 3000,
        }
      );
    } else {
      toast.error("Bilinmeyen bir hata oluştu.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  // reset all cache
  const deleteOtp = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/otp/${
          formData.userTel
        }`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(formData.userCity);

  return (
    <form ref={formRef} action="">
      {/* web view */}
      <div className="container max-sm:hidden">
        <div>
          <div className="bg-[#f1f3f7] border-y border-[#eaebf2] p-[20px]">
            <h2 className="uppercase font-secondary text-[16px] font-bold leading-8 text-primary">
              YENİ İLAN YARAT
            </h2>
          </div>
          <ul className="ml-3 flex flex-col space-y-[6px] items-start mt-[30px] mb-[25px] list-outside advertisement-list font-primary text-[14px]">
            <li>Bir araç üç ayda bir kez ücretsiz yayınlanabiliyor.</li>
            <li>
              Üç ay içinde tekrarlanan veya benzer ilanlara (marka/model, renk)
              ödeme yapılır.
            </li>
            <li>
              İlanınızı sitenin ön saflarında görmek için "Tanıtım" hizmetini
              kullanın.
            </li>
          </ul>
          <div className="grid grid-cols-12 gap-[30px] md:ml-6">
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Marka
                </label>
                <select
                  name="brand"
                  id="brand"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal max-sm:hidden"
                  onChange={handleChange}
                  value={formData.brand}
                  placeholder="Select brand"
                  required
                >
                  <option value="" disabled>
                    Seç
                  </option>
                  {brands.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Model
                </label>
                <select
                  name="model"
                  id="model"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.model}
                  required
                >
                  <option value={""} disabled>
                    Seç
                  </option>
                  {brandModels.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Yakıt tipi
                </label>
                <select
                  name="fuelType"
                  id="fuelType"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.fuelType}
                  required
                >
                  <option value={""} disabled>
                    Seç
                  </option>
                  {fuelTypes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Çekiş
                </label>
                <select
                  name="gear"
                  id="gear"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.gear}
                  required
                >
                  <option value={""} disabled>
                    Seç
                  </option>
                  {gears.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Gövde Tipi
                </label>
                <select
                  name="banType"
                  id="banType"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.banType}
                  required
                >
                  <option value={""} disabled>
                    Seç
                  </option>
                  {banTypes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Vites
                </label>
                <select
                  name="gearBox"
                  id="gearBox"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.gearBox}
                  required
                >
                  <option value="" disabled>
                    Seç
                  </option>
                  {gearBoxs.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Yürüyüş
                </label>
                <div className="flex items-center justify-between gap-x-8 md:max-w-[452px] w-full">
                  <div className="w-1/2 md:w-auto">
                    <input
                      name="march"
                      type="number"
                      id="march"
                      className="w-full py-[10px] px-[15px] outline-none bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.march}
                      required
                    />
                  </div>
                  <div className="md:max-w-[177px] flex space-x-4 items-center justify-end">
                    <div className="flex items-center gap-x-2">
                      <input
                        required
                        className="w-4 h-4 accent-red d-flex"
                        onChange={handleChange}
                        id="km"
                        type="radio"
                        name="marchNum"
                        value="km"
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="km"
                      >
                        km
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input
                        required
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="mi"
                        type="radio"
                        name="marchNum"
                        value="mi"
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="mi"
                      >
                        mil
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Yıl
                </label>
                <select
                  name="year"
                  id="year"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.year}
                  required
                >
                  <option value={""} disabled>
                    Seç
                  </option>
                  {years.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Renk
                </label>
                <select
                  name="color"
                  id="color"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.color}
                  required
                >
                  <option value={""} disabled>
                    Seç
                  </option>
                  {colors.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Hacim, sm³
                </label>
                <select
                  name="engineVolume"
                  id="engineVolume"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.engineVolume}
                  required
                >
                  <option value={""} disabled>
                    Seç
                  </option>
                  {engineVolumes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Fiyat
                </label>
                <div className="flex items-center justify-between gap-x-4 md:max-w-[452px] w-full">
                  <div className="w-1/2 md:w-auto">
                    <input
                      name="price"
                      type="number"
                      id="price"
                      className="w-full py-[10px] px-[15px] outline-none bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.price}
                      required
                    />
                  </div>
                  <div className="md:max-w-[220px] flex space-x-4 items-center justify-end">
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="stg"
                        type="radio"
                        name="currencyValue"
                        value="stg"
                        required
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="stg"
                      >
                        STG
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="usd"
                        type="radio"
                        name="currencyValue"
                        value="usd"
                        required
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="usd"
                      >
                        USD
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        onChange={handleChange}
                        id="eur"
                        type="radio"
                        name="currencyValue"
                        value="eur"
                        required
                      />
                      <label
                        className="text-[14px] font-secondary"
                        htmlFor="eur"
                      >
                        EUR
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Güç, (bg)
                </label>
                <input
                  className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal focus:outline-0"
                  type="number"
                  name="enginePower"
                  id="enginePower"
                  value={formData.enginePower}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Kaç tane sahip oldunuz?
                </label>
                <select
                  name="howManyDoYouOwn"
                  id="howManyDoYouOwn"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.howManyDoYouOwn}
                  required
                >
                  <option value="" disabled>
                    Seç
                  </option>
                  {owners.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                  Hangi pazar için atandı
                </label>
                <select
                  name="marketAssembled"
                  id="marketAssembled"
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  value={formData.marketAssembled}
                  required
                >
                  <option value="" disabled>
                    Seç
                  </option>
                  {markets.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[10px] md:flex-row flex-col mt-6">
                <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px]">
                  Durum
                </label>
                <div className=" flex-col gap-[20px]">
                  <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                    <div className="mt-[2px]">
                      <label className="custom-checkbox">
                        <input
                          checked={formData.needRepair}
                          onChange={handleCheckboxChange}
                          type="checkbox"
                          name="needRepair"
                          id="needRepair"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="needRepair">
                        <h3 className="font-primary text-[14px] font-normal text-primary ">
                          Kaza veya yedek parça için
                        </h3>
                        <p className="pt-1 text-[14px] whitespace-normal font-primary text-secondary">
                          Onarım ihtiyacında veya genel hasar
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                    <div className="mt-[2px]">
                      <label className="custom-checkbox">
                        <input
                          checked={formData.hasStroke}
                          onChange={handleCheckboxChange}
                          type="checkbox"
                          name="hasStroke"
                          id="hasStroke"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="hasStroke">
                        <h3 className="font-primary text-[14px] font-normal text-primary ">
                          Motor arızası var
                        </h3>
                        <p className="pt-1 text-[14px] whitespace-normal	 w-[100%] font-primary text-secondary">
                          Bir veya daha fazla parça değiştirilmiş veya tamir
                          edilmiş
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="flex w-full md:max-w-[452px] lg:w-[900px] gap-x-5 ">
                    <div className="mt-[2px]">
                      <label className="custom-checkbox">
                        <input
                          checked={formData.hasColor}
                          onChange={handleCheckboxChange}
                          type="checkbox"
                          name="hasColor"
                          id="hasColor"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="hasColor">
                        <h3 className="font-primary text-[14px] font-normal text-primary ">
                          Boyalıdır
                        </h3>
                        <p className="pt-1 text-[14px] whitespace-normal font-primary text-secondary">
                          Bir veya daha fazla parça boyanmış ya da kozmetik
                          işlem yapılmış
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col ">
                <label className="font-primary text-[14px] font-normal md:min-w-[12%]">
                  Araç Durumu
                </label>
                <div className="md:flex-nowrap  flex-wrap gap-y-3 md:gap-y-0  md:min-w-[452px] w-full gap-x-5 flex md:ml-2">
                  <div className=" flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="carStatusNew"
                      type="radio"
                      name="carStatus"
                      value="0"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="carStatusNew"
                    >
                      Yeni
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4  accent-red"
                      id="carStatusUsed"
                      type="radio"
                      name="carStatus"
                      value="1"
                      onChange={handleChange}
                      required
                    />

                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="carStatusUsed"
                    >
                      İkinci el
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col ">
                <label className="font-primary text-[14px] font-normal md:min-w-[12%]">
                  Koltuk sayısı
                </label>
                <div className="md:flex-nowrap  flex-wrap gap-y-3 md:gap-y-0  md:min-w-[452px] w-full gap-x-5 flex md:ml-2">
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum1"
                      type="radio"
                      name="seatNum"
                      value="1"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum1"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum2"
                      type="radio"
                      name="seatNum"
                      value="2"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum2"
                    >
                      2
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum3"
                      type="radio"
                      name="seatNum"
                      value="3"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum3"
                    >
                      3
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum4"
                      type="radio"
                      name="seatNum"
                      value="4"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum4"
                    >
                      4
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum5"
                      type="radio"
                      name="seatNum"
                      value="5"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum5"
                    >
                      5
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum6"
                      type="radio"
                      name="seatNum"
                      value="6"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum6"
                    >
                      6
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum7"
                      type="radio"
                      name="seatNum"
                      value="7"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum7"
                    >
                      7
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum8"
                      type="radio"
                      name="seatNum"
                      value="8"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum8"
                    >
                      8
                    </label>
                  </div>
                  <div className="flex items-center ml-0 gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatVal"
                      type="radio"
                      name="seatNum"
                      value="0"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="text-[14px] font-normal  text-primary"
                      htmlFor="seatVal"
                    >
                      Bahsedilmesin
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px]"></label>
                <div className="md:max-w-[452px] w-full space-x-5 flex items-center">
                  <div className="mt-[4px] cursor-pointer">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.credit}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="credit"
                        id="credit"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="credit">
                      <h3 className="font-primary cursor-pointer text-[14px] font-normal text-primary ">
                        Kredi ile
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px] "></label>
                <div className="md:max-w-[452px] w-full space-x-5 flex items-center">
                  <div className="mt-[4px] cursor-pointer">
                    <label className="custom-checkbox">
                      <input
                        checked={formData.barter}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        name="barter"
                        id="barter"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label htmlFor="barter">
                      <h3 className="font-primary cursor-pointer text-[14px] font-normal text-primary ">
                        Takas yapılabilir
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[30px] mt-[30px] md:ml-6">
            <div className="col-span-12 md:col-span-6">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px]">
                  VIN kodu
                </label>
                <input
                  type="text"
                  value={formData.vinCode}
                  name="vinCode"
                  id="vinCode"
                  className="w-full focus:outline-0 md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between lg:gap-[10px] xl:gap-[53mt-[117px]px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px]">
                  Ek bilgiler
                </label>
                <div className="w-full min-h-[132px] md:min-w-[452px] ">
                  <textarea
                    type="textarea"
                    value={formData.moreInfo}
                    name="moreInfo"
                    id="moreInfo"
                    className="w-full min-h-[132px]  focus:outline-0 md:min-w-[452px] bg-white  py-[10px] px-[15px] rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                    onChange={handleChange}
                  ></textarea>
                  <p className="text-secondary text-sm">
                    Telefon numaralarının kaydedilmesi yasaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:ml-6">
            <h2 className="font-secondary text-[26px] font-bold leading-8 text-primary mt-[30px] mb-4">
              Araç Tedarikçileri
            </h2>
            <div className="grid grid-cols-12 gap-y-5">
              {carFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="xl:col-span-3 lg:col-span-4 col-span-6 space-y-[10px]"
                >
                  <div className="mt-[2px] flex items-center space-x-[10px]">
                    <label className="flex items-center custom-checkbox">
                      <input
                        checked={selectedFeatures.includes(feature.id)} // Check if the feature is selected
                        onChange={handleCheckboxChangeForCarFeatures(
                          feature.id
                        )} // Pass the feature ID to the change handler
                        type="checkbox"
                        name={feature.name} // Use dynamic name
                        id={feature.id} // Use dynamic ID
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label htmlFor={feature.id} className="cursor-pointer">
                      {feature.name}
                    </label>{" "}
                    {/* Use dynamic label */}
                  </div>
                </div>
              ))}
            </div>
            <div id="picturesSection" className="grid grid-cols-12">
              <div className="col-span-12">
                <h2 className="mb-4 mt-[30px] font-secondary text-[26px] font-bold leading-8 text-primary">
                  Resimler
                </h2>
                <div className="bg-[#f6f7fa] p-4 rounded-lg mb-6">
                  <p className="text-[14px] text-[#ff586d]">Yasaktır</p>
                  <p className="font-semibold mt-2 text-[#212c3a]">
                    Ekran görüntüleri ve çerçeveli fotoğraflar yasaktır.
                  </p>
                </div>
                <p
                  id="error"
                  className="font-secondary text-[14px] font-bold leading-8 text-red hidden"
                >
                  {PictureErrorMsg}
                </p>
                <div>
                  <div className="grid grid-cols-12 md:flex md:flex-wrap gap-[10px]">
                    {imageSlots}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-[30px] md:ml-6">
            <div className="col-span-12">
              <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary">
                İletİşİm
              </h2>
              <p className="mt-[10px] font-primary text-secondary">
                İlan yayımlandıktan sonra iletişim bilgileri değiştirilemez.
              </p>
              <div className="mt-[30px] flex flex-col gap-y-[30px]">
                <div className="flex flex-col items-start md:flex-row md:items-center gap-y-3">
                  <label
                    className="md:min-w-[244px] md:max-w-[244px] w-full"
                    htmlFor="yourName"
                  >
                    Adınız
                  </label>
                  <input
                    className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal focus:outline-0"
                    type="text"
                    name="userName"
                    id="yourName"
                    placeholder="Adınız"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center">
                  <label
                    className="md:min-w-[244px] md:max-w-[244px] w-full"
                    htmlFor="userCity"
                  >
                    Şehir
                  </label>
                  <select
                    className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal focus:outline-0"
                    name="userCity"
                    id="userCity"
                    placeholder="Şehir"
                    value={formData.userCity}
                    onChange={handleChange}
                    required
                  >
                    <option value="Select">Seç</option>
                    {cities.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center gap-y-3">
                  <label
                    className="md:min-w-[244px] md:max-w-[244px] w-full"
                    htmlFor="userEmail"
                  >
                    E-posta
                  </label>
                  <div className="flex flex-col md:max-w-[452px] w-full">
                    <input
                      className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal focus:outline-0"
                      type="Email"
                      name="userEmail"
                      id="userEmail"
                      placeholder="E-posta"
                      value={formData.userEmail}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-secondary ml-1 text-sm">
                      Sitede gösterilmeyecek
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:flex-row md:items-center gap-y-3">
                  <label
                    className="md:min-w-[244px] md:max-w-[244px] w-full"
                    htmlFor="userTel"
                  >
                    Cep Telefonu Numarası
                  </label>
                  <div className="relative md:max-w-[452px] w-full">
                    <span className="font-primary text-[14px] font-normal px-3 py-[10px] h-full absolute  rounded-md rounded-tr-none rounded-br-none left-0 bg-slate-100">
                      +90
                    </span>
                    <input
                      className="w-full py-[10px] px-[15px] pl-14 bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal focus:outline-0"
                      type="number"
                      name="userTel"
                      id="userTel"
                      placeholder="1234567890"
                      value={formData.userTel}
                      maxLength="10"
                      minLength="10"
                      onChange={handleChange}
                      onInput={handleInput}
                      required
                    />
                  </div>
                </div>
                {error && <p className="text-red">{error}</p>}
                <div className="max-w-[696px] mt-30 flex justify-end">
                  <AnimatedButtonWrapper>
                    <button
                      onClick={handleFormSubmit}
                      className="md:min-w-[452px] min-w-full text-[14px] font-primary text-white py-[18px] px-[20px] outline-none rounded-md font-medium bg-red"
                      type="button"
                    >
                      <p>Devam Et</p>
                    </button>
                  </AnimatedButtonWrapper>
                </div>
                {/* <button
                  className="py-3 bg-green w-20"
                  type="button"
                  onClick={deleteOtp}
                >
                  reset limit
                </button> */}
                <div className="text-secondary mb-10">
                  Bir ilan vererek{" "}
                  <Link to="/terms-and-conditions" className="text-link">
                    Kullanıcı Sözleşmesini
                  </Link>{" "}
                  ve kibcar.com{" "}
                  <Link to="/rules" className="text-link">
                    Kurallarını
                  </Link>{" "}
                  kabul etmiş olursunuz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* web view */}

      {/* mobile view */}
      <div className="hidden flex-col max-sm:flex">
        {/* <div className="bg-[#f1f3f7] border-y border-[#eaebf2] py-[2px] px-[15px]">
          <h2 className="uppercase font-secondary font-bold text-primary leading-6 text-[12px]">
            YENİ İLAN YARAT
          </h2>
        </div>
        <ul className="flex flex-col space-y-[6px] items-start list-outside advertisement-list font-primary mt-[10px] mb-[10px] ml-0 pr-[15px] text-[12px]">
          <li>Bir araç üç ayda bir kez ücretsiz yayınlanabiliyor.</li>
          <li>
            Üç ay içinde tekrarlanan veya benzer ilanlara (marka/model, renk)
            ödeme yapılır.
          </li>
          <li>
            İlanınızı sitenin ön saflarında görmek için "Tanıtım" hizmetini
            kullanın.
          </li>
        </ul> */}
        <div className="flex flex-col">
          <div className="px-[15px] border-b border-b-[#E4E4E4]">
            <MobileSelect
              label="Marka *"
              name="brand"
              options={brands}
              formData={formData}
              handleChange={handleChange}
            />
            <MobileSelect
              label="Model *"
              name="model"
              options={brandModels}
              formData={formData}
              handleChange={handleChange}
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div
            id="picturesSection"
            className="bg-white px-[15px] py-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]"
          >
            <div className="flex flex-col">
              <div className="flex flex-col bg-[#f6f7fa] p-[10px] rounded-[7px] mb-[15px]">
                <p className="text-[12px] text-[#ff586d]">Yasaktır</p>
                <p className="font-semibold text-[12px] text-[#212c3a]">
                  Ekran görüntüleri ve çerçeveli fotoğraflar yasaktır.
                </p>
              </div>
              <p
                id="error"
                className="px-[10px] text-[12px] font-semibold text-red mb-[15px] break-words hidden"
              >
                {PictureErrorMsg}
              </p>
              <div>
                <div className="grid grid-cols-12 gap-[10px]">{imageSlots}</div>
              </div>
            </div>
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="flex flex-col px-[15px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <MobileSelect
              label="Gövde Tipi *"
              name="banType"
              options={banTypes}
              formData={formData}
              handleChange={handleChange}
            />
            <div className="flex items-center justify-between gap-[15px]">
              <div className="w-[80%]">
                <MobileNumberInput
                  label="Yürüyüş *"
                  name="march"
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>
              <div className="w-[20%]">
                <MobileMarchSelect
                  label="Yürüyüş"
                  name="marchNum"
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <MobileSelect
              label="Yıl *"
              name="year"
              options={years}
              formData={formData}
              handleChange={handleChange}
            />
            <MobileNumberInput
              label="Güç, (bg) *"
              name="enginePower"
              formData={formData}
              handleChange={handleChange}
            />
            <MobileSelect
              label="Hacim, sm³ *"
              name="engineVolume"
              options={engineVolumes}
              formData={formData}
              handleChange={handleChange}
            />
            <MobileSelect
              label="Renk *"
              name="color"
              options={colors}
              formData={formData}
              handleChange={handleChange}
            />
            <MobileSelect
              label="Hangi pazar için atandı"
              name="marketAssembled"
              options={markets}
              formData={formData}
              handleChange={handleChange}
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <h3 className="text-[14px] text-[#8d94ad] mb-[15px]">
              Yakıt tipi *
            </h3>
            <MobileOptionSelector
              options={fuelTypes}
              selectedOption={formData.fuelType}
              handleChange={(value) =>
                setFormData((prev) => ({ ...prev, fuelType: value }))
              }
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <h3 className="text-[14px] text-[#8d94ad] mb-[15px]">Çekiş *</h3>
            <MobileOptionSelector
              options={gears}
              selectedOption={formData.gear}
              handleChange={(value) =>
                setFormData((prev) => ({ ...prev, gear: value }))
              }
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <h3 className="text-[14px] text-[#8d94ad] mb-[15px]">Vites *</h3>
            <MobileOptionSelector
              options={gearBoxs}
              selectedOption={formData.gearBox}
              handleChange={(value) =>
                setFormData((prev) => ({ ...prev, gearBox: value }))
              }
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <h3 className="text-[14px] text-[#8d94ad] mb-[15px]">
              Koltuk sayısı
            </h3>
            <MobileOptionSelector
              options={seatNumbers}
              selectedOption={formData.seatNum}
              handleChange={(value) =>
                setFormData((prev) => ({ ...prev, seatNum: value }))
              }
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <h3 className="text-[14px] text-[#8d94ad] mb-[15px]">
              Araç tedarikçileri
            </h3>
            <MobileFeatureSelector
              options={carFeatures}
              selectedOptions={selectedFeatures}
              handleChange={(featureId, isChecked) => {
                if (isChecked) {
                  setSelectedFeatures([...selectedFeatures, featureId]);
                } else {
                  setSelectedFeatures(
                    selectedFeatures.filter((id) => id !== featureId)
                  );
                }
              }}
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <h3 className="text-[14px] text-[#8d94ad] mb-[15px]">
              Kaç tane sahip oldunuz *
            </h3>
            <MobileOptionSelector
              options={owners}
              selectedOption={formData.howManyDoYouOwn}
              handleChange={(value) =>
                setFormData((prev) => ({ ...prev, howManyDoYouOwn: value }))
              }
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="flex flex-col border border-t-[#eaebf2] border-b-[#eaebf2]">
            <MobileSwitchOption
              id="needRepair"
              title="Kaza veya yedek parça için"
              description="Onarım ihtiyacında veya genel hasar"
              checked={formData.needRepair}
              handleCheckboxChange={handleCheckboxChange}
            />
            <MobileSwitchOption
              id="hasStroke"
              title="Motor arızası var"
              description="Bir veya daha fazla parça değiştirilmiş veya tamir edilmiş"
              checked={formData.hasStroke}
              handleCheckboxChange={handleCheckboxChange}
            />
            <MobileSwitchOption
              id="hasColor"
              title="Boyalıdır"
              description="Bir veya daha fazla parça boyanmış ya da kozmetik işlem yapılmış"
              checked={formData.hasColor}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="px-[15px] border border-t-[#eaebf2] border-b-[#eaebf2]">
            <label className="block text-[#8d94ad] text-[14px] pt-[10px]">
              Ek bilgiler
            </label>
            <textarea
              type="textarea"
              value={formData.moreInfo}
              name="moreInfo"
              id="moreInfo"
              placeholder="Avantajları ve önemli noktaları vurgulayın"
              className="w-full h-[125px] mt-[15px] mb-[8px] resize-none overflow-y-auto focus:outline-0 bg-[#f6f7fa] p-[15px] rounded-[7px] text-[15px] leading-4 text-[#212c3a] placeholder:text-[#8d94ad] placeholder:text-[15px]"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="vinvin">
            <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px]">
              VIN kodu
            </label>
            <input
              type="text"
              value={formData.vinCode}
              name="vinCode"
              id="vinCode"
              className="w-full focus:outline-0 md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
              onChange={handleChange}
              required
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
          <div className="px-[15px] border-b border-b-[#E4E4E4]">
            <MobileSelect
              label="Şehir *"
              name="userCity"
              options={cities}
              formData={formData}
              handleChange={handleChange}
            />
          </div>
          <div className="h-[10px] bg-[#f6f7fa]"></div>
        </div>
      </div>
      {/* mobile view */}

      {/* Modals and toasts */}
      {showOtpModal && (
        <OtpModal
          onClose={() => setShowOtpModal(false)}
          handleOtpVerification={handleOtpVerification}
          resendOtp={resendOtp}
          otpExpTime={otpExpTime}
          retryOtp={retryOtp}
        />
      )}

      {modalType === "limited" && (
        <LimitedModal onClose={closeModal} paymentToken={paymentToken} />
      )}

      <ToastContainer />
    </form>
  );
}

export default NewAdvertisement;
