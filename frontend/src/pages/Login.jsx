import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Input,
  useToast,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [signupData, setSignupData] = useState(initialState);

  const initialLoginData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialLoginData);

  const toast = useToast();

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    let res = await fetch(`http://localhost:8080/dealers/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    let data = await res.json();
    console.log(data);
    setSignupData(initialState);
    toast({
      title: "Registered Successfully",
      description: "You can now login to explore the platform",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const handleChangeLogin = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    let res = await fetch("http://localhost:8080/dealers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    let data = await res.json();
    console.log(data);

    localStorage.setItem("token", data.data.token);

    let user = {
      id: data.data._id,
      name: data.data.name,
      email: data.data.email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    toast({
      title: "Login Success",
      description: "",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    navigate("/marketplace");
  };

  return (
    <div>
      <Heading textAlign={"center"}>BUYC Corp</Heading>
      <Container border={"2px solid navy"} mt={10}>
        <Tabs isFitted variant="enclosed">
          <TabList my="2em">
            <Tab color={"navy"} borderBottom={"5px solid navy"}>
              Signup
            </Tab>
            <Tab color={"navy"} borderBottom={"5px solid navy"}>
              Login
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <form action="#" onSubmit={registerUser}>
                <Box color={"navy"}>
                  <label htmlFor="signup-name">Name</label>
                  <Input
                    type="text"
                    name="name"
                    id="signup-name"
                    my={2}
                    onChange={handleChange}
                    value={signupData.name}
                  />
                </Box>
                <Box color={"navy"}>
                  <label htmlFor="signup-email">Email</label>
                  <Input
                    type="email"
                    name="email"
                    id="signup-email"
                    my={2}
                    onChange={handleChange}
                    value={signupData.email}
                  />
                </Box>
                <Box color={"navy"}>
                  <label htmlFor="signup-password">Password</label>
                  <Input
                    type="password"
                    name="password"
                    id="signup-password"
                    my={2}
                    onChange={handleChange}
                    value={signupData.password}
                  />
                </Box>
                <Input
                  type="submit"
                  value="Register"
                  bgColor={"navy"}
                  color={"white"}
                  mt={2}
                />
              </form>
            </TabPanel>
            <TabPanel>
              <form action="#" onSubmit={loginUser}>
                <Box color={"navy"}>
                  <label htmlFor="login-email">Email</label>
                  <Input
                    type="email"
                    name="email"
                    id="login-email"
                    my={2}
                    onChange={handleChangeLogin}
                  />
                </Box>
                <Box color={"navy"}>
                  <label htmlFor="login-password">Password</label>
                  <Input
                    type="password"
                    name="password"
                    id="login-password"
                    my={2}
                    onChange={handleChangeLogin}
                  />
                </Box>
                <Input
                  type="submit"
                  value="Login"
                  bgColor={"navy"}
                  color={"white"}
                  mt={2}
                />
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
}

export default Login;
