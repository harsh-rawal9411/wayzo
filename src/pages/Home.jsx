import React, { useState } from "react";
import Header from "../components/Header";
import HomeBg2 from "../assets/HomeBg2.avif";
import PlacesCard from "../components/PlacesCard";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { Select, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchTours } from "../redux/tourSlice";

import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { LuOctagon } from "react-icons/lu";
import FeaturedTrips from "../components/FeaturedTrips";

const Home = () => {
  const dispatch = useDispatch();
  const locos = useSelector((state) => [
    ...new Set(state.tour.tours.map((tour) => tour.destination)),
  ]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const budget = [
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
    7000,
    8000,
    9000,
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const navigate = useNavigate();
  return (
    <div className="p-0 mt-0">
      <div
        className="bg-cover bg-fixed w-full h-full bg-cemter "
        style={{ backgroundImage: `url(${HomeBg2})` }}
      >
        <div className=" pt-3">
          <Header className="" />
        </div>
        <div className="   items-center justify-between">
          <div
            style={{ fontFamily: "cursive" }}
            className="flex justify-center m-20 text-5xl font-bold text-amber-300"
          >
            Explore...  Beyond Boundaries.
            <br />
            Your Journey,
             Your Way.
          </div>
          <div className="  justify-center  pb-4 mb-[%]">
            <div className="bg-white/40 w-[71%] ml-[183px]  px-5 justify-center items-center rounded-t-2xl m flex ">
              <Space wrap>
                <Select
                  defaultValue="Select Location"
                  onChange={handleChange}
                  className="rounded-full"
                  style={{ width: 180 }}
                >
                  {locos.map((loc, index) => (
                    <Select.Option key={index} value={loc}>
                      {loc}
                    </Select.Option>
                  ))}
                </Select>{" "}
              </Space>
              <Space direction="vertical">
                <Select
                  defaultValue="Select Month"
                  style={{ width: 180 }}
                  onChange={handleChange}
                >
                  {months.map((month, index) => (
                    <Option key={index} value={month}>
                      {month}
                    </Option>
                  ))}
                </Select>
              </Space>
              <Space direction="vertical">
                <Select
                  defaultValue="Select Budget"
                  style={{ width: 180 }}
                  onChange={handleChange}
                >
                  {budget.map((budget, index) => (
                    <Option key={index} value={budget}>
                      {budget}
                    </Option>
                  ))}
                </Select>
              </Space>
            </div>
            <div className="flex justify-center">
              <FeaturedTrips />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ fontFamily: "cursive" }}
          className="flex justify-center text-2xl py-3 font-bold bg-gray-300 "
        >
          Top Places to visit
        </div>
        <div className="bg-gray-100 flex justify-center">
          <PlacesCard />
        </div>
      </div>
      <div
        style={{ fontFamily: "cursive" }}
        className="flex justify-center text-2xl py-3 font-bold bg-gray-300 "
      >
        Why To Choose Us
      </div>
      <div>
        <Features />
      </div>
      <div
        style={{ fontFamily: "cursive" }}
        className="flex justify-center text-2xl py-3 font-bold bg-gray-300 "
      >
        Happy Moments
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
