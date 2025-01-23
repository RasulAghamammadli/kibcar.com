import { useEffect } from "react";

function Spinner() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center h-[100dvh] justify-center bg-slate-200/30  backdrop-blur-sm z-[9999]">
      <div className="loader" data-text="KibCar">
        <svg
          className="loader-svg"
          viewBox="0 0 500 150"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Loading"
          role="img"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-outline"
          >
            KibCar
          </text>

          <text
            x="50%"
            y="51%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-fill"
          >
            KibCar
          </text>
        </svg>
      </div>
    </div>
  );
}

export default Spinner;
