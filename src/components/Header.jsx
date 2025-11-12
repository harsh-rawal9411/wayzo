import React, { useState, useEffect } from "react";
import Login from "./Login";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";
import { MdAccountCircle } from "react-icons/md";


const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const [showLogin, setShowlogin] = useState(false);
  const locaion = useLocation();

  const handleForm = () => {
    setShowlogin(true);
  };

  const closeForm = () => {
    setShowlogin(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 470) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        isScroll ? "bg-gray-300  shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="m-5  mx-15">
        <nav className="flex justify-between">
          {/* <WayzoLogo/> */}
          <div className="flex gap-20">
            <span
              className="text-4xl font-bold text-orange-500"
              style={{ fontFamily: "cursive" }}
            >
              Wayzo
            </span>
            <ul className="flex gap-8  items-center text-lg">
              <li
                onClick={() => navigate("/")}
                className="hover:text-amber-500 hover:cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => navigate("/createtrip")}
                className="hover:text-amber-500 hover:cursor-pointer"
              >
                Create Trip
              </li>
              <li
                onClick={() => navigate("/contactus")}
                className="hover:text-amber-500 hover:cursor-pointer"
              >
                Contact Us
              </li>
              <li
                onClick={() => navigate("/aboutus")}
                className="hover:text-amber-500 hover:cursor-pointer"
              >
                About us
              </li>
            </ul>
          </div>
          {locaion.pathname !== "/profile" ? ( <span className="flex gap-5 items-center ">
            <Button onClick={() => navigate("/alltrips")}>View Trips</Button><MdAccountCircle onClick={() => navigate('/profile')} size={35} className="text-orange-500"/>
          </span>):(<Button>Logout</Button>)}
         
        </nav>
      </div>
    </div>
  );
};

export default Header;
