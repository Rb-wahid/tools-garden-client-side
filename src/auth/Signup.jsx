/* eslint-disable no-useless-escape */
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthError from "../components/AuthError";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="hero h-screen">
      <div class=" card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 class="card-title uppercase justify-center text-secondary ">
            Sign up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                class="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name can't be more than 20 char",
                  },
                })}
              />
              {errors.name?.type === "required" && (
                <AuthError>{errors.name.message}</AuthError>
              )}
              {errors.name?.type === "maxLength" && (
                <AuthError>{errors.name.message}</AuthError>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <AuthError>{errors.email.message}</AuthError>
              )}
              {errors.email?.type === "pattern" && (
                <AuthError>{errors.email.message}</AuthError>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <AuthError>{errors.password.message}</AuthError>
              )}
              <label class="label mt-1 text-sm">
                <span>Already have an account?</span>
                <Link
                  to={"/signin"}
                  class="label-text-alt link link-hover text-blue-400 text-sm ml-1 mr-2 uppercase"
                >
                  Please Signin
                </Link>
              </label>
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
