import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateBg from "../assets/CreateBg.jpg";
import { MdOutlinePeopleOutline } from "react-icons/md";
import Ladakh from "../assets/Ladakh.avif";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addTour } from "../redux/tourSlice";

const CreateTrip = () => {
  const [tourData, setTourData] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    members: "",
    price: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addTour(tourData)).unwrap();
      toast.success("Trip created Successfully");
      navigate("/");
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-gray-300 h-20 z-50 shadow">
        <Header />
      </div>

      {/* Content */}
      <div className="pt-24 px-4 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-10 min-h-screen">

        {/* LEFT FORM */}
        <div className="w-full lg:w-1/2 bg-white border border-amber-400 rounded-xl shadow-lg p-6">

          <h1
            style={{ fontFamily: "cursive" }}
            className="text-2xl font-bold mb-6"
          >
            Let's Create a Tour
          </h1>

          <form onSubmit={handleSubmit}>
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-semibold">Tour Name</label>
                <Input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="font-semibold">Destination</label>
                <Input
                  type="text"
                  name="destination"
                  required
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-semibold">Start Date</label>
                <Input
                  type="date"
                  min={today}
                  name="startDate"
                  required
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="font-semibold">End Date</label>
                <Input
                  type="date"
                  min={tourData.startDate || today}
                  name="endDate"
                  required
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="font-semibold">Tour Description</label>
              <Input.TextArea
                name="description"
                rows={3}
                minLength={150}
                maxLength={380}
                required
                placeholder="Write at least 3 lines about the tour..."
                className="mt-1"
                onChange={handleChange}
              />
            </div>

            {/* Members & Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-semibold">Total Members</label>
                <Input
                  type="number"
                  name="members"
                  required
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <label className="font-semibold">Total Price</label>
                <Input
                  type="number"
                  name="price"
                  required
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-3">
              <button
                type="reset"
                className="border border-amber-500 px-4 py-1 rounded-full text-amber-600 hover:bg-amber-50"
              >
                Clear All
              </button>

              <Button
                htmlType="submit"
                className="bg-amber-500 text-white px-6 py-1 rounded-full hover:bg-orange-500"
              >
                Create
              </Button>
            </div>
          </form>

          {/* LIVE PREVIEW */}
          <div className="mt-10 hidden md:block">
            <h2 className="font-semibold mb-3">Preview</h2>

            <div className="bg-white border shadow-lg p-3 rounded-xl w-full max-w-[280px]">
              <div className="relative">
                <span className="absolute top-2 left-0 bg-amber-700 text-white px-2 py-1 rounded-r-xl text-sm">
                  {tourData.destination || "Destination"}
                </span>
                <img src={Ladakh} className="rounded-xl mb-3" alt="" />
              </div>

              <div className="font-bold text-gray-700">
                {tourData.name || "Tour Name"}
              </div>

              <p className="text-sm line-clamp-3">
                {tourData.description || "Trip description will appear here."}
              </p>

              <div className="flex justify-between mt-2 text-sm">
                <span className="flex items-center gap-1">
                  <MdOutlinePeopleOutline size={18} /> {tourData.members || 0}
                </span>
                <span className="opacity-60">
                  {tourData.startDate || "--"} - {tourData.endDate || "--"}
                </span>
              </div>

              <div className="flex justify-between mt-2 items-center">
                <span className="text-amber-600 font-bold">
                  ₹{tourData.price || 0}
                </span>

                <Button className="bg-amber-500 text-white rounded-full">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={CreateBg}
            alt="create"
            className="w-full max-w-[450px] rounded-xl shadow-lg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateTrip;
