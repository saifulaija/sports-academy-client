import { useState, useEffect, useContext } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateData } from "../../api/auth";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckoutForm = ({ paymentData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (paymentData?.price) {
      axios
        .post("http://localhost:5000/create-payment-intent", {
          price: paymentData?.price,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [paymentData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Disable form submission.
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      // Card Element not found. Handle appropriately.
      return;
    }

    try {
      // Create a payment method using the card Element
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        // Handle card validation errors
        console.error("[error]", error);
        setCardError(error.message);
        return;
      }

      // Confirm the card payment using clientSecret
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
        // Handle payment confirmation errors
        console.error("[error]", confirmError);
        setCardError(confirmError.message);
      } else {
        // Payment was successful
        console.log("[paymentIntent]", paymentIntent);

        if (paymentIntent.status === "succeeded") {
          // Save payment info in your database
          const paymentInfo = {
            ...paymentData,
            transactionId: paymentIntent.id,
            date: new Date(),
          };

          fetch("http://localhost:5000/payment", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(paymentInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                // Update booking status
                fetch(`http://localhost:5000/payment/${paymentData._id}`, {
                  method: "PATCH",
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                  });

                // Show success message and navigate to the desired page
                toast.success("Payment successful!!", paymentIntent.id);
                navigate("/dashboard/payment-classes");

                // TODO: Update students and seats
                updateData(paymentData?.classId);
              }
            });
        }
      }
    } catch (error) {
      // Handle any unexpected errors during payment processing
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
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
      {cardError && <p className="text-1xl font-mono">{cardError}</p>} */}


<form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card-element">
      Card Information
    </label>
    <div className="border rounded-md border-gray-300 p-2">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#000",
              "::placeholder": {
                color: "#6B7280",
              },
            },
            invalid: {
              color: "#EF4444",
            },
          },
        }}
        id="card-element"
      />
    </div>
  </div>
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
      disabled={!stripe}
    >
      Pay Now
    </button>
  </div>
</form>
{cardError && (
  <p className="text-red-500 text-sm mt-2 text-center font-medium">
    {cardError}
  </p>
)}

    </>
  );
};

export default CheckoutForm;
