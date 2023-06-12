import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";

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
    <div className="w-full p-10 ">
      <h3 className="heading-st">
        Total Payment Classes : {paymentClasses.length}
      </h3>
      <div className="font-mono">
        <div className="overflow-x-auto">
         <Fade bottom>
         <table className="table text-white">
            {/* head */}
            <thead className="text-xl text-white">
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
         </Fade>
        </div>
      </div>
    </div>
  );
};

export default MyPaymentHistory;
