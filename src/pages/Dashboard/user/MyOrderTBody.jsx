import React from "react";
import { useNavigate } from "react-router-dom";
const MyOrderTBody = ({ index, order, setDeleteModal }) => {
  const navigate = useNavigate();
  const {
    _id,
    productID,
    date,
    orderQuantity,
    totalPrice,
    isPaid,
    transactionId,
    status,
  } = order;

  return (
    <tr>
      <th>{index}</th>
      <td>{productID}</td>
      <td>{date}</td>
      <td>{orderQuantity}</td>
      <td>{`$${totalPrice}`}</td>
      <td>
        {isPaid ? (
          <div className="px-3 text-success">
            <h2>transactionId : </h2>
            <h2 className="text-orange-500 font-bold">{transactionId}</h2>
          </div>
        ) : (
          <div className="flex justify-center">
            <label
              onClick={() => {
                setDeleteModal(order);
              }}
              htmlFor="cancel-order-modal"
              class="btn btn-error btn-sm mr-3"
            >
              Cancel Order
            </label>
            <button
              onClick={() => navigate(`/payment/${_id}`)}
              class="btn btn-success btn-sm"
            >
              Please Pay
            </button>
          </div>
        )}
      </td>
      <td>
        {status === "pending" ? (
          <button class="rounded btn-error btn-sm w-24  font-semibold uppercase">
            {status}
          </button>
        ) : status === "processing" ? (
          <button class="rounded btn-info btn-sm w-28  font-semibold uppercase">
            {status}
          </button>
        ) : (
          <button class="rounded btn-success btn-sm w-24  font-semibold uppercase">
            {status}
          </button>
        )}
      </td>
    </tr>
  );
};

export default MyOrderTBody;
