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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import yoda from "../../assets/baby_yoda.jpg";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate=useNavigate()

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit=(e)=> navigate("/home")

  const isError = username || email || password === "";
  return (
    <Grid templateColumns="repeat(2, 1fr)" w="100%" alignItems="center">
      <GridItem w="100%" overflow="hidden">
        <Img h="100vh" src={yoda} alt="welcome img" />
      </GridItem>
      <GridItem w="100%" pl="230px">
        <Box w="60%">
          <FormControl w="100%" onSubmit={handleSubmit}>
            <FormLabel>USERNAME</FormLabel>
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
            <Button type='submit' variant='ghost'>SignIn</Button>
          </FormControl>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SignIn;
