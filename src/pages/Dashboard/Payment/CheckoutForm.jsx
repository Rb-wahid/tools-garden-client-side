import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, totalPrice, email, user } = order;

  useEffect(() => {
    fetch(
      "https://infinite-escarpment-69850.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price: totalPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your payment is completed.");

      //store payment on database
      const payment = {
        productID: _id,
        transactionId: paymentIntent.id,
        totalPrice,
        email,
        user,
      };
      fetch(
        `https://infinite-escarpment-69850.herokuapp.com/create-payment-intent/payment/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
        });
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
                color: "#e4e5f2",
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
        <button
          className={`btn btn-success btn-sm mt-4 ${
            (!stripe || !clientSecret || success || processing) && "hidden"
          }`}
          type="submit"
        >
          Pay
        </button>
      </form>
      {processing ? (
        <progress class="progress w-96 mt-12 "></progress>
      ) : (
        <>
          {cardError && <p className="text-red-500">{cardError}</p>}
          {success && (
            <div className="text-green-500">
              <p>{success} </p>
              <p>
                Your transaction Id:{" "}
                <span className="text-orange-500 font-bold">
                  {transactionId}
                </span>{" "}
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CheckoutForm;
