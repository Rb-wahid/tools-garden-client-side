import axios from "axios";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import google from "../assets/icon/google.svg";
import DisplayError from "../components/DisplayError";
import auth from "../Firebase.init";

const SocialSignin = ({ from }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async (user) => {
      const userInformation = {
        name: user.displayName,
        email: user.email,
      };
      let { data: accessToken } = await axios.post(
        "https://infinite-escarpment-69850.herokuapp.com/token",
        {
          user: userInformation,
        }
      );
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        navigate(from, { replace: true });
      }
    };
    if (user) {
      fetch(user.user);
    }
  }, [navigate, from, user]);

  const handleSignin = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="card-body pt-0">
      <div class="divider my-0">OR</div>
      {error && <DisplayError>{error.message}</DisplayError>}
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
