import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateBg from "../assets/CreateBg.jpg";
import { MdOutlinePeopleOutline } from "react-icons/md";
import Ladakh from "../assets/Ladakh.avif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { toast } from "react-toastify";
import { Input,Button } from "antd";
import { useDispatch } from "react-redux";
import { addTour } from "../redux/tourSlice";
const API = "https://67e4f4b118194932a583d5b1.mockapi.io/expanse/tourData";

const CreateTrip = () => {
  const [tourData, setTourData] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    members: "",
    price: "",
    image: null,
  });
  const [prev, setPrev] = useState(true);
  const handlePrev = () => {
    setPrev(true);
  };

  const dispatch = useDispatch()

  const handleEdit = () => {
    setPrev(false);
  };
  const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const wordCount = tourData.description.trim().split(/\s+/).filter(Boolean).length;

    try {
      const response = await dispatch(addTour(tourData)).unwrap();
      console.log(response);
      toast.success("Trip created Successfully");
      navigate("/");
    } catch (error) {
      console.error("Can't upload tour", error);
    }
  };

  const handleChange = (e) => {
    const {name , value} = e.target;
    setTourData((prev) =>({
      ...prev,
      [name]: value
    }))
  }
 
  // const handleImageChange = (e) => {
  //     setTourData({ ...tourData, image: e.target.files[0] });
  //   };
  // console.log(tourData.name)
  return (
    <div>
      <div className="bg-gray-300 h-22 mt-[-90px] fixed z-50 w-full">
        <Header />
      </div>
      <div className=" mt-22 flex justify-between">
        <div className=" flex-col py-8  w-[40%] justify-items-center">
          <div
            style={{ fontFamily: "cursive" }}
            className="text-xl  mb-8 font-bold"
          >
            Let's Create Tour
          </div>

          <div>
            {" "}
            <form action="" onSubmit={handleSubmit}>
              <div className="flex mb-4 gap-4">
                <div>
                  <h1 className="mb-1">Tour Name</h1>
                  <Input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    className="border px-3 py-1 rounded-sm"
                  />
                </div>
                <div>
                  <h1 className="mb-1">Destination</h1>
                  <Input
                    type="text"
                    name="destination"
                    required
                    onChange={handleChange}
                    className="border px-3 py-1 rounded-sm"
                  />
                </div>
              </div>
              <div className="flex mb-4 gap-4">
                <div className="w-1/2">
                  <h1 className="mb-1">Start Date</h1>
                  <Input
                    type="date"
                    min={today}
                    name="startDate"
                    required
                    onChange={handleChange}
                    className="border px-3 py-1 w-full rounded-sm"
                  />
                </div>
                <div className="w-1/2">
                  <h1 className="mb-1">End Date</h1>
                  <Input
                    type="date"
                    min={tourData.startDate || today}
                    name="endDate"
                    required
                    onChange={handleChange}
                    className="border px-3 py-1 w-full rounded-sm"
                    id=""
                  />
                </div>
              </div>
              <div className="mb-4">
                <h1 className="mb-1">Tour Description </h1>
                <Input.TextArea
                  className="border w-full px-3 py-1 rounded-sm"
                  name="description"
                  rows={3}
                  minLength={150}
                  maxLength={380}
                  required
                  onChange={handleChange}
                  placeholder="Write at least 3 lines about the tour..."
                />
              </div>
              <div className="flex mb-4 gap-4">
                <div>
                  <h1 className="mb-1">Total Members</h1>
                  <Input
                    type="number"
                    className="border px-3 py-1 rounded-sm"
                    required
                    onChange={handleChange}
                    name="members"
                    id=""
                  />
                </div>
                <div>
                  <h1 className="mb-1">Total Price</h1>
                  <Input
                    type="number"
                    className="border px-3 py-1 rounded-sm"
                    required
                    onChange={handleChange}
                    name="price"
                    id=""
                  />
                </div>
              </div>
              {/* <div className='mb-4'>
                        <h1>Upload Image</h1>
                        <input type="file" accept='image/*' className='border rounded-sm' onChange={handleImageChange} name="image" id="" />
                    </div> */}
              <div className="flex justify-end mt-5 gap-4">
                <button type="reset">Clear all</button>
                <Button
                  className="p-1 px-4 bg-amber-500 hover:bg-orange-500 hover:cursor-pointer rounded-full text-white"
                  htmlType="submit"
                >
                  Create
                </Button>
              </div>
              <div>
                <img src={tourData.image} alt="" />
              </div>
              {prev && (
                <div className="m-4 w-[250px] absolute ml-[70%] mt-[-30%] bg-amber-50 p-3 rounded-xl border-1 border-gray-300  overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  {" "}
                  <div>
                    <span className="bg-amber-700 absolute mt-4 rounded-r-2xl text-white font-bold px-2 py-1 ">
                      {tourData.destination}
                    </span>

                    <img src={Ladakh} className="mb-3" alt="" />
                  </div>
                  <span className="font-bold text-gray-600 ">
                    {tourData.name}
                  </span>
                  <div className="text-[12px]">{tourData.description}</div>
                  <div className="flex justify-between">
                    <span className="flex gap-2">
                      <MdOutlinePeopleOutline size={20} className="mt-1" />
                      {tourData.members}
                    </span>
                    <span className="text-[12px] mt-1 opacity-50">
                      {tourData.startDate} -- {tourData.endDate}
                    </span>
                  </div>
                  <div className="flex  justify-between ">
                    <div className="flex gap-2">
                      <Button className="bg-amber-500 px-5 py-1 rounded-full text-white mt-2">
                        View Details
                      </Button>
                    </div>
                    <span className="text-amber-600 mt-2 ">
                      {tourData.price} /-
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="w-1/2 mb-10  mt-22">
          <img src={CreateBg} alt="" className="w-[70%] flex justify-center" />
        </div>
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default CreateTrip;
