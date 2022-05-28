import React from "react";
import video from "../../assets/video//rto-hero-v1 .mp4";
const Header = () => {
  return (
    <header>
      <video src={video} className="w-screen" autoPlay loop muted />
      <div class="hidden lg:block card w-96 shadow-xl top-96 left-72 absolute bg-transparent bg-base-100">
        <div class="card-body">
          <h2 class="text-5xl uppercase font-bold text-warning">
            Rule the outdoors
          </h2>
          <p className="text-xl font-semibold">
            Discover the world’s largest professional cordless outdoor power
            equipment system.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
