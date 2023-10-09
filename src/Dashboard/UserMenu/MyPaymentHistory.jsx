// import { useContext } from "react";
// import { useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

// import { useEffect } from "react";
// import Fade from "react-reveal/Fade";
// import EmptyState from "../../Shared/EmptyState/EmptyState";

// const MyPaymentHistory = () => {
//   const { user } = useContext(AuthContext);

//   const [paymentClasses, setPaymentClasses] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:5000/payment-all/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setPaymentClasses(data);
//       });
//   }, [user, paymentClasses]);
 

//   return (
//     <>
    
//     {
//       paymentClasses  && paymentClasses.length> 0 ?(<div className="w-full p-10 ">
//       <h3 className="heading-st">
//         Total Payment Classes : {paymentClasses.length}
//       </h3>
//       <div className="font-mono">
//         <div className="overflow-x-auto">
//           <Fade bottom>
//             <table className="table">
//               {/* head */}
//               <thead className="text-lg">
//                 <tr>
//                   <th>#</th>
//                   <th>Class Name</th>
//                   <th>Transaction Id</th>
//                   <th>Payment Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paymentClasses.map((item, index) => (
//                   <tr key={item._id}>
//                     <th>{index + 1}</th>
//                     <td>{item.name}</td>
//                     <td>{item.transactionId}</td>
//                     <td>{item.date}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </Fade>
//         </div>
//       </div>
//     </div>) : <EmptyState message={'You have no payment History Yet!'} address={'/dashboard/my-bookings'} label={'Browse class'}></EmptyState>
//     }
    
    
    
//     </>
//   );
// };

// export default MyPaymentHistory;


import { useContext } from "react";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import EmptyState from "../../Shared/EmptyState/EmptyState";

import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../components/Loader/Loader";

const MyPaymentHistory = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true); // State to handle loading
  const [paymentClasses, setPaymentClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payment-all/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPaymentClasses(data);
        setLoading(false); // Set loading to false when data is fetched
      });
  }, [user, paymentClasses]);

  return (
    <>
      {loading ? (
        // Show loader while data is loading
        <Loader />
      ) : paymentClasses && paymentClasses.length > 0 ? (
        <div className="w-full p-10">
          <h3 className="heading-st">
            Total Payment Classes : {paymentClasses.length}
          </h3>
          <div>
            <div className="overflow-x-auto">
              <Fade bottom>
                <table className="table">
                  {/* head */}
                  <thead className="text-lg">
                    <tr>
                      <th>Serial No.</th>
                      <th>Class Name</th>
                      <th>Transaction Id</th>
                      <th>Payment Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentClasses.map((item, index) => (
                      <tr key={item._id}>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.transactionId}</td>
                        <td>{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Fade>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          message={"You have no payment History Yet!"}
          address={"/dashboard/my-bookings"}
          label={"Browse class"}
        ></EmptyState>
      )}
    </>
  );
};

export default MyPaymentHistory;

