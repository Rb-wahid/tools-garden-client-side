import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DisplayError from "../../../components/DisplayError";
import Spinner from "../../../components/Spinner";
import auth from "../../../Firebase.init";
import useFetch from "../../../hooks/useFetch";
import OrderCancelModal from "../Modal/OrderCancelModal";
import MyOrderTBody from "./MyOrderTBody";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [deleteModal, setDeleteModal] = useState([]);
  const {
    isLoading,
    data: myOrders = [],
    error,
    refetch,
  } = useFetch(
    ["myOrders"],
    `https://infinite-escarpment-69850.herokuapp.com/order/${user?.email}`
  );

  if (isLoading || loading) return <Spinner />;
  if (error) return <DisplayError>{error.message}</DisplayError>;

  return (
    <section className="w-screen flex justify-center items-center">
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>

              <th className="text-center">Product ID</th>
              <th className="text-center">Time</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total Price</th>
              <th className="text-center">Action</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <MyOrderTBody
                key={order._id}
                index={index + 1}
                order={order}
                setDeleteModal={setDeleteModal}
              />
            ))}
          </tbody>
        </table>
        {Object.keys(deleteModal).length ? (
          <OrderCancelModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            refetch={refetch}
          />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
