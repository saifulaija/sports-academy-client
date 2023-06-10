import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import Fade from 'react-reveal/Fade';

const PopularInstructor = () => {
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
    <div className="w-full bg-white p-16">
      <div className="max-w-[1280px] mx-auto border-[1px] border-yellow-500 rounded-xl shadow-xl p-6">
        <div className="flex justify-center items-center">
          <Heading
            heading={"popular instructor"}
            text={
              "There are most popular Instructor in our academy in the country and world ranking"
            }
          ></Heading>
        </div>
        <div className=" mx-auto flex justify-center items-center ">
          <div className="overflow-x-auto w-full font-mono mx-auto ">
            <table className="table">
              {/* head */}
             <Fade top>
             <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th> Name</th>
                  <th>Email</th>
                </tr>
              </thead>
             </Fade>
             <Fade bottom>
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
             </Fade>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
