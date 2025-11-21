import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Ladakh from "../assets/Ladakh.avif";
import DetailsBg from "../assets/DeatailsBg.jpg";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { Button } from "antd";

const TripDetails = () => {
  const location = useLocation();
  const tour = location.state?.tour;

  const handleRequest = () => {
    toast.success("Request sent Successfully");
  };

  return (
    <div className="w-full">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full bg-gray-300 h-20 z-50 shadow">
        <Header />
      </div>

      {/* Background */}
      <img
        src={DetailsBg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
      />

      {/* Page Content */}
      <div className="pt-24 px-4 md:px-10 lg:px-20 min-h-screen">
        {/* TITLE */}
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-8">
          {tour.destination}
        </h1>

        {/* TWO-COLUMN LAYOUT */}
        <div className="
          flex 
          flex-col md:flex-row 
          justify-between 
          gap-10 
          w-full
        ">
          {/* LEFT TEXT SECTION */}
          <div className="md:w-1/2 w-full">
            {/* Title Row */}
            <div className="flex flex-wrap items-center gap-2">
              <div
                style={{ fontFamily: "cursive" }}
                className="text-xl md:text-2xl font-semibold text-gray-700"
              >
                {tour.name}
              </div>
              <div className="opacity-70">
                ({tour.startDate} - {tour.endDate})
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700 leading-relaxed">
              {tour.description}
            </p>

            {/* Members */}
            <div className="flex items-center gap-2 mt-4 text-gray-700">
              <MdOutlinePeopleOutline size={24} />
              {tour.members} members
            </div>

            {/* Price */}
            <div className="mt-3 text-lg">
              Price:
              <span className="text-emerald-700 font-bold ml-2">
                ₹{tour.price}
              </span>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Button
                onClick={handleRequest}
                className="bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500"
              >
                Request To Join
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={Ladakh}
              alt="Trip"
              className="w-full max-w-[400px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TripDetails;
