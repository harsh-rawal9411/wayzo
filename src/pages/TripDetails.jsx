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
  console.log("harsh rawal", tour);

  const handleRequest = () => {
    toast.success("Request sent Successfully");
  };

  return (
    <div>
      <div className="min-h-screen   ">
        <div className="bg-gray-300  mt-[-40px] h-32 fixed w-full">
          {" "}
          <Header />
        </div>
        <img
          src={DetailsBg}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
        />
        <h1 className="text-3xl font-bold text-center pt-25 mb-10 ">
          {tour.destination}
        </h1>
        <div className="flex w-full justify-between p-10 ">
          <div className="w-1/2">
            <div className="flex">
              <div style={{ fontFamily: "cursive" }} className="text-2xl">
                {tour.name}
              </div>
              <div className="mt-1.5 ml-2">
                ({tour.startDate}--{tour.endDate})
              </div>{" "}
            </div>
            <div className="mt-5 pr-10">{tour.description}</div>
            <div className="flex gap-2 mt-4">
              <MdOutlinePeopleOutline size={25} />
              {tour.members}
            </div>
            <div className="gap-4">
              Price:{" "}
              <span className="ml-2 text-emerald-800 font-bold">
                {tour.price}
              </span>
            </div>
            <div className=" flex justify-end">
              <Button
                onClick={handleRequest}
                className="  mt-2 "
              >
                Request To Join
              </Button>
            </div>
          </div>
          <div>
            <img src={Ladakh} alt="" className="w-[70%] ml-20 " />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TripDetails;
