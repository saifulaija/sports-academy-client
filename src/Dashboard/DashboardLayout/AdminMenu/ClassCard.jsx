// import { Link } from "react-router-dom";
// import {
//   FaCheckCircle,
//   FaTimesCircle,
//   FaCommentAlt,
//   FaUsers,
//   FaEnvelope,
//   FaDollarSign,
// } from "react-icons/fa";
// import { AiOutlineCrown } from "react-icons/ai";
// import { Fade, Slide, Zoom } from "react-reveal";

// const ClassCard = ({ item, handleApproved, handleDeny }) => {
//   const { photo, name, price, seats, status } = item;
//   return (
//     <Slide top>
//       <div className=" bg-neutral-100 shadow-lg rounded-lg md:p-6">
//         <div className="flex items-center justify-center mb-4">
//           <img
//             src={photo}
//             alt="Instructor"
//             className="rounded-full h-20 w-20 border-4 border-blue-500"
//           />
//         </div>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">{name}</h3>
//           <h3 className="text-lg font-semibold text-neutral-500 mb-1">
//             Instructor:{item.instructor.name}
//           </h3>
//           <div className="flex items-center text-gray-500 mb-2">
//             <FaEnvelope className="mr-2" />
//             <span>{item.instructor.email}</span>
//           </div>
//           <div className="flex items-center text-gray-500">
//             <FaUsers className="mr-2" />
//             <span>{seats} seat(s) available</span>
//           </div>
//         </div>
//         <div className="flex justify-between items-center border-t border-gray-300 py-4 mt-4">
//           <div className="flex items-center">
//             <FaDollarSign className="text-gray-600 mr-2" />
//             <span className="text-2xl font-semibold">${price}</span>
//           </div>
//           <div className="flex items-center">
//             {status === "approved" ? (
//               <FaCheckCircle className="text-green-500 mr-1" />
//             ) : (
//               <FaTimesCircle className="text-red-500 mr-1" />
//             )}
//             <span
//               className={
//                 status === "approved" ? "text-green-500" : "text-red-500"
//               }
//             >
//               {status}
//             </span>
//           </div>
//         </div>
//         <div className="mt-4 flex justify-between">
//           <button
//             disabled={(status && status === "approved") || status === "deny"}
//             onClick={() => handleApproved(item._id)}
//             className="bg-[#ff6c2f] text-white py-1  px-3 text-sm rounded-2xl  focus:outline-none hover:bg-[#8a3714] flex items-center"
//           >
//             <FaCheckCircle className="mr-2" /> Approve
//           </button>
//           <button
//             onClick={() => handleDeny(item._id)}
//             disabled={(status && status == "approved") || status === "deny"}
//             className="bg-[#ff6c2f] text-white py-1  px-3 text-sm rounded-2xl  focus:outline-none hover:bg-[#8a3714] flex items-center"
//           >
//             <FaTimesCircle className="mr-2" /> Deny
//           </button>
//           <Link
//             to={`/dashboard/feedback/${item._id}`}
//             className="bg-[#ff6c2f] text-white py-1  px-3 text-sm rounded-2xl  focus:outline-none hover:bg-[#8a3714] flex items-center"
//           >
//             <button>
//               <FaCommentAlt className="mr-2 inline-block" /> Feedback
//             </button>
//           </Link>
//         </div>
//       </div>
//     </Slide>
//   );
// };

// export default ClassCard;



import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCommentAlt,
  FaUsers,
  FaEnvelope,
  FaDollarSign,
} from "react-icons/fa";


const ClassCard = ({ item, handleApproved, handleDeny }) => {
  const { photo, name, price, seats, status } = item;
  return (
    <div className="bg-white border rounded p-6">
      <div className="flex items-center justify-center mb-4">
        <img
          src={photo}
          alt="Instructor"
          className="rounded-full h-20 w-20 border-4 border-blue-500"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <h3 className="text-lg font-semibold text-gray-500 mb-1">
          Instructor: {item.instructor.name}
        </h3>
        <div className="flex items-center text-gray-500 mb-2">
          <FaEnvelope className="mr-2" />
          <span>{item.instructor.email}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaUsers className="mr-2" />
          <span>{seats} seat(s) available</span>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-gray-300 py-4 mt-4">
        <div className="flex items-center">
          <FaDollarSign className="text-gray-600 mr-2" />
          <span className="text-2xl font-semibold">${price}</span>
        </div>
        <div className="flex items-center">
          {status === "approved" ? (
            <FaCheckCircle className="text-green-500 mr-1" />
          ) : (
            <FaTimesCircle className="text-red-500 mr-1" />
          )}
          <span
            className={status === "approved" ? "text-green-500" : "text-red-500"}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          disabled={(status && status === "approved") || status === "deny"}
          onClick={() => handleApproved(item._id)}
          className="bg-gray-800 text-white py-1 px-3 text-sm rounded focus:outline-none hover:bg-gray-600 flex items-center"
        >
          <FaCheckCircle className="mr-2" /> Approve
        </button>
        <button
          onClick={() => handleDeny(item._id)}
          
          disabled={(status && status === "approved") || status === "deny"}
          className="bg-gray-800 text-white py-1 px-3 text-sm rounded focus:outline-none hover:bg-gray-600 flex items-center"
        >
          <FaTimesCircle className="mr-2" /> Deny
        </button>
        <Link
          to={`/dashboard/feedback/${item._id}`}
          className="bg-gray-800 text-white py-1 px-3 text-sm rounded focus:outline-none hover:bg-gray-600 flex items-center"
        >
          <button>
            <FaCommentAlt className="mr-2 inline-block" /> Feedback
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;

