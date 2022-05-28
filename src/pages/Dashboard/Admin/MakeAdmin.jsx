import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../auth/axiosPrivate";
import DisplayError from "../../../components/DisplayError";
import Spinner from "../../../components/Spinner";
import useFetch from "../../../hooks/useFetch";
import useUser from "../../../hooks/useUser";

const MakeAdmin = () => {
  const [me, loader] = useUser();
  const {
    isLoading,
    data: users = [],
    error,
    refetch,
  } = useFetch(
    ["users"],
    `https://infinite-escarpment-69850.herokuapp.com/users`
  );

  const handleRemoveAdmin = async ({ email }) => {
    const { data } = await axiosPrivate.put(
      `https://infinite-escarpment-69850.herokuapp.com/remove-admin/${me?.email}`,
      {
        email,
      }
    );

    if (data.modifiedCount) {
      refetch();
      toast.info("Removed Admin successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleMakeAdmin = async ({ email }) => {
    const { data } = await axiosPrivate.put(
      `https://infinite-escarpment-69850.herokuapp.com/make-admin/${me?.email}`,
      { email }
    );

    if (data.modifiedCount) {
      refetch();
      toast.success("Made Admin successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (isLoading || loader) return <Spinner />;
  if (error) return <DisplayError>{error.message}</DisplayError>;
  return (
    <section>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead className="">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.email !== me.email)
              .map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "user" ? (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-success"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveAdmin(user)}
                        className="btn btn-error"
                      >
                        remove Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakeAdmin;
