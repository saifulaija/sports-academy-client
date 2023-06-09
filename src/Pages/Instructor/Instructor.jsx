import { useEffect, useState } from "react";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter((item) => item.role === "instructor");
        setInstructors(remaining);
      });
  }, []);

  return (
    <div  className=" mx-auto p-16 bg-red-50">
      <h1 className="text-3xl font-bold uppercase text-center py-6">
        Total instructors:{instructors.length}
      </h1>

      <div className="" >
        <div className="overflow-x-auto max-w-[1040px] font-mono  mx-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                #
                </th>
                <th>Photo</th>
                <th> Name</th>
                <th>Email</th>
               
              </tr>
            </thead>
            <tbody>
              {instructors.map((item,index)=>  <tr key={item._id}>
                <th>
                 {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>{item.email}</td>
               
              </tr> )}
             
             
            
             
             
              
             
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default Instructor;