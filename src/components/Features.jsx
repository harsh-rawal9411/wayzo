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
      title: "Seamless PLanning",
      img: GuideBg2,
      description:
        " From flights to hotels, we handle everything so you can travel stress-free.",
    },
    {
      id: 3,
      title: "Unbeatable Destinations ",
      img: GuideBg3,
      description:
        "Explore hidden gems and iconic locations with our expert-curated tours.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlider = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="flex items-center justify-between p-10  overflow-hidden mx-auto  relative">
      <div className="z-50 absolute">
        <button onClick={prevSlider}>
          <FaArrowLeft size={34} className="hover:cursor-pointer opacity-30" />
        </button>
      </div>
      <div
        className="flex transition-transform duration-800"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex min-w-full  text-center items-center justify-center "
          >
            <div className="flex items-center   w-2/3 ">
              <div className="">
                <h1
                  style={{ fontFamily: "cursive" }}
                  className="text-gray-500 text-3xl"
                >
                  {card.title}
                </h1>
                <p>{card.description}</p>
              </div>
              <div>
                <img src={card.img} className="w-[600px]" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="z-50 ">
        <button onClick={nextSlide}>
          <FaArrowRight
            size={34}
            className="hover:cursor-pointer  opacity-30"
          />
        </button>
      </div>
    </div>
  );
};

export default Features;
