// import { useContext } from "react";
// import { useEffect, useState } from "react";
// import { FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";
// import { AuthContext } from "../../Providers/AuthProvider";

// const DashboardStudent = () => {
//   const [totalClassesSelect, setTotalClassesSelect] = useState(0);
//   const [totalInstructors, setTotalInstructors] = useState(0);
//   const [totalClasses, setTotalClasses] = useState(0);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       const usersResponse = await fetch(
//         `http://localhost:5000/bookings/${user?.email}`
//       );
//       const usersData = await usersResponse.json();
//       setTotalClassesSelect(usersData.length);

//       const instructorsResponse = await fetch(
//         `http://localhost:5000/payment-all/${user?.email}`
//       );
//       const instructorsData = await instructorsResponse.json();
//       setTotalInstructors(instructorsData.length);

//       const classesResponse = await fetch(
//         `http://localhost:5000/payment-all/${user?.email}`
//       );
//       const classesData = await classesResponse.json();
//       setTotalClasses(classesData.length);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="bg-slate-100 text-white min-h-screen p-8">
//       <h1 className="text-4xl font-extrabold text-center text-gray-600 mb-6">
//         Sports Academy Admin Dashboard
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <FaUser className="text-5xl text-indigo-300 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold"> Total Classes</h2>
//               <p className="text-3xl font-bold">{totalClassesSelect}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <FaChalkboardTeacher className="text-5xl text-green-300 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold">Enrolled</h2>
//               <p className="text-3xl font-bold">{totalInstructors}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <FaBook className="text-5xl text-yellow-300 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold">Payment </h2>
//               <p className="text-3xl font-bold">{totalClasses}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardStudent;

import { useContext, useEffect, useState } from "react";
import { FaUser, FaChalkboardTeacher, FaMoneyBill, FaUserAltSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const DashboardStudent = () => {
  const [totalClassesSelect, setTotalClassesSelect] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch(
        `http://localhost:5000/bookings/${user?.email}`
      );
      const usersData = await usersResponse.json();
      setTotalClassesSelect(usersData.length);

      const instructorsResponse = await fetch(
        `http://localhost:5000/payment-all/${user?.email}`
      );
      const instructorsData = await instructorsResponse.json();
      setTotalInstructors(instructorsData.length);

      const classesResponse = await fetch(
        `http://localhost:5000/payment-all/${user?.email}`
      );
      const classesData = await classesResponse.json();
      setTotalClasses(classesData.length);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-200 text-white min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-600 mb-6">
        Welcome, {user?.displayName}!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaUser className="text-5xl text-indigo-400 mr-4" />
            <div>
              <h2 className="text-xl font-semibold"> Enrollments</h2>
              <p className="text-3xl font-bold">{totalClassesSelect}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaChalkboardTeacher className="text-5xl text-green-400 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Enrollment</h2>
              <p className="text-3xl font-bold">{totalInstructors}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaMoneyBill className="text-5xl text-yellow-400 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Payments</h2>
              <p className="text-3xl font-bold">{totalClasses}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Display a message when no data is found */}
      {totalClassesSelect === 0 && totalInstructors === 0 && totalClasses === 0 && (
        <div className="text-center mt-6">
          <FaUserAltSlash className="text-6xl text-gray-300 mb-4" />
          <p className="text-lg font-semibold">No data found</p>
          <p className="text-gray-300">You have no enrollments or payments yet.</p>
        </div>
      )}
    </div>
  );
};

export default DashboardStudent;
