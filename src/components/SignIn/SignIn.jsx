import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import yoda from "../../assets/baby_yoda.jpg";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => navigate("/home");

  const isError = username || email || password === "";
  return (
    <Grid
      templateColumns={{ md: "repeat(2, 1fr)" }}
      w="100%"
      alignItems="center"
    >
      <GridItem w="100%" overflow="hidden">
        <Img h={{ base: "50%", md: "100vh" }} src={yoda} alt="welcome img" />
      </GridItem>
      <GridItem
        w="100%"
        pt={{ base: "15px", md: "0" }}
        pl={{ base: "50px", lg: "70px", xl: "120px" }}
        pr={{ base: "50px", lg: "70px", xl: "120px" }}
      >
        <Flex direction="column" alignItems="center">
          <Box w={{ base: "80%", md: "60%" }}>
            <Text fontSize="2xl">SignIn</Text>
            <FormControl w="100%" onSubmit={handleSubmit}>
              <FormLabel pt="10px">USERNAME</FormLabel>
              <Input
                type="username"
                placeholder="Enter an username"
                value={username}
                onChange={handleUsernameChange}
              />
              <FormLabel pt="10px">EMAIL</FormLabel>
              <Input
                type="email"
                placeholder="Example@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
              <FormLabel pt="10px">PASSWORD</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
             {/*  //CAMBIAR EL LINK POR EL NAVIGATE */}
              <Link to="/login">
              <Button type="submit" variant="ghost">
                SignIn
              </Button>
              </Link>
            </FormControl>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default SignIn;
