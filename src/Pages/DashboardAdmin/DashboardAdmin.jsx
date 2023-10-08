import  { useEffect, useState } from "react";
import { FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const DashboardAdmin = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalInstructors, setTotalInstructors] = useState(0);
  const [totalClasses, setTotalClasses] = useState(0);

  // Simulate fetching data from your API or backend
  useEffect(() => {
    // Replace with actual API calls to fetch user, instructor, and class data
    // For now, we're simulating data
    const fetchData = async () => {
      // Simulate fetching total users
      const usersResponse = await fetch(
        "https://assignment-server-12-saifulaija.vercel.app/users"
      );
      const usersData = await usersResponse.json();
      setTotalUsers(usersData.length);

      // Simulate fetching total instructors
      const instructorsResponse = await fetch(
        "https://assignment-server-12-saifulaija.vercel.app/instructors-all"
      );
      const instructorsData = await instructorsResponse.json();
      setTotalInstructors(instructorsData.length);

      // Simulate fetching total classes
      const classesResponse = await fetch(
        "https://assignment-server-12-saifulaija.vercel.app/classes"
      );
      const classesData = await classesResponse.json();
      setTotalClasses(classesData.length);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Sports Academy Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaUser className="text-4xl text-blue-500 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Total Users
              </h2>
              <p className="text-3xl font-bold text-blue-500">{totalUsers}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaChalkboardTeacher className="text-4xl text-green-500 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Total Instructors
              </h2>
              <p className="text-3xl font-bold text-green-500">
                {totalInstructors}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg">
          <div className="flex items-center">
            <FaBook className="text-4xl text-purple-500 mr-4" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Total Classes
              </h2>
              <p className="text-3xl font-bold text-purple-500">
                {totalClasses}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
