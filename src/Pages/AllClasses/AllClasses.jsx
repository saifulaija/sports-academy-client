import axios from "axios";
import NewClassCard from "./NewClassCard";
import { useEffect, useState } from "react";

const AllClasses = () => {
  const [allClass, setAllClass] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    axios.get("http://localhost:5000/all-classes").then((response) => {
      setAllClass(response.data);
    });
  }, []);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInstructors = allClass.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(allClass.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto p-6">
        <h3 className="heading-st">Total Classes:{allClass.length}</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {currentInstructors.map((item) => (
            <NewClassCard key={item._id} item={item}></NewClassCard>
          ))}
        </div>
        <div className="flex justify-center gap-1 mt-6">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-4 py-1 rounded-md cursor-pointer ${
                currentPage === pageNumber ? "bg-[#008080] text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
