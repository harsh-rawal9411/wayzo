import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="
        fixed inset-0 
        bg-black/50 
        backdrop-blur-sm
        flex 
        justify-center 
        items-center 
        z-50
      "
    >
      {/* Modal Box */}
      <div
        className="
          bg-white 
          w-full 
          max-w-sm 
          sm:max-w-md 
          p-6 
          rounded-2xl 
          shadow-xl 
          mx-4 
          animate-fadeIn
        "
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Login</h1>
          <IoClose
            size={24}
            className="cursor-pointer hover:text-red-500"
            onClick={onClose}
          />
        </div>

        {/* Email / Username */}
        <div className="mb-4">
          <label className="font-semibold">Email or Username</label>
          <input
            type="text"
            placeholder="Username / Email"
            className="border w-full mt-1 px-3 py-2 rounded-md outline-none focus:border-amber-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border w-full mt-1 px-3 py-2 rounded-md outline-none focus:border-amber-500"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end text-sm text-gray-500 mb-4">
          Forgot Password?
        </div>

        {/* Login Button */}
        <button
          className="
            w-full 
            bg-amber-500 
            text-white 
            py-2 
            rounded-xl 
            hover:bg-orange-500 
            transition
          "
        >
          Login
        </button>

        {/* Signup Link */}
        <div className="flex justify-end mt-3 text-sm">
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => {
              onClose();
              navigate('/signup');
            }}
          >
            Don't have an account?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
