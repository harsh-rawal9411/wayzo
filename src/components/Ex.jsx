import React, { useState } from "react";

const Ex = () => {
  const cards = [
    { id: 1, title: "Goa Trip" },
    { id: 2, title: "Manali Adventure" },
    { id: 3, title: "Maldives Tour" },
    { id: 4, title: "Dubai Vibes" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-[300px] overflow-hidden mx-auto relative">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-full h-40 bg-blue-500 text-white flex items-center justify-center text-2xl rounded-xl mx-2"
          >
            {card.title}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white px-3 py-1 rounded disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white px-3 py-1 rounded disabled:opacity-50"
          disabled={currentIndex === cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Ex;
