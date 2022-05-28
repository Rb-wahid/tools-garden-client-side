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
    <section className="mt-24 mb-12 max-w-7xl mx-5  lg:mx-auto ">
      <h2 className="mb-12 text-center text-3xl lg:text-4xl my-8 font-bold text-warning uppercase">
        Our Customer's Review
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {reviews.map(({ reviewInformation: { rating, review } }) => (
          <div
            key={review._id}
            class="card lg:w-96 bg-neutral text-neutral-content"
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
              <p className="text-justify">{review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
