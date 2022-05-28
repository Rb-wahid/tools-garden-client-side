import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import useUser from "../hooks/useUser";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useUser();
  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
