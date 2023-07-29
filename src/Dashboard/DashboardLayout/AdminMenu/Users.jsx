import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineUserAdd, AiOutlineCrown } from "react-icons/ai";
import { Zoom } from "react-reveal";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [disable, setDisable] = useState(true);
  const { user, role } = useContext(AuthContext);
  console.log(role);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });




  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
 


  const handleMakeAdmin = (item) => {
    fetch(`http://localhost:5000/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();

          toast.success(`${item.name} is admin now!`);
        }
      });
  };

  const handleMakeInstructor = (item) => {
    console.log(item);
    fetch(`http://localhost:5000/instructor/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setDisable(false);
          toast.success(`${item.name} is instructor now!`);
        }
      });
  };

  return (
    // <div>
    //   <h3 className="heading-st">Total Users: {users.length}</h3>
    //   <div>
    //     <div className="overflow-x-auto">
    //       <table className="table text-neutral-500 font-mono">
    //         {/* head */}
    //         <thead className="text-lg font-mono text-neutral-500">
    //           <tr>
    //             <th>#</th>
    //             <th>Name</th>
    //             <th>Email</th>
    //             <th>Role</th>
    //             <th>Action</th>
    //             <th>Action</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {users.map((item, index) => (
    //             <tr key={item._id}>
    //               <th>{index + 1}</th>
    //               <td>{item.name}</td>
    //               <td>{item.email}</td>
    //               <td>{item.role? item.role : 'student'}</td>
    //               <td>
    //                 <button
    //                   onClick={() => handleMakeInstructor(item)}
    //                   disabled={item.role === 'instructor'}
    //                   className="btn-third"
    //                 >
    //                   Make Instructor
    //                 </button>
    //               </td>
    //               <td>
    //                 <button
    //                   onClick={() => handleMakeAdmin(item)}
    //                   disabled={item.role === 'admin'}
    //                   className="btn-third"
    //                 >
    //                   Make Admin
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    // ...

    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
    //   {users.map((item, index) => (
    //     <div key={item._id} className="bg-neutral-50 border-r-2  p-4 rounded-md shadow-md">
    //       <div className="flex items-center justify-center mb-4">
    //         {item.image && (
    //           <img
    //             src={item.image}
    //             alt={item.name}
    //             className="w-16 h-16 rounded-full object-cover"
    //           />
    //         )}
    //       </div>
    //       <h4 className="font-bold text-lg">{item.name}</h4>
    //       <p className="text-sm text-gray-500 mb-2">{item.email}</p>
    //       <p className="text-sm text-gray-600">
    //         Role: {item.role ? item.role : "student"}
    //       </p>
    //       <div className="flex justify-between mt-4">
    //         <button
    //           onClick={() => handleMakeInstructor(item)}
    //           disabled={item.role == "instructor"}
    //           className="bg-[#008080] px-4 py-2 outline-none rounded-full text-sm text-white hover:bg-[#065050]"
    //         >
    //           <AiOutlineUserAdd className="inline-block" />
    //           Make Instructor
    //         </button>
    //         <button
    //           onClick={() => handleMakeAdmin(item)}
    //           disabled={item.role === 'admin'}
             
    //           className="bg-[#008080] px-3 py-0 rounded-full text-sm text-white hover:bg-[#065050]"
    //         >
    //           <AiOutlineCrown className="mr-2 inline-block" />
    //           Make Admin
    //         </button>
    //       </div>
    //     </div>
    //   ))}
    // </div>


   <div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
    {currentUsers.map((item, index) => (
      <Zoom key={item._id}>
        <div className="bg-neutral-50 border-r-2 p-4 rounded-md shadow-md">
          <div className="flex items-center justify-center mb-4">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
          </div>
          <h4 className="font-bold text-lg">{item.name}</h4>
          <Zoom cascade>
            <p className="text-sm text-gray-500 mb-2">
              <AiOutlineUserAdd className="inline-block mr-2" />
              {item.email}
            </p>
            <p className="text-sm text-gray-600">
              <AiOutlineCrown className="inline-block mr-2" />
              Role: {item.role ? item.role : "student"}
            </p>
          </Zoom>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleMakeInstructor(item)}
              disabled={item.role === "instructor"}
              className="bg-[#008080] px-4 py-2 outline-none rounded-full text-sm text-white hover:bg-[#065050]"
            >
              <AiOutlineUserAdd className="inline-block" />
              Make Instructor
            </button>
            <button
              onClick={() => handleMakeAdmin(item)}
              disabled={item.role === "admin"}
              className="bg-[#008080] px-3 py-0 rounded-full text-sm text-white hover:bg-[#065050]"
            >
              <AiOutlineCrown className="mr-2 inline-block" />
              Make Admin
            </button>
          </div>
         
        </div>

      </Zoom>
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



  );
};

export default Users;



