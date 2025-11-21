import React from 'react';
import Register from '../assets/Register.jpg';
import { Input, Button } from 'antd';

const Signup = () => {
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
            alt="Signup"
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
          <div 
            style={{ fontFamily: "cursive" }}
            className="font-bold mb-6 text-center text-2xl"
          >
            Create Your Account
          </div>

          {/* FIRST + LAST NAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-semibold">First Name</label>
              <Input type="text" className="mt-1" />
            </div>

            <div>
              <label className="font-semibold">Last Name</label>
              <Input type="text" className="mt-1" />
            </div>
          </div>

          {/* PHONE */}
          <div className="mb-4">
            <label className="font-semibold">Phone Number</label>
            <Input type="text" className="mt-1" />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="font-semibold">Email</label>
            <Input type="email" className="mt-1" />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="font-semibold">Set Password</label>
            <Input type="password" className="mt-1" />
          </div>

          <div className="mb-6">
            <label className="font-semibold">Confirm Password</label>
            <Input type="password" className="mt-1" />
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between mt-6">
            <button
              type="reset"
              className="border p-2 px-4 rounded-xl border-amber-500 text-amber-500 hover:bg-amber-50 duration-200"
            >
              Clear All
            </button>

            <Button className="bg-orange-400 text-white px-6 rounded-xl hover:bg-orange-500">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
