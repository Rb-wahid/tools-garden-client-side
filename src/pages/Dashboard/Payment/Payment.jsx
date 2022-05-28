import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useFetch from "../../../hooks/useFetch";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripeKey);

const Payment = () => {
  const { id } = useParams();
  const URL = `https://infinite-escarpment-69850.herokuapp.com/order-details/${id}`;
  const { data: order = {}, isLoading } = useFetch(["payment", id], URL);

  if (isLoading) return <Spinner />;
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order?.user}</p>
          <h2>
            <span className=" text-xl font-semibold"> Pay for : </span>
            <span className=" text-warning">{order?.productName}</span>
          </h2>

          <p className="card-title text-secondary">
            <span className="text-success">Please pay: </span>
            <span className=" text-2xl">${order.totalPrice}</span>
          </p>
        </div>
      </div>
      <div className=" ">
        <div class="card w-[450px]  shadow-2xl bg-base-100 text-gray-50">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
