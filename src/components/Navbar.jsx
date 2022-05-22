import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = true;
  const publicNav = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg">
          Home
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
    <nav className="navbar bg-accent px-5 lg:px-20">
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
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Tools Garden
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {publicNav} {user && privateNav}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <NavLink to="/" className="btn">
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
