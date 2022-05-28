import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const isAdmin = useAdmin();
  return (
    <section className="">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center ">
          <h2 className="text-center font-bold text-2xl text-Secondary my-6">
            Welcome to Dashboard
          </h2>
          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="/dashboard">My Profile</NavLink>
            </li>

            {!isAdmin ? (
              <>
                {" "}
                <li>
                  <NavLink to="my-orders">My Orders</NavLink>
                </li>
                <li>
                  <NavLink to="add-review">Add Review</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="add-product">Add Product</NavLink>
                </li>
                <li>
                  <NavLink to="make-admin">Make Admin</NavLink>
                </li>
                <li>
                  <NavLink to="manage-products">Manage Products</NavLink>
                </li>
                <li>
                  <NavLink to="manage-all-orders">Manage All Orders</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
