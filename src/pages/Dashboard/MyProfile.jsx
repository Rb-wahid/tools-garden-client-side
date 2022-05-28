import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../auth/axiosPrivate";
import DisplayError from "../../components/DisplayError";
import Spinner from "../../components/Spinner";
import useFetch from "../../hooks/useFetch";
import useUser from "../../hooks/useUser";

const MyProfile = () => {
  const [currentUser, loader] = useUser();

  const {
    isLoading,
    data: user,
    error,
  } = useFetch(
    ["user", currentUser?.email],
    `https://infinite-escarpment-69850.herokuapp.com/user/${currentUser?.email}`
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({
    name,
    email,
    phone,
    address,
    socialUrl,
    instituteName,
    degree,
    passingYear,
  }) => {
    const education = {
      instituteName,
      degree,
      passingYear,
    };
    const userInformation = {
      ...user,
      name,
      email,
      phone,
      address,
      socialUrl,
      education,
    };

    const { data } = await axiosPrivate.post(
      "https://infinite-escarpment-69850.herokuapp.com/update-user",
      {
        user: userInformation,
      }
    );
    if (data.modifiedCount) {
      toast.success("Profile updated successfully", {
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

  if (isLoading || loader) return <Spinner />;
  if (error) return <DisplayError>{error.message}</DisplayError>;
  return (
    <section>
      <div class="card lg:w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">User Information</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-secondary font-semibold  w-72"
          >
            <div class="form-control ">
              <input
                type="text"
                defaultValue={user?.name}
                class="input input-bordered bg-accent "
                {...register("name")}
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
                type="tel"
                defaultValue={user?.phone}
                placeholder="Phone number"
                class="input input-bordered bg-accent"
                {...register("phone", {
                  required: "Please fill out this field",
                })}
              />
              {errors.phone?.type === "required" && (
                <DisplayError>{errors.phone.message}</DisplayError>
              )}
            </div>
            <div class="form-control my-3">
              <textarea
                class="textarea textarea-bordered h-2/4 bg-accent "
                defaultValue={user?.address}
                placeholder="Address"
                {...register("address", {
                  required: "Please fill out this field",
                })}
              ></textarea>
              {errors.address?.type === "required" && (
                <DisplayError>{errors.address.message}</DisplayError>
              )}
            </div>
            <div class="form-control my-3">
              <input
                type="text"
                defaultValue={user?.education?.instituteName}
                placeholder="Education Institute Name"
                class="input input-bordered bg-accent"
                {...register("instituteName")}
              />
            </div>
            <div class="form-control my-3">
              <input
                type="text"
                defaultValue={user?.education?.degree}
                placeholder="Degree Title"
                class="input input-bordered bg-accent"
                {...register("degree")}
              />
            </div>
            <div class="form-control my-3">
              <label class="label">
                <span class=" text-accent label-text">Passing Year</span>
              </label>
              <input
                type="date"
                defaultValue={user?.education?.passingYear}
                class="input input-bordered bg-accent"
                {...register("passingYear")}
              />
            </div>

            <div class="form-control my-3">
              <input
                type="url"
                placeholder="Social Media Url"
                defaultValue={user?.socialUrl}
                class="input input-bordered bg-accent"
                {...register("socialUrl")}
              />
            </div>

            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
