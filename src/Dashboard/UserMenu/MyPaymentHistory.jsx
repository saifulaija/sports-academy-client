import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";

const MyPaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);

  const [paymentClasses, setPaymentClasses] = useState([]);
useEffect(()=>{
      
  fetch(`http://localhost:5000/payment-all/${user?.email}`)
  .then((res) => res.json())
  .then((data) => {
    setPaymentClasses(data);
  });

},[user, paymentClasses])
  if(loading){
      return <Loader></Loader>
  }

  return (
    <div className="w-full p-10">
      <h3 className="text-3xl font-mono font-bold uppercase text-center text-yellow-400">
        Total Payment Classes : {paymentClasses.length}
      </h3>
      <div className="font-mono">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Transaction Id</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentClasses.map((item, index)=>  <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.transactionId}</td>
                <td>{item.date}</td>
              </tr> )}
             
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPaymentHistory;
