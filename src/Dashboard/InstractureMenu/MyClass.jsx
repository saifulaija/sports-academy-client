import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit } from 'react-icons/fa';

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-server-12-saifulaija.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, [user]);

  return (
    // <div className="">
    //   <h3 className=" heading-st">
    //     {" "}
    //     Your Total Submitted Classes:{classes.length}
    //   </h3>

    //   <div className="overflow-x-auto text-neutral-500">
    //     <table className="table">
    //       {/* head */}
    //       <thead className="text-lg text-neutral-500">
    //         <tr>
    //           <th>#</th>
    //           <th>Class Name</th>
    //           <th>Status</th>
    //           <th>Enrolled Students</th>
    //           <th>Feedback</th>
    //           <th>Role</th>
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
    //               <Link to={`/dashboard/update-class/${item._id}`}><button  className="btn-third">Update</button></Link>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>


      
    // </div>

    <div className="overflow-x-auto text-neutral-500">
    <table className="table">
      {/* head */}
      <thead className="text-lg text-neutral-500">
        <tr>
          <th>#</th>
          <th>Class Name</th>
          <th>Status</th>
          <th>Enrolled Students</th>
          <th>Feedback</th>
          <th>Role</th>
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
                {/* Use the Font Awesome icon here */}
                <button className="bg-[#ff6c2f] text-white px-4 py-1 rounded-xl hover:bg-[#68260a]">
                  <FaEdit className="inline-block" /> Update
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default MyClass;
