import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({
  from,
  product: { _id, name, image, description, minimumOrder, quantity, price },
}) => {
  const navigate = useNavigate();
  return (
    <div class="card  bg-base-100 shadow-xl">
      <div className="flex flex-col">
        <h2 class="card-title p-5 text-justify text-warning pb-0">{name}</h2>
      </div>
      <div className="flex flex-col lg:flex-row p-3 lg:p-0 lg:pl-5">
        <figure>
          <img
            className="bg-accent px-3 py-10 rounded-2xl"
            src={image}
            alt={name}
          />
        </figure>
        <div class="card-body">
          <p className="card-title text-secondary">
            {" "}
            <span className="text-success"> Price : </span> ${price}{" "}
          </p>
          <p className="text-justify">{description}</p>
          <div className="font-semibold flex-col text-left text-secondary">
            <p>
              <span className="text-success"> Quantity : </span> {quantity}{" "}
              <small> unit</small>
            </p>
            <p>
              <span className="text-success"> Minimum Order : </span>
              {minimumOrder} <small>unit</small>
            </p>
          </div>
          <div className={`card-actions justify-end ${from && "hidden"}`}>
            <button
              onClick={() => navigate(`/purchase/${_id}`)}
              class="btn btn-primary"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
