import React from 'react';
import Header from '../components/Header';
import ContactBg from '../assets/ContactBg.jpg';
import Footer from '../components/Footer';
import { Input, Button } from 'antd';

const ContactUs = () => {
  return (
    <div className="w-full">
      
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 w-full bg-gray-300 h-20 z-50 shadow">
        <Header />
      </div>

      {/* CONTENT */}
      <div className="pt-24 px-4 md:px-10 lg:px-16 min-h-screen flex flex-col lg:flex-row justify-between gap-10">
        
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={ContactBg} 
            alt="Contact" 
            className="w-full max-w-[450px] rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="
          w-full lg:w-1/2 
          bg-white 
          border border-amber-400 
          shadow-lg shadow-amber-500/40 
          p-6 md:p-8 
          rounded-2xl
        ">
          <div 
            className="text-2xl font-bold text-center mb-4"
            style={{ fontFamily: "cursive" }}
          >
            Contact Us
            <div className="text-base font-normal text-gray-600 mt-1">
              We'd love to hear from you!
            </div>
          </div>

          <div className="flex flex-col gap-4 text-left">
            
            {/* NAME */}
            <div>
              <h1 className="font-semibold mb-1">Name:</h1>
              <Input type="text" className="border w-full p-2" />
            </div>

            {/* EMAIL */}
            <div>
              <h1 className="font-semibold mb-1">Email:</h1>
              <Input type="email" className="border w-full p-2" />
            </div>

            {/* MESSAGE */}
            <div>
              <h1 className="font-semibold mb-1">Message:</h1>
              <Input.TextArea 
                rows={4}
                className="border w-full resize-none p-2"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end mt-4 gap-4">
              <button 
                type="reset" 
                className="border border-amber-500 text-amber-600 px-4 py-1 rounded-xl hover:bg-amber-50"
              >
                Clear All
              </button>

              <Button className="bg-amber-500 text-white px-6 py-1 rounded-xl hover:bg-orange-500">
                Send Message
              </Button>
            </div>

          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default ContactUs;
