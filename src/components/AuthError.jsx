import React from "react";

const AuthError = ({ children }) => {
  return (
    <span className="  text-red-500 mt-1 pl-5 py-1 rounded-lg bg-neutral font-medium">
      {children}
    </span>
  );
};

export default AuthError;
