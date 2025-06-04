import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const adminCredentials = {
  email: "admin@medivinc.com",
  password: "admin123"
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      localStorage.setItem("isAdmin", "true");
      navigate("/Allproducts");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="max-w-md mx-auto bg-white p-10 mt-10 rounded-2xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Admin Login</h2>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6 w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-900 text-white hover:bg-blue-800 transition px-4 py-2 rounded-md"
      >
        Login
      </button>
    </motion.div>
  );
};

export default Login;
