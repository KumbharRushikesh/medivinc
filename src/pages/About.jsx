import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Eye, Target, Stethoscope, Pill, Network } from 'lucide-react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionWrapper from "../components/SectionWrapper";
import banner1 from "../Images/Banner1.webp";
import banner2 from "../Images/productbaner.webp";
import banner3 from "../Images/productbaner.webp";

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

const StatsBlock = ({ emoji, number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center space-y-2 text-center"
  >
    <div className="w-20 h-20 rounded-full border-4 border-cyan-600 bg-white flex items-center justify-center text-4xl shadow-lg">
      {emoji}
    </div>
    <div className="text-2xl font-bold text-white">{number}+</div>
    <div className="text-base font-medium text-white">{label}</div>
  </motion.div>
);


const About = () => {
  const timelineData = [
    { year: "2010", icon: "\u23F0", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2020", icon: "\u{1F464}", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2030", icon: "\u{1F91D}", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2040", icon: "\u2699\uFE0F", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2020", icon: "\u{1F464}", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
    { year: "2030", icon: "\u{1F91D}", description: "Adapt it to your needs and capture your audience's attention.", isUp: false },
  ];

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
            className="relative h-80 md:h-[30rem] lg:h-[30rem] bg-cover bg-center text-white"
             style={{ backgroundImage: `url(${banner1})` }}
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
            className="relative h-80 md:h-[30rem] lg:h-[30rem] bg-cover bg-center text-white"
           style={{ backgroundImage: `url(${banner2})` }}
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
            className="relative h-80 md:h-[30rem] lg:h-[30rem] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${banner3})` }}
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
        {/* Medical Company Description on the left */}
        <div className="w-full md:w-1/2 text-gray-800 space-y-4 text-justify">
          <p style={{ textIndent: '30px' }}>
            Welcome to MediVinc Healthcare Private Limited, where our founder's visionary journey began in 1999. Guided by an unwavering commitment
            to enhancing global health, we pioneer innovative research, manufacture exceptional products, and deliver excellence in marketing,
            fostering a brighter future for all. With a patient-centric approach and a passion for improving lives, we strive to set new standards
            in healthcare. Through our dedication to quality, integrity, and sustainability, we aim to make a lasting impact on the world.
            Empowering healthier communities, one innovation at a time.
          </p>
          <p style={{ textIndent: '30px' }}>
            As a front-runner in women's healthcare, metabolic disorder and pain management segment, MEDIVINC is committed to serve ailing communities
            of Metro, Tier 1 to 5 and Rural areas with deeper market penetration in India. We are also having strong corporate governance,
            having financial control and compliance. Our robust infrastructure enables us to reach remote areas, ensuring that our medicines &
            services are accessible to those who need them most. With a patient-centric approach, we strive to improve health outcomes and enhance
            the quality of life. Our dedicated team works tirelessly to develop innovative solutions, foster strategic partnerships, and drive business
            growth. 
          </p>
        </div>

        {/* Image on the right with description below */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
          <img
            src="/images/description.webp"
            alt="Medical professionals"
            className="rounded-lg shadow-md w-full h-[44vh] object-cover"
          />
          <p className="text-gray-700 text-justify" style={{ textIndent: '30px' }} >
             We prioritize transparency, accountability, and ethical practices, maintaining the highest standards of corporate governance.
            Our financial discipline and compliance ensure that we operate with integrity, reliability, and sustainability. By leveraging technology, we optimize our operations, streamline our supply chain, and expand our reach. Through our commitment to social responsibility, we contribute to the betterment of society, promoting healthy communities and empowering individuals. With a strong vision for the future, we continue to innovate, grow, and make a meaningful difference in the lives of millions.
          </p>
        </div>
      </div>




      <div id="Vision-Mission" className="scroll-mt-24 bg-gradient-to-br from-slate-800 to-gray-900 text-white px-6 py-12 md:px-20 rounded-lg shadow-xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision - Left */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col space-y-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex items-center h-full">
                <Eye className="text-cyan-300 w-12 h-12" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold text-cyan-300">Our</span>
                <span className="text-4xl font-extrabold text-cyan-300">Vision</span>
              </div>
            </div>
            {/* Add padding-left equal to icon + gap (e.g. pl-16) */}
            <p className="text-base text-gray-100 text-justify leading-relaxed pl-16">
              Our vision is to empower global health by becoming a leading pharmaceutical company, admired for our commitment to improving lives.
            </p>
          </div>

          {/* Mission - Right */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col space-y-4 shadow-lg mt-10 md:mt-0">
            <div className="flex items-start gap-4">
              <div className="flex items-center h-full">
                <Target className="text-teal-300 w-12 h-12" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold text-teal-300">Our</span>
                <span className="text-4xl font-extrabold text-teal-300">Mission</span>
              </div>
            </div>
            <p className="text-base text-gray-100 text-justify leading-relaxed pl-16">
              To bridge the gap by identifying and addressing unmet consumer needs and thus creating value for all stakeholders.
            </p>
          </div>

        </div>
      </div>


      <div id="history" className="scroll-mt-24 bg-white rounded-lg shadow-lg p-6 mt-10 gap-6 font-sans">

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

     <div
  id="Strength"
  className="scroll-mt-24 mt-16 py-20 bg-gradient-to-r from-gray-900 via-cyan-900 via-cyan-900 to-gray-900 rounded-2xl shadow-lg"
>
  <div className="text-center px-4 md:px-0">
    <h2 className="text-4xl font-extrabold text-white mb-4">
      Medivinc Strength in Numbers
    </h2>
    <p className="text-lg text-cyan-200 mb-12">
      A snapshot of our scale and diversity across operations.
    </p>
  </div>

  {/* First Row: Divisions and Brands */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-32 text-center mb-10">
    <StatsBlock emoji="🏥" number="4" label="Divisions" delay={0.2} />
    <StatsBlock emoji="🌐" number="41" label="Brands" delay={0.4} />
  </div>

  {/* Second Row: Products Centered */}
  <div className="flex justify-center px-10 md:px-32">
    <div className="w-full md:w-1/2 lg:w-1/3">
      <StatsBlock emoji="💊" number="45" label="Products" delay={0.6} />
    </div>
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
        <h2 id="Values" className="text-3xl font-bold text-cyan-700 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="flex flex-col items-center">
              <div className="text-6xl text-blue-600 mb-4">
                <span className="material-symbols-outlined text-[50px]">shield</span>
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
                <span className="material-symbols-outlined text-[50px]">account_balance_wallet</span>
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
                <span className="material-symbols-outlined text-[50px]">volunteer_activism</span>
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