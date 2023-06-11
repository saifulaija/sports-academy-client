import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import Fade from 'react-reveal/Fade';


const EnrolledClasses = () => {

      const { user, loading } = useContext(AuthContext);

      const [paymentClasses, setPaymentClasses] = useState([]);
    
      fetch(`http://localhost:5000/payment-all/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setPaymentClasses(data);
        });
    
      if(loading){
          return <Loader></Loader>
      }




      return (
            <div className="w-full bg-white p-16">
            <div className="max-w-[1280px] mx-auto border-[1px] border-yellow-500 rounded-xl shadow-xl p-6">
            <h3 className="text-3xl font-mono font-bold uppercase text-center text-yellow-400">
        Total Payment Classes : {paymentClasses.length}
      </h3>
              </div>
              <div className=" mx-auto p-10 flex justify-center items-center ">
                <div className="overflow-x-auto w-full font-mono mx-auto ">
                  <table className="table">
                    {/* head */}
                   <Fade top>
                   <thead>
                      <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th> Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                   </Fade>
                   <Fade bottom>
                   <tbody>
                      {paymentClasses.map((item, index) => (
                        <tr key={item._id}>
                          <th>{index + 1}</th>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={item.photo}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                   </Fade>
                  </table>
                </div>
              </div>
            </div>
         
      );
};

export default EnrolledClasses;