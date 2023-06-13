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
    <div className=" mx-auto p-4 md:p-16">
     <div className="w-full md:max-w-[1280px] mx-auto border-[1px] border-yellow-500 shadow-xl rounded-lg">
     <h1 className="heading-st">
        Total instructors:{instructors.length}
      </h1>

      <div className="">
        <div className="overflow-x-auto max-w-[1040px] font-mono  mx-auto text-neutral-500">
          <table className="table">
            {/* head */}
            <thead className="text-lg text-neutral-500">
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th> Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
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
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Instructor;
