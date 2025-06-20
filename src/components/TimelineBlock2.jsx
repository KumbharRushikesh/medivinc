import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Pill, Network } from 'lucide-react';

const iconMap = { Stethoscope, Pill, Network };

const TimelineBlock2 = ({ year, iconKey, title, description, side }) => {
  const iconMap = { Stethoscope, Pill, Network };
  const Icon = iconMap[iconKey] || Stethoscope;

  return (
    <motion.div
      className="relative w-full flex flex-col md:flex-row"
      initial={{ opacity: 0, x: side === 'left' ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* LEFT SIDE BLOCK */}
      <div className={`hidden md:block w-1/2 ${side === 'left' ? "text-right pr-6" : "invisible"}`}>
        {side === 'left' && (
          <div>
            <h4 className="text-xl font-bold text-cyan-800">{year}: {title}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
        )}
      </div>

      {/* TIMELINE DOT + ICON */}
      <div className="relative w-full md:w-auto flex justify-center items-center my-6">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />
        <Icon className="z-10 text-cyan-600 w-8 h-8 bg-white rounded-full p-1 border-2 border-cyan-500 shadow-md" />
      </div>

      {/* RIGHT SIDE BLOCK */}
      <div className={`w-full md:w-1/2 ${side === 'right' ? "pl-6" : "invisible"}`}>
        {side === 'right' && (
          <div>
            <h4 className="text-xl font-bold text-cyan-800">{year}: {title}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};


export default TimelineBlock2;
