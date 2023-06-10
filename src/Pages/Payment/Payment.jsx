import { useLoaderData } from "react-router-dom";


const Payment = () => {
const paymentData = useLoaderData()
console.log(paymentData);
      return (
            <div className="p-20 flex justify-center items-center text-center font-mono" >
                <div className="max-w-[800px]">

                <img className="object-cover" sizes={250} src={paymentData.photo} alt="" />
                <h3 className="font-bold text-3xl uppercase">Class Name: {paymentData.name}</h3>  
                <h3 className="text-rose-400">Price: {paymentData.price}</h3> 
                  
                  </div> 
            </div>
      );
};

export default Payment;

