import React from "react";
import Header from "../components/Header";
import HomeBg2 from "../assets/HomeBg2.avif";
import PlacesCard from "../components/PlacesCard";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { Select, Space } from "antd";
import { useSelector } from "react-redux";
import FeaturedTrips from "../components/FeaturedTrips";

const { Option } = Select;

const Home = () => {
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

  const budget = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

  const handleChange = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div className="p-0 m-0">
      {/* HERO SECTION */}
      <div
        className="bg-cover bg-fixed bg-center w-full min-h-screen"
        style={{ backgroundImage: `url(${HomeBg2})` }}
      >
        <div className="pt-3">
          <Header />
        </div>

        <div className="flex flex-col items-center text-center px-4 mt-10">
          <h1
            style={{ fontFamily: "cursive" }}
            className="text-3xl md:text-5xl font-bold text-amber-300 leading-snug"
          >
            Explore... Beyond Boundaries.
            <br />
            Your Journey, Your Way.
          </h1>

          {/* FILTER BOX */}
          <div className="bg-white/40 backdrop-blur-md w-[95%] md:w-[80%] lg:w-[70%] mt-10 rounded-2xl px-5 py-5">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Select
                defaultValue="Select Location"
                onChange={handleChange}
                className="rounded-full w-full md:w-48"
              >
                {locos.map((loc, index) => (
                  <Option key={index} value={loc}>
                    {loc}
                  </Option>
                ))}
              </Select>

              <Select
                defaultValue="Select Month"
                style={{ width: "100%" }}
                className="md:w-48"
                onChange={handleChange}
              >
                {months.map((month, index) => (
                  <Option key={index} value={month}>
                    {month}
                  </Option>
                ))}
              </Select>

              <Select
                defaultValue="Select Budget"
                style={{ width: "100%" }}
                className="md:w-48"
                onChange={handleChange}
              >
                {budget.map((b, index) => (
                  <Option key={index} value={b}>
                    ₹{b}
                  </Option>
                ))}
              </Select>
            </div>

            {/* Featured Trips */}
            <div className="flex justify-center mt-6">
              <FeaturedTrips />
            </div>
          </div>
        </div>
      </div>

      {/* TOP PLACES */}
      <div className="bg-gray-300 text-center py-3 text-2xl font-bold" style={{ fontFamily: "cursive" }}>
        Top Places to Visit
      </div>
      <div className="bg-gray-100 flex justify-center px-2">
        <PlacesCard />
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-gray-300 text-center py-3 text-2xl font-bold" style={{ fontFamily: "cursive" }}>
        Why Choose Us
      </div>
      <Features />

      {/* HAPPY MOMENTS */}
      <div className="bg-gray-300 text-center py-3 text-2xl font-bold" style={{ fontFamily: "cursive" }}>
        Happy Moments
      </div>
      <Footer />
    </div>
  );
};

export default Home;
