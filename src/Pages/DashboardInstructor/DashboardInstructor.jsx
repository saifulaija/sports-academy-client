// import { useContext, useEffect, useState } from "react";

// import { MdOutlineClass, MdOutlinePending } from "react-icons/md";
// import { FcApprove } from "react-icons/fc";
// // import { RiPassPendingFill } from "react-icons/ri";

// import { AuthContext } from "../../Providers/AuthProvider";

// const DashboardInstructor = () => {
//   const { user } = useContext(AuthContext);
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/classes/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setClasses(data);
//       });
//   }, [user]);
//   console.log(classes);

//   const pendingClasses = classes?.filter((item) => item?.status === "pending");
//   const approvedClasses = classes?.filter(
//     (item) => item?.status === "approved"
//   );

//   return (
//     <div className="bg-gradient-to-b  to-gray-200 text-white min-h-screen p-8">
//       <h1 className="text-4xl font-extrabold text-center text-gray-600 mb-6">
//         Welcome, {user?.displayName}!
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <MdOutlineClass className="text-5xl text-indigo-300 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold">All Classes</h2>
//               <p className="text-3xl font-bold">{classes.length}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <FcApprove className="text-5xl text-green-300 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold">Approved</h2>
//               <p className="text-3xl font-bold">{approvedClasses.length}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
//             <div>
//             <h2 className="text-xl font-semibold">Pending</h2> <MdOutlinePending className="text-5xl text-yellow-300 mr-4 inline-block" />
//             </div>
//           <div className="flex items-center">

//             <div>

//               <p className="text-3xl font-bold">{pendingClasses.length}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardInstructor;

import { useContext, useEffect, useState } from "react";
import { MdOutlineClass, MdOutlinePending } from "react-icons/md";
import { FcApprove } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";

const DashboardInstructor = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [user]);

  const pendingClasses = classes?.filter((item) => item?.status === "pending");
  const approvedClasses = classes?.filter(
    (item) => item?.status === "approved"
  );

  return (
    <div className="bg-gray-100 text-black min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
        Welcome, {user?.displayName}!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* All Classes */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg text-white">
          <div className="flex items-center">
            <MdOutlineClass className="text-3xl mr-4 text-yellow-400" /> <h2 className="text-xl font-semibold ">All Classes</h2>
            
          </div>
          <div>
             
              <p className="text-3xl font-bold text-center ">{classes.length}</p>
            </div>
        </div>

        {/* Approved */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg text-white">
          <div className="flex items-center">
            <FcApprove className="text-3xl mr-4" /><h2 className="text-xl font-semibold">Approved</h2>
            
          </div>
          <div>
              
              <p className="text-3xl font-bold text-center">{approvedClasses.length}</p>
            </div>
        </div>

        {/* Pending */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg text-white">
          <div className="flex items-center">
            <MdOutlinePending className="text-3xl mr-4 text-yellow-400" />{" "}
            <h2 className="text-xl font-semibold">Pending</h2>
          </div>
          <div>
            <p className="text-3xl font-bold text-center">
              {pendingClasses.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInstructor;
