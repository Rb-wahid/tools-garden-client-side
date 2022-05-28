import React from "react";

const MngProductTROw = ({
  product,
  index,
  setManageDltModal,
  setManageUpdateModal,
}) => {
  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{product._id}</td>
      <td className="">{product.name.slice(0, 50) + "..."}</td>
      <td>
        <div>
          <label
            onClick={() => setManageUpdateModal(product)}
            for="my-modal-5"
            class="btn modal-button btn-info mr-2"
          >
            Update
          </label>
          <label
            onClick={() => setManageDltModal(product)}
            htmlFor="product-delete"
            class="btn btn-error"
          >
            Delete
          </label>
        </div>
      </td>
    </tr>
  );
};

export default MngProductTROw;
