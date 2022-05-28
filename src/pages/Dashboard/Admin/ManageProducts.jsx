import React, { useState } from "react";
import DisplayError from "../../../components/DisplayError";
import Spinner from "../../../components/Spinner";
import useFetch from "../../../hooks/useFetch";
import ProductDeleteModal from "../Modal/ProductDeleteModal";
import ProductUpdateModal from "../Modal/ProductUpdateModal";
import MngProductTROw from "./MngProductTROw";
const productsApi = "https://infinite-escarpment-69850.herokuapp.com/products";

const ManageProducts = () => {
  const {
    isLoading,
    data: products = [],
    error,
    refetch,
  } = useFetch(["products"], productsApi);
  const [manageDltModal, setManageDltModal] = useState({});
  const [manageUpdateModal, setManageUpdateModal] = useState({});

  if (isLoading) {
    return <Spinner />;
  }

  if (error) return <DisplayError />;

  return (
    <section>
      <div class="overflow-x-auto ">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th className="text-center">Index</th>
              <th className="text-center">Product ID</th>
              <th className="">Product Name</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <MngProductTROw
                product={product}
                index={index}
                setManageDltModal={setManageDltModal}
                setManageUpdateModal={setManageUpdateModal}
              />
            ))}
          </tbody>
        </table>
        {Object.keys(manageDltModal).length ? (
          <ProductDeleteModal
            manageDltModal={manageDltModal}
            setManageDltModal={setManageDltModal}
            refetch={refetch}
          />
        ) : (
          <></>
        )}
        {Object.keys(manageUpdateModal).length ? (
          <ProductUpdateModal
            manageUpdateModal={manageUpdateModal}
            setManageUpdateModal={setManageUpdateModal}
            refetch={refetch}
          />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default ManageProducts;
