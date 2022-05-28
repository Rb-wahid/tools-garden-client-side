import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../../auth/axiosPrivate";
import DisplayError from "../../../components/DisplayError";
const imgdb_Key = "efd2e1df15b52bbe78354e035921cf12";
const imgDBUrl = `https://api.imgbb.com/1/upload?key=${imgdb_Key}`;

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({
    name,
    image,
    description,
    minimumOrder,
    quantity,
    price,
  }) => {
    const formData = new FormData();

    formData.append("image", image[0]);

    toast.info("Uploading", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    await axios.post(imgDBUrl, formData).then(async ({ data }) => {
      if (data.success) {
        const img = data.data.url;
        const productInformation = {
          name,
          image: img,
          description,
          minimumOrder,
          quantity,
          price,
          date: new Date().toLocaleString(),
        };

        const { data: res } = await axiosPrivate.post(
          "https://infinite-escarpment-69850.herokuapp.com/add-product",
          {
            productInformation,
          }
        );
        if (res.insertedId) {
          toast.success("New Product added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          reset();
        }
      }
    });
  };

  return (
    <div class="card lg:w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Add Product</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-secondary font-semibold  w-72"
        >
          <div class="form-control ">
            <input
              type="text"
              placeholder="Product name"
              class="input input-bordered bg-accent "
              {...register("name", {
                required: "Please fill out this field",
              })}
            />
            {errors.name?.type === "required" && (
              <DisplayError>{errors.name.message}</DisplayError>
            )}
          </div>
          <div class="form-control my-3">
            <input
              type="number"
              class="input input-bordered bg-accent"
              placeholder="Product price"
              {...register("price", {
                required: "Please fill out this field",
              })}
            />
            {errors.price?.type === "required" && (
              <DisplayError>{errors.price.message}</DisplayError>
            )}
          </div>
          <div class="form-control my-3">
            <input
              type="number"
              placeholder="Product Quantity"
              class="input input-bordered bg-accent"
              {...register("quantity", {
                required: "Please fill out this field",
              })}
            />
            {errors.quantity?.type === "required" && (
              <DisplayError>{errors.quantity.message}</DisplayError>
            )}
          </div>
          <div class="form-control my-3">
            <input
              type="number"
              placeholder="Minimum Order"
              class="input input-bordered bg-accent"
              {...register("minimumOrder", {
                required: "Please fill out this field",
              })}
            />
            {errors.minimumOrder?.type === "required" && (
              <DisplayError>{errors.minimumOrder.message}</DisplayError>
            )}
          </div>
          <div class="form-control">
            <textarea
              class="textarea textarea-bordered h-2/4 bg-accent "
              placeholder="Description"
              {...register("description", {
                required: "Please fill out this field",
              })}
            ></textarea>
            {errors.description?.type === "required" && (
              <DisplayError>{errors.description.message}</DisplayError>
            )}
          </div>
          <div class="form-control my-3">
            <input
              type="file"
              class="input input-bordered bg-accent pt-1"
              {...register("image", {
                required: "Please fill out this field",
              })}
            />
            {errors.image?.type === "required" && (
              <DisplayError>{errors.image.message}</DisplayError>
            )}
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-warning">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
