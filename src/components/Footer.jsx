import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../Images/medivincLogo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 mt-20">
      <div className="mx-auto grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <img
          src={logo} // Adjust path based on actual public/static file structure
          alt="MediVinc Logo"
          className="h-12 w-auto" // Adjust height/width as needed
        />
          <p>Empowering global health through quality and affordability.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>📍 KH-4/6/303 Sector 16, Kharghar, New Mumbai, Raigarh, Maharashtra, India</p>
          <p>📱 Mobile: +91 9604450090</p>
          <p>☎️ Office: +91 9604450090</p>
          <p>✉️ Email: medivinchealth@gmail.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/quality" className="hover:underline">Quality</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 mt-6">
        © 2025 MediVinc Healthcare Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
