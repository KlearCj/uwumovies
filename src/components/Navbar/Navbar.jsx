import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Stack,
  Box,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent="end" mt="10px">
      <Stack direction={{ lg: "row", sm: "none" }} spacing={4} pr="50px">
        <Button variant="link">Home</Button>
        <Button variant="link">Movies</Button>
        <Button variant="link">TvShows</Button>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Profile
          </MenuButton>
          <MenuList>
            <MenuItem>
            Config
            </MenuItem>
            <MenuItem>
            Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export default Navbar;
