import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAuthRoute = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Navigate to="/movies" replace />
  ) : (
    <Component {...props} />
  );
};

export default ProtectedAuthRoute;
