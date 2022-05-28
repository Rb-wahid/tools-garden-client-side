import React from "react";
import { useParams } from "react-router-dom";
import DisplayError from "../../components/DisplayError";
import Spinner from "../../components/Spinner";
import useFetch from "../../hooks/useFetch";
import Product from "../Home/Product";
import PurchaseForm from "./PurchaseForm";

const PurchasePage = () => {
  const { id } = useParams();
  const {
    isLoading,
    data: product,
    error,
    refetch,
  } = useFetch(["productId", id], `https://infinite-escarpment-69850.herokuapp.com/product/${id}`);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <DisplayError>{error.message}</DisplayError>;
  }
  return (
    <section className=" max-w-7xl mx-auto mt-16 lg:h-[calc(100vh_-_10rem)] lg:pb-28 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex justify-center items-center">
          <Product product={product} from="purchasePage" />
        </div>
        <PurchaseForm product={product} refetch={refetch} />
      </div>
    </section>
  );
};

export default PurchasePage;
