import React from 'react'
import Header from '../components/Header'
import ContactBg from '../assets/ContactBg.jpg'
import Footer from '../components/Footer'
import { Input, Button } from 'antd'

const ContactUs = () => {
  return (
    <div>
        
        <div className="">
            <div className="bg-gray-300 bg-cover fixed bg-fixed bg-center w-full h-[90px]">
                <Header />
            </div>
            <div className='flex  justify-between '>
                 <div className=' w-1/2' >
                     <img src={ContactBg} className='w-[95%] flex mt-30' alt="" /> 
                 </div>
                <div className='px-10 w-[35%] mb-20 mt-35 py-6 rounded-2xl shadow-amber-500 shadow-2xl border-amber-400 mr-[5%]  border text-center'>
                    <div style={{ fontFamily: "cursive" }} className="font-bold mb-4 text-xl">
                        Contact Us
                    <div>   We'd love to hear from you!</div>
                    </div>
                    <div className='flex-col justify-start text-left'>
                    <div className=' mb-2  w-full'>
                        <h1> Name:</h1>
                            <Input type="text" className='border w-full' name="" id="" />
                        
                    </div>
                  
                    <div className='mb-2'>
                        <h1>Email</h1>
                        <Input type="email" className='w-full border' name="" id="" />
                    </div>
                    <div>
                        <h1>Message</h1>
                        <Input.TextArea name="" className='w-full border resize-none' id=""/>
                    </div>
               
                    <div className='flex justify-end mt-8 gap-6'>
                        <button type='reset'  className='border p-1 px-4 rounded-2xl border-amber-500 text-amber-500 hover:text-orange-500 hover:cursor-pointer'>Clear all</button>
                        <Button className='bg-amber-500 p-1 px-4 rounded-2xl text-white hover:bg-orange-500 hover:cursor-pointer'>Send Message</Button>
                    </div>
                
                </div></div>
            </div>
            <div><Footer/></div>
        </div>
    </div>
  )
}

export default ContactUs
