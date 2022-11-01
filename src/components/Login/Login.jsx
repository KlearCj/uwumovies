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
import { Link } from "react-router-dom";
import rocket from "../../assets/rocket.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isError = email || password === "";
  const handleEmailChange = (e) =>  setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  return (
    <Grid templateColumns="repeat(2, 1fr)" w="100%" alignItems="center">
      <GridItem w="100%" overflow="hidden">
        <Img h="100vh" src={rocket} alt="welcome img" />
      </GridItem>
      <GridItem w="100%" pl="230px">
        <Box w="60%" >
          <Text >Login</Text>
          <FormControl onSubmit={()=> console.log("you're logged")}>
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
          <Button type='submit'>Login</Button>
          </FormControl>
          <Flex pt="15px">
            <Text>Don`t have an account?</Text>
            <Link to="/sign">
            <Button pl="10px" variant='link'>
              SignUp
            </Button>
            </Link>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Login;
