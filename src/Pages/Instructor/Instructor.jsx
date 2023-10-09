import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Fade } from "react-reveal";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:5000/instructors-all")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter((item) => item.role === "instructor");
        setInstructors(remaining);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInstructors = instructors.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(instructors.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full p-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentInstructors.map((item, index) => (
            <Fade key={item._id} delay={index * 100}>
            <div className="bg-slate-50 rounded border p-6 flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-900">
                <img
                  src={item.image}
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm">
                <FaEnvelope className="inline-block mr-2 text-gray-900" />
                {item.email}
              </p>
            </div>
          </Fade>
          ))}
        </div>
        <div className="flex justify-center gap-1 mt-6">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-4 py-1 rounded cursor-pointer ${
                currentPage === pageNumber ? "bg-gray-900 text-white" : "bg-gray-200 hover:bg-gray-300"
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

export default Instructor;
