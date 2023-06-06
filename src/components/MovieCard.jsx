import React from "react";
import { useNavigate } from "react-router-dom";
import {Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button } from "@chakra-ui/react";


const MovieCard = ({score,show}) => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/movie",{state:{score:score,show:show}});
    }
  return (
    <Card maxW="sm" bg="#F1D4E5">
      <CardBody>
        <Image
          height="400px"
          margin="auto"
          src={show.image.original}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{show.name}</Heading>
          <Text>Rating : {show.rating.average ? show.rating.average:"NA"}</Text>
          <Text>Genres : {show.genres.map((i)=>{return(<span>{i+", "}</span>)})}</Text>
          <Text>Language : {show.language}</Text>
          <Text>Runtime : {show.runtime ? show.runtime : "NA"}</Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter alignItems="center">
          <Button variant="solid" colorScheme="blue" height='48px' width='100%' onClick={handleClick}>
            Check Out
          </Button>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
