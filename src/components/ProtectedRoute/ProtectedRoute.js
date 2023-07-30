import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  if (props.loggedIn !== undefined) {
    return props.loggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to="/" replace />
    );
  }
};

export default ProtectedRoute;
