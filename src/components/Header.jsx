import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";
import { MdAccountCircle } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScroll ? "bg-gray-300 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="px-4 md:px-10 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <span
            className="text-3xl md:text-4xl font-bold text-orange-500"
            style={{ fontFamily: "cursive" }}
          >
            Wayzo
          </span>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 items-center text-lg">
            <li
              onClick={() => navigate("/")}
              className="hover:text-amber-500 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/createtrip")}
              className="hover:text-amber-500 cursor-pointer"
            >
              Create Trip
            </li>
            <li
              onClick={() => navigate("/contactus")}
              className="hover:text-amber-500 cursor-pointer"
            >
              Contact Us
            </li>
            <li
              onClick={() => navigate("/aboutus")}
              className="hover:text-amber-500 cursor-pointer"
            >
              About Us
            </li>
          </ul>

          {/* Desktop Buttons */}
          {location.pathname !== "/profile" ? (
            <span className="hidden md:flex gap-5 items-center">
              <Button onClick={() => navigate("/alltrips")}>View Trips</Button>
              <MdAccountCircle
                size={35}
                className="text-orange-500 cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            </span>
          ) : (
            <Button className="hidden md:flex">Logout</Button>
          )}

          {/* Mobile Hamburger */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 mt-3" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 bg-white/70 backdrop-blur-md rounded-lg p-4 text-lg shadow-lg">
            <li
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="hover:text-amber-500 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/createtrip");
                setMenuOpen(false);
              }}
              className="hover:text-amber-500 cursor-pointer"
            >
              Create Trip
            </li>
            <li
              onClick={() => {
                navigate("/contactus");
                setMenuOpen(false);
              }}
              className="hover:text-amber-500 cursor-pointer"
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                navigate("/aboutus");
                setMenuOpen(false);
              }}
              className="hover:text-amber-500 cursor-pointer"
            >
              About Us
            </li>

            {/* Mobile Buttons */}
            {location.pathname !== "/profile" ? (
              <>
                <Button
                  className="w-full"
                  onClick={() => {
                    navigate("/alltrips");
                    setMenuOpen(false);
                  }}
                >
                  View Trips
                </Button>
                <div className="flex justify-center">
                  <MdAccountCircle
                    size={35}
                    className="text-orange-500 cursor-pointer"
                    onClick={() => {
                      navigate("/profile");
                      setMenuOpen(false);
                    }}
                  />
                </div>
              </>
            ) : (
              <Button
                className="w-full"
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                Logout
              </Button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
