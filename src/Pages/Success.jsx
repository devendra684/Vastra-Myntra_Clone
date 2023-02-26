import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Your order has  placed
      </Heading>
      <Text color={'gray.500'}>
       thank you for shopping
      </Text>
      <Link to="/" >
      <Button
      mt="30px" 
       color='#ffff3c6' >
        SHOP MORE
      </Button>
           </Link>
    </Box>
  );
}