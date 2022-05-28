/* eslint-disable no-useless-escape */
import axios from "axios";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import DisplayError from "../components/DisplayError";
import Spinner from "../components/Spinner";
import auth from "../Firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, errorCreateUser] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    const userInformation = {
      name,
      email,
    };
    let { data: accessToken } = await axios.post(
      "https://infinite-escarpment-69850.herokuapp.com/token",
      {
        user: userInformation,
      }
    );
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      navigate("/");
    }
  };

  const error = errorCreateUser || errorUpdate;

  if (loading || updating) {
    return <Spinner />;
  }
  return (
    <section className="hero h-screen px-3">
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
                <DisplayError>{errors.name.message}</DisplayError>
              )}
              {errors.name?.type === "maxLength" && (
                <DisplayError>{errors.name.message}</DisplayError>
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
                <DisplayError>{errors.email.message}</DisplayError>
              )}
              {errors.email?.type === "pattern" && (
                <DisplayError>{errors.email.message}</DisplayError>
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
                <DisplayError>{errors.password.message}</DisplayError>
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
            {error && <DisplayError>{error.message}</DisplayError>}
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
