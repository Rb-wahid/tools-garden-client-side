import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../auth/axiosPrivate";

const OrderCancelModal = ({ deleteModal, refetch, setDeleteModal }) => {
  const handleCancel = async () => {
    const {
      data: { deletedCount },
    } = await axiosPrivate.delete(
      `http://localhost:5000/cancel-order/${deleteModal._id}`
    );
    if (deletedCount) {
      toast.success("Cancelled the Product Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      refetch();
      setDeleteModal({});
    }
  };
  return (
    <>
      <input type="checkbox" id="cancel-order-modal" class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box w-96 relative pb-12">
          <label
            onClick={() => setDeleteModal({})}
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-warning">Are You Sure?</h3>
          <h5 class="text-lg font-bold text-warning">
            Want to cancel the Order!!
          </h5>
          <p class="py-4">You can't undo after Cancel.</p>

          <button
            onClick={handleCancel}
            className="btn btn-error  absolute right-5 bottom-3"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderCancelModal;
