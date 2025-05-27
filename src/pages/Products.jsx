import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import banneImg from "../Images/productbaner.png"
import SectionWrapper from "../components/SectionWrapper";
const ProductCard = ({ name }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.97 }} 
    className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
  >
    <h3 className="text-lg font-semibold text-blue-900">{name}</h3>
  </motion.div>
);

const Products = () => {
  const [search, setSearch] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState("");
  const [products, setProducts] = useState(["Paracetamol", "Ibuprofen", "Amoxicillin", "Cough Syrup"]);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  const filteredProducts = products
    .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
    .sort();

  const handleAddProduct = () => {
    if (newProduct.trim()) {
      setProducts([...products, newProduct.trim()]);
      setNewProduct("");
      setShowModal(false);
    }
  };

  return (
    <SectionWrapper title="Our Products">
      <div
      className="relative w-full h-[800px] bg-cover bg-center flex items-end px-6 pb-6"
      style={{
        backgroundImage: `url(${banneImg})`
      }}
    >
      <div className="bg-white bg-opacity-90 px-8 py-4 rounded-md max-w-[90%]">
        <h1 className="text-4xl sm:text-5xl font-bold uppercase text-orange-600">
          Key Therapies
        </h1>
      </div>
    </div>

      <div className="mb-6">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full shadow-sm"
        />
      </div>

      {isAdmin && (
        <div className="mb-6 text-right">
          <button
            className="bg-green-700 text-white hover:bg-green-800 transition px-4 py-2 rounded-md"
            onClick={() => setShowModal(true)}
          >
            + Add Product
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Add New Product</h3>
            <input
              placeholder="Product Name"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
              className="mb-4 border border-gray-300 px-4 py-2 rounded-md w-full"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} name={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Products;
