import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Eye, Target, Stethoscope, Pill, Network } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SectionWrapper from "../components/SectionWrapper";

const TimelineBlock = ({ year, icon, description, isUp }) => {
  return (
    <motion.div
      className={`flex flex-col items-center mx-4 ${isUp ? "mt-0" : "mt-16"}`}
      initial={{ opacity: 0, y: isUp ? -50 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative">
        <div className="w-24 h-24 bg-white border-4 border-cyan-600 rotate-45 flex items-center justify-center shadow-lg">
          <div className="-rotate-45 text-center">
            <div className="text-lg font-bold">{year}</div>
            <div className="text-xl">{icon}</div>
          </div>
        </div>
        <div className="mt-4 w-36 text-center">
          <div className="font-semibold mb-1">Text Here</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </motion.div>
  );
};

const StatsBlock = ({ icon: Icon, number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center space-y-2 text-center"
  >
    <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center">
      <Icon className="w-10 h-10 text-cyan-600" />
    </div>
    <div className="text-xl font-bold text-cyan-700">{number}+</div>
    <div className="text-md font-medium text-gray-700">{label}</div>
  </motion.div>
);


const About = () => {
  const timelineData = [
    { year: "2010", icon: "\u23F0", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2020", icon: "\u{1F464}", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2030", icon: "\u{1F91D}", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2040", icon: "\u2699\uFE0F", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
  ];
  return (
    <SectionWrapper title="About Us">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <div
            className="relative h-80 bg-cover bg-center text-white"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523958203904-cdcb402031fd')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-bold mb-2">Who We Are</h3>
              <p className="max-w-xl text-center">
                A team of expert accountants helping your business grow with precision and integrity.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-80 bg-cover bg-center text-white"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531973968078-9bb02785f13d')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="max-w-xl text-center">
                To simplify finance for our clients by offering clear, honest, and expert solutions.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative h-80 bg-cover bg-center text-white"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c44367f')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-bold mb-2">Why Choose Us</h3>
              <p className="max-w-xl text-center">
                Personalized service, transparent pricing, and expert advice trusted by hundreds.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bg-white rounded-lg shadow-lg p-6 mt-10 flex flex-col md:flex-row items-start gap-6 font-sans">
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/description.jpg"
            alt="Medical professionals"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Medical Company Description on the right */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-4 text-justify">
          <p>
            Welcome to MediVinc Healthcare Private Limited, where our founder's visionary journey began in 1999. Guided by an unwavering commitment to enhancing global health, we pioneer innovative research, manufacture exceptional products, and deliver excellence in marketing, fostering a brighter future for all.
          </p>
          <p>
            As a front-runner in women’s healthcare, metabolic disorder and pain management segment, MEDIVINC is committed to serve ailing communities of Metro, Tier 1 to 5 and Rural areas with deeper market penetration in India.
          </p>
          <p>
            We are also having strong corporate governance, having financial control and compliance.
          </p>
        </div>
      </div>

 
    <div className="bg-black text-white px-6 py-12 md:px-20 flex">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision - Top Left */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-3">
            <Eye className="text-blue-400 w-7 h-7" />
            <h2 className="text-2xl font-bold text-blue-400">Our Vision</h2>
          </div>
          <p className="text-base text-white text-justify leading-relaxed">
            To empower global health by delivering innovative, high-quality, and
            affordable healthcare solutions that improve lives worldwide.
          </p>
        </div>

        {/* Mission - Slightly More Down on Right */}
        <div className="flex flex-col space-y-3 mt-20">
          <div className="flex items-center gap-3">
            <Target className="text-green-400 w-7 h-7" />
            <h2 className="text-2xl font-bold text-green-400">Our Mission</h2>
          </div>
          <p className="text-base text-white text-justify leading-relaxed">
            To address unmet consumer needs in women’s health, metabolic disorders,
            and pain management, creating sustainable value for our stakeholders.
          </p>
        </div>
      </div>
    </div>

   <div className="bg-white rounded-lg shadow-lg p-6 mt-10 gap-6 font-sans">

      <motion.h2 
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="text-3xl font-extrabold text-center mb-6 text-cyan-600"
      >
        Medivinc Journey
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center px-4 gap-10 mb-6">
        {timelineData.map((item, index) => (
          <TimelineBlock key={index} {...item} />
        ))}
      </div>

    </div>

    <div className="mt-10 bg-gradient-to-r from-cyan-100 via-white to-cyan-100 py-16">
        <h2 className="text-center text-3xl font-bold mb-12 text-cyan-800">Medivinc Strength In Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20 text-center">
          <StatsBlock icon={Stethoscope} number="4" label="Divisions" delay={0.2} />
          <StatsBlock icon={Network} number="41" label="Brands" delay={0.4} />
          <StatsBlock icon={Pill} number="45" label="Products" delay={0.6} />
        </div>
    </div>


{/* Our Core Values Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-16 px-6 md:px-20 bg-white text-center"
>
  <h2 className="text-3xl font-bold text-cyan-700 mb-12">Our Core Values</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
    >
      <div className="flex flex-col items-center">
        <div className="text-6xl text-blue-600 mb-4">
          <span className="material-symbols-outlined">shield</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Quality</h3>
        <p className="text-gray-600 text-lg text-center">
          Quality is non-negotiable for us. We consistently strive for and adhere to the most stringent quality standards, setting benchmarks in India's pharmaceutical industry.
        </p>
      </div>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
    >
      <div className="flex flex-col items-center">
        <div className="text-6xl text-green-600 mb-4">
          <span className="material-symbols-outlined">account_balance_wallet</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Affordability</h3>
        <p className="text-gray-600 text-lg text-center">
          At the heart of our mission is a commitment to affordability. We disrupt traditional pricing models to bring healthcare solutions to Bharat, making quality medication accessible to all.
        </p>
      </div>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
    >
      <div className="flex flex-col items-center">
        <div className="text-6xl text-pink-600 mb-4">
          <span className="material-symbols-outlined">volunteer_activism</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Responsibility</h3>
        <p className="text-gray-600 text-lg text-center">
          At MediVinc, our Corporate Social Responsibility initiatives make a meaningful difference in the lives of marginalized and underprivileged communities through health, education, clean water, and sanitation.
        </p>
      </div>
    </motion.div>
  </div>
</motion.div>

    </SectionWrapper>
  );
};



export default About;
