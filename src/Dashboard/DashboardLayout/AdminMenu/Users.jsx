import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";

const Users = () => {



      const [disable, setDisable] = useState(true);
      const {user, role} = useContext(AuthContext)
      console.log(role);


  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });




  const handleMakeAdmin=(item)=>{
      
      console.log(item);
      fetch(`http://localhost:5000/admin/${item._id}`,{
            method:'PATCH'
      })
      .then(res=> res.json())
      .then(data=>{
            if(data.modifiedCount){
                  refetch()
                 
                  toast.success(`${item.name} is admin now!`)
            }
      })
  }


  
  const handleMakeInstructor=(item)=>{
      
      console.log(item);
      fetch(`http://localhost:5000/instructor/${item._id}`,{
            method:'PATCH'
      })
      .then(res=> res.json())
      .then(data=>{
            if(data.modifiedCount){
                  refetch()
                  setDisable(false )
                  toast.success(`${item.name} is instructor now!`)
            }
      })
  }





  return (
    <div>
      <h3 className="text-2xl font-bold">Total Users: {users.length}</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index)=>  <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td ><button  onClick={()=>handleMakeInstructor(item)} disabled={!disable} className="btn-primary">Make Instructor</button></td>
                <td><button onClick={()=> handleMakeAdmin(item)} disabled={!disable} className="btn-primary">Make Admin</button></td>
              </tr> )}
             
             
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
