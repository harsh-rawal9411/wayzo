import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutBg from "../assets/AboutBg.jpg";

const AboutUs = () => {
  return (
    <div className="w-full">
      
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 w-full bg-gray-300 h-20 z-50 shadow">
        <Header />
      </div>

      {/* Page Content */}
      <div className="pt-24 px-4 md:px-10 lg:px-20 min-h-screen">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
          About Us
        </h1>

        {/* Subtitle */}
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10 text-sm md:text-base">
          Wayzo — Where journeys begin and strangers become travel buddies.
        </p>

        {/* Main Text Section */}
        <div className="max-w-4xl mx-auto text-center leading-relaxed text-gray-700 text-sm md:text-base">
          Wayzo is your go-to travel companion for discovering, creating, and 
          joining unforgettable group tours. <br /> <br />
          We believe the best adventures are shared — that’s why Wayzo makes it easy 
          for travelers to connect, plan, and explore destinations together.
        </div>

        {/* Image */}
        <div className="flex justify-center mt-10">
          <img
            src={AboutBg}
            alt="About Wayzo"
            className="w-full max-w-[600px] rounded-xl shadow-lg"
          />
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
