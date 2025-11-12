import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Tabs } from "antd";
import ProfileBg2 from "../assets/ProfileBg2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchTours } from "../redux/tourSlice";
import { MdOutlinePeopleOutline } from "react-icons/md";
import Ladakh from "../assets/Ladakh.avif";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";

const Profile = () => {
  const dispatch = useDispatch();

  const { tours, error } = useSelector((state) => state.tour);
  const [curretTours, setCurrentTours] = useState(0);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const nextSlide = () => {
    if (curretTours + 4 < tours.length) {
      setCurrentTours(curretTours + 4);
    }
  };
  const prevSlide = () => {
    if (curretTours - 4 >= 0) {
      setCurrentTours(curretTours - 4);
    }
  };

  const visibleTours = tours.slice(curretTours, curretTours + 4);

  return (
    <div>
      <div className="bg-gray-300 h-22 mt-[-90px] fixed z-50 w-full">
        <Header />
      </div>
      <div className=" mt-20 flex justify-between">
        <div className=" flex-col  w-full justify-items-center">
          <div
            className="h-[400px] bg-cover bg-center  mt-[-56px]  w-[100%] font-bold"
            style={{ backgroundImage: `url(${ProfileBg2})` }}
          >
            <Button className="mt-[28%] ml-[80%] flex justify-end items-end absolute">
              Upload Profile Image
            </Button>
          </div>
        </div>
      </div>
      <div className="flex ">
        <span className="text-8xl mt-[-110px] mb-[110px] border-5 p-5 rounded-full px-8 text-amber-600 ml-5 bg-amber-200">
          H
        </span>
        <div className="ml-10 flex justify-between  w-full pr-10">
          <div>
            <div className="text-gray-700 text-2xl mt-4 font-bold">
              harsh123
            </div>
            <div>Name: Harsh Rawal</div>
            <div>Email: harsh@123.xy</div>
            <div>City: Bijnor</div>
          </div>
        </div>
      </div>
      <div className="ml-[10%]">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "My Tours",
              key: "1",
              children: (
                <div className="flex items-center justify-between  ml-[-20px]    relative">
                
             
                    {visibleTours.map((tour, index) => (
                      <div
                        key={index}
                        className="m-4 w-[250px] p-3 rounded-xl border-1 border-gray-300  overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <div>
                          <span className="bg-amber-700 absolute mt-4 rounded-r-2xl text-white font-bold px-2 py-1 ">
                            {tour.destination}
                          </span>
                          <img src={Ladakh} className="mb-3" alt="" />
                        </div>
                        <span className="font-bold text-gray-600 ">
                          {tour.name}
                        </span>
                        <div className="text-[12px] line-clamp-4">
                          {tour.description}
                        </div>
                        <div className="flex justify-between">
                          <span className="flex gap-2">
                            <MdOutlinePeopleOutline
                              size={20}
                              className="mt-1"
                            />
                            {tour.members}
                          </span>
                          <span className="text-[12px] mt-1 opacity-50">
                            {tour.startDate} -- {tour.endDate}
                          </span>
                        </div>
                        <div className="flex  justify-between ">
                          <Button
                            onClick={() => viewTrip(tour.id, tour)}
                            className="bg-amber-500 px-5 py-1 rounded-full text-white mt-2 hover:bg-orange-500 hover:cursor-pointer"
                          >
                            View Details.
                          </Button>
                          <span className="text-amber-600 mt-2 ">
                            {tour.price} /-
                          </span>
                        </div>
                      </div>
                    ))}
                    
                  </div>
             
              ),
            },
            {
              label: "Joined Tours",
              key: "2",
              children: (
                <div className="flex justify-center items-center py-43 text-4xl font-bold text-gray-400">
                    No Joined Tour
                </div>
              ),
            },
            {
              label: "Requests",
              key: "3",
              children: (
                <div className="flex justify-center items-center py-43 text-4xl font-bold text-gray-400">
                    No Joined Tour
                </div>
              ),
            },
          ]}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
