// DealershipDetails.js
import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

// components
import CarCard from "../cars/CarCard";
import AdDetails from "./AdDetails";
import Spinner from "../Spinner";

function DealershipDetails() {
  const [dealership, setDealership] = useState(null);
  const { dealershipId } = useParams();
  const [adContent, setAdContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // premium and regular ads
  const [premiumAds, setPremiumAds] = useState([]);
  const [regularAds, setRegularAds] = useState([]);

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
        setDealership(data?.data);
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

  // filter for premimum and regular ads
  useEffect(() => {
    if (dealership) {
      const premium = dealership.filter(
        (car) => car?.is_premium_announcement === true
      );
      const regular = dealership.filter(
        (car) => car?.is_premium_announcement === false
      );

      setPremiumAds(premium);
      setRegularAds(regular);
    }
  }, [dealership]);

  if (adContent === null || adContent?.data.length === 0 || isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#F2F2F2] lg:bg-transparent">
      <div>
        <div className="lg:container lg:pt-[15px] mb-[30px] max-sm:mb-[15px]">
          <AdDetails ad={adContent?.data} />
        </div>
        {dealership?.length === 0 ? (
          <p className="lg:my-[60px] px-[10px] py-[50px] lg:p-0 bg-white font-semibold text-[20px] lg:bg-transparent">
            Bu bayilik henüz ilan yayınlamadı!
          </p>
        ) : (
          <>
            {premiumAds.length > 0 && (
              <div className="bg-[#F1F3F7]">
                <h1 className="container py-[14px] max-sm:py-[8px] font-secondary text-[16px] max-sm:text-[13px] uppercase font-bold leading-8 text-primary border-y border-[#eaebf2]">
                  Premİum İlanlar
                </h1>
                <div className="py-[30px] max-sm:py-[15px] bg-[#F6F7FA]">
                  <div className="container">
                    <div className="grid grid-cols-12 gap-[10px] ">
                      {premiumAds.map((car) => (
                        <CarCard key={car.id} car={car} id={car.id} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {regularAds.length > 0 && (
              <div className="bg-[#F1F3F7]">
                <h1 className="container py-[14px] max-sm:py-[8px] font-secondary text-[16px] max-sm:text-[13px] uppercase font-bold leading-8 text-primary border-y border-[#eaebf2] w-full">
                  Tüm İlanlar
                </h1>
                <div className="py-[30px] max-sm:py-[15px] bg-[#F6F7FA]">
                  <div className="container">
                    <div className="grid grid-cols-12 gap-[10px] ">
                      {regularAds.map((car) => (
                        <CarCard key={car.id} car={car} id={car.id} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default DealershipDetails;
