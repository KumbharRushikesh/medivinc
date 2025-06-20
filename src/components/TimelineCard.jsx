import React from "react";
import { motion } from "framer-motion";
import { Pill, Stethoscope, Network } from "lucide-react";

const iconMap = {
  Pill: Pill,
  Stethoscope: Stethoscope,
  Network: Network,
};

const TimelineCard = ({ data }) => {
  return (
    <div className="relative py-20 px-4 bg-white overflow-x-auto">
      <div className="min-w-[1200px] relative h-72 flex items-center">

        {/* Zigzag connector */}
        <svg className="absolute top-1/2 left-0 w-full h-2 z-0" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="#06b6d4"
            strokeWidth="3"
            points={data
              .map((_, i) => `${(i + 1) * 180},${i % 2 === 0 ? 0 : 80}`)
              .join(" ")}
          />
        </svg>

        {/* Milestones */}
        <div className="flex gap-24 relative z-10 pl-16">
          {data.map((item, index) => {
            const Icon = iconMap[item.iconKey] || Pill;
            const isTop = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isTop ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center w-48 relative ${isTop ? "mb-32" : "mt-32"}`}
              >
                <div className="bg-white border-4 border-cyan-500 w-12 h-12 flex items-center justify-center rounded-full shadow-md mb-2">
                  <Icon className="text-cyan-600 w-6 h-6" />
                </div>
                <div className="font-bold text-cyan-700">{item.year}</div>
                <div className="font-semibold text-gray-800">{item.title}</div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
