import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Marketplace from "../pages/Marketplace";
import PrivateRoute from "./PrivateRoute";

function AllRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/marketplace"
        element={
          <PrivateRoute>
            <Marketplace />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
