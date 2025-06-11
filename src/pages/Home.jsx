import SectionWrapper from "../components/SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



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

        <SwiperSlide>
          <div
            className="relative h-80 md:h-[30rem] lg:h-[30rem] bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/images/medicines1.png')` }}
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

       <div className="px-4 py-16 bg-gradient-to-r from-gray-900 via-cyan-900 via-cyan-900 to-gray-900 rounded-xl text-center">
      <h2 className="text-3xl font-bold mb-3 text-white">Our Focus Areas</h2>
      <p className="mb-10 text-white text-base">
        Established presence in key medical specialties
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {focusAreas.map((area, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="w-40 h-40 rounded-full bg-gradient-to-tr from-sky-300 to-sky-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden"
            onClick={() => navigate(`/products#${area.sectionId}`)}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="text-4xl mb-2"
            >
              {area.emoji}
            </motion.div>
            <h3 className="font-semibold text-sm text-center px-4 leading-tight">
              {area.title}
            </h3>
            <div className="absolute bottom-0 w-full h-2 bg-white/20 rounded-b-full blur-sm" />
          </motion.div>
        ))}
      </div>
    </div>
    </SectionWrapper>


  );

};

export default Home;

