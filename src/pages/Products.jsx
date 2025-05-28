import React, { useEffect, useState } from "react";
import banneImg from "../Images/productbaner.png";
import SectionWrapper from "../components/SectionWrapper";

const Products = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [productData, setProductData] = useState({});
  const [visibleTables, setVisibleTables] = useState({});
  const [searchQueries, setSearchQueries] = useState({});
  const [currentPages, setCurrentPages] = useState({});

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
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Brand Name</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Division</th>
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

        <div className="text-center mt-2">
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(key, idx + 1)}
              className={`px-3 py-1 m-1 rounded "bg-red-200"`}
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
      title: "Women's Health",
      info: "Focused on gynecological and hormonal therapies for women's well-being.",
      image: "/Images/section1.jpg",
      bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: true,
    },
    {
      key: "section2",
      title: "Pain Management",
      info: "Therapies for joint pain, muscular discomfort, and neuropathy relief.",
      image: "/Images/section2.jpg",
       bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: false,
    },
    {
      key: "section3",
      title: "Metabolic Disorders",
      info: "Treatments related to diabetes, thyroid, and other metabolic syndromes.",
      image: "/Images/section3.jpg",
      bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: true,
    },
    {
      key: "section4",
      title: "Gastro Care",
      info: "Products for gut health, acidity, and digestion-related issues.",
      image: "/Images/section4.jpg",
       bg: "bg-blue-100",
      btn: "bg-[#374151] text-white",
      imageLeft: false,
    },
  ];

  return (
    <SectionWrapper title="Our Products">
      <div
        className="relative w-full h-[800px] bg-cover bg-center flex items-end px-6 pb-6"
        style={{
          backgroundImage: `url(${banneImg})`,
        }}
      >
        <div className="bg-white bg-opacity-90 px-8 py-4 rounded-md max-w-[90%]">
          <h1 className="text-4xl sm:text-5xl font-bold uppercase text-orange-600">
            Key Therapies
          </h1>
        </div>
      </div>

      <div className="p-6 space-y-10">
        {sections.map(({ key, title, info, image, bg, btn, imageLeft }) => (
          <div key={key} className={`border p-4 rounded shadow-md ${bg}`}>
            {/* Flex row with image and info */}
            <div className="flex flex-col md:flex-row items-center">
              {imageLeft ? (
                <>
                  <div className="flex-shrink-0 md:w-[35%] max-w-xs w-full">
                    <img
                      src={image}
                      alt={title}
                      className="rounded object-cover w-full h-48 md:h-56"
                    />
                  </div>
                  <div className="md:ml-6 w-full md:w-[65%] text-left mt-4 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <p className="mb-4">{info}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:mr-6 w-full md:w-[65%] text-left order-2 md:order-1">
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <p className="mb-4">{info}</p>
                  </div>
                  <div className="flex-shrink-0 md:w-[35%] max-w-xs w-full order-1 md:order-2">
                    <img
                      src={image}
                      alt={title}
                      className="rounded object-cover w-full h-48 md:h-56"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Full width button */}
            <button
              onClick={() => toggleTable(key)}
              className={`mt-6 w-full py-2 px-4 rounded hover:opacity-90 ${btn}`}
            >
              + Product List
            </button>

            {/* Full width table */}
            {visibleTables[key] && renderTable(key)}
          </div>
        ))}

      </div>
    </SectionWrapper>
  );
};

export default Products;
