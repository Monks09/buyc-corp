import React from "react";
import { Container, Heading, Input, Box } from "@chakra-ui/react";

function ListYourCar(props) {
  return (
    <Container border={"2px solid red"} my={"50px"} p={4}>
      <Heading textAlign={"center"}>List Your Car</Heading>
      <form action="#">
        <Box my={4}>
          <label htmlFor="#">Title</label>
          <Input type="text" placeholder="Enter car model" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Image</label>
          <Input type="file" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Selling Price</label>
          <Input type="number" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Odometer Value</label>
          <Input type="number" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Major Scratches</label>
          <Input type="number" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Original Paint</label>
          <Input type="text" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Previous Accidents (if any)</label>
          <Input type="number" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Previous Buyers</label>
          <Input type="number" />
        </Box>
        <Box my={4}>
          <label htmlFor="#">Registration Place</label>
          <Input type="text" />
        </Box>
        <Input type="submit" value="Submit" bgColor={"navy"} color={"white"} />
      </form>
    </Container>
  );
}

export default ListYourCar;
