import React from 'react'
import { Box, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box display="flex" w="100%" h="5rem" bg="#080202" color="gold" justifyContent="center" alignItems="center">
        <Text fontSize="1.5rem">QuadBtech Movie Review</Text>
    </Box>
  )
}

export default Navbar;