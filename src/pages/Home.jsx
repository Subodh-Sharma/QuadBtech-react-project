import React,{useEffect, useState} from 'react'
import { SimpleGrid,Box } from '@chakra-ui/react';
import axios from "axios";
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [movieData,setMovieData] = useState([]);
    useEffect(()=>{
        const getMovieData = async() => {
            const data = await axios.get("https://api.tvmaze.com/search/shows?q=all");
            setMovieData(data.data);
        }
        getMovieData();
    },[]);
  return (
    <Box display="flex" w="90%" alignItems="center" margin="auto" marginTop="1rem">
        <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={6} margin="auto">
            {movieData && movieData.map((item)=><Box w='100%'><MovieCard key={item.show.id}{...item}/></Box>)}
        </SimpleGrid>
    </Box>
  )
}

export default Home;