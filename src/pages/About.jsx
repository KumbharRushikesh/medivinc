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
import banner1 from "../Images/new4.webp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TimelineBlock2 from "../components/TimelineBlock2";
import logo from '../Images/medivincLogo.png';
import descpic from '../Images/description.webp';

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
  
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

 const timelineData = [
  { year: "2019", iconKey: "Pill", title: "Founded", description: "Started with a goal to make medicine accessible." },
  { year: "2020", iconKey: "Stethoscope", title: "App Launch", description: "Our first medical tracking app released." },
  { year: "2021", iconKey: "Network", title: "Pharmacy Partners", description: "Over 50+ pharmacy collaborations." },
  { year: "2022", iconKey: "Pill", title: "Expansion", description: "Reached 3 countries across South Asia." },
  { year: "2023", iconKey: "Stethoscope", title: "AI Prescriptions", description: "Launched smart prescription AI." },
  { year: "2024", iconKey: "Network", title: "Top Rated", description: "Awarded Top MedTech Platform in India." },
];


  return (
    <>
      <Helmet>
        <title>About Us - MediVinc Healthcare Pvt Ltd | Women's Health, Metabolic & Pain Care</title>
        <meta name="description" content="Discover MediVinc Healthcare's mission, vision, journey, and values. Since 1999, we have been committed to affordable, quality healthcare for all." />
        <meta name="keywords" content="About MediVinc, Healthcare Company India, Women’s Health, Metabolic Disorder, Pain Management, Pharma Company India, Mission, Vision, Journey, Values" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.medivinc.com/about" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="About Us - MediVinc Healthcare Pvt Ltd" />
        <meta property="og:description" content="Learn about MediVinc's mission to bridge healthcare gaps with innovation and quality in India." />
        <meta property="og:url" content="https://www.medivinc.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.medivinc.com/images/og-banner-about.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - MediVinc Healthcare" />
        <meta name="twitter:description" content="Empowering healthier communities with quality healthcare since 1999." />
        <meta name="twitter:image" content="https://www.medivinc.com/images/og-banner-about.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MediVinc Healthcare Private Limited",
        "url": "https://www.medivinc.com",
        "logo": "https://www.medivinc.com/images/logo.png",
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
      <SectionWrapper title="About Us">
        <div
          className="relative h-80 md:h-[30rem] lg:h-[30rem] bg-cover bg-center rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${banner1})` }} // replace with your banner image path
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-white space-y-4">
            <img
              src={logo}  
              alt="MediVinc Logo"
              className="h-16 md:h-24" 
              loading="lazy"
            />

            {/* Heading */}
            <h3 className="text-3xl font-bold mb-2">MediVinc</h3>

            {/* Subheading Text */}
            <p className="max-w-xl text-center text-lg">
              Transforming Healthcare, Transforming Lives
            </p>
          </div>
        </div>


      
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
              src={descpic}
              alt="Medical professionals"
              className="rounded-lg shadow-md w-full h-[44vh] object-cover"
              loading="lazy"
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


      {/* Timeline / History Section */}
    <div id="history" className="scroll-mt-24 mt-12 relative">
  {/* ✅ Heading stays OUTSIDE the timeline */}
  <h2 className="text-3xl font-extrabold text-center text-cyan-800 mb-12 z-10 relative">
    Our Company Journey
  </h2>

  {/* ✅ Timeline content + vertical line are in here */}
  <div className="relative">
    {/* This is the vertical line — now it only spans the timeline blocks */}
    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2 z-0" />

    {/* Timeline items */}
    {timelineData.map((item, index) => (
      <TimelineBlock2
        key={item.year}
        year={item.year}
        iconKey={item.iconKey}
        title={item.title}
        description={item.description}
        side={index % 2 === 0 ? "left" : "right"}
      />
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
    </>
  );
};



export default About;