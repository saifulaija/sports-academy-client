import { useLoaderData } from "react-router-dom";
 
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_pk}`);

const Payment = () => {
  const paymentData = useLoaderData();

  console.log(paymentData);
  return (
    <div className="md:p-20 w-full flex justify-center  items-center text-center font-mono">
      <div className=" p-10 border border-pink-500  rounded-2xl">
        <div className="flex justify-center items-center p-4">
          <img
            className="object-cover rounded-xl"
            width={150}
            src={paymentData.photo}
            alt=""
          />
        </div>
        <h3 className="font-bold text-xl uppercase">
          Class Name: {paymentData.name}
        </h3>
        <h3 className="text-rose-400 text-2xl font-bold">
          Pay Now:${paymentData.price}
        </h3>
        <div className="my-6 w-full">
          <Elements stripe={stripePromise}>
            <CheckoutForm paymentData={paymentData}></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
