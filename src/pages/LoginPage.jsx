import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Register from '../assets/Register.jpg';
import { Input, Button } from 'antd';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === 'harsh123' && password === 'harsh123') {
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 py-8">
      <div
        className="
        flex flex-col md:flex-row
        items-center justify-center
        gap-10 md:gap-20
        w-full max-w-5xl
      "
      >
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Register}
            alt="Login"
            className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] rounded-xl"
          />
        </div>

        {/* FORM SECTION */}
        <div className="
          w-full md:w-[45%] 
          bg-white
          border border-amber-400 
          rounded-2xl 
          shadow-lg shadow-amber-500/40 
          p-6 sm:p-8
        "
        >
          <form onSubmit={handleLogin}>
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

            {/* USERNAME */}
            <div className="mb-4">
              <label className="font-semibold">Username</label>
              <Input
                type="text"
                placeholder="Username"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-1"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="font-semibold">Password</label>
              <div className="flex items-center mt-1 relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute right-3 cursor-pointer text-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="flex justify-end text-sm text-gray-500 mb-4">
              Forgot Password ?
            </div>

            {/* LOGIN BUTTON */}
            <Button
              htmlType="submit"
              className="bg-amber-500 text-white w-full rounded-xl py-2 text-lg hover:bg-orange-500"
            >
              Login
            </Button>

            {/* SIGNUP LINK */}
            <div className="flex justify-end mt-3 text-sm">
              <span
                onClick={() => navigate('/signup')}
                className="hover:text-orange-500 cursor-pointer"
              >
                Don't have an account?
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
