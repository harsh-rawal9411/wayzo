import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Footer = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-between text-white p-20 bg-gray-800'>
            <div >
                <span className='text-4xl font-bold text-orange-500' style={{ fontFamily: "cursive" }}>Wayzo</span>
                <p>Explore The World With Us..</p>
            </div>
            
                <ul>
                    <li onClick={() => navigate('/')} className='hover:text-amber-500 hover:cursor-pointer'>Home</li>
                    <li className='hover:text-amber-500 hover:cursor-pointer'>Destinations</li>
                    <li onClick={() => navigate('/aboutus')} className='hover:text-amber-500 hover:cursor-pointer'>About Us</li>
                </ul>
                <ul>
                    <li onClick={() => navigate('/contactus')} className='hover:text-amber-500 hover:cursor-pointer'>Contact Us</li>
                    <li className='hover:text-amber-500 hover:cursor-pointer'>Privacy Policy</li>
                    <li className='hover:text-amber-500 hover:cursor-pointer'>Terms and Condition</li>
                </ul>
            
            <div>
                <h1>Contact info..</h1>
                <ul>
                    <li>Email: support@wayzo.com</li>
                    <li>Phone: +91 12345 67890</li>
                </ul>
                <ul className='flex gap-3 mt-2'>
                    <li className='hover:text-amber-500 hover:cursor-pointer'><FaFacebookF size={20} /></li>
                    <li className='hover:text-amber-500 hover:cursor-pointer'><FaInstagram size={20} /></li>
                    <li className='hover:text-amber-500 hover:cursor-pointer'><FaYoutube size={20}/></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer
