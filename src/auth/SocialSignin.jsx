import React, { useEffect, useState } from "react";
import google from "../assets/icon/google.svg";
import auth from "../Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import AuthError from "../components/AuthError";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SocialSignin = ({ from }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [fromC, setFromC] = useState("/");

  useEffect(() => {
    const fetch = async (email) => {
      let {
        data: { accessToken },
      } = await axios.post("http://localhost:5000/token", {
        email,
      });
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        navigate(fromC, { replace: true });
      }
    };
    if (user) {
      const { email } = user.user;
      fetch(email);
    }
    if (from) {
      setFromC(from);
    }
  }, [navigate, from, fromC, user]);

  const handleSignin = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="card-body pt-0">
      <div class="divider my-0">OR</div>
      {error && <AuthError>{error.message}</AuthError>}
      <div class="form-control mt-6">
        <button
          onClick={handleSignin}
          type="submit"
          class="btn hover:btn-primary "
        >
          <img className="h-5 w-5 mr-3" src={google} alt="" />
          Signin with GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SocialSignin;
