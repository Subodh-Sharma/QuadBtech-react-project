import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box,Stack,Image,Text,Heading,Button } from "@chakra-ui/react";
import parse from "html-react-parser";

const Movie = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const score = location.state.score;
  const show = location.state.show;

  return (
    <Box display="flex" flexDir={{sm: "column",md:"column",lg:"row"}}>
      <Box flex="1" borderRight="2px solid black">
        <Stack mt="6" spacing="3">
          <Image
            height="300px"
            margin="auto"
            src={show.image.original}
            borderRadius="lg"
          />
          <Heading size="md">{show.name}</Heading>
          <Text>
            <span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Rating :</span> {show.rating.average ? show.rating.average : "NA"}
          </Text>
          <Text>
          <span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Gerres :</span>
            {" "}{show.genres.map((i) => {
              return <span>{i + ", "}</span>;
            })}
          </Text>
          <Text><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Language :</span> {show.language}</Text>
          <Text><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Runtime :</span> {show.runtime ? show.runtime : "NA"}</Text>
          <Button colorScheme='blue' w="80%" margin="auto" onClick={()=>{navigate("/bookingform",{state:{show:show}})}}>Book Show</Button>
        </Stack>
      </Box>
      <Box flex="3" borderLeft="2px solid black">
        <Stack w="80%" margin="auto">
        <Heading size="lg">{show.name}</Heading>
        <Text fontSize="1.2rem">{parse(show.summary)}</Text>
        <Text fontSize="1.2rem"><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Score :</span> {Math.round(score * 100) / 100}</Text>
        <Text fontSize="1.2rem"><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Premiered :</span> {show.premiered}</Text>
        <Text fontSize="1.2rem"><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Status :</span> {show.status}</Text>
        <Text fontSize="1.2rem"><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Schedule :</span> {show.schedule.days.map((i)=>{return(<span>{i+"-"+show.schedule.time+", "}</span>)})}</Text>
        <Button onClick={()=>{navigate("/")}}>Back To Home</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Movie;
