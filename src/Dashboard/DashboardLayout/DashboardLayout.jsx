// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar/Sidebar";
// import DashboardAdmin from "../../Pages/DashboardAdmin/DashboardAdmin";



// const DashboardLayout = () => {
//   return (
//     <div className="relative min-h-screen md:flex">
//       <Sidebar></Sidebar>

//       <div className="flex-1 md:ml-64">
      
//         <div className="p-5">
//           <DashboardAdmin></DashboardAdmin>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


// import { Outlet, useNavigate, useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar/Sidebar";
// import DashboardAdmin from "../../Pages/DashboardAdmin/DashboardAdmin";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

// const DashboardLayout = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const {role} =useContext(AuthContext)

//   // Define an array of routes where DashboardAdmin should be rendered
//   const allowedRoutes = ["/dashboard", "/dashboard/add-users"];

//   // Check if the current location is in the allowedRoutes array
//   const shouldRenderDashboardAdmin = allowedRoutes.includes(location.pathname);

//   return (
//     <div className="relative min-h-screen md:flex">
//       <Sidebar></Sidebar>

//       <div className="flex-1 md:ml-64">
      
//         <div className="p-5">
//           {shouldRenderDashboardAdmin && <DashboardAdmin />}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
// import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import DashboardAdmin from "../../Pages/DashboardAdmin/DashboardAdmin";
import DashboardInstructor from "../../Pages/DashboardInstructor/DashboardInstructor";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardStudent from "../../Pages/DashboardStudent/DashboardStudent";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useContext(AuthContext);

  // Define an array of routes where each dashboard component should be rendered
  const adminRoutes = ["/dashboard"];
  const instructorRoutes = ["/dashboard"];
  const studentRoutes = ["/dashboard"];

  let dashboardComponent = null;


  if (role === "admin") {
    if (adminRoutes.includes(location.pathname)) {
      dashboardComponent = <DashboardAdmin />;
    }
  } else if (role === "instructor") {
    if (instructorRoutes.includes(location.pathname)) {
      dashboardComponent = <DashboardInstructor />;
    }
  } else {
    if (studentRoutes.includes(location.pathname)) {
      dashboardComponent = <DashboardStudent />;
    }
  }

  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar></Sidebar>

      <div className="flex-1 md:ml-64">
        <div className="p-5">
          {dashboardComponent}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
