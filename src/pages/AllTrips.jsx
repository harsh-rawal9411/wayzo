import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutBg from '../assets/AboutBg.jpg'
import axios, { Axios } from "axios";
import Ladakh from "../assets/Ladakh.avif";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../redux/tourSlice';

import { useState,useEffect } from 'react'

const AllTrips = () => {
    //   const API_URL = "https://67e4f4b118194932a583d5b1.mockapi.io/expanse/tourData";
    // const [tour, setTour] = useState([]);
    //   useEffect (() => {
    //     axios
    //     .get(API_URL)
    //     .then((response) => setTour(response.data.reverse()) )
    //     .catch((error) => console.error("error fetching tours", error));
    //   },[])

   const dispatch = useDispatch();
   const {tours} = useSelector((state) => state.tour);

   useEffect(() =>{
    dispatch(fetchTours())
   },[dispatch])

      const navigate= useNavigate();

      const viewTrip = (id,tour) => {
        console.log("h",tour)
        navigate(`/alltrips/${id}/tripdetails`,{state : {tour}})
      }
      
    
  return (
    <>
    

      <div className="min-h-screen   ">
        <div className='bg-gray-300 z-50 mt-[-40px] h-32 fixed w-full'>  <Header /></div>
        <h1 className="text-3xl font-bold text-center pt-25 ">All Trips</h1>
       
 <div className="grid grid-cols-4 gap-5">
        {tours.slice(0,9).map((tour, index) => (
          <div
            key={index}
            className="m-4 w-[250px] p-3 rounded-xl border-1 border-gray-300  overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div>
              <span className='bg-amber-700 absolute mt-4 rounded-r-2xl text-white font-bold px-2 py-1 '>{tour.destination}</span>
              <img src={Ladakh} className="mb-3" alt="" />
            </div>
            <span className="font-bold text-gray-600 ">{tour.name}</span>
            <div className="text-[12px] line-clamp-3">{tour.description}</div>
            <div className="flex justify-between">
              <span className="flex gap-2">
                <MdOutlinePeopleOutline size={20} className="mt-1" />{tour.members}
              </span>
              <span className="text-[12px] mt-1 opacity-50">
                {tour.startDate} -- {tour.endDate}
              </span>
            </div>
            <div className="flex  justify-between ">
              <Button onClick={() => viewTrip(tour.id,tour)} className="bg-amber-500 px-5 py-1 rounded-full text-white mt-2 hover:bg-orange-500 hover:cursor-pointer">
                View Details.
              </Button>
              <span className="text-amber-600 mt-2 ">{tour.price} /-</span>
            </div>
          </div>
        ))}
      </div>
      
      </div>

      <Footer />
    </>
  )
}

export default AllTrips
