import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to={"/signin"} state={location.pathname} replace />;
  }
  return children;
};

export default ProtectedRoute;
