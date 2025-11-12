import React from 'react'
import Header from '../components/Header'
import Register from '../assets/Register.jpg'
import { Input,Button } from 'antd'

const Signup = () => {
    return (
        <div className="">
            {/* <div className="bg-gray-300 bg-cover bg-fixed bg-center w-full h-[90px]">
                <Header />
            </div> */}
            <div className='flex mt-10 '>
                <div className=' w-1/2' >
                    <img src={Register} className='w-[75%]' alt="" />
                </div>
                <div className='px-10 w-[35%] py-6 rounded-2xl shadow-amber-500 shadow-2xl border-amber-400 mt-4 mb-4 border text-center'>
                    <div style={{ fontFamily: "cursive" }} className="font-bold mb-4 text-xl">
                        Create Your Account
                    </div>
                    <div className='flex-col justify-start text-left'>
                    <div className='flex mb-2 gap-2 w-full'>
                        <div><h1>First Name:</h1>
                            <Input type="text"  name="" id="" />
                        </div>
                        <div>
                            <h1>Last Name</h1>
                            <Input type="text" name=""  id="" /></div>
                    </div>
                    <div className='mb-2'>
                        <h1>Phone Number</h1>
                        <Input type="text" id="" />
                    </div>
                    <div className='mb-2'>
                        <h1>Email</h1>
                        <Input type="email"  name="" id="" />
                    </div>
                    <div className='mb-2'>
                        <h1>Set Password</h1>
                        <Input type="password" name="" id="" />
                    </div>
                    <div className='mb-2'>
                        <h1>Confirm Password</h1>
                        <Input type="password" name="" id="" />
                    </div>
                    <div className='flex justify-end mt-8 gap-6'>
                        <button type='reset'  className='border p-1 px-4 rounded-2xl border-amber-500 text-amber-500'>Clear all</button>
                        <Button>Submit</Button>
                    </div>
                
                </div></div>
            </div>
        </div>
    )
}

export default Signup
