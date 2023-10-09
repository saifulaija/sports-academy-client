// import { useEffect, useState } from "react";
// import { FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";

// const DashboardAdmin = () => {
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [totalInstructors, setTotalInstructors] = useState(0);
//   const [totalClasses, setTotalClasses] = useState(0);


//   useEffect(() => {
//     const fetchData = async () => {
//       const usersResponse = await fetch(
//         "https://assignment-server-12-saifulaija.vercel.app/users"
//       );
//       const usersData = await usersResponse.json();
//       setTotalUsers(usersData.length);

//       const instructorsResponse = await fetch(
//         "https://assignment-server-12-saifulaija.vercel.app/instructors-all"
//       );
//       const instructorsData = await instructorsResponse.json();
//       setTotalInstructors(instructorsData.length);

//       const classesResponse = await fetch(
//         "https://assignment-server-12-saifulaija.vercel.app/classes"
//       );
//       const classesData = await classesResponse.json();
//       setTotalClasses(classesData.length);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
//         Sports Academy Dashboard
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <FaUser className="text-4xl text-blue-500 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Total Users
//               </h2>
//               <p className="text-3xl font-bold text-blue-500">{totalUsers}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <FaChalkboardTeacher className="text-4xl text-green-500 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Total Instructors
//               </h2>
//               <p className="text-3xl font-bold text-green-500">
//                 {totalInstructors}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg">
//           <div className="flex items-center">
//             <FaBook className="text-4xl text-purple-500 mr-4" />
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Total Classes
//               </h2>
//               <p className="text-3xl font-bold text-purple-500">
//                 {totalClasses}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardAdmin;


import { useEffect, useState } from "react";
import { FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const DashboardAdmin = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch(
        "http://localhost:5000/users"
      );
      const usersData = await usersResponse.json();
      setTotalUsers(usersData.length);

      const instructorsResponse = await fetch(
        "http://localhost:5000/instructors-all"
      );
      const instructorsData = await instructorsResponse.json();
      setTotalInstructors(instructorsData.length);

      const classesResponse = await fetch(
        "http://localhost:5000/classes"
      );
      const classesData = await classesResponse.json();
      setTotalClasses(classesData.length);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-200 text-gray-500 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">Sports Academy Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaUser className="text-5xl text-indigo-300 mr-4" />
            <div>
              <h2 className="text-xl font-semibold"> Users</h2>
              <p className="text-3xl font-bold">{totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaChalkboardTeacher className="text-5xl text-green-300 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Instructors</h2>
              <p className="text-3xl font-bold">{totalInstructors}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaBook className="text-5xl text-yellow-300 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Classes Offered</h2>
              <p className="text-3xl font-bold">{totalClasses}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
