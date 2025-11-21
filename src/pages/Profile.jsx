import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Tabs } from "antd";
import ProfileBg2 from "../assets/ProfileBg2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchTours } from "../redux/tourSlice";
import { MdOutlinePeopleOutline } from "react-icons/md";
import Ladakh from "../assets/Ladakh.avif";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tours } = useSelector((state) => state.tour);

  const [currentStart, setCurrentStart] = useState(0);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const nextSlide = () => {
    if (currentStart + 4 < tours.length) {
      setCurrentStart(currentStart + 4);
    }
  };

  const prevSlide = () => {
    if (currentStart - 4 >= 0) {
      setCurrentStart(currentStart - 4);
    }
  };

  const visibleTours = tours.slice(currentStart, currentStart + 4);

  const viewTrip = (id, tour) => {
    navigate(`${id}/tripdetails`, { state: { tour } });
  };

  return (
    <div className="w-full">
      {/* Sticky Header */}
      <div className="fixed top-0 w-full z-50 bg-gray-300 shadow">
        <Header />
      </div>

      {/* Banner */}
      <div
        className="w-full h-[220px] md:h-[320px] bg-cover bg-center mt-16 relative"
        style={{ backgroundImage: `url(${ProfileBg2})` }}
      >
        <Button className="absolute bottom-4 right-4 bg-white shadow">
          Upload Profile Image
        </Button>
      </div>

      {/* Profile Info */}
      <div className="flex items-center px-6 md:px-12 mt-[-40px]">
        <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-amber-200 text-amber-600 font-bold text-4xl md:text-6xl shadow-md">
          H
        </div>

        <div className="ml-4 md:ml-8">
          <div className="text-xl md:text-2xl font-bold text-gray-700">
            harsh123
          </div>
          <div>Name: Harsh Rawal</div>
          <div>Email: harsh@123.xy</div>
          <div>City: Bijnor</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 md:px-12 mt-10">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: "My Tours",
              key: "1",
              children: (
                <div>
                  {/* Slider Controls */}
                  <div className="flex justify-between items-center mb-4">
                    <Button onClick={prevSlide}>Previous</Button>
                    <Button onClick={nextSlide}>Next</Button>
                  </div>

                  {/* Responsive Cards Grid */}
                  <div className="
                    grid grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    gap-6
                  ">
                    {visibleTours.map((tour, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-xl border shadow hover:shadow-lg hover:scale-105 transition"
                      >
                        <div className="relative">
                          <span className="absolute top-2 left-0 bg-amber-700 text-white px-2 py-1 rounded-r-xl text-sm">
                            {tour.destination}
                          </span>
                          <img src={Ladakh} alt="" className="rounded-xl mb-3" />
                        </div>

                        <div className="font-bold text-gray-700 text-lg">
                          {tour.name}
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-3">
                          {tour.description}
                        </p>

                        <div className="flex justify-between mt-2 text-sm">
                          <span className="flex items-center gap-1">
                            <MdOutlinePeopleOutline size={18} /> {tour.members}
                          </span>
                          <span className="opacity-60">
                            {tour.startDate} - {tour.endDate}
                          </span>
                        </div>

                        <div className="flex justify-between mt-2 items-center">
                          <Button
                            onClick={() => viewTrip(tour.id, tour)}
                            className="bg-amber-500 text-white rounded-full px-4 py-1 hover:bg-orange-500"
                          >
                            View
                          </Button>
                          <span className="text-amber-600 font-semibold">
                            ₹{tour.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              label: "Joined Tours",
              key: "2",
              children: (
                <div className="text-center py-20 text-gray-400 text-xl">
                  No Joined Tour
                </div>
              ),
            },
            {
              label: "Requests",
              key: "3",
              children: (
                <div className="text-center py-20 text-gray-400 text-xl">
                  No Requests
                </div>
              ),
            },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
