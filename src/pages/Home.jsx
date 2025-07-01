import SectionWrapper from "../components/SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import LazyBackground from "../components/LazyBackground";
import banner1 from "../Images/medical1.webp";
import banner2 from "../Images/medicines.webp";
import banner3 from "../Images/medical.webp";
import purpose from "../Images/purpose1.webp";


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

  const boardMembers = [
    {
      name: "Dr. Anjali Mehra",
      designation: "Chief Medical Officer",
      contact: "+91-9876543210",
      image: '../Images/dummy_profile_img.png',
    },
    {
      name: "Mr. Rajiv Sharma",
      designation: "Managing Director",
      contact: "+91-9988776655",
      image: "../Images/dummy_profile_img.png",
    },
    {
      name: "Ms. Neha Kapoor",
      designation: "Head of Operations",
      contact: "+91-9123456780",
      image: "../Images/dummy_profile_img.png",
    },
    {
      name: "Dr. Arvind Rao",
      designation: "Medical Advisor",
      contact: "+91-9011223344",
      image: "../Images/dummy_profile_img.png",
    },
  ];


  const brands = [
    "Medfol Tb",
    "Argiplus Schate",
    "Dydrovinc 10 TB",
    "Levocool - M Tb",
    "Kinclav 625 Tb",
    "Med m fort",
    "Med f fort"
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

<meta property="og:title" content="Quality Healthcare Solutions in India" />
  <meta
    property="og:description"
    content="Explore MediVinc's focus on gynecology, pediatrics, orthopedics, injectables, and general health products. Affordable, reliable healthcare from a trusted Indian pharmaceutical company."
  />
  <meta property="og:url" content="https://www.medivinc.com/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content={banner1}
  />
       <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MediVinc Healthcare Private Limited",
        "url": "https://www.medivinc.com",
        "logo": "https://medivinc.com/logo512.png",
        "description": "MediVinc Healthcare, founded in 1999, specializes in women's healthcare, metabolic disorders, and pain management.",
        "sameAs": [
          "https://www.facebook.com/medivinc",
          "https://www.linkedin.com/company/medivinc",
          "https://www.instagram.com/medivinc"
        ]
      }
    `}
        </script>
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
            <LazyBackground src={banner1}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold mb-2">Who We Are</h3>
                <p className="max-w-xl text-center">
                  We are MediVinc Healthcare Improving health, enriching lives: Our mission, our passion.
                </p>
              </div>
            </LazyBackground>
          </SwiperSlide>

          <SwiperSlide>
            <LazyBackground src={banner2}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="max-w-xl text-center">
                  To bridge the gap by identifying and addressing unmet consumer needs and thus creating value for all stakeholders.
                </p>
              </div>
            </LazyBackground>
          </SwiperSlide>

          <SwiperSlide>
             <LazyBackground src={banner3}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold mb-2">Why Choose Us</h3>
                <p className="max-w-xl text-center">
                  Trust our expertise for innovative healthcare solutions, backed by top-notch products that prioritize patient care and wellbeing. Our commitment to quality and excellence sets us apart.
                </p>
              </div>
            </LazyBackground>
          </SwiperSlide>
        </Swiper>

        <div className="mt-10 relative w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src={purpose}
            alt="Our Purpose"
            loading="lazy"
            className="w-full h-80 md:h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Purpose</h2>
            <p className="max-w-2xl text-base md:text-lg mb-6">
              Our purpose is to provide world-class healthcare that is accessible, affordable, and compassionate. Empowering individuals, families, and communities to thrive. With a commitment to excellence, integrity, and care.
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

        <div className="px-4 py-10 bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Our Focus Areas</h2>
          <p className="mb-6 text-gray-700 text-base">
            Established presence in key medical specialties
          </p>

          <div className="grid grid-cols-2 place-items-center sm:flex sm:flex-row sm:justify-center sm:gap-8 gap-6 mb-5">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`
          w-28 h-28 sm:w-40 sm:h-40
          ${index === 4 ? 'col-start-1 col-end-3 justify-self-center' : ''}
          rounded-full bg-gradient-to-tr from-[#D5EEF4] to-[#B8DBE5]
          text-gray-800 shadow-md hover:shadow-xl transition-all duration-300
          cursor-pointer flex flex-col items-center justify-center
          relative overflow-hidden
        `}
                onClick={() => navigate(`/products#${area.sectionId}`)}
              >
                <motion.div className="text-2xl sm:text-4xl mb-1 sm:mb-2">
                  {area.emoji}
                </motion.div>
                <h3 className="text-xs sm:text-sm px-2 sm:px-4 leading-tight text-center font-semibold">
                  {area.title}
                </h3>
                <div className="absolute bottom-0 w-full h-2 bg-white/30 rounded-b-full blur-sm" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden bg-cover bg-center bg-no-repeat py-8 px-6 md:px-20 rounded-xl bg-gradient-to-r from-blue-50 to-blue-50">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Board of Directors
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="px-3 py-4 sm:px-5 sm:py-6 text-center">
                  <h3 className="text-base sm:text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-600 font-medium mt-1">
                    {member.designation}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2 break-words">
                    {member.contact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="px-4 py-16 bg-gradient-to-br from-blue-100 via-white to-blue-100 rounded-xl text-center overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-blue-900 drop-shadow-lg">🌟 Our Leading Brands</h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-slide space-x-4 px-2 sm:px-4">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="bg-white shadow-xl border border-blue-100 hover:border-blue-300 rounded-xl px-6 py-4 min-w-[180px] sm:min-w-[200px] hover:scale-105 transition-all duration-300 hover:shadow-blue-200"
                >
                  <p className="text-blue-800 font-semibold text-sm sm:text-base tracking-wide">{brand}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inline animation keyframes */}
          <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
        </div>



      </SectionWrapper>

    </>


  );

};

export default Home;

