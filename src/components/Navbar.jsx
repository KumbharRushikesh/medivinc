import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg p-5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50">
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="text-3xl font-bold text-blue-900 font-serif">MediVinc</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`md:flex ${menuOpen ? "block" : "hidden"} flex-col md:flex-row gap-6 mt-4 md:mt-0 text-base font-medium text-gray-700`}>
        <Link className="hover:text-blue-800" to="/">Home</Link>
        <Link className="hover:text-blue-800" to="/about">About Us</Link>
        <Link className="hover:text-blue-800" to="/vision">Vision & Mission</Link>
        <Link className="hover:text-blue-800" to="/social">Social Activities</Link>
        <Link className="hover:text-blue-800" to="/products">Products</Link>
        <Link className="hover:text-blue-800" to="/quality">Quality</Link>
        {isAdmin ? (
          <button onClick={handleLogout} className="hover:text-red-600">Logout</button>
        ) : (
          <Link className="hover:text-blue-800" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
