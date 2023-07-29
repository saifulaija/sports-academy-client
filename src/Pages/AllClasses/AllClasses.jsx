import axios from "axios";
import NewClassCard from "./NewClassCard";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useNavigation } from "react-router-dom";

const AllClasses = () => {
  const [allClass, setAllClass] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    axios.get("https://assignment-server-12-saifulaija.vercel.app/all-classes").then((response) => {
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
 
   const navigation = useNavigation()
  
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  return (
    <div className="w-ful">
      <div className="max-w-[1280px] mx-auto p-6">
       

        <div className="grid md:grid-cols-3 gap-2">
          {currentInstructors.map((item) => (
            <NewClassCard key={item._id} item={item}></NewClassCard>
          ))}
        </div>
        <div className="flex justify-center gap-1 mt-6">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-4 py-1 rounded-md cursor-pointer ${
                currentPage === pageNumber ? "bg-[#008080] text-white" : "bg-gray-200  hover:bg-[#055555]"
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
