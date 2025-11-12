import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Login = ({onClose}) => {
    const [shoePassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    return (
        <div className=' absolute w-full h-ful '>
            <div className=' p-5 w-[30%] mt-[5%] ml-[30%] rounded-xl'>
                
                <div>
                    <div className='flex justify-between mb-4'>
                    <h1 className='text-2xl font-bold'>Login </h1>
                    <span><IoClose size={20} onClick={onClose}/></span>
                    </div>
                    <div className='mb-2'>
                        <h1 className='mb-1'>
                            Email Or Username
                        </h1>
                        <input type="text" placeholder='Username/Email' name="" id="" className='border w-full p-1' />
                    </div>
                    <div className='mb-2'>
                        <h1 className='mb-1'>Password</h1>
                        <div className='flex items-center'>
                        <input type={shoePassword? "text":"password"}
                        name="" placeholder='password' id="" className='border  w-full p-1'  />
                        <span className='ml-[-25px]' onClick={() => setShowPassword(!shoePassword)}>{shoePassword?<IoMdEye/>:<IoMdEyeOff/>}</span>
                        </div>
                    </div>
                    <div className='flex  justify-end mb-6'>Forgot Password ?</div>
                    <div className='flex justify-center mb-2'>
                        <button className='bg-amber-500 text-white w-full rounded-2xl p-1 hover:bg-orange-500 hover:cursor-pointer'>Login</button>
                    </div>
                    <span 
                    onClick={() => navigate('/signup')}
                    className='flex justify-end'>Do not have Accont ?</span>
                </div>
            </div>
        </div>
    )
}

export default Login
