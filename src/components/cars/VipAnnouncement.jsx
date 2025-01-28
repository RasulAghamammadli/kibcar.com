import CarCard from "./CarCard";

function VipAnnouncement({ announcements, title }) {
  return (
    <div className="bg-[#F1F3F7]">
      <h1 className="container py-[14px] max-sm:py-[8px] font-secondary text-[16px] max-sm:text-[13px] uppercase font-bold leading-8 text-primary border-y border-[#eaebf2]">
        {title}
      </h1>
      <div className="py-[30px] max-sm:py-[15px] bg-[#F6F7FA]">
        <div className="container">
          <div className="grid grid-cols-12 gap-[10px]">
            {announcements.map((car) => (
              <CarCard key={car.id} car={car} id={car.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VipAnnouncement;
