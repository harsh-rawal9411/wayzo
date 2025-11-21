import React, { useState } from "react";
import GuideBg2 from "../assets/GuideBg2.jpg";
import GuideBg3 from "../assets/GuideBg3.jpg";
import GuideBg4 from "../assets/GuideBg4.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Features = () => {
  const cards = [
    {
      id: 1,
      title: "Personalised Experience",
      img: GuideBg4,
      description:
        "Tailored itineraries that match your style, budget, and adventure level.",
    },
    {
      id: 2,
      title: "Seamless Planning",
      img: GuideBg2,
      description:
        "From flights to hotels, we handle everything so you can travel stress-free.",
    },
    {
      id: 3,
      title: "Unbeatable Destinations",
      img: GuideBg3,
      description:
        "Explore hidden gems and iconic locations with our expert-curated tours.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-50 bg-white/60 p-2 rounded-full shadow-md"
      >
        <FaArrowLeft size={28} className="opacity-60 hover:opacity-100" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-50 bg-white/60 p-2 rounded-full shadow-md"
      >
        <FaArrowRight size={28} className="opacity-60 hover:opacity-100" />
      </button>

      {/* Slider */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-full flex items-center justify-center px-4"
          >
            <div
              className="
              flex flex-col md:flex-row
              items-center justify-between 
              gap-6 md:gap-10 
              max-w-5xl w-full
            "
            >
              {/* Text */}
              <div className="text-center md:text-left flex-1">
                <h1
                  style={{ fontFamily: "cursive" }}
                  className="text-gray-600 text-2xl sm:text-3xl md:text-4xl font-semibold"
                >
                  {card.title}
                </h1>
                <p className="text-gray-700 text-sm sm:text-base mt-3 px-2 md:px-0">
                  {card.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src={card.img}
                  alt=""
                  className="
                    w-full 
                    max-w-[350px] sm:max-w-[450px] md:max-w-[550px]
                    rounded-xl shadow
                  "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
