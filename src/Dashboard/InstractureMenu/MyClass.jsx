import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, [user]);

  return (
    <div className="">
      <h3 className=" text-xl md:text-3xl font-bold uppercase text-yellow-500 font-mono text-center py-6">
        {" "}
        Your Total Submitted Classes:{classes.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
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
                  <button className="btn-class">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
