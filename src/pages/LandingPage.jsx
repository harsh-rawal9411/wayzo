import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import LandingBg1 from "../assets/LandingBg1.jpg";
import LandingBg2 from "../assets/LandingBg2.jpg";
import LandingBg3 from "../assets/LandingBg3.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const LandingPage = () => {
  const cards = [
    {
      id: 3,
      title: "Explore Together, Travel Better",
      img: LandingBg1,
      description:
        "Join group tours, meet new people, and make memories around the world.",
    },
    {
      id: 2,
      title: "Create Tours. Connect Travelers. Discover the World.",
      img: LandingBg2,
      description:
        "From flights to hotels, we handle everything so you can travel stress-free.",
    },
    {
      id: 1,
      title: "Plan It. Post It. Explore It — With Wayzo!",
      img: LandingBg3,
      description:
        "Explore hidden gems and iconic locations with our expert-curated tours.",
    },
  ];

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10">
      {/* LOGO */}
      <div className="mt-4">
        <h1
          className="text-3xl font-bold text-orange-500"
          style={{ fontFamily: "cursive" }}
        >
          Wayzo
        </h1>
      </div>

      {/* HEADING */}
      <div className="mt-6 text-center">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500"
          style={{ fontFamily: "cursive" }}
        >
          From Dream to Destination – We Make Travel Social
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative flex items-center justify-center w-full overflow-hidden mt-8">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-50 bg-white/70 p-2 rounded-full shadow-md"
        >
          <FaArrowLeft size={28} className="opacity-50 hover:opacity-100" />
        </button>

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-full flex justify-center px-4"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-5xl w-full">
                {/* TEXT SECTION */}
                <div className="text-center md:text-left md:w-1/2">
                  <h1
                    className="text-gray-600 text-xl sm:text-2xl md:text-3xl font-semibold"
                    style={{ fontFamily: "cursive" }}
                  >
                    {card.title}
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2">
                    {card.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    src={card.img}
                    className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] rounded-xl shadow-md"
                    alt={card.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-50 bg-white/70 p-2 rounded-full shadow-md"
        >
          <FaArrowRight size={28} className="opacity-50 hover:opacity-100" />
        </button>
      </div>

      {/* BUTTON */}
      <div className="mt-6 flex justify-center">
        <Button
          onClick={() => navigate("/loginpage")}
          className="bg-orange-400 text-white px-6 py-2 text-lg rounded-full hover:bg-orange-500"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
