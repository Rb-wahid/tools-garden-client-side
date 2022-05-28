import React from "react";
import DisplayError from "../../components/DisplayError";
import Spinner from "../../components/Spinner";
import useFetch from "../../hooks/useFetch";
import Product from "./Product";

const productsApi = "https://infinite-escarpment-69850.herokuapp.com/products";

const Products = () => {
  const {
    isLoading,
    data: products,
    error,
  } = useFetch(["products"], productsApi);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) return <DisplayError />;
  return (
    <section className=" max-w-7xl mx-auto my-12">
      <h2 className="text-center text-4xl text-warning font-bold my-12">
        Our Products
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
