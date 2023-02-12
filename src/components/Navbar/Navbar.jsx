import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import logo from "../../assets/uwulogo.png";

const Navbar = () => {
  return (
    <Flex
      h="50px"
      w="100%"
      justifyContent="space-between"
      bgColor="inherit"
      pos="fixed"
      zIndex={1000}
    >
      <Flex
        width={{ base: "50%", md: "25%" }}
        h={{ base: "15vh", lg: "20vh" }}
        ml="20px"
      >
        <img src={logo} alt="logo" />
      </Flex>
      <Flex mt="30px" mr="50px" display={{ base: "none", md: "flex" }}>
        <Flex mr="5px">
          <Button colorScheme="#121212" variant="ghost">
            Home
          </Button>
          <Button colorScheme="#121212" variant="ghost">
            Movies
          </Button>
          <Button colorScheme="#121212" variant="ghost">
            TvShows
          </Button>
        </Flex>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Profile
          </MenuButton>
          <MenuList>
            <MenuItem>Config</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} m="25px">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Movies</MenuItem>
            <MenuItem>Tv shows</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
