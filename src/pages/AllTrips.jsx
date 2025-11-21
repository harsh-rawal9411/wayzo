import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Ladakh from "../assets/Ladakh.avif";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "../redux/tourSlice";

const AllTrips = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tours } = useSelector((state) => state.tour);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const viewTrip = (id, tour) => {
    navigate(`/alltrips/${id}/tripdetails`, { state: { tour } });
  };

  return (
    <div className="w-full">
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 w-full bg-gray-300 h-20 z-50 shadow">
        <Header />
      </div>

      {/* Page Content */}
      <div className="pt-24 px-4 md:px-10 lg:px-16 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          All Trips
        </h1>

        {/* RESPONSIVE GRID */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          place-items-center
        "
        >
          {tours.slice(0, 20).map((tour, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-[280px] rounded-xl border shadow-md p-3 
              transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <span className="absolute top-2 left-0 bg-amber-700 text-white px-2 py-1 rounded-r-xl text-sm">
                  {tour.destination}
                </span>

                <img
                  src={Ladakh}
                  className="rounded-xl mb-3 w-full h-40 object-cover"
                  alt=""
                />
              </div>

              <h2 className="font-bold text-gray-700 text-lg">{tour.name}</h2>

              <p className="text-sm text-gray-600 line-clamp-3">
                {tour.description}
              </p>

              <div className="flex justify-between mt-2 text-sm">
                <span className="flex items-center gap-1">
                  <MdOutlinePeopleOutline size={18} /> {tour.members}
                </span>
                <span className="opacity-60 text-xs">
                  {tour.startDate} - {tour.endDate}
                </span>
              </div>

              <div className="flex justify-between mt-3 items-center">
                <Button
                  onClick={() => viewTrip(tour.id, tour)}
                  className="bg-amber-500 text-white px-4 py-1 rounded-full hover:bg-orange-500"
                >
                  View
                </Button>
                <span className="text-amber-600 font-bold">
                  ₹{tour.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllTrips;
