import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCommentAlt,
  FaUsers,
  FaEnvelope,
  FaDollarSign,
} from "react-icons/fa";
import { AiOutlineCrown } from "react-icons/ai";
import { Fade, Slide, Zoom } from "react-reveal";

const ClassCard = ({ item, handleApproved, handleDeny }) => {
  const { photo, name, price, seats, status } = item;
  return (
    // <div className=" font-mono group bg-white border-[1px] max-h-[550px] overflow-hidden border-yellow-400 border-dashed relative  rounded-md space-y-4">
    //   <div className=" flex justify-center items-center">
    //     <img  className="object-cover rounded-lg p-2 drop-shadow-lg w-[250px] group-hover:scale-110 transition" src={photo} alt="" />

    //   </div>
    //   <p className="text-md text-neutral-600 font-bold px-4 text-center">Class Name: {name}</p>
    //   <hr />
    //   <div className="p-4 text-md font-medium text-neutral-700">
    //     <p> Name:{item.instructor.name}</p>
    //     <p> Email:{item.instructor.email}</p>
    //     <p className="text-yellow-500">status:{status}</p>

    //   </div>
    //  <div className="flex gap-4 border-[1px] items-center justify-center text-yellow-500">
    //  <p>seats:{seats}</p>
    //  <p>price: ${price}</p>
    //  </div>

    //  <div className="flex  bottom-0 gap-2 items-center justify-center">
    //         <button disabled={ status && status ==='approved' || status === 'deny'} onClick={()=>handleApproved(item._id)} className="btn-class">Approved</button>
    //         <button disabled={ status && status == 'approved' || status === 'deny'} className="btn-class" onClick={()=>handleDeny(item._id)}>Deny</button>
    //         <Link to={`/dashboard/feedback/${item._id}`}><button className="btn-class">Feedback</button></Link>
    //  </div>

    // </div>

    <Slide top>
      <div className=" bg-neutral-100 shadow-lg rounded-lg md:p-6">
        <div className="flex items-center justify-center mb-4">
          <img
            src={photo}
            alt="Instructor"
            className="rounded-full h-20 w-20 border-4 border-blue-500"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <h3 className="text-lg font-semibold text-neutral-500 mb-1">Instructor:{item.instructor.name}</h3>
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
              className={
                status === "approved" ? "text-green-500" : "text-red-500"
              }
            >
              {status}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            disabled={(status && status === "approved") || status === "deny"}
            onClick={() => handleApproved(item._id)}
            className="bg-[#ff6c2f] text-white py-1  px-3 text-sm rounded-2xl  focus:outline-none hover:bg-[#8a3714] flex items-center"
          >
            <FaCheckCircle className="mr-2" /> Approve
          </button>
          <button
            onClick={() => handleDeny(item._id)}
            disabled={(status && status == "approved") || status === "deny"}
            className="bg-[#ff6c2f] text-white py-1  px-3 text-sm rounded-2xl  focus:outline-none hover:bg-[#8a3714] flex items-center"
          >
            <FaTimesCircle className="mr-2" /> Deny
          </button>
          <Link
            to={`/dashboard/feedback/${item._id}`}
            className="bg-[#ff6c2f] text-white py-1  px-3 text-sm rounded-2xl  focus:outline-none hover:bg-[#8a3714] flex items-center"
          >
            <button>
              <FaCommentAlt className="mr-2 inline-block" /> Feedback
            </button>
          </Link>
        </div>
      </div>
    </Slide>
  );
};

export default ClassCard;
