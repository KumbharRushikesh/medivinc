import React, { useEffect, useState } from "react";
import SectionWrapper from "../components/SectionWrapper";


const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    brand: "",
    description: "",
    division: "",
  });
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const combined = Object.values(data).flat(); // merge all sections
        setProducts(combined);
      })
      .catch((error) => console.error("Failed to load product data", error));

    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
  }, []);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aVal = a[sortConfig.key]?.toLowerCase() || "";
    const bVal = b[sortConfig.key]?.toLowerCase() || "";

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const filtered = sortedProducts.filter((item) =>
    item.brand.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleAddProduct = () => {
    if (
      newProduct.brand &&
      newProduct.description &&
      newProduct.division
    ) {
      setProducts((prev) => [newProduct, ...prev]);
      setIsModalOpen(false);
      setNewProduct({ brand: "", description: "", division: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <SectionWrapper title="Products">

   
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
    
      {/* Search and Rows per page */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search by brand"
          className="p-2 w-full sm:w-64 border border-gray-300 rounded"
        />

        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-700 mr-2">
            Rows per page:
          </label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="p-2 border border-gray-300 rounded"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      {/* Admin Add Button */}
      {isAdmin && (
        <div className="mb-4">
          <button
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            + Add New Product
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-cyan-600 text-white">
            <tr>
              <th className="border border-gray-300 p-2">#</th>
              <th
                className="cursor-pointer border border-gray-300 p-2"
                onClick={() => handleSort("brand")}
              >
                Brand Name{" "}
                {sortConfig.key === "brand"
                  ? sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th
                className="cursor-pointer border border-gray-300 p-2"
                onClick={() => handleSort("description")}
              >
                Description{" "}
                {sortConfig.key === "description"
                  ? sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th
                className="cursor-pointer border border-gray-300 p-2"
                onClick={() => handleSort("division")}
              >
                Division{" "}
                {sortConfig.key === "division"
                  ? sortConfig.direction === "asc"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((item, index) => (
              <tr
                key={index}
                className="even:bg-gray-100 odd:bg-white"
              >
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

      {/* Pagination */}
      <div className="text-center mt-4 flex flex-wrap justify-center">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            className={`px-3 py-1 m-1 rounded text-white ${
              page === idx + 1 ? "bg-cyan-800" : "bg-cyan-600"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add New Product</h2>

            <input
              type="text"
              placeholder="Brand Name"
              value={newProduct.brand}
              onChange={(e) =>
                setNewProduct({ ...newProduct, brand: e.target.value })
              }
              className="mb-3 w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className="mb-3 w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Division"
              value={newProduct.division}
              onChange={(e) =>
                setNewProduct({ ...newProduct, division: e.target.value })
              }
              className="mb-3 w-full border px-3 py-2 rounded"
            />

            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleAddProduct}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
     </SectionWrapper>
  );
};

export default AllProducts;