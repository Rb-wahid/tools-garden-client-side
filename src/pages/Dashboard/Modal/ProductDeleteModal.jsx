import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../auth/axiosPrivate";

const ProductDeleteModal = ({ manageDltModal, setManageDltModal, refetch }) => {
  const handleDelete = async () => {
    const {
      data: { deletedCount },
    } = await axiosPrivate.delete(
      `http://localhost:5000/delete-product/${manageDltModal._id}`
    );
    if (deletedCount) {
      toast.success("Deleted the Product Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      refetch();
      setManageDltModal({});
    }
  };
  return (
    <>
      <input type="checkbox" id="product-delete" class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box w-96 relative pb-12">
          <label
            onClick={() => setManageDltModal({})}
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-warning">Are You Sure?</h3>
          <h5 class="text-lg font-bold text-warning">
            Want to delete the product!!
          </h5>
          <p class="py-4">You can't undo after delete.</p>

          <button
            onClick={handleDelete}
            className="btn btn-error  absolute right-5 bottom-3"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDeleteModal;
