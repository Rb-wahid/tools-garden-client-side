/* eslint-disable no-useless-escape */
import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthError from "../components/AuthError";
import Spinner from "../components/Spinner";
import auth from "../Firebase.init";
import SocialSignin from "./SocialSignin";

const Signin = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async ({ email, password }) => {
    await signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [from, navigate, user]);

  if (loading) return <Spinner />;

  return (
    <section className="hero h-screen">
      <div class=" card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 class="card-title uppercase justify-center text-secondary ">
            Sign in
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <label class="label mt-1 ">
                <Link
                  to="#!"
                  class="label-text-alt link link-hover text-blue-400 text-sm"
                >
                  Forgot password?
                </Link>
                <Link
                  to={"/signup"}
                  class="label-text-alt link link-hover text-blue-400 text-sm uppercase"
                >
                  Create new account
                </Link>
              </label>
            </div>
            {error && <AuthError>{error.message}</AuthError>}
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <SocialSignin from={from} />
      </div>
    </section>
  );
};

export default Signin;
