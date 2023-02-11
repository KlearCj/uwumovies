import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import uwu from "../../assets/uwulogo.png";
import styles from "./main.module.css";

const Main = () => {
  return (
    <Flex className={styles.bgImage} direction="column">
      <Flex className={styles.main} bgColor="#121212">
        <Flex height="100%" alignItems="center" bgColor="#121212">
          <img src={uwu} alt="logo" />
        </Flex>
        <Flex className={styles.message}>
          <Text fontSize={{ base: "xl", lg: "3xl" }}>
            Welcome to the best movies site
          </Text>
        </Flex>
      </Flex>
      <Flex w="100%" h="40%" alignItems="center" justifyContent="center">
        <Box mr="20px">
          <Link to="/sign">
            <Button bgColor="#121212">Sign In</Button>
            <p>Don't have an acount yet?</p>
          </Link>
        </Box>
        <Box>
          <Link to="login">
            <Button bgColor="#121212">Log In</Button>
          </Link>
          <p>Login to see the movies</p>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Main;
