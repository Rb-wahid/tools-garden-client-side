import React from "react";
import DisplayError from "../../../components/DisplayError";
import Spinner from "../../../components/Spinner";
import useFetch from "../../../hooks/useFetch";
import OrdersTBody from "./OrdersTBody";

const ManageAllOrders = () => {
  const {
    isLoading,
    data: orders = [],
    error,
    refetch,
  } = useFetch(
    ["orders"],
    `https://infinite-escarpment-69850.herokuapp.com/orders`
  );

  if (isLoading) return <Spinner />;
  if (error) return <DisplayError>{error.message}</DisplayError>;
  return (
    <section className="w-screen flex justify-center items-center mt-5 mb-10">
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>

              <th className="text-center">Order ID</th>
              <th className="text-center">Custom Email</th>
              <th className="text-center">Time</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total Price</th>
              <th className="text-center">Action</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersTBody
                key={order._id}
                index={index + 1}
                order={order}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageAllOrders;
