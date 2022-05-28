import React from "react";
import Rating from "react-rating";
import yellow from "../../assets/images/star-yellow.png";
import Spinner from "../../components/Spinner";
import useFetch from "../../hooks/useFetch";

const Review = () => {
  const { isLoading, data: reviews = [] } = useFetch(
    ["review"],
    "https://infinite-escarpment-69850.herokuapp.com/reviews"
  );

  if (isLoading) return <Spinner />;
  return (
    <section className="mt-24 mb-12 max-w-7xl mx-auto ">
      <h2 className="mb-12 text-center text-4xl my-8 font-bold text-warning">
        Our Customer's Review
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reviews.map(({ reviewInformation: { rating, review } }) => (
          <div
            key={review._id}
            class="card w-96 bg-neutral text-neutral-content"
          >
            <div class="card-body items-center text-center">
              <h2 class="card-title">
                <Rating
                  readonly
                  placeholderRating={rating}
                  placeholderSymbol={
                    <img src={yellow} className="icon w-6" alt="" />
                  }
                />
              </h2>
              <p>{review}</p>
              {/* <div class="card-actions justify-end">
                <button class="btn btn-primary">Accept</button>
                <button class="btn btn-ghost">Deny</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
