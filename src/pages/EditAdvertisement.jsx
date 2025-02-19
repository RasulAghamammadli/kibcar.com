import axios from "axios";
import { useState, useEffect, useRef } from "react";

import backView from "../assets/images/back-view.svg";
import frontView from "../assets/images/front-view.svg";
import insideView from "../assets/images/inside-view.svg";
import addMore from "../assets/images/add-more.svg";
import { IoIosClose } from "react-icons/io";
import OtpModal from "../components/OtpModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import AnimatedButtonWrapper from "../components/AnimatedButtonWrapper";

function EditAdvertisement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const pin_code = location.state?.pin_code; // pin_code from the previous page
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
  const [carFeatures, setCarFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleCheckboxChangeForCarFeatures = (featureId) => (event) => {
    if (event.target.checked) {
      setSelectedFeatures([...selectedFeatures, featureId]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
    }
  };

  const [PictureErrorMsg, setPictureErrorMsg] = useState("");
  const [car, setCar] = useState(null);

  if (!/^\d+$/.test(id)) {
    return <Navigate to="/not-found" />;
  }

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
    city: "Select",
    userEmail: "",
    userTel: "",
    pin_code: "",
    uploadedImages: [],
    images: [],
    vehicle_front_view_image: null,
    vehicle_back_view_image: null,
    vehicle_front_panel_image: null,
    imagesFiles: [],
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    async function getCar(id) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/${id}`
        );

        const carData = response.data.data;
        const carImages = carData.images.map((car) => {
          return { src: car.url, id: car.id };
        });
        const featureIds = carData.features.map((feature) => feature.id);
        const featuredImagesArr = {
          vehicle_front_view_image: carData.vehicle_front_view_image,
          vehicle_front_panel_image: carData.vehicle_front_panel_image,
          vehicle_back_view_image: carData.vehicle_back_view_image,
        };

        console.log(carData);

        setFormData({
          brand: carData.brand.id,
          fuelType: carData.fuel_type.id,
          model: carData.brand_model.id,
          gear: carData.gear.id,
          banType: carData.vehicle_category.id,
          gearBox: carData.vehicle_transmission.id,
          march: carData.mileage,
          marchNum: carData.mileage_measurement_unit,
          year: carData.vehicle_year.id,
          color: carData.vehicle_color.id,
          engineVolume: carData.vehicle_engine_volume.id,
          price: carData.price,
          currencyValue: carData.price_currency,
          enginePower: carData.engine_power,
          howManyDoYouOwn: carData.vehicle_prior_owner.id,
          marketAssembled: carData.vehicle_market.id,
          hasStroke: carData.is_crashed == 1 ? true : false,
          hasColor: carData.is_painted == 1 ? true : false,
          needRepair: carData.for_spare_parts == 1 ? true : false,
          seatNum: carData.number_of_seats,
          credit: carData.loan == 1 ? true : false,
          barter: carData.barter == 1 ? true : false,
          vinCode: carData.vin_code,
          moreInfo: carData.additional_information,
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
          uploadedImages: [
            { src: featuredImagesArr.vehicle_front_view_image },
            { src: featuredImagesArr.vehicle_back_view_image },
            { src: featuredImagesArr.vehicle_front_panel_image },
            ...carImages,
          ],
          vehicle_front_view_image: null,
          vehicle_back_view_image: null,
          vehicle_front_panel_image: null,
          pin_code: pin_code,
          city: carData.city?.id,
          carStatus: carData.vehicle_status,
          imagesFiles: [],
        });

        setCar(response.data.data);
        setSelectedFeatures(featureIds);

        console.log(formData);
      } catch (error) {
        console.log(error);
        navigate("/not-found");
      }
    }
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
        setYears(yearsRes.data);

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
      } catch (error) {
        console.log(error);
      }
    }
    getDefaultOptions();
    getCar(id);
  }, [id]);

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
  }, [formData.brand]);

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

  const placeholderImages = [frontView, backView, insideView];

  function validateImageCount(uploadedImages) {
    const minImages = 3;
    const maxImages = 21;
    const numberOfUploadedImages = uploadedImages.length;

    if (numberOfUploadedImages < minImages) {
      return `Please upload at least ${minImages} images.`;
    } else if (numberOfUploadedImages > maxImages) {
      return `You can only upload up to ${maxImages} images.`;
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
      // Directly use the file object
      if (index == 0) {
        formData.vehicle_front_view_image = new File([file], filename, {
          type: file.type,
        });
      } else if (index == 1) {
        formData.vehicle_back_view_image = new File([file], filename, {
          type: file.type,
        });
      } else if (index == 2) {
        formData.vehicle_front_panel_image = new File([file], filename, {
          type: file.type,
        });
      } else {
        formData.imagesFiles = [...formData.imagesFiles, file];
      }
      // Replace or add new uploaded image
      let updatedImages = [...formData.uploadedImages];
      updatedImages[index] = newImage;
      setFormData({
        ...formData,
        uploadedImages: updatedImages,
      });
    }
  };

  const addImage = (event) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newImages = files.map((file) => ({
        src: URL.createObjectURL(file),
        flipped: 0,
      }));
      setFormData({
        ...formData,
        uploadedImages: [...formData.uploadedImages, ...newImages],
      });
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
    const updatedImages = formData.uploadedImages.map((image, i) => {
      return i === index ? null : image;
    });

    console.log(updatedImages);
    setFormData({
      ...formData,
      uploadedImages: updatedImages,
    });
  };

  const imageSlots = formData.uploadedImages.map((image, index) => {
    if (image) {
      return (
        <div
          key={Math.random() * 1000}
          className="col-span-6  md:w-[185px] h-[140px] relative rounded-[25px]  m-2"
        >
          <img
            src={image.src}
            alt={`Uploaded image ${index}`}
            className="object-cover w-full h-full"
            style={{ transform: `rotate(${image.flipped}deg)` }}
          />
          <div>
            <div className="flex justify-between">
              <button
                onClick={() => removeImage(index)}
                className="!text-[35px] text-red z-40"
              >
                <IoIosClose />
              </button>
              <div className="flex gap-x-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    rotateImage(index, "clockwise");
                  }}
                  className=" text-red !text-[24px] z-40"
                >
                  ↻
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    rotateImage(index, "counterclockwise");
                  }}
                  className=" text-red !text-[24px] z-40"
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
        <div className="col-span-6">
          <div
            key={`placeholder-${index}`}
            className="md:w-[185px] h-[140px] relative flex rounded-[7px] items-center justify-center bg-[#F6F7FA] m-2 border border-[#eaebf2] hover:border-[#3273ec] transition-all duration-200"
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
          <p className="text-secondary text-center">{placeholder.tag}</p>
        </div>
      );
    }
  });

  // Always show the "Add More" button
  imageSlots.push(
    <div
      key="add-more"
      className="col-span-6 cursor-pointer md:w-[185px] h-[140px] relative flex rounded-[7px] items-center justify-center bg-[#F6F7FA] m-2 hover:bg-[#ebedf3] transition-all duration-300"
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
      <div className="flex flex-col justify-center items-center gap-2 text-[#4C88F9]">
        <img src={addMore} alt="Add more" className="w-[40px] m-auto  lg:m-0" />
        Fotoğraf Ekle
      </div>
    </div>
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    async function saveAnnouncement() {
      try {
        // Preparing images
        const images = formData.uploadedImages.slice(3).map((file) => {
          const filename = file.name;
          return new File([file], filename, { type: file.type });
        });

        const params = {
          vehicle_category: formData.banType,
          fuel_type: formData.fuelType,
          gear: formData.gear,
          vehicle_transmission: formData.gearBox,
          vehicle_year: formData.year,
          vehicle_prior_owner: formData.howManyDoYouOwn,
          vehicle_status: formData.carStatus ? 1 : 0,
          mileage: formData.march,
          mileage_measurement_unit: formData.marchNum,
          vehicle_color: formData.color,
          price: formData.price,
          price_currency: formData.currencyValue.toLocaleLowerCase(),
          vehicle_engine_volume: formData.engineVolume,
          engine_power: formData.enginePower,
          vehicle_market: formData.marketAssembled,
          number_of_seats: formData.seatNum,
          loan: formData.credit ? 1 : 0,
          barter: formData.barter ? 1 : 0,
          is_crashed: formData.hasStroke ? 1 : 0,
          is_painted: formData.hasColor ? 1 : 0,
          for_spare_parts: formData.needRepair ? 1 : 0,
          vin_code: formData.vinCode,
          additional_information: formData.moreInfo,
          vehicle_front_view_image: formData.vehicle_front_view_image,
          vehicle_back_view_image: formData.vehicle_back_view_image,
          vehicle_front_panel_image: formData.vehicle_front_panel_image,
          brand: formData.brand,
          brand_model: formData.model,
          city: formData.city,
          pin_code: formData.pin_code,
          images: formData.imagesFiles,
          vehicle_features: selectedFeatures,
        };

        const headers = {
          "Content-Type": "multipart/form-data",
        };

        const response = await axios.post(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/announcements/${id}/update`,
          params,
          { headers }
        );

        if (response.data.success) {
          toast.dismiss();
          toast.success(
            "İlanınız güncellendi ve onaylandığında sizi bilgilendireceğiz",
            {
              position: "bottom-right",
              autoClose: false,
            }
          );
          setFormData(initialData); // Reset form
          // setTimeout(() => {
          //   navigate("/");
          // }, 2000);
          alert("salammmm");
        }
      } catch (error) {
        if (error.response && error.response.data.errors) {
          toast.dismiss();
          for (let errorKey in error.response.data.errors) {
            error.response.data.errors[errorKey].forEach((v) => {
              toast.error(v, {
                position: "bottom-right",
                autoClose: 3000,
              });
            });
          }
        }
      }
    }

    // Image validation
    const errorMessage = validateImageCount(formData.uploadedImages);
    const picSection = document.getElementById("picturesSection");
    const errorMsg = document.getElementById("error");
    if (errorMessage) {
      setPictureErrorMsg(errorMessage);
      errorMsg.classList.remove("hidden");
      picSection.scrollIntoView({ behavior: "smooth" });
      return; // Stop the request from being sent
    } else {
      errorMsg.classList.add("hidden");
      saveAnnouncement();
      console.log(formData);
    }
  };

  return (
    <form ref={formRef} action="" onSubmit={handleFormSubmit}>
      <div className="container">
        <div>
          <div className="bg-[#f1f3f7] border-y border-[#eaebf2] p-[20px]">
            <h2 className="uppercase font-secondary text-[16px] font-bold leading-8 text-primary">
              İLANI DÜZENLE
            </h2>
          </div>
          <ul className="ml-3 flex flex-col space-y-[6px] items-start mt-[30px] mb-[25px] list-outside advertisement-list font-primary text-[14px] ">
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
                  className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
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
                  Model
                </label>
                <select
                  name="model"
                  id="Model"
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
                  Vites
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
                  Şanzıman
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
                      className="w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
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
                        checked={formData.marchNum === "km"}
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
                        checked={formData.marchNum === "mi"}
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
                  Hacim (cm.3)
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
                      className="w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
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
                        checked={formData.currencyValue === "STG"}
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
                        checked={formData.currencyValue === "USD"}
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
                        checked={formData.currencyValue === "EUR"}
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
                  Güç (bg)
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
                <div className="flex flex-col gap-[20px]">
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
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red "
                      id="carStatusNew"
                      type="radio"
                      name="carStatus"
                      checked={formData.carStatus === "NEW"}
                      value="NEW"
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
                      className="w-4 h-4 accent-red"
                      id="carStatusUsed"
                      type="radio"
                      name="carStatus"
                      checked={formData.carStatus === "USED"}
                      value="USED"
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
                      checked={formData.seatNum == "1"}
                      required
                    />

                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum1"
                    >
                      1
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum2"
                      type="radio"
                      name="seatNum"
                      value="2"
                      checked={formData.seatNum == "2"}
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
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum3"
                      type="radio"
                      name="seatNum"
                      value="3"
                      checked={formData.seatNum == "3"}
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
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum4"
                      type="radio"
                      name="seatNum"
                      value="4"
                      onChange={handleChange}
                      checked={formData.seatNum == "4"}
                      required
                    />

                    <label
                      className="text-[14px] font-normal text-primary"
                      htmlFor="seatNum4"
                    >
                      4
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum5"
                      type="radio"
                      name="seatNum"
                      checked={formData.seatNum == "5"}
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
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum6"
                      type="radio"
                      name="seatNum"
                      value="6"
                      checked={formData.seatNum == "6"}
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
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum7"
                      type="radio"
                      name="seatNum"
                      value="7"
                      checked={formData.seatNum == "7"}
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
                  <div className="flex items-center gap-x-2">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum8"
                      type="radio"
                      name="seatNum"
                      checked={formData.seatNum == "8"}
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
                  <div className="relative flex items-center ml-0 gap-x-1">
                    <input
                      className="w-4 h-4 accent-red"
                      id="seatNum8"
                      type="radio"
                      name="seatNum"
                      value="0"
                      checked={formData.seatNum == "0" || formData.seatNum > 8}
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
                <div className="md:max-w-[452px] w-full space-x-5 flex">
                  <div className="mt-[2px] ">
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
                      <h3 className="font-primary text-[14px] font-normal text-primary ">
                        Kredi ile
                      </h3>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px] "></label>
                <div className="md:max-w-[452px] w-full space-x-5 flex">
                  <div className="mt-[2px] ">
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
                      <h3 className="font-primary text-[14px] font-normal text-primary ">
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
                  Ek Bilgiler
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
            <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary mt-[30px] mb-4">
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
                    <label htmlFor={feature.id}>{feature.name}</label>{" "}
                    {/* Use dynamic label */}
                  </div>
                </div>
              ))}
            </div>
            <div id="picturesSection" className="grid grid-cols-12">
              <div className="col-span-12">
                <h2 className="uppercase mb-4 mt-[30px] font-secondary text-[26px] font-bold leading-8 text-primary">
                  Resimler
                </h2>
                <div className="bg-[#f6f7fa] p-4 rounded-lg mb-6">
                  <p className="text-[14] text-[#ff586d]">Yasaktır</p>
                  <p className="font-semibold mt-2">
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
                  <div className="grid grid-cols-12 md:flex md:flex-wrap gap-y-6 lg:gap-x-6 ">
                    {imageSlots}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-12 gap-[30px] mt-[80px]">
            <div className="col-span-12 lg:col-span-6">
              <ul className="flex flex-col gap-y-[30px] picture-list ml-5">
                <li>
                  Photos must be taken in the territory of the Republic of
                  Azerbaijan
                </li>
                <li>
                  Photos must be of good quality. The vehicle should be
                  well-lit, there should be no logos and other inscriptions on
                  the pictures. Screenshots are not accepted.
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <ul className="flex flex-col gap-y-[30px] picture-list ml-5 lg:ml-0 ">
                <li>
                  Photos taken at the dealership must be uploaded from the
                  registered dealership's account.
                </li>
                <li>
                  A vehicle sold by a private owner must not be photographed in
                  or near the showroom/official service area.
                </li>
              </ul>
            </div>
          </div> */}
          <div className="grid grid-cols-12 mt-[30px]">
            <div className="col-span-12">
              <h2 className="uppercase font-secondary text-[26px] font-bold leading-8 text-primary">
                İletişim
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
                <div className="max-w-[700px] mt-30 flex justify-end">
                  <AnimatedButtonWrapper>
                    <button
                      className="md:min-w-[455px] min-w-full text-[14px] font-primary  text-white btn-search rounded-lg bg-red hover:bg-[#882111] shadow-none hover:shadow-none py-[18px] px-[20px] font-normal flex items-center justify-center"
                      type="submit"
                    >
                      Devam Et
                    </button>
                  </AnimatedButtonWrapper>
                </div>
                <div className="text-secondary mb-10">
                  Bir ilan vererek{" "}
                  <Link to="" className="text-link">
                    Kullanıcı Sözleşmesini
                  </Link>{" "}
                  ve kibcar.com{" "}
                  <Link to="" className="text-link">
                    Kurallarını
                  </Link>{" "}
                  kabul etmiş olursunuz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </form>
  );
}

export default EditAdvertisement;
