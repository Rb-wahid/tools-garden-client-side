import React from "react";
import google from "../assets/icon/google.svg";

const SocialSignin = () => {
  return (
    <div className="card-body pt-0">
      <div class="divider my-0">OR</div>
      <div class="form-control mt-6">
        <button type="submit" class="btn hover:btn-primary ">
          <img className="h-5 w-5 mr-3" src={google} alt="" />
          Signin with GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SocialSignin;
