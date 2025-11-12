import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import LandingBg1 from "../assets/LandingBg1.jpg"
import LandingBg2 from "../assets/LandingBg2.jpg"
import LandingBg3 from "../assets/LandingBg3.jpg"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

const LandingPage = () => {

    const cards = [
        { id: 3, title: "Explore Together, Travel Better", img: LandingBg1, description: "Join group tours, meet new people, and make memories around the world." },
        { id: 2, title: "Create Tours. Connect Travelers. Discover the World.", img: LandingBg2, description: "From flights to hotels, we handle everything so you can travel stress-free." },
        { id: 1, title: "Plan It. Post It. Explore It — With Wayzo!", img: LandingBg3, description: "Explore hidden gems and iconic locations with our expert-curated tours." }
    ];

    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);
    

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

   
    useEffect(() => {
        const interval = setInterval(nextSlide, 4000); 
        return () => clearInterval(interval);
    }, [currentIndex]);
  return (
    <div>
        <div className='mt-5'>
        <span className='text-2xl p-20  font-bold text-orange-500' style={{fontFamily:"cursive"}}>Wayzo</span>
        </div>
      <div className='flex-col mt-5 justify-center items-center  '>
        <h1>
            <span className='text-2xl flex justify-center font-bold text-orange-500' style={{fontFamily:"cursive"}}>From Dream to Destination – We Make Travel Social</span>
        </h1>
        <div className='flex w-screen   items-center justify-between  overflow-hidden mx-auto relative'>
            <div className='z-50 ml-[100px] absolute left-4'>
                <button onClick={prevSlide}>
                    <FaArrowLeft size={34} className='hover:cursor-pointer opacity-30' />
                </button>
            </div>

            <div className='flex transition-transform duration-700 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {cards.map((card) => (
                    <div key={card.id} className='flex min-w-full text-center items-center justify-center'>
                        <div className='flex items-center w-2/3 gap-6'>
                            <div className='mr-10'>
                                <h1 style={{ fontFamily: "cursive" }} className='text-gray-500 text-2xl'>{card.title}</h1>
                                <p className='text-gray-600 text-xl mt-2'>{card.description}</p>
                            </div>
                            <div>
                                <img src={card.img} className='w-[600px]  rounded-xl shadow-md' alt={card.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='z-50 mr-[100px] absolute right-4'>
                <button onClick={nextSlide}>
                    <FaArrowRight size={34} className='hover:cursor-pointer opacity-30' />
                </button>
            </div>
        </div>
        <div className='flex m justify-center items-center'>
            <Button onClick={() => navigate(`/loginpage`)} className='bg-orange-400 mt-5 text-white px-6 text-lg py-2 rounded-full hover:bg-orange-500 hover:cursor-pointer'>Get Started</Button>
            </div>
      </div>
    </div>
  )
}

export default LandingPage
