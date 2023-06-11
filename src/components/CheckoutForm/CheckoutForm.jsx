import { useState } from "react";
import "./CheckoutForm.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import axios from "axios";

const CheckoutForm = ({paymentData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState('')


   useEffect(()=>{
   if(paymentData?.price){
    axios.post('http://localhost:5000/create-payment-intent',{price: paymentData?.price}).then(res=>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
   }
   


   
   },[paymentData])



  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

      if (confirmError) {
        console.log("[error]", confirmError);
        setCardError(confirmError.message);
      } else {
        console.log("[PaymentMethod]", paymentMethod);
      }



  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" className="btn-third" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-1xl font-mono">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
