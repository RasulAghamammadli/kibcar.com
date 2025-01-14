// DealershipDetails.js
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import CarCard from "../cars/CarCard";
import AdDetails from "./AdDetails";
import phoneDetails from "../../assets/images/phone-details.png";
import Spinner from "../Spinner";

function DealershipDetails() {
  const [dealership, setDealership] = useState(null);
  const { dealershipId } = useParams();
  const [adContent, setAdContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  if (!/^\d+$/.test(dealershipId)) {
    return <Navigate to="/not-found" />;
  }

  useEffect(() => {
    async function fetchDealershipDetails() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/car-dealerships/${dealershipId}/announcements`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDealership(data);
      } catch (error) {
        console.error("Error fetching dealership details:", error);
      } finally {
        setIsLoading(false);
      }
    }
    const fetchAdContent = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_REACT_APP_API_URL
          }/api/car-dealerships/${dealershipId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const adData = await response.json();
        setAdContent(adData);
      } catch (error) {
        console.error("Error fetching ad content:", error);
        navigate("/not-found");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAdContent();
    fetchDealershipDetails();
  }, [dealershipId]);

  if (adContent === null || adContent?.data.length === 0 || isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#F2F2F2] lg:bg-transparent">
      <div className="lg:container">
        <div className="lg:pt-[15px] mb-[40px]">
          <AdDetails ad={adContent?.data} />
        </div>
        {dealership?.data?.length === 0 ? (
          <p className="lg:my-[60px] px-[10px] py-[50px] lg:p-0 bg-white font-semibold text-[20px] lg:bg-transparent">
            Bu bayilik henüz ilan yayınlamadı!
          </p>
        ) : (
          <>
            <div className="container grid grid-cols-12 mt-[15px] gap-[30px] bg-[#FCFCFC] lg:bg-transparent py-4">
              {dealership?.data.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DealershipDetails;
