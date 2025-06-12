import React from "react";
import { motion } from "framer-motion";


const SectionWrapper = ({ title, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6 }} 
    className="max-w-10xl mx-auto px-6 py-8 bg-white rounded-2xl shadow-lg my-6 min-h-[55vh]"
  >
    {title !== "Our Products" && (
        <h2 className="text-5xl font-extrabold text-blue-900 mb-10 border-l-8 border-blue-600 pl-4 font-serif">
          {title}
        </h2>
      )}
    <div className="text-gray-800 leading-relaxed text-lg space-y-6 font-light">{children}</div>
  </motion.div>
);

export default SectionWrapper;
