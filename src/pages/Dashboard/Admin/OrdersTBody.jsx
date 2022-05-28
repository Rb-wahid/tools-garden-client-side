import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../auth/axiosPrivate";

const OrdersTBody = ({ index, order, setDeleteModal, refetch }) => {
  const { _id, email, date, orderQuantity, totalPrice, isPaid, status } = order;

  const handleShipped = async (id) => {
    const {
      data: { modifiedCount },
    } = await axiosPrivate.put(
      `https://infinite-escarpment-69850.herokuapp.com/shipped-order/${id}`
    );

    if (modifiedCount) {
      refetch();
      toast.success("Shipped the Order Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <tr>
      <th>{index}</th>
      <td>{_id}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{orderQuantity}</td>
      <td>{`$${totalPrice}`}</td>
      <td>
        {isPaid && (
          <button
            onClick={() => handleShipped(_id)}
            disabled={status === "shipped"}
            class="btn btn-warning btn-sm"
          >
            Shipped
          </button>
        )}
      </td>
      <td>
        {status === "pending" ? (
          <button class="rounded btn-error font-semibold btn-sm w-24 uppercase">
            {status}
          </button>
        ) : status === "processing" ? (
          <button class="rounded btn-info btn-sm font-semibold  w-28 uppercase">
            {status}
          </button>
        ) : (
          <button class="rounded btn-success btn-sm font-semibold  w-24 uppercase">
            {status}
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrdersTBody;
