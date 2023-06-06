import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import {VStack,FormControl,FormLabel,Input,Button,useToast,Box,Heading} from "@chakra-ui/react";

const BookingForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const show = location.state.show;
    const [name,setName] = useState();
    const [age,setAge] = useState();
    const [contact,setContact] = useState();
    const toast = useToast();
    const handleSumbit = ()=>{
        if(name && age && contact){
            toast({
                title: 'Booked Successfully',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            navigate("/");
        }
    }

  return (
    <Box w="60%" margin="auto">
     <VStack spacing="5px" marginTop="1.5rem" h="100%" border="2px solid black" padding="40px">
        <Heading>Movie Booking Form</Heading>
      <FormControl isRequired>
        <FormLabel>Movie Name</FormLabel>
        <Input
            type="text"
          placeholder="Enter Movie Name"
          value={show.name}
          bg="white"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Language</FormLabel>
        <Input
          type="text"
          bg="white"
          placeholder="Enter Preffered language"
          value={show.language}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          bg="white"
          placeholder="Enter Your Name"
          onChange={(e)=>{setName(e.target.value)}}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Age</FormLabel>
        <Input
          type="text"
          bg="white"
          placeholder="Enter Your Age"
          onChange={(e)=>{setAge(e.target.value)}}
        />
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Contact</FormLabel>
        <Input
          type="text"
          bg="white"
          placeholder="Enter Your Contact"
          onChange={(e)=>{setContact(e.target.value)}}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSumbit}
      >
        Book
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={()=>{navigate("/")}}
      >
        Cancel
      </Button>
    </VStack>
    </Box>
  )
}

export default BookingForm;