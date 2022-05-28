import React, { useState } from "react";
import Rating from "react-rating";
import { toast } from "react-toastify";
import gray from "../../../assets/images/star-grey.png";
import yellow from "../../../assets/images/star-yellow.png";
import axiosPrivate from "../../../auth/axiosPrivate";
import useUser from "../../../hooks/useUser";

const AddAReview = () => {
  const [user] = useUser()
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const handleRation = async () => {
    const reviewInformation = { rating, review };
    const {
      data: { insertedId },
    } = await axiosPrivate.post(
      `https://infinite-escarpment-69850.herokuapp.com/add-review/${user?.email}`,
      {
        reviewInformation,
      }
    );
    if (insertedId) {
      toast.success("We received your review", {
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
  return (
    <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center justify-end text-center">
        <div class="card-title">
          <Rating
            onChange={(rating) => setRating(rating)}
            emptySymbol={<img src={gray} className="icon w-6" alt="" />}
            fullSymbol={<img src={yellow} className="icon w-6" alt="" />}
          />
        </div>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          class="textarea textarea-bordered h-36 w-80 bg-accent text-neutral"
          placeholder="Enter review"
        ></textarea>
        <div class="card-actions justify-end">
          <button onClick={handleRation} class="btn btn-warning mt-3">
            Add A Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;
