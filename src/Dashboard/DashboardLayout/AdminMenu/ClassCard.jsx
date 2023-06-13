import { Link } from "react-router-dom";

const ClassCard = ({ item, handleApproved, handleDeny }) => {
  const { photo, name, price, seats, status  } = item;
  return (
    <div className=" font-mono group bg-white border-[1px] max-h-[550px] overflow-hidden border-yellow-400 border-dashed relative  rounded-md space-y-4">
      <div className=" flex justify-center items-center">
        <img  className="object-cover rounded-lg p-2 drop-shadow-lg w-[250px] group-hover:scale-110 transition" src={photo} alt="" />
       
      </div>
      <p className="text-md text-neutral-600 font-bold px-4 text-center">Class Name: {name}</p>
      <hr />
      <div className="p-4 text-md font-medium text-neutral-700">
        <p> Name:{item.instructor.name}</p>
        <p> Email:{item.instructor.email}</p>
        <p className="text-yellow-500">status:{status}</p>

      </div>
     <div className="flex gap-4 border-[1px] items-center justify-center text-yellow-500">
     <p>seats:{seats}</p>
     <p>price: ${price}</p>
     </div>

     <div className="flex  bottom-0 gap-2 items-center justify-center">
            <button disabled={ status && status ==='approved' || status === 'deny'} onClick={()=>handleApproved(item._id)} className="btn-class">Approved</button>
            <button disabled={ status && status == 'approved' || status === 'deny'} className="btn-class" onClick={()=>handleDeny(item._id)}>Deny</button>
            <Link to={`/dashboard/feedback/${item._id}`}><button className="btn-class">Feedback</button></Link>
     </div>

    
    </div>
  );
};

export default ClassCard;
