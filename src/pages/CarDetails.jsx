import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";

// images
import "react-image-gallery/styles/css/image-gallery.css";

// components
import DetailsPC from "../components/cars/CarDetails/DetailsPC";
import DetailsMobile from "../components/cars/CarDetails/DetailsMobile";
import Spinner from "../components/Spinner";

function CarDetails() {
  // slider logic
  const [showFullSlider, setShowFullSlider] = useState(null);
  const [width] = useState(window.innerWidth);
  const navigate = useNavigate();

  const { id } = useParams();
  const showMobileCom = width < 971;

  const [isLoading, setIsLoading] = useState(false);

  if (!/^\d+$/.test(id)) {
    return <Navigate to="/not-found" />;
  }

  const [car, setCar] = useState(null);
  const [carImages, setCarImages] = useState([]);

  useEffect(() => {
    async function getCar() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/api/announcements/${id}`
        );
        setCar(response.data.data);
        const featuredImagesArr = [
          {
            original: response.data.data.vehicle_front_view_image,
            thumbnail: response.data.data.vehicle_front_view_image,
          },
          {
            original: response.data.data.vehicle_back_view_image,
            thumbnail: response.data.data.vehicle_back_view_image,
          },
          {
            original: response.data.data.vehicle_front_panel_image,
            thumbnail: response.data.data.vehicle_front_panel_image,
          },
        ];

        const ImagesArr = response.data.data.images.map(function (img) {
          return {
            original: img.url,
            thumbnail: img.url,
          };
        });

        setCarImages([...featuredImagesArr, ...ImagesArr]);
      } catch (error) {
        console.log(error);
        navigate("/not-found");
      } finally {
        setIsLoading(false);
      }
    }
    getCar();
  }, [id]);

  if (car) {
    return (
      <div className=" lg:pb-[30px] ">
        {showMobileCom ? (
          <DetailsMobile
            car={car}
            showFullSlider={showFullSlider}
            setShowFullSlider={setShowFullSlider}
            carImages={carImages}
            id={id}
          />
        ) : (
          <DetailsPC
            car={car}
            showFullSlider={showFullSlider}
            setShowFullSlider={setShowFullSlider}
            carImages={carImages}
            id={id}
          />
        )}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default CarDetails;
