// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { Link } from "react-router-dom";
// import { FaEdit } from 'react-icons/fa';
// import Loader from "../../components/Loader/Loader";

// const MyClass = () => {
//   const { user } = useContext(AuthContext);
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetch(`https://assignment-server-12-indol.vercel.app/classes/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setClasses(data);
//       });
//   }, [user]);

//   return (
//     // <div className="">
//     //   <h3 className=" heading-st">
//     //     {" "}
//     //     Your Total Submitted Classes:{classes.length}
//     //   </h3>

//     //   <div className="overflow-x-auto text-neutral-500">
//     //     <table className="table">
//     //       {/* head */}
//     //       <thead className="text-lg text-neutral-500">
//     //         <tr>
//     //           <th>#</th>
//     //           <th>Class Name</th>
//     //           <th>Status</th>
//     //           <th>Enrolled Students</th>
//     //           <th>Feedback</th>
//     //           <th>Role</th>
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         {classes.map((item, index) => (
//     //           <tr key={item._id}>
//     //             <th>{index + 1}</th>
//     //             <td>{item.name}</td>
//     //             <td>{item.status}</td>
//     //             <td>{item.students}</td>
//     //             <td>{item.feedback}</td>
//     //             <td>
//     //               <Link to={`/dashboard/update-class/${item._id}`}><button  className="btn-third">Update</button></Link>
//     //             </td>
//     //           </tr>
//     //         ))}
//     //       </tbody>
//     //     </table>
//     //   </div>

//     // </div>

//     <div className="overflow-x-auto text-neutral-500">
//     {
//       loading?<><Loader></Loader></>:<><table className="table">
//       {/* head */}
//       <thead className="text-lg text-neutral-500">
//         <tr>
//           <th>#</th>
//           <th>Class Name</th>
//           <th>Status</th>
//           <th>Enrolled Students</th>
//           <th>Feedback</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {classes.map((item, index) => (
//           <tr key={item._id}>
//             <th>{index + 1}</th>
//             <td>{item.name}</td>
//             <td>{item.status}</td>
//             <td>{item.students}</td>
//             <td>{item.feedback}</td>
//             <td>
//               <Link to={`/dashboard/update-class/${item._id}`}>
//                 {/* Use the Font Awesome icon here */}
//                 <button className="bg-black text-white px-4 py-1 rounded hover:bg-[#68260a]">
//                   <FaEdit className="inline-block" /> Update
//                 </button>
//               </Link>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table></>
//     }
//   </div>
//   );
// };

// export default MyClass;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { Link } from "react-router-dom";
// import { FaEdit } from "react-icons/fa";
// import Loader from "../../components/Loader/Loader";

// const MyClass = () => {
//   const { user } = useContext(AuthContext);
//   const [classes, setClasses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       `https://assignment-server-12-indol.vercel.app/classes/${user?.email}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setClasses(data);
//         setLoading(false); // Set loading to false once data is loaded
//       });
//   }, [user]);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-semibold mb-4 text-gray-900">
//         Your Classes
//       </h1>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="overflow-x-auto text-neutral-500">
//           <table className="table">
//             {/* head */}
//             <thead className="text-lg text-neutral-500">
//               <tr>
//                 <th>#</th>
//                 <th>Class Name</th>
//                 <th>Status</th>
//                 <th>Enrolled Students</th>
//                 <th>Feedback</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {classes.map((item, index) => (
//                 <tr key={item._id}>
//                   <th>{index + 1}</th>
//                   <td>{item.name}</td>
//                   <td>{item.status}</td>
//                   <td>{item.students}</td>
//                   <td>{item.feedback}</td>
//                   <td>
//                     <Link to={`/dashboard/update-class/${item._id}`}>
//                       {/* <button className="bg-black text-white px-4 py-1 rounded hover:bg-[#0c0705]">
//                         <FaEdit className="inline-block" /> Update
//                       </button> */}
//                       <button className="bg-black text-white px-4 py-1 rounded flex items-center hover:bg-[#0c0705]">
//                         <FaEdit className="inline-block mr-2" /> Update
//                       </button>
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyClass;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";
import EmptyState from "../../Shared/EmptyState/EmptyState";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assignment-server-12-indol.vercel.app/classes/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
        setLoading(false); // Set loading to false once data is loaded
      });
  }, [user]);

  return (
    <div className="p-8">
      {loading ? (
        <Loader />
      ) : (
        <>
          {classes.length === 0 ? ( // Check if there are no classes
            <EmptyState
              address={"/dashboard/add-form"}
              label={"add classes"}
              message="No classes available. Please add some classes to get started."
            />
          ) : (
            <div className="overflow-x-auto text-neutral-500">
              <h1 className="text-2xl font-semibold mb-4 text-center text-gray-600">
                Your Classes
              </h1>
              <table className="table">
                {/* head */}
                <thead className="text-lg text-neutral-500">
                  <tr>
                    <th>#</th>
                    <th>Class Name</th>
                    <th>Status</th>
                    <th>Enrolled Students</th>
                    <th>Feedback</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.students}</td>
                      <td>{item.feedback}</td>
                      <td>
                        <Link to={`/dashboard/update-class/${item._id}`}>
                          <button className="bg-black text-white px-4 py-1 rounded flex items-center hover:bg-[#0c0705]">
                            <FaEdit className="inline-block mr-2" /> Update
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyClass;
