import React from "react";
import Spinner from "../../components/Spinner";
import useFetch from "../../hooks/useFetch";

const Stat = () => {
  const { isLoading, data } = useFetch(
    ["review"],
    "https://infinite-escarpment-69850.herokuapp.com/stat"
  );
  if (isLoading) return <Spinner />;
  return (
    <>
      <div class="divider"></div>
      <section className="flex flex-col max-w-5xl mx-auto justify-center my-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-warning">
          business summary
        </h2>
        <div class="stats stats-vertical text-center lg:stats-horizontal shadow">
          <div class="stat">
            <div class="stat-title font-bold text-2xl pb-3"> Customer</div>
            <div class="stat-value text-center text-secondary">
              {data?.customers}
            </div>
          </div>
          <div class="stat">
            <div class="stat-title font-bold text-2xl pb-3">Tools</div>
            <div class="stat-value text-center text-secondary">
              {data?.products}
            </div>
          </div>
          <div class="stat">
            <div class="stat-title font-bold text-2xl pb-3">Total Sell</div>
            <div class="stat-value text-secondary">${data?.sell}</div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-2xl pb-3 ">Reviews</div>
            <div class="stat-value text-center text-secondary">
              {data?.reviews}
            </div>
          </div>
        </div>
      </section>
      <div class="divider"></div>
    </>
  );
};

export default Stat;
