import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";

const Users = () => {
  const [disable, setDisable] = useState(true);
  const { user, role } = useContext(AuthContext);
  console.log(role);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (item) => {
    
    fetch(`http://localhost:5000/admin/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();

          toast.success(`${item.name} is admin now!`);
        }
      });
  };

  const handleMakeInstructor = (item) => {
    console.log(item);
    fetch(`http://localhost:5000/instructor/${item._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          setDisable(false);
          toast.success(`${item.name} is instructor now!`);
        }
      });
  };

  return (
    <div>
      <h3 className="heading-st">Total Users: {users.length}</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table text-neutral-500 font-mono">
            {/* head */}
            <thead className="text-lg font-mono text-neutral-500">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role? item.role : 'student'}</td>
                  <td>
                    <button
                      onClick={() => handleMakeInstructor(item)}
                      disabled={item.role === 'instructor'}
                      className="btn-third"
                    >
                      Make Instructor
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleMakeAdmin(item)}
                      disabled={item.role === 'admin'}
                      className="btn-third"
                    >
                      Make Admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
