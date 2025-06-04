import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    window.location.href = "/";
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-lg p-5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50">
      <div className="flex justify-between w-full md:w-auto items-center">
        <h1 className="text-3xl font-bold text-blue-900 font-serif">MediVinc</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-center md:gap-8 px-4 pb-4 md:pb-0 md:px-0 w-full md:w-auto`}
      >
        <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0 text-base font-medium text-gray-700">
          <Link className="hover:text-blue-800" to="/" onClick={closeMobileMenu}>Home</Link>

          {/* About Us with submenu */}
          <div className="relative group">
            <button
              onClick={() => {
                if (window.innerWidth < 768) {
                  setAboutOpen(!aboutOpen);
                }
              }}
              className="hover:text-blue-800 flex items-center focus:outline-none"
            >
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Submenu */}
            <div
              className={`${
                aboutOpen ? "block" : "hidden"
              } md:group-hover:block md:absolute md:top-full md:left-0 bg-white md:min-w-[10rem] rounded-md mt-2 md:mt-0 shadow-md z-40`}
              onClick={closeMobileMenu}
            >
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
              <Link to="/about#aboutcompany" className="block px-4 py-2 hover:bg-gray-100">Company Info</Link>
              <Link to="/about#Vision-Mission" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</Link>
              <Link to="/about#history" className="block px-4 py-2 hover:bg-gray-100">Our History</Link>
              <Link to="/about#Strength" className="block px-4 py-2 hover:bg-gray-100">Our Strength</Link>
              <Link to="/about#Values" className="block px-4 py-2 hover:bg-gray-100">Our Core Values</Link>
            </div>
          </div>

          <Link className="hover:text-blue-800" to="/vision" onClick={closeMobileMenu}>Vision & Mission</Link>
          <Link className="hover:text-blue-800" to="/social" onClick={closeMobileMenu}>Social Activities</Link>
          <Link className="hover:text-blue-800" to="/products" onClick={closeMobileMenu}>Products</Link>
          <Link className="hover:text-blue-800" to="/quality" onClick={closeMobileMenu}>Quality</Link>

          {isAdmin ? (
            <button onClick={handleLogout} className="hover:text-red-600 text-left">Logout</button>
          ) : (
            <Link className="hover:text-blue-800" to="/login" onClick={closeMobileMenu}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
