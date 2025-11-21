import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white">
      <div
        className="
        container mx-auto 
        px-6 py-12 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-4 
        gap-10
      "
      >
        {/* BRAND */}
        <div className="text-center md:text-left">
          <h1
            style={{ fontFamily: "cursive" }}
            className="text-4xl font-bold text-orange-500"
          >
            Wayzo
          </h1>
          <p className="mt-2 text-gray-300">Explore The World With Us..</p>
        </div>

        {/* MENU 1 */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li
              onClick={() => navigate("/")}
              className="hover:text-amber-500 cursor-pointer"
            >
              Home
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              Destinations
            </li>
            <li
              onClick={() => navigate("/aboutus")}
              className="hover:text-amber-500 cursor-pointer"
            >
              About Us
            </li>
          </ul>
        </div>

        {/* MENU 2 */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg mb-2">Support</h2>
          <ul className="space-y-1">
            <li
              onClick={() => navigate("/contactus")}
              className="hover:text-amber-500 cursor-pointer"
            >
              Contact Us
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-amber-500 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg mb-2">Contact Info</h2>
          <ul className="space-y-1">
            <li>Email: support@wayzo.com</li>
            <li>Phone: +91 12345 67890</li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start mt-4 gap-4">
            <FaFacebookF
              size={20}
              className="hover:text-amber-500 cursor-pointer"
            />
            <FaInstagram
              size={20}
              className="hover:text-amber-500 cursor-pointer"
            />
            <FaYoutube
              size={20}
              className="hover:text-amber-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="text-center py-4 text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} Wayzo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
