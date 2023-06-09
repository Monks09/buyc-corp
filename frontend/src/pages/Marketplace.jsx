import { Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Marketplace(props) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCarsData();
  }, []);

  const fetchCarsData = async () => {
    let res = await fetch(`http://localhost:8080/inventory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    let data = await res.json();
    console.log(data);
  };
  return (
    <div className="marketplace">
      <Heading textAlign={"center"}>Marketplace</Heading>
      <SimpleGrid>{}</SimpleGrid>
    </div>
  );
}

export default Marketplace;
