import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Register from '../assets/Register.jpg'
import { Input,Button } from 'antd';

const LoginPage = () => {
     const [shoePassword, setShowPassword] = useState(false)
     const [userName , setUserName] = useState('')
     const [password , setPassword] = useState('')
        const navigate = useNavigate();
        
       const handleLogin = () => {
            if(userName === 'harsh123' && password === 'harsh123'){
                navigate('/');
            } else {
                alert('Invalid username or password')
            }
        }

    return (
        <div className="">
       
            <div className='flex justify-center items-center mt-15 '>
                <div className=' w-1/2' >
                    <img src={Register} className='w-[75%]' alt="" />
                </div>
                <div className='px-10 w-[35%] h-[370px] py-6 rounded-2xl shadow-amber-500 shadow-2xl border-amber-400 mt-4 mb-4 border text-center'>
                  <form action="" onSubmit={handleLogin}>  <div>
                        <div className='flex justify-between mb-4'>
                            <h1 className='text-2xl font-bold'>Login </h1>

                        </div>
                        <div className='mb-2'>
                            <h1 className='mb-1  text-left'>
                             Username
                            </h1>
                            <Input type="text" placeholder='Username' required value={userName} onChange={(e) => setUserName(e.target.value)} className='border w-full p-1' />
                        </div>
                        <div className='mb-2'>
                            <h1 className='mb-1 text-left'>Password</h1>
                            <div className='flex items-center'>
                                <Input type={shoePassword ? "text" : "password"}
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)} required placeholder='password' id="" className='border  w-full p-1' />
                                <span className='ml-[-25px] z-50' onClick={() => setShowPassword(!shoePassword)}>{shoePassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
                            </div>
                        </div>
                        <div className='flex  justify-end mb-6'>Forgot Password ?</div>
                        <div className='flex justify-center mb-2'>
                            <Button htmlType='submit' className='bg-amber-500 text-white w-full rounded-2xl p-1 hover:bg-orange-500 hover:cursor-pointer'>Login</Button>
                        </div>
                        <span
                            onClick={() => navigate('/signup')}
                            className='flex justify-end hover:cursor-pointer'>Do not have Accont ?</span>


                    </div></form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage