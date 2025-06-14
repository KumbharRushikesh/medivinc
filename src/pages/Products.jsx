import React, { useEffect, useState } from "react";
import banneImg from "../Images/productbaner.png";
import SectionWrapper from "../components/SectionWrapper";
import gynacImg from "../Images/gynac.jpg";
import pediatricsImg from "../Images/pediatrics.jpg";
import orthoImg from "../Images/ortho.jpg";
import InjectableImg from "../Images/Injectable.jpg";
import GeneralImg from "../Images/genral.jpg";
import { useLocation } from "react-router-dom";


const Products = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [productData, setProductData] = useState({});
  const [visibleTables, setVisibleTables] = useState({});
  const [searchQueries, setSearchQueries] = useState({});
  const [currentPages, setCurrentPages] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const itemsPerPage = 5;

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        const visibility = {}, search = {}, pages = {};
        Object.keys(data).forEach((key) => {
          visibility[key] = false;
          search[key] = "";
          pages[key] = 1;
        });
        setVisibleTables(visibility);
        setSearchQueries(search);
        setCurrentPages(pages);
      });
  }, []);

  const toggleTable = (key) => {
    setVisibleTables((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSearch = (key, value) => {
    setSearchQueries((prev) => ({ ...prev, [key]: value }));
    setCurrentPages((prev) => ({ ...prev, [key]: 1 }));
  };

  const handlePageChange = (key, page) => {
    setCurrentPages((prev) => ({ ...prev, [key]: page }));
  };

  const renderTable = (key) => {
    const data = productData[key] || [];
    const search = searchQueries[key] || "";
    const page = currentPages[key] || 1;

    const filtered = data.filter((item) =>
      item.brand.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const paginated = filtered.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );

    return (
      <div className="mt-4">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(key, e.target.value)}
          placeholder="Search by brand"
          className="mb-2 p-2 w-full border border-gray-300 rounded"
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-cyan-600 text-white">
              <tr>
                <th className="border border-gray-300 p-2 text-white">#</th>
                <th className="border border-gray-300 p-2 text-white">Brand Name</th>
                <th className="border border-gray-300 p-2 text-white">Description</th>
                <th className="border border-gray-300 p-2 text-white">Division</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">
                    {(page - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="border border-gray-300 p-2">{item.brand}</td>
                  <td className="border border-gray-300 p-2">{item.description}</td>
                  <td className="border border-gray-300 p-2">{item.division}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-2 flex flex-wrap justify-center">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(key, idx + 1)}
              className={`px-3 py-1 m-1 bg-cyan-600 rounded text-white`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const sections = [
    {
      key: "section1",
      title: "Gynac Range",
      info:
        "Improving lives is at the heart of MediVinc's mission. Access to gynecologists can be challenging for women in many rural areas. Governments and NGOs need to increase the availability of gynecologists and organize health camps to each these women." +
        " In essence, gynecologists empower women by providing health information, enabling them to make informed decisions, and offering essential medical services. This strengthens their physical and mental health, which is a crucial component of women's empowerment.",
      image: `${gynacImg}`,
      bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: true,
    },
    {
      key: "section2",
      title: "Pediatrics Range",
      info: "MediVinc strives to make a positive impact on people's lives. Pediatrics is about so much more than just diagnosing and treating illnesses. It's about investing in the future, building strong foundations for lifelong health and happiness. The first years of life are crucial, and we have a responsibility to ensure that children receive the best possible  are. From healthy growth and development to preventative measures and early intervention, our goal is to empower families and equip them with the knowledge and resources they need to thrive. Let's work together to create a healthier world for our children.",
      image: `${pediatricsImg}`,
      bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: false,
    },
    {
      key: "section3",
      title: "Ortho Range",
      info: "MediVinc is passionate about transforming lives for the better. MediVinc's Ortho role in bone health and fracture healing MediVinc Product's contributes to bone health, helps reduce pain caused by fractures, and aids in the healing process",
      image: `${orthoImg}`,
      bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: true,
    },
    {
      key: "section4",
      title: "Injectable Range",
      info: "MediVinc's purpose is to advance health and wellness for all. Inject able medicines are used for various reasons, including quick absorption into the bloodstream, when oral medication is not feasible, or for targeted delivery to specific areas of the body. Benefits include rapid effects, delivery of large doses, and avoiding the first-pass metabolism that can occur with oral medications.",
      image: `${InjectableImg}`,
      bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: false,
    },
    {
      key: "section5",
      title: "General Range",
      info: "MediVinc is dedicated to enhancing human well-being. General medicine offers numerous benefits, including preventing diseases, treating illnesses, managing chronic conditions, and improving overall health and well-being. It also plays a crucial role in early detection of diseases and providing preventive care, which can lead to a longer and healthier life",
      image: `${GeneralImg}`,
      bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: true,
    },
  ];

  return (
    <SectionWrapper title="Our Products">
      <div
        className="relative w-full h-[300px] sm:h-[500px] bg-cover bg-center flex items-end px-6 pb-6"
        style={{ backgroundImage: `url(${banneImg})` }}
      >
        <div className="bg-white bg-opacity-90 px-4 sm:px-8 py-4 rounded-md max-w-full sm:max-w-[90%]">
          <h1 className="text-3xl sm:text-5xl font-bold uppercase text-orange-600">
            Key Products
          </h1>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-10">
        {sections.map(({ key, title, info, image, bg, btn, imageLeft }) => (
          <div
            key={key}
            id={key}
            className={`scroll-mt-28 border p-4 rounded shadow-md w-full md:w-[90%] md:mx-auto ${bg}`}
          >

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              {imageLeft ? (
                <>
                  <div className="w-full md:w-1/3">
                    <img
                      src={image}
                      alt={title}
                      className="rounded object-cover w-full h-48 md:h-56"
                    />
                  </div>
                  <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
                    <p className="text-sm sm:text-base mb-4">{info}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
                    <p className="text-sm sm:text-base mb-4">{info}</p>
                  </div>
                  <div className="w-full md:w-1/3">
                    <img
                      src={image}
                      alt={title}
                      className="rounded object-cover w-full h-48 md:h-56"
                    />
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => toggleTable(key)}
              className={`mt-6 w-full py-2 px-4 rounded hover:opacity-90 transition-colors duration-300 ${visibleTables[key] ? 'bg-cyan-600 text-white' : btn
                }`}
            >
              {visibleTables[key] ? '- Product List' : '+ Product List'}
            </button>

            {visibleTables[key] && renderTable(key)}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Products;
