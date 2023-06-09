import React from "react";
import { Input, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <Heading>BUYC Corp</Heading>
      <Input
        type="text"
        placeholder="Search OEM Specs"
        w={"400px"}
        bgColor={"white"}
      />
      <Link to={"/list-your-car"}>
        {" "}
        <Button>Add Listing</Button>
      </Link>
    </div>
  );
}

export default Navbar;
