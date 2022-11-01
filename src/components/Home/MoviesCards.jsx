import { Box, Flex, Grid, GridItem, Heading, Img } from "@chakra-ui/react";
import React from "react";
const img = "https://image.tmdb.org/t/p/w500";

const MoviesCards = ({ data }) => {
  return (
    <Box>
      <Heading>
        POPULAR MOVIES
      </Heading>
    <Flex alignItems="center" h="100vh" pr="50px" pl="50px">
     <Flex overflowX="scroll" >
     {data?.results.map((movie, i) => (
      <Flex h="300px" w="400px" p="10px" overflow="hidden"key={i} >
        <Img src={`${img}${movie.poster_path}`} alt={movie.title} />
      </Flex>
        ))}
     </Flex>
    
    </Flex>
    </Box>     
  );
};

export default MoviesCards;

 {/*   <Grid templateColumns="repeat(5, 1fr)" gap={4} p="50px">
        {data?.results.map((movie, i) => (
          <GridItem maxW="sm" borderWidth="1px" overflow="hidden" key={i}>
            <Img src={`${img}${movie.poster_path}`} alt={movie.title} />
          </GridItem>
        ))}
      </Grid> */}