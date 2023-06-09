import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Marketplace from "../pages/Marketplace";
import PrivateRoute from "./PrivateRoute";
import ListYourCar from "../pages/ListYourCar";

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
      <Route
        path="/list-your-car"
        element={
          <PrivateRoute>
            <ListYourCar />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
