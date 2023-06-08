import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Total Users:{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index)=> <tr key={item
            ._id}>
              <th>{index + 1}</th>
              <td> {item.name}</td>
              <td>{item.email}</td>
              <td><button className="btn-primary">Make Instructor </button></td>
              <td><button className="btn-primary">Make Admin </button></td>
              
            </tr>)}
           
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
