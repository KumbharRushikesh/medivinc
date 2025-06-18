import SectionWrapper from "../components/SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigate = useNavigate();
  const focusAreas = [
    {
      title: "Gynac Range",
      sectionId: "section1",
      emoji: "👩‍⚕️",
    },
    {
      title: "Pediatrics Range",
      sectionId: "section2",
      emoji: "🧒",
    },
    {
      title: "Ortho Range",
      sectionId: "section3",
      emoji: "🦴",
    },
    {
      title: "Injectable Range",
      sectionId: "section4",
      emoji: "💉",
    },
    {
      title: "General Range",
      sectionId: "section5",
      emoji: "⚕️",
    },
  ];




  return (
    <>
    <Helmet>
      <title>MediVinc | Quality Healthcare Solutions in India</title>
       <meta
          name="description"
          content="Explore MediVinc's focus on gynecology, pediatrics, orthopedics, injectables, and general health products. Affordable, reliable healthcare from a trusted Indian pharmaceutical company."
        />
         <meta
          name="keywords"
          content="MediVinc, Indian pharmaceutical, gynecology medicines, pediatric medicines, orthopedic medicines, healthcare products, affordable healthcare, pharma company India"
        />
         <link rel="canonical" href="https://www.medivinc.com/" />
    </Helmet>
    <SectionWrapper title="Welcome to MediVinc">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="group rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <div
            className="relative h-80 md:h-[30rem] lg:h-[30rem] bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/images/medical1.png')` }}
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
            style={{ backgroundImage: `url('/images/medicines.png')` }}
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
            style={{ backgroundImage: `url('/images/medical.png')` }}
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

      <div className="mt-10 relative w-full rounded-xl overflow-hidden shadow-lg">
        <img
          src="/images/purpose1.png"
          alt="Our Purpose"
          className="w-full h-80 md:h-[30rem] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Purpose</h2>
          <p className="max-w-2xl text-base md:text-lg mb-6">
            Our mission is to improve access to healthcare through innovation, compassion, and expertise. We believe in delivering affordable and quality medical solutions to every individual.
          </p>
          <div className="flex justify-start">
            <button
              onClick={() => navigate("/about")}
              className="w-fit bg-white text-orange-500 font-semibold px-6 py-2 rounded-full shadow hover:bg-orange-100 transition"
            >
              Read More →
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 text-center bg-sky-100 rounded-3xl">
        <h2 className="text-2xl font-bold mb-2">Focus Areas</h2>
        <p className="mb-6 text-gray-700">
          Established presence in key medicine areas
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-40 h-40 rounded-full border border-black flex flex-col items-center justify-center p-2 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/products#${area.sectionId}`)}
            >
              <div className="text-3xl mb-1">{area.emoji}</div>
              <h3 className="font-semibold text-sm text-center px-2">
                {area.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
    
    </>


  );

};

export default Home;

