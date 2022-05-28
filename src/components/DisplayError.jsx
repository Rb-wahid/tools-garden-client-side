import React from "react";

const DisplayError = ({ children }) => {
  return (
    <span className="  text-red-500 mt-1 px-5 py-1 rounded-lg bg-neutral font-medium">
      {children}
    </span>
  );
};

export default DisplayError;
