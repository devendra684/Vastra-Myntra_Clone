import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';


export default function Success() {
  return (
    <>
    <Navbar />
    <Box textAlign="center" py={10} px={6} mt={200}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Your order has  placed
      </Heading>
      <Text color={'gray.500'}>
        Thank you for shopping
      </Text>
      <Link to="/" >
        <Button
          mt="30px"
          color='#ffff3c6' >
          SHOP MORE
        </Button>
      </Link>
    </Box>
    </>
  );
}