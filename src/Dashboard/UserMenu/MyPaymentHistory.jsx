import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import EmptyState from "../../Shared/EmptyState/EmptyState";

const MyPaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);

  const [paymentClasses, setPaymentClasses] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-server-12-indol.vercel.app/payment-all/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPaymentClasses(data);
      });
  }, [user, paymentClasses]);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
    
    {
      paymentClasses  && paymentClasses.length> 0 ?(<div className="w-full p-10 ">
      <h3 className="heading-st">
        Total Payment Classes : {paymentClasses.length}
      </h3>
      <div className="font-mono">
        <div className="overflow-x-auto">
          <Fade bottom>
            <table className="table">
              {/* head */}
              <thead className="text-lg">
                <tr>
                  <th>#</th>
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
    </div>) : <EmptyState message={'You have no payment History Yet!'} address={'/dashboard/my-bookings'} label={'Browse class'}></EmptyState>
    }
    
    
    
    </>
  );
};

export default MyPaymentHistory;
