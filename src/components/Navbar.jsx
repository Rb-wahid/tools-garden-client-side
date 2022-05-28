import React from "react";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import useUser from "../hooks/useUser";
import auth from "../Firebase.init";

const Navbar = () => {
  const [user] = useUser();
  const publicNav = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg">
          Home
        </NavLink>
      </li>
    </>
  );

  const endNav = (
    <>
      <li>
        <NavLink to="/blogs" className="rounded-lg">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className="rounded-lg">
          Portfolio
        </NavLink>
      </li>
    </>
  );

  const privateNav = (
    <>
      <li>
        <NavLink to="/dashboard" className="rounded-lg">
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 px-5 lg:px-20 fixed  top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {publicNav}
            {user && privateNav}
            {endNav}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-2xl uppercase font-extrabold italic text-warning"
        >
          Tools Garden
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {publicNav} {user && privateNav}
          {endNav}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <NavLink
            onClick={async () => {
              localStorage.removeItem("accessToken");
              await signOut(auth);
            }}
            to="/"
            className="btn"
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="/signin" className="btn">
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
