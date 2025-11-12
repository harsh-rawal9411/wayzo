import React, { useEffect, useState } from 'react';
import Ladakh from "../assets/Ladakh.avif";
import { useSelector, useDispatch } from "react-redux";
import { fetchTours } from "../redux/tourSlice";
import { useNavigate } from 'react-router-dom';

const FeaturedTrips = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tours } = useSelector((state) => state.tour);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(tours.length / itemsPerSlide);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  useEffect(() => {
    if (!tours || tours.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [tours, totalSlides]);

  const viewTrip = (id, tour) => {
    navigate(`${id}/tripdetails`, { state: { tour } });
  };

  return (
    <div className="w-full max-w-4xl overflow-hidden bg-white/40 flex justify-center items-center rounded-r-2xl py-8">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${totalSlides * 100}%`,
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
          const start = slideIndex * itemsPerSlide;
          const slideTours = tours.slice(start, start + itemsPerSlide);

          return (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 flex justify-center gap-6 px-4"
              style={{ width: "100%" }}
            >
              {slideTours.map((tour, index) => (
                <div
                  key={index}
                  className="bg-white flex items-center max-w-[370px] w-full rounded-full p-1 shadow-md"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={Ladakh}
                      className="w-full h-full object-cover"
                      alt="Tour"
                    />
                  </div>
                  <div className="py-2 ml-6 flex-1">
                    <h1 className="font-bold text-xl">{tour.destination}</h1>
                    <p className="text-sm">{tour.startDate} — {tour.endDate}</p>
                    <p className="text-sm text-green-700 font-semibold">₹{tour.price}</p>
                  </div>
                  <div className="border-l-2 border-orange-400 h-16"></div>
                  <div
                    onClick={() => viewTrip(tour.id, tour)}
                    className="p-4 pt-5 hover:text-orange-600 cursor-pointer"
                  >
                    View
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedTrips;
