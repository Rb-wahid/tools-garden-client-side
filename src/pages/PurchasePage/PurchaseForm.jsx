import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../auth/axiosPrivate";
import AuthError from "../../components/AuthError";
import useUser from "../../hooks/useUser";

const PurchaseForm = ({
  refetch,
  product: { _id, name, price, minimumOrder, quantity },
}) => {
  const [user] = useUser();
  const [orderQuantity, setOrderQuantity] = useState(minimumOrder);
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const tPrice = Number(orderQuantity) * Number(price);
    setTotalPrice(tPrice);
  }, [price, orderQuantity]);

  const onSubmit = async ({ user, email, phone, order, address }) => {
    const OrderInformation = {
      productID: _id,
      productName: name,
      user,
      email,
      phone,
      orderQuantity: order,
      address,
      totalPrice,
      isPaid: false,
      status: "pending",
      date: new Date().toLocaleString(),
    };
    const { data } = await axiosPrivate.post("http://localhost:5000/order", {
      OrderInformation,
    });
    if (data.insertedId) {
      toast.success("Order placed successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      refetch();
      reset();
    }
  };
  return (
    <div class="card lg:w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Order</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-secondary font-semibold  w-72"
        >
          <div class="form-control ">
            <input
              type="text"
              defaultValue={user?.displayName}
              class="input input-bordered bg-accent "
              {...register("user")}
              readOnly
            />
          </div>
          <div class="form-control my-3">
            <input
              type="text"
              defaultValue={user?.email}
              class="input input-bordered bg-accent"
              {...register("email")}
              readOnly
            />
          </div>
          <div class="form-control my-3">
            <input
              type="number"
              defaultValue={minimumOrder}
              class="input input-bordered bg-accent"
              {...register("order", {
                onChange: (e) => setOrderQuantity(e.target.value),
                max: {
                  value: quantity,
                  message: `Maximum order quantity ${quantity}`,
                },
                min: {
                  value: minimumOrder,
                  message: `Minimum order quantity ${minimumOrder}`,
                },
              })}
            />
            {errors.order?.type === "max" && (
              <AuthError>{errors.order.message}</AuthError>
            )}
            {errors.order?.type === "min" && (
              <AuthError>{errors.order.message}</AuthError>
            )}
          </div>
          <div class="form-control my-3">
            <input
              type="tel"
              placeholder="Phone number"
              class="input input-bordered bg-accent"
              {...register("phone", {
                required: "Please fill out this field",
              })}
            />
            {errors.phone?.type === "required" && (
              <AuthError>{errors.phone.message}</AuthError>
            )}
          </div>
          <div class="form-control">
            <textarea
              class="textarea textarea-bordered h-2/4 bg-accent "
              placeholder="Address"
              {...register("address", {
                required: "Please fill out this field",
              })}
            ></textarea>
            {errors.address?.type === "required" && (
              <AuthError>{errors.address.message}</AuthError>
            )}
          </div>
          <div className=" font-extrabold text-xl flex-col text-left text-warning mt-3">
            <p>
              <span className="text-success"> Total price : </span> $
              {totalPrice}
            </p>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;
