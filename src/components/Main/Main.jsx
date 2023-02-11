import { Button, Flex, Text } from "@chakra-ui/react";
import uwu from "../../assets/uwulogo.png";
import styles from "./main.module.css";

const Main = () => {
  return (
    <Flex className={styles.bgImage} direction='column'>
      <Flex className={styles.main} bgColor="#121212">
        <Flex height="100%" bgColor="#121212">
          <img src={uwu} alt="logo" />
        </Flex>
        <Flex className={styles.message}>
          <Text fontSize={{ base: "xl", lg: "3xl" }}>
            Welcome to the best movies site
          </Text>
        </Flex>
      </Flex>
      <Flex w='100%' h='40%' alignItems={'center'} justifyContent="center">
        <Button>Sign In</Button>
        <Button>Log In</Button>
      </Flex>
    </Flex>
  );
};

export default Main;
