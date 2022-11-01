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
  Heading,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import rocket from "../../assets/rocket.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isError = email || password === "";
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  return (
    <Grid
      templateColumns={{ md: "repeat(2, 1fr)" }}
      w="100%"
      alignItems="center"
    >
      <GridItem w="100%" overflow="hidden">
        <Img h={{ base: "50%", md: "100vh" }} src={rocket} alt="welcome img" />
      </GridItem>
      <GridItem
        w="100%"
        pt={{base:"15px", md:"0"}}
        pl={{ base: "50px", lg: "70px", xl: "120px" }}
        pr={{ base: "50px", lg: "70px", xl: "120px" }}
      >
        <Flex direction="column" alignItems="center">
          <Box w={{base:"80%",md:"60%"}} pb="20px">
            <Heading size="lg">Welcome to UwUMovies</Heading>
          </Box>
          <Box w={{base:"80%",md:"60%"}}>
            <Text fontSize="2xl">Login</Text>
            <FormControl onSubmit={() => console.log("you're logged")}>
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
              <Link to="/home">
              <Button type="submit">Login</Button>
              </Link>
            </FormControl>
            <Flex pt="15px">
              <Text>Don`t have an account?</Text>
              <Link to="/sign">
                <Button pl="10px" variant="link">
                  SignUp
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Login;
