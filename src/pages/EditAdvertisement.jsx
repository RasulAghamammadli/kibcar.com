import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

// images & icons
import backView from "../assets/images/back-view.svg";
import frontView from "../assets/images/front-view.svg";
import insideView from "../assets/images/inside-view.svg";
import addMore from "../assets/images/add-more.svg";
import { IoIosClose } from "react-icons/io";

// components
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedButtonWrapper from "../components/AnimatedButtonWrapper";

// components for mobile
import MobileSelect from "../components/MobileSelect";
import MobileNumberInput from "../components/MobileNumberInput";
import MobileOptionSelector from "../components/MobileOptionSelector";
import MobileFeatureSelector from "../components/MobileFeatureSelector";
import MobileSwitchOption from "../components/MobileSwitchOption";
import MobileTextInput from "../components/MobileTextInput";
import MobileButtonOption from "../components/MobileButtonOption";
import MobileCurrencyRadioSelector from "../components/MobileCurrencyRadioSelector";
import MobileMarchRadioSelector from "../components/MobileMarchRadioSelector";

// validation
const nullableNumber = () =>
  Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? null : Number(originalValue)
    )
    .nullable();

const validationSchema = Yup.object().shape({
  brand: nullableNumber().required("Bir marka seçin"),
  brand_model: nullableNumber().required("Bir seri seçin"),
  vehicle_category: nullableNumber().required("Bu alan zorunludur"),
  fuel_type: nullableNumber().required("Bu alan zorunludur"),
  gear: nullableNumber().required("Bu alan zorunludur"),
  vehicle_transmission: nullableNumber().required("Bu alan zorunludur"),
  vehicle_year: nullableNumber().required("Bu alan zorunludur"),
  vehicle_prior_owner: nullableNumber().required("Bu alan zorunludur"),
  vehicle_status: Yup.string().required("Bir araç durumu seçin"),
  mileage: nullableNumber()
    .required("Bu alan zorunludur")
    .min(0, "0'dan küçük olamaz"),
  vehicle_color: nullableNumber().required("Bu alan zorunludur"),
  price: nullableNumber()
    .required("Bu alan zorunludur")
    .min(500, "500'den büyük veya eşit olmalı"),
  vehicle_engine_volume: nullableNumber().required("Bu alan zorunludur"),
  engine_power: nullableNumber()
    .required("Bu alan zorunludur")
    .min(1, "0'dan büyük olmalı"),
  vehicle_market: nullableNumber().required("Bu alan zorunludur"),
  number_of_seats: nullableNumber().required("Bu alan zorunludur"),
  loan: Yup.boolean().nullable(),
  barter: Yup.boolean().nullable(),
  is_crashed: Yup.boolean().nullable(),
  is_painted: Yup.boolean().nullable(),
  for_spare_parts: Yup.boolean().nullable(),
  vin_code: Yup.string().required("Bu alan zorunludur"),
  additional_information: Yup.string().nullable(),
  city: nullableNumber().required("Bir şehir seçin"),
  mileage_measurement_unit: Yup.string().required("Bir birim seçin"),
  price_currency: Yup.string().required("Bir para birimi seçin"),
  name: Yup.string()
    .max(255, "İsim alanı en fazla 255 karakter olabilir")
    .required("Bu alan zorunludur"),
  images: Yup.array().of(Yup.mixed().nullable()),
  vehicle_features: Yup.array().of(Yup.number().nullable()),
});

function EditAdvertisement() {
  // mobile
  const [width] = useState(window.innerWidth);
  const mobile = width < 576;

  // states
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
  const [errors, setErrors] = useState({});

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
      id: 9,
      name: "Bahsedilmesin",
    },
  ];

  const carStatuses = [
    {
      id: 0,
      name: "Yeni",
    },
    {
      id: 1,
      name: "İkinci el",
    },
  ];

  const handleCheckboxChangeForCarFeatures = (featureId) => (event) => {
    if (event.target.checked) {
      setSelectedFeatures([...selectedFeatures, featureId]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId));
    }
  };

  const [PictureErrorMsg, setPictureErrorMsg] = useState("");
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (!pin_code || !/^\d+$/.test(id)) {
      navigate("/not-found");
    }
  }, [pin_code]);

  const initialData = {
    brand: "",
    brand_model: "",
    vehicle_category: "",
    fuel_type: "",
    gear: "",
    vehicle_transmission: "",
    vehicle_year: "",
    vehicle_prior_owner: "",
    vehicle_status: "",
    mileage: "",
    vehicle_color: "",
    price: "",
    vehicle_engine_volume: "",
    engine_power: "",
    vehicle_market: "",
    number_of_seats: "",
    loan: false,
    barter: false,
    is_crashed: false,
    is_painted: false,
    for_spare_parts: false,
    vin_code: "",
    additional_information: "",
    mileage_measurement_unit: "",
    price_currency: "",
    name: "",
    city: "",
    pin_code: "",
    vehicle_features: [],
    images: [],
    uploadedImages: [],
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

        setFormData({
          brand: carData.brand.id,
          brand_model: carData.brand_model.id,
          fuel_type: carData.fuel_type.id,
          gear: carData.gear.id,
          vehicle_category: carData.vehicle_category.id,
          vehicle_transmission: carData.vehicle_transmission.id,
          mileage: carData.mileage,
          mileage_measurement_unit: carData.mileage_measurement_unit,
          vehicle_year: carData.vehicle_year.id,
          vehicle_color: carData.vehicle_color.id,
          vehicle_engine_volume: carData.vehicle_engine_volume.id,
          price: carData.price,
          price_currency: carData.price_currency,
          engine_power: carData.engine_power,
          vehicle_prior_owner: carData.vehicle_prior_owner.id,
          vehicle_market: carData.vehicle_market.id,
          is_crashed: carData.is_crashed === 1 ? true : false,
          is_painted: carData.is_painted === 1 ? true : false,
          for_spare_parts: carData.for_spare_parts === 1 ? true : false,
          number_of_seats:
            Number(carData.number_of_seats) === 0
              ? 9
              : Number(carData.number_of_seats),
          loan: carData.loan === 1 ? true : false,
          barter: carData.barter === 1 ? true : false,
          vin_code: carData.vin_code,
          additional_information: carData.additional_information,
          uploadedImages: [
            { src: featuredImagesArr.vehicle_front_view_image },
            { src: featuredImagesArr.vehicle_back_view_image },
            { src: featuredImagesArr.vehicle_front_panel_image },
            ...carImages,
          ],
          vehicle_front_view_image: carData.vehicle_front_view_image,
          vehicle_front_panel_image: carData.vehicle_front_panel_image,
          vehicle_back_view_image: carData.vehicle_back_view_image,
          pin_code: pin_code,
          vehicle_status: mobile
            ? carData.vehicle_status === "NEW"
              ? 0
              : 1
            : carData.vehicle_status,
          city: carData.city.id,
          name: carData.guest_contact.name,
          imagesFiles: carImages,
          removedImages: [],
        });

        setCar(response.data.data);
        setSelectedFeatures(featureIds);
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

    const onlyDigitsRegex = /^\d*$/;
    const onlyDigitsFields = ["price", "mileage", "engine_power", "phone"];

    if (onlyDigitsFields.includes(name)) {
      if (!onlyDigitsRegex.test(value)) {
        return;
      }
    }

    const parsedValue = !isNaN(value) && value !== "" ? Number(value) : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  }

  // stop scroll
  const handleWheel = (e) => {
    e.target.blur();
  };

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

    // max and min
    if (numberOfUploadedImages < minImages) {
      return `Lütfen en az ${minImages} adet resim ekleyin.`;
    } else if (numberOfUploadedImages > maxImages) {
      return `En fazla ${maxImages} resim ekleyebilirsiniz.`;
    }

    // special images validation
    const frontViewMissing =
      formData.vehicle_front_view_image === null ||
      formData.vehicle_front_view_image === undefined;
    const backViewMissing =
      formData.vehicle_back_view_image === null ||
      formData.vehicle_back_view_image === undefined;
    const frontPanelMissing =
      formData.vehicle_front_panel_image === null ||
      formData.vehicle_front_panel_image === undefined;

    if (frontViewMissing || backViewMissing || frontPanelMissing) {
      return "Ön, arka ve iç görünüm resimlerini eklemeniz gerekiyor.";
    }

    // photo format and size validation
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
      "image/svg+xml",
    ];
    const maxSize = 2 * 1024 * 1024; // 2MB (2048KB)

    // validate all imagesFiles
    if (formData.imagesFiles && formData.imagesFiles.length > 0) {
      for (let i = 0; i < formData.imagesFiles.length; i++) {
        const image = formData.imagesFiles[i];

        // only files
        if (image instanceof File) {
          // format validation
          if (!allowedTypes.includes(image.type)) {
            return `Sadece JPEG, PNG, JPG, GIF ve SVG formatları kabul edilmektedir. Hatalı resim: ${image.name}`;
          }

          // size validation
          if (image.size > maxSize) {
            return `Resim boyutu 2MB'dan küçük olmalıdır. Hatalı resim: ${
              image.name
            } (${(image.size / (1024 * 1024)).toFixed(2)}MB)`;
          }
        }
      }
    }

    // special images validation
    const specialImages = [
      formData.vehicle_front_view_image,
      formData.vehicle_back_view_image,
      formData.vehicle_front_panel_image,
    ];

    for (const image of specialImages) {
      // only files
      if (image instanceof File) {
        // format validation
        if (!allowedTypes.includes(image.type)) {
          return `Sadece JPEG, PNG, JPG, GIF ve SVG formatları kabul edilmektedir. Hatalı resim: ${image.name}`;
        }

        // size validation
        if (image.size > maxSize) {
          return `Resim boyutu 2MB'dan küçük olmalıdır. Hatalı resim: ${
            image.name
          } (${(image.size / (1024 * 1024)).toFixed(2)}MB)`;
        }
      }
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
    let removedImage = formData.uploadedImages[index];
    let updatedRemovedImages = [...formData.removedImages];

    if (removedImage?.id) {
      updatedRemovedImages.push(removedImage.id);
    }

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

    setFormData({
      ...updatedFormData,
      uploadedImages: updatedImages,
      imagesFiles: updatedFormData.imagesFiles,
      removedImages: updatedRemovedImages,
    });
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Image validation
    const errorMessage = validateImageCount(formData.uploadedImages.length);
    const picSection = document.getElementById("picturesSection");
    const errorMsg = document.getElementById("error");

    let imageValid = true;
    if (errorMessage) {
      setPictureErrorMsg(errorMessage);
      errorMsg.classList.remove("hidden");
      picSection.scrollIntoView({ behavior: "smooth" });
      imageValid = false;
    } else {
      errorMsg.classList.add("hidden");
    }

    // Form validation
    let formValid = true;
    try {
      // validate form data
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
    } catch (validationError) {
      formValid = false;
      if (validationError.inner) {
        const newErrors = {};
        validationError.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);

        // scroll to the first error field
        const firstErrorField = validationError.inner[0]?.path;
        const firstErrorElement = document.querySelector(
          `[name="${firstErrorField}"]`
        );
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          firstErrorElement.focus();
        }
      }
    }

    // if both validations pass, then save announcement
    if (formValid && imageValid) {
      await saveAnnouncement();
    }

    async function saveAnnouncement() {
      try {
        // car status map
        const carStatusMap = {
          NEW: 0,
          USED: 1,
        };

        // params
        const params = {
          brand: formData.brand,
          brand_model: formData.brand_model,
          vehicle_category: formData.vehicle_category,
          fuel_type: formData.fuel_type,
          gear: formData.gear,
          vehicle_transmission: formData.vehicle_transmission,
          vehicle_year: formData.vehicle_year,
          vehicle_prior_owner: formData.vehicle_prior_owner,
          vehicle_status: mobile
            ? formData.vehicle_status
            : carStatusMap[formData.vehicle_status],
          mileage: formData.mileage,
          mileage_measurement_unit: formData.mileage_measurement_unit,
          vehicle_color: formData.vehicle_color,
          price: formData.price,
          price_currency: formData.price_currency.toLocaleLowerCase(),
          vehicle_engine_volume: formData.vehicle_engine_volume,
          engine_power: formData.engine_power,
          vehicle_market: formData.vehicle_market,
          number_of_seats: formData.number_of_seats,
          loan: formData.loan ? 1 : 0,
          barter: formData.barter ? 1 : 0,
          is_crashed: formData.is_crashed ? 1 : 0,
          is_painted: formData.is_painted ? 1 : 0,
          for_spare_parts: formData.for_spare_parts ? 1 : 0,
          vin_code: formData.vin_code,
          additional_information: formData.additional_information,
          city: formData.city,
          name: formData.name,
          pin_code: formData.pin_code,
        };

        // Add only file images
        const imageFields = [
          "vehicle_front_view_image",
          "vehicle_back_view_image",
          "vehicle_front_panel_image",
        ];

        imageFields.forEach((key) => {
          if (formData[key] instanceof File) {
            params[key] = formData[key];
          }
        });

        // vehicle features
        selectedFeatures.forEach((id, index) => {
          params[`vehicle_features_${index}`] = id;
        });

        // images files
        let fileIndex = 0;

        formData.imagesFiles.forEach((file) => {
          if (file instanceof File) {
            params[`images_${fileIndex}`] = file;
            fileIndex++;
          }
        });

        // removed images
        formData.removedImages.forEach((id, index) => {
          params[`removeImages_${index}`] = id;
        });

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

        if (response.status === 200 && response.data.success === true) {
          navigate("/edit-success");
          setFormData(initialData); // Reset form
        }
      } catch (error) {
        console.log("İlan düzenleme hatası:", error.response);
        if (
          error.response.status === 403 &&
          error.response.data.message ===
            "You reached limit of updates for this announcement for today"
        ) {
          toast.error("Bugün bu ilan için güncelleme sınırına ulaştınız", {
            position: "bottom-right",
            autoClose: 3000,
          });
        } else if (
          error.response.status === 403 &&
          error.response.data.message ===
            "You don't have access to change this announcement"
        ) {
          toast.error("Bu ilanı değiştirme erişiminiz yok", {
            position: "bottom-right",
            autoClose: 3000,
          });
        } else if (error.response.status === 404) {
          toast.error("Bu PIN koduyla ilan bulunamadı.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      }
    }
  };

  return (
    <form ref={formRef} action="">
      {mobile ? (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="px-[15px] border-b border-b-[#E4E4E4]">
              <MobileSelect
                label="Marka *"
                name="brand"
                options={brands}
                formData={formData}
                handleChange={handleChange}
                error={errors.brand}
              />
              {errors.brand && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.brand}
                </p>
              )}
              <MobileSelect
                label="Seri *"
                name="brand_model"
                options={brandModels}
                formData={formData}
                handleChange={handleChange}
                error={errors.brand_model}
              />
              {errors.brand_model && formData.brand && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.brand_model}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div
              id="picturesSection"
              className="bg-white px-[15px] py-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]"
            >
              <div className="flex flex-col">
                <div className="flex flex-col bg-[#f6f7fa] p-[10px] rounded-[7px] mb-[15px]">
                  <p className="text-[12px] text-[#ff586d] leading-4">
                    Yasaktır
                  </p>
                  <p className="font-semibold text-[12px] text-[#212c3a] leading-4">
                    Ekran görüntüleri ve çerçeveli fotoğraflar yasaktır.
                  </p>
                </div>
                <p
                  id="error"
                  className="px-[2px] text-[12px] font-semibold text-[#ff586d] mb-[15px] break-words "
                >
                  {PictureErrorMsg}
                </p>
                <div>
                  <div className="grid grid-cols-12 md:grid-cols-4 gap-[10px]">
                    {imageSlots}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="flex flex-col px-[15px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <MobileSelect
                label="Kasa Tipi *"
                name="vehicle_category"
                options={banTypes}
                formData={formData}
                handleChange={handleChange}
                error={errors.vehicle_category}
              />
              {errors.vehicle_category && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.vehicle_category}
                </p>
              )}
              <div className="flex justify-between gap-[15px]">
                <div className="w-[78%]">
                  <MobileNumberInput
                    label="Odometre *"
                    name="mileage"
                    formData={formData}
                    handleChange={handleChange}
                    error={errors.mileage}
                  />
                  {errors.mileage && (
                    <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                      {errors.mileage}
                    </p>
                  )}
                </div>
                <div className="w-[22%]">
                  <MobileMarchRadioSelector
                    label="Odometre"
                    name="mileage_measurement_unit"
                    formData={formData}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <MobileSelect
                label="Yıl *"
                name="vehicle_year"
                options={years}
                formData={formData}
                handleChange={handleChange}
                error={errors.vehicle_year}
              />
              {errors.vehicle_year && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.vehicle_year}
                </p>
              )}
              <MobileSelect
                label="Motor Hacmi, sm³ *"
                name="vehicle_engine_volume"
                options={engineVolumes}
                formData={formData}
                handleChange={handleChange}
                error={errors.vehicle_engine_volume}
              />
              {errors.vehicle_engine_volume && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.vehicle_engine_volume}
                </p>
              )}
              <MobileNumberInput
                label="Güç, (bg) *"
                name="engine_power"
                formData={formData}
                handleChange={handleChange}
                error={errors.engine_power}
              />
              {errors.engine_power && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.engine_power}
                </p>
              )}
              <MobileSelect
                label="Renk *"
                name="vehicle_color"
                options={colors}
                formData={formData}
                handleChange={handleChange}
                error={errors.vehicle_color}
              />
              {errors.vehicle_color && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.vehicle_color}
                </p>
              )}
              <MobileSelect
                label="Neresi için üretildi ? *"
                name="vehicle_market"
                options={markets}
                formData={formData}
                handleChange={handleChange}
                error={errors.vehicle_market}
              />
              {errors.vehicle_market && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.vehicle_market}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <h3 className="text-[14px] text-[#8d94ad] mb-[15px] leading-4">
                Yakıt tipi *
              </h3>
              <MobileOptionSelector
                options={fuelTypes}
                selectedOption={formData.fuel_type}
                handleChange={(value) =>
                  setFormData((prev) => ({ ...prev, fuel_type: value }))
                }
              />
              {errors.fuel_type && (
                <p className="text-[13px] leading-4 mt-[10px] text-[#ff586d]">
                  {errors.fuel_type}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <h3 className="text-[14px] text-[#8d94ad] mb-[15px] leading-4">
                Çekiş *
              </h3>
              <MobileOptionSelector
                options={gears}
                selectedOption={formData.gear}
                handleChange={(value) =>
                  setFormData((prev) => ({ ...prev, gear: value }))
                }
              />
              {errors.gear && (
                <p className="text-[13px] leading-4 mt-[10px] text-[#ff586d]">
                  {errors.gear}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <h3 className="text-[14px] text-[#8d94ad] mb-[15px] leading-4">
                Vites *
              </h3>
              <MobileOptionSelector
                options={gearBoxs}
                selectedOption={formData.vehicle_transmission}
                handleChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    vehicle_transmission: value,
                  }))
                }
              />
              {errors.vehicle_transmission && (
                <p className="text-[13px] leading-4 mt-[10px] text-[#ff586d]">
                  {errors.vehicle_transmission}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <h3 className="text-[14px] text-[#8d94ad] mb-[15px] leading-4">
                Koltuk sayısı
              </h3>
              <MobileOptionSelector
                options={seatNumbers}
                selectedOption={formData.number_of_seats}
                handleChange={(value) =>
                  setFormData((prev) => ({ ...prev, number_of_seats: value }))
                }
              />
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <h3 className="text-[14px] text-[#8d94ad] mb-[15px] leading-4">
                Araç Donanımı
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
              <h3 className="text-[14px] text-[#8d94ad] mb-[15px] leading-4">
                Kaçıncı sahibisiniz ? *
              </h3>
              <MobileOptionSelector
                options={owners}
                selectedOption={formData.vehicle_prior_owner}
                handleChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    vehicle_prior_owner: value,
                  }))
                }
              />
              {errors.vehicle_prior_owner && (
                <p className="text-[13px] leading-4 mt-[10px] text-[#ff586d]">
                  {errors.vehicle_prior_owner}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="flex flex-col border border-t-[#eaebf2] border-b-[#eaebf2]">
              <MobileSwitchOption
                id="for_spare_parts"
                title="Kaza veya yedek parça için"
                description="Onarım ihtiyacında veya genel hasar"
                checked={formData.for_spare_parts}
                handleCheckboxChange={handleCheckboxChange}
              />
              <MobileSwitchOption
                id="is_crashed"
                title="Motor arızası var"
                description="Bir veya daha fazla parça değiştirilmiş veya tamir edilmiş"
                checked={formData.is_crashed}
                handleCheckboxChange={handleCheckboxChange}
              />
              <MobileSwitchOption
                id="is_painted"
                title="Boyalıdır"
                description="Bir veya daha fazla parça boyanmış ya da kozmetik işlem yapılmış"
                checked={formData.is_painted}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="p-[15px] pb-[10px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <h3 className="text-[14px] text-[#8d94ad] mb-[15px] leading-4">
                Araç durumu *
              </h3>
              <MobileOptionSelector
                options={carStatuses}
                selectedOption={formData.vehicle_status}
                handleChange={(value) =>
                  setFormData((prev) => ({ ...prev, vehicle_status: value }))
                }
              />
              {errors.vehicle_status && (
                <p className="text-[13px] leading-4 mt-[10px] text-[#ff586d]">
                  {errors.vehicle_status}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="px-[15px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <label className="block text-[#8d94ad] text-[14px] pt-[10px]">
                Ek bilgiler
              </label>
              <textarea
                type="textarea"
                value={formData.additional_information}
                name="additional_information"
                id="additional_information"
                placeholder="Avantajları ve önemli noktaları vurgulayın"
                className="w-full h-[125px] mt-[15px] mb-[8px] resize-none overflow-y-auto outline-none focus:outline-none bg-[#f6f7fa] p-[15px] rounded-[7px] text-[15px] leading-4 text-[#212c3a] placeholder:text-[#8d94ad] placeholder:text-[15px]"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="px-[15px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <MobileTextInput
                type="text"
                label="VIN kodu *"
                name="vin_code"
                formData={formData}
                handleChange={handleChange}
                error={errors.vin_code}
              />
              {errors.vin_code && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.vin_code}
                </p>
              )}
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="px-[15px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <div className="flex justify-between gap-[15px]">
                <div className="w-[78%]">
                  <MobileNumberInput
                    label="Fiyat *"
                    name="price"
                    formData={formData}
                    handleChange={handleChange}
                    error={errors.price}
                  />
                  {errors.price && (
                    <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                      {errors.price}
                    </p>
                  )}
                </div>
                <div className="w-[22%]">
                  <MobileCurrencyRadioSelector
                    label="Fiyat"
                    name="price_currency"
                    formData={formData}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex py-[10px] gap-[10px]">
                <MobileButtonOption
                  id="loan"
                  text="Kredisi var"
                  checked={formData.loan}
                  handleCheckboxChange={handleCheckboxChange}
                />
                <MobileButtonOption
                  id="barter"
                  text="Takas yapılabilir"
                  checked={formData.barter}
                  handleCheckboxChange={handleCheckboxChange}
                />
              </div>
            </div>
            <div className="h-[10px] bg-[#f6f7fa]"></div>
            <div className="px-[15px] border border-t-[#eaebf2] border-b-[#eaebf2]">
              <MobileTextInput
                type="text"
                label="Adınız *"
                name="name"
                formData={formData}
                handleChange={handleChange}
                error={errors.name}
              />
              {errors.name && (
                <p className="text-[13px] leading-4 py-[2px] text-[#ff586d]">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="px-[15px] py-[20px] flex flex-col bg-[#f6f7fa] border-b border-b-[#eaebf2]">
              <AnimatedButtonWrapper>
                <button
                  onClick={handleFormSubmit}
                  className="w-full h-[50px] text-[15px] font-primary text-white px-[20px] outline-none rounded-[7px] bg-red"
                  type="button"
                >
                  <p>Devam Et</p>
                </button>
              </AnimatedButtonWrapper>
              <div className="text-secondary mt-[10px] text-[14px] text-center leading-[17px]">
                Bir ilan vererek{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-link underline"
                >
                  Kullanıcı Sözleşmesini
                </Link>{" "}
                ve kibcar.com{" "}
                <Link to="/rules" className="text-link underline">
                  Kurallarını
                </Link>{" "}
                kabul etmiş olursunuz.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div>
            <div className="bg-[#f1f3f7] border-y border-[#eaebf2] p-[20px]">
              <h2 className="uppercase font-secondary text-[16px] font-bold leading-8 text-primary">
                YENİ İLAN YARAT
              </h2>
            </div>
            <ul className="ml-3 flex flex-col space-y-[6px] items-start mt-[30px] mb-[25px] list-outside advertisement-list font-primary text-[14px]">
              <li>Bir araç üç ayda bir kez ücretsiz yayınlanabiliyor.</li>
              <li>
                Üç ay içinde tekrarlanan veya benzer ilanlara (marka/model,
                renk) ödeme yapılır.
              </li>
              <li>
                İlanınızı sitenin ön saflarında görmek için "Premium" hizmetini
                kullanın.
              </li>
            </ul>
            <div className="grid grid-cols-12 gap-[30px] md:ml-6">
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Marka
                  </label>
                  <div className="w-full relative">
                    <select
                      name="brand"
                      id="brand"
                      className="cursor-not-allowed w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.brand}
                      required
                      disabled
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
                    {errors.brand && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.brand}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Seri
                  </label>
                  <div className="w-full relative">
                    <select
                      name="brand_model"
                      id="brand_model"
                      className="cursor-not-allowed w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.brand_model}
                      required
                      disabled
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
                    {errors.brand_model && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.brand_model}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Yakıt tipi
                  </label>
                  <div className="w-full relative">
                    <select
                      name="fuel_type"
                      id="fuel_type"
                      className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.fuel_type}
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
                    {errors.fuel_type && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.fuel_type}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Çekiş
                  </label>
                  <div className="w-full relative">
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
                    {errors.gear && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.gear}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Kasa Tipi
                  </label>
                  <div className="w-full relative">
                    <select
                      name="vehicle_category"
                      id="vehicle_category"
                      className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.vehicle_category}
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
                    {errors.vehicle_category && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vehicle_category}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Vites
                  </label>
                  <div className="w-full relative">
                    <select
                      name="vehicle_transmission"
                      id="vehicle_transmission"
                      className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.vehicle_transmission}
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
                    {errors.vehicle_transmission && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vehicle_transmission}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Odometre
                  </label>
                  <div className="flex items-center justify-between gap-x-8 md:max-w-[452px] w-full">
                    <div className="w-1/2 md:w-auto relative">
                      <input
                        id="mileage"
                        name="mileage"
                        type="text"
                        className="w-full py-[10px] px-[15px] outline-none bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                        onWheel={handleWheel}
                        onChange={handleChange}
                        value={formData.mileage}
                        required
                      />
                      {errors.mileage && (
                        <p className="absolute left-[2px] text-red text-[12px]">
                          {errors.mileage}
                        </p>
                      )}
                    </div>
                    <div className="relative md:max-w-[177px] flex gap-6 items-center justify-end">
                      <div className="flex items-center gap-x-2">
                        <input
                          required
                          className="w-4 h-4 accent-red d-flex"
                          onChange={handleChange}
                          id="km"
                          type="radio"
                          name="mileage_measurement_unit"
                          value="km"
                          checked={formData.mileage_measurement_unit === "km"}
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
                          name="mileage_measurement_unit"
                          value="mi"
                          checked={formData.mileage_measurement_unit === "mi"}
                        />
                        <label
                          className="text-[14px] font-secondary"
                          htmlFor="mi"
                        >
                          mil
                        </label>
                      </div>
                      {errors.mileage_measurement_unit && (
                        <p className="absolute right-0 top-[31px] text-red text-[12px]">
                          {errors.mileage_measurement_unit}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Yıl
                  </label>
                  <div className="relative w-full">
                    <select
                      name="vehicle_year"
                      id="vehicle_year"
                      className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.vehicle_year}
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
                    {errors.vehicle_year && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vehicle_year}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Renk
                  </label>
                  <div className="relative w-full">
                    <select
                      name="vehicle_color"
                      id="vehicle_color"
                      className="cursor-not-allowed w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.vehicle_color}
                      required
                      disabled
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
                    {errors.vehicle_color && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vehicle_color}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Motor Hacmi, sm³
                  </label>
                  <div className="relative w-full">
                    <select
                      name="vehicle_engine_volume"
                      id="vehicle_engine_volume"
                      className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.vehicle_engine_volume}
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
                    {errors.vehicle_engine_volume && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vehicle_engine_volume}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Fiyat
                  </label>
                  <div className="flex items-center justify-between gap-x-4 md:max-w-[452px] w-full">
                    <div className="relative w-1/2 md:w-auto">
                      <input
                        id="price"
                        name="price"
                        type="text"
                        className="w-full py-[10px] px-[15px] outline-none bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                        onWheel={handleWheel}
                        onChange={handleChange}
                        value={formData.price}
                        required
                      />
                      {errors.price && (
                        <p className="absolute top-[46px] left-[2px] leading-3 text-red text-[12px]">
                          {errors.price}
                        </p>
                      )}
                    </div>
                    <div className="relative md:max-w-[220px] flex gap-2 items-center justify-end">
                      <div className="flex items-center gap-x-1">
                        <input
                          className="w-4 h-4 accent-red"
                          onChange={handleChange}
                          id="USD"
                          type="radio"
                          name="price_currency"
                          value="USD"
                          checked={formData.price_currency === "USD"}
                          required
                        />
                        <label
                          className="text-[14px] font-secondary"
                          htmlFor="USD"
                        >
                          USD
                        </label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input
                          className="w-4 h-4 accent-red"
                          onChange={handleChange}
                          id="EUR"
                          type="radio"
                          name="price_currency"
                          value="EUR"
                          checked={formData.price_currency === "EUR"}
                          required
                        />
                        <label
                          className="text-[14px] font-secondary"
                          htmlFor="EUR"
                        >
                          EUR
                        </label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input
                          className="w-4 h-4 accent-red"
                          onChange={handleChange}
                          id="STG"
                          type="radio"
                          name="price_currency"
                          value="STG"
                          checked={formData.price_currency === "STG"}
                          required
                        />
                        <label
                          className="text-[14px] font-secondary"
                          htmlFor="STG"
                        >
                          STG
                        </label>
                      </div>
                      {errors.price_currency && (
                        <p className="absolute right-0 top-[32px] text-red text-[12px]">
                          {errors.price_currency}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Güç, (bg)
                  </label>
                  <div className="relative w-full">
                    <input
                      className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal focus:outline-0"
                      type="text"
                      name="engine_power"
                      id="engine_power"
                      value={formData.engine_power}
                      onWheel={handleWheel}
                      onChange={handleChange}
                      required
                    />
                    {errors.engine_power && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.engine_power}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Kaçıncı sahibisiniz ?
                  </label>
                  <div className="relative w-full">
                    <select
                      name="vehicle_prior_owner"
                      id="vehicle_prior_owner"
                      className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.vehicle_prior_owner}
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
                    {errors.vehicle_prior_owner && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vehicle_prior_owner}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0 md:items-center justify-between md:gap-[10px] md:flex-row flex-col">
                  <label className="font-primary text-[14px] font-normal after:content-['*'] after:pl-[3px] after:top-0 after:relative after:text-red  relative min-w-[165px] max-w-[165px]">
                    Neresi için üretildi ?
                  </label>
                  <div className="relative w-full">
                    <select
                      name="vehicle_market"
                      id="vehicle_market"
                      className="w-full md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      value={formData.vehicle_market}
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
                    {errors.vehicle_market && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vehicle_market}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[10px] md:flex-row flex-col mt-6">
                  <label className="font-primary text-[14px] font-normal min-w-[165px] max-w-[165px]">
                    Durumlar
                  </label>
                  <div className=" flex-col gap-[20px]">
                    <div className="flex w-full md:max-w-[452px] gap-x-5 ">
                      <div className="mt-[2px]">
                        <label className="custom-checkbox">
                          <input
                            checked={formData.for_spare_parts}
                            onChange={handleCheckboxChange}
                            type="checkbox"
                            name="for_spare_parts"
                            id="for_spare_parts"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label htmlFor="for_spare_parts">
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
                            checked={formData.is_crashed}
                            onChange={handleCheckboxChange}
                            type="checkbox"
                            name="is_crashed"
                            id="is_crashed"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label htmlFor="is_crashed">
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
                            checked={formData.is_painted}
                            onChange={handleCheckboxChange}
                            type="checkbox"
                            name="is_painted"
                            id="is_painted"
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div>
                        <label htmlFor="is_painted">
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
                  <div className="relative md:flex-nowrap  flex-wrap gap-y-3 md:gap-y-0  md:min-w-[452px] w-full gap-x-5 flex md:ml-2">
                    <div className=" flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        id="NEW"
                        type="radio"
                        name="vehicle_status"
                        value="NEW"
                        checked={formData.vehicle_status === "NEW"}
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="text-[14px] font-normal text-primary"
                        htmlFor="NEW"
                      >
                        Yeni
                      </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4  accent-red"
                        id="USED"
                        type="radio"
                        name="vehicle_status"
                        value="USED"
                        checked={formData.vehicle_status === "USED"}
                        onChange={handleChange}
                        required
                      />

                      <label
                        className="text-[14px] font-normal text-primary"
                        htmlFor="USED"
                      >
                        İkinci el
                      </label>
                    </div>
                    {errors.vehicle_status && (
                      <p className="absolute left-0 top-6 text-red text-[12px]">
                        {errors.vehicle_status}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex space-y-2 md:space-y-0  justify-between md:gap-[50px] md:flex-row flex-col ">
                  <label className="font-primary text-[14px] font-normal md:min-w-[12%]">
                    Koltuk sayısı
                  </label>
                  <div className="relative md:flex-nowrap  flex-wrap gap-y-3 md:gap-y-0  md:min-w-[452px] w-full gap-x-5 flex md:ml-2">
                    <div className="flex items-center gap-x-2">
                      <input
                        className="w-4 h-4 accent-red"
                        id="seatNum1"
                        type="radio"
                        name="number_of_seats"
                        value="1"
                        checked={formData.number_of_seats === 1}
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
                        name="number_of_seats"
                        value="2"
                        checked={formData.number_of_seats === 2}
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
                        name="number_of_seats"
                        value="3"
                        checked={formData.number_of_seats === 3}
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
                        name="number_of_seats"
                        value="4"
                        checked={formData.number_of_seats === 4}
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
                        name="number_of_seats"
                        value="5"
                        checked={formData.number_of_seats === 5}
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
                        name="number_of_seats"
                        value="6"
                        checked={formData.number_of_seats === 6}
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
                        name="number_of_seats"
                        value="7"
                        checked={formData.number_of_seats === 7}
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
                        name="number_of_seats"
                        value="8"
                        checked={formData.number_of_seats === 8}
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
                        name="number_of_seats"
                        value="9"
                        checked={
                          formData.number_of_seats === 9 ||
                          formData.number_of_seats > 8
                        }
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
                    {errors.number_of_seats && (
                      <p className="absolute left-0 top-6 text-red text-[12px]">
                        {errors.number_of_seats}
                      </p>
                    )}
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
                          checked={formData.loan}
                          onChange={handleCheckboxChange}
                          type="checkbox"
                          name="loan"
                          id="loan"
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div>
                      <label htmlFor="loan">
                        <h3 className="font-primary cursor-pointer text-[14px] font-normal text-primary ">
                          Kredisi var
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
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={formData.vin_code}
                      name="vin_code"
                      id="vin_code"
                      className="w-full focus:outline-0 md:max-w-[452px] py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal"
                      onChange={handleChange}
                      required
                    />
                    {errors.vin_code && (
                      <p className="absolute left-[2px] text-red text-[12px]">
                        {errors.vin_code}
                      </p>
                    )}
                  </div>
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
                      value={formData.additional_information}
                      name="additional_information"
                      id="additional_information"
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
                Araç Donanımı
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
                      htmlFor="name"
                    >
                      Adınız
                    </label>
                    <div className="relative w-full">
                      <input
                        className="md:max-w-[452px] w-full py-[10px] px-[15px] bg-white rounded-md border border-solid border-[#E4E4E4] font-primary text-[14px] font-normal focus:outline-0"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Adınız"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && (
                        <p className="absolute left-[2px] text-red text-[12px]">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>
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
      )}

      <ToastContainer />
    </form>
  );
}

export default EditAdvertisement;
