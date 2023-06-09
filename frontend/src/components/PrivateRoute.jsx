import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  let token = localStorage.getItem("token") || null;

  if (token) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
