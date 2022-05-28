import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../../auth/axiosPrivate";
import AuthError from "../../../components/AuthError";

const ProductUpdateModal = ({
  refetch,
  manageUpdateModal: { _id, name, description, minimumOrder, quantity, price },
  setManageUpdateModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({
    name,
    description,
    minimumOrder,
    quantity,
    price,
  }) => {
    const productInformation = {
      name,
      description,
      minimumOrder,
      quantity,
      price,
      date: new Date().toLocaleString(),
    };

    console.log(productInformation);
    const {
      data: { matchedCount },
    } = await axiosPrivate.put(`http://localhost:5000/update-product/${_id}`, {
      productInformation,
    });
    if (matchedCount) {
      toast.success("Updated the Product successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      refetch();
      setManageUpdateModal({});
    }
  };
  return (
    <section>
      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 lg:mt-12 flex flex-col items-center justify-center">
          {/* body */}
          <div class="card lg:w-[450px] bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Update Product</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-secondary font-semibold "
              >
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text text-black">Product Name:</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Product name"
                    defaultValue={name}
                    class="textarea textarea-bordered h-2/4 bg-accent "
                    {...register("name", {
                      required: "Please fill out this field",
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <AuthError>{errors.name.message}</AuthError>
                  )}
                </div>
                <div class="form-control my-3 lg:w-96">
                  <label class="label">
                    <span class="label-text text-black">Product Price:</span>
                  </label>
                  <input
                    type="number"
                    class="input input-bordered bg-accent"
                    placeholder="Product price"
                    defaultValue={price}
                    {...register("price", {
                      required: "Please fill out this field",
                    })}
                  />
                  {errors.price?.type === "required" && (
                    <AuthError>{errors.price.message}</AuthError>
                  )}
                </div>
                <div class="form-control my-3">
                  <label class="label">
                    <span class="label-text text-black">Product Quantity:</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Product Quantity"
                    defaultValue={quantity}
                    class="input input-bordered bg-accent"
                    {...register("quantity", {
                      required: "Please fill out this field",
                    })}
                  />
                  {errors.quantity?.type === "required" && (
                    <AuthError>{errors.quantity.message}</AuthError>
                  )}
                </div>
                <div class="form-control my-3">
                  <label class="label">
                    <span class="label-text text-black">Minimum Order :</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Minimum Order"
                    defaultValue={minimumOrder}
                    class="input input-bordered bg-accent"
                    {...register("minimumOrder", {
                      required: "Please fill out this field",
                    })}
                  />
                  {errors.minimumOrder?.type === "required" && (
                    <AuthError>{errors.minimumOrder.message}</AuthError>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-black">Description :</span>
                  </label>
                  <textarea
                    class="textarea textarea-bordered h-2/4 bg-accent "
                    placeholder="Description"
                    defaultValue={description}
                    {...register("description", {
                      required: "Please fill out this field",
                    })}
                  ></textarea>
                  {errors.description?.type === "required" && (
                    <AuthError>{errors.description.message}</AuthError>
                  )}
                </div>

                <div class="lg:form-control mt-6 flex gap-3 items-center lg:items-stretch ">
                  <button class="btn btn-warning" type="submit">
                    Update Product
                  </button>
                  <label
                    onClick={() => setManageUpdateModal({})}
                    for="my-modal-5"
                    class="btn btn-info text-black lg:mt-3"
                    type="button"
                  >
                    Cancel
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductUpdateModal;
