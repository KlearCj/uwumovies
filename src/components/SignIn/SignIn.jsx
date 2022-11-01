import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleUsernameChange = (e) => setUsername(e.target.value);
const handleEmailChange = (e) => setEmail(e.target.value);
const handlePasswordChange = (e) => setPassword(e.target.value);
/* const handleError=()=> {const isError = username ||email || password === ""}; */
const isError = username ||email || password === ""
  return (
    <Flex justifyContent="center" alignItems="center" pt="200px">
    <Box w="400px">
    <FormControl w="100%">
      <FormLabel >USERNAME</FormLabel>
      <Input type="username" placeholder='Enter an username' value={username} onChange={handleUsernameChange} />
      <FormLabel pt="10px">EMAIL</FormLabel>
      <Input type="email" placeholder="Example@gmail.com"value={email} onChange={handleEmailChange} />
       <FormLabel pt="10px">PASSWORD</FormLabel>
      <Input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
    </FormControl>
    </Box>
    </Flex>
  );
};


export default SignIn