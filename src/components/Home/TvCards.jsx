import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
const img = "https://image.tmdb.org/t/p/w500";

const TvCards = ({ data }) => {
  return (
    <Box>
      <Heading>POPULAR TVSHOWS</Heading>
      <Flex alignItems="center" h="100vh" pr="50px" pl="50px">
        <Flex overflowX="auto">
          {data?.results.map((tv, i) => (
                <Img
                  key={i}
                  p="10px"
                  src={`${img}${tv.poster_path}`}
                  alt={tv.title}
                />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TvCards;
