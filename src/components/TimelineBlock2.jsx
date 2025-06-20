import React from "react";
import { motion } from "framer-motion";
import { Pill, Stethoscope, Network } from "lucide-react";

const iconMap = {
  Pill: <Pill className="text-cyan-600 w-6 h-6" />,
  Stethoscope: <Stethoscope className="text-cyan-600 w-6 h-6" />,
  Network: <Network className="text-cyan-600 w-6 h-6" />,
};

const TimelineBlock2 = ({ year, iconKey, title, description, side }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      className="relative w-full flex flex-col md:flex-row items-center my-8"
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Content for Desktop */}
      <div className={`hidden md:block w-1/2 px-4 ${isLeft ? "text-right" : "invisible"}`}>
        {isLeft && (
          <div className="bg-white p-4 border border-cyan-200 rounded-lg shadow-md inline-block">
            <h4 className="text-xl font-bold text-cyan-800">{year}: {title}</h4>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        )}
      </div>

      {/* Center Icon/Dot */}
      <div className="relative flex justify-center items-center md:w-0 w-full my-4 md:my-0">
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />
        <div className="z-10 w-12 h-12 rounded-full bg-white border-4 border-cyan-500 flex items-center justify-center shadow-md">
          {iconMap[iconKey] || <Pill />}
        </div>
      </div>

      {/* Right Content for Desktop */}
      <div className={`hidden md:block w-1/2 px-4 ${!isLeft ? "text-left" : "invisible"}`}>
        {!isLeft && (
          <div className="bg-white p-4 border border-cyan-200 rounded-lg shadow-md inline-block">
            <h4 className="text-xl font-bold text-cyan-800">{year}: {title}</h4>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        )}
      </div>

      {/* Full-width content for Mobile only */}
      <div className="md:hidden w-full px-4 mt-4">
        <div className="bg-white p-4 border border-cyan-200 rounded-lg shadow-md text-center">
          <h4 className="text-xl font-bold text-cyan-800">{year}: {title}</h4>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineBlock2;
