import React, { useEffect } from "react";
import Ladakh from "../assets/Ladakh.avif";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchTours } from "../redux/tourSlice";
import { useNavigate } from "react-router-dom";

const PlacesCard = () => {
  const dispatch = useDispatch();
  const { tours } = useSelector((state) => state.tour);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const viewTrip = (id, tour) => {
    navigate(`${id}/tripdetails`, { state: { tour } });
  };

  return (
    <div className="w-full px-4 py-6">
      {/* Responsive Grid */}
      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-3 
        gap-6 place-items-center"
      >
        {tours.slice(0, 9).map((tour, index) => (
          <div
            key={index}
            className="w-full max-w-[300px] p-3 rounded-xl border border-gray-300 
            bg-white shadow-sm 
            transition-transform duration-300 
            hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <span className="bg-amber-700 absolute top-3 left-0 rounded-r-2xl text-white font-bold px-2 py-1">
                {tour.destination}
              </span>
              <img src={Ladakh} className="mb-3 w-full rounded-md" alt="" />
            </div>

            <span className="font-bold text-gray-700 text-lg">{tour.name}</span>

            <div className="text-sm text-gray-600 line-clamp-4 my-1">{tour.description}</div>

            <div className="flex justify-between items-center text-sm my-1">
              <span className="flex items-center gap-1">
                <MdOutlinePeopleOutline size={18} /> {tour.members}
              </span>
              <span className="opacity-60 text-xs">
                {tour.startDate} — {tour.endDate}
              </span>
            </div>

            <div className="flex justify-between items-center mt-2">
              <Button
                onClick={() => viewTrip(tour.id, tour)}
                className="bg-amber-500 text-white rounded-full px-4 py-1 hover:bg-orange-500"
              >
                View Details
              </Button>

              <span className="text-amber-600 font-semibold">{tour.price} /-</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesCard;
