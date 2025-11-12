import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutBg from '../assets/AboutBg.jpg'

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen   ">
        <div className='bg-gray-300  mt-[-40px] h-32 fixed w-full'>  <Header /></div>
        <h1 className="text-3xl font-bold text-center pt-25 ">About Us</h1>
        <p className="text-center max-w-xl mx-auto text-gray-500 mb-10">
        Wayzo — Where journeys begin and strangers become travel buddies.        </p>
        <div className='flex-col    justify-items-center'>
            <div className='flex text-center'>
            Wayzo is your go-to travel companion for discovering, creating, and joining unforgettable group tours.<br/> We believe the best adventures are shared <br/> that’s why Wayzo makes it easy for travelers to connect, plan, and explore destinations together.
            </div>
            <div className='flex justify-center'>
                <img src={AboutBg} className='w-[75%] mt-[-4px]' alt="" />
            </div>
        </div>

      
      </div>

      <Footer />
    </>
  )
}

export default AboutUs
