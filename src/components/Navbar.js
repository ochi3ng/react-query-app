// import React from 'react';
// import { Box, Flex, Button } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import CartIcon from './CartIcon';

// const Navbar = () => {
//     return (
//         <Flex as="nav" p={5} bg="teal.500" color="white" justify="space-between" align="center">
//             <Box>
//                 <Button as={Link} to="/" variant="link" colorScheme="whiteAlpha" mr={4}>
//                     Home
//                 </Button>
//                 <Button as={Link} to="/features" variant="link" colorScheme="whiteAlpha" mr={4}>
//                     Features
//                 </Button>
//                 <Button as={Link} to="/cart" variant="link" colorScheme="whiteAlpha">
//                     Cart
//                 </Button>
//             </Box>
//             <Box>
//                 <CartIcon />
//             </Box>
//         </Flex>
//     );
// };

// export default Navbar;
import React from 'react';
import { Box, Flex, Heading, Spacer, HStack, Button, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
    return (
        <Box bg="teal.500" px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Heading as="h1" size="md" color="white">
                    Todo App
                </Heading>
                <Spacer />
                <HStack spacing={4}>
                    <ChakraLink as={Link} to="/" color="white" _hover={{ textDecoration: 'none' }}>
                        Home
                    </ChakraLink>
                    <ChakraLink as={Link} to="/Features" color="white" _hover={{ textDecoration: 'none' }}>
                        Features
                    </ChakraLink>
                    <ChakraLink as={Link} to="/Contacts" color="white" _hover={{ textDecoration: 'none' }}>
                        Contact
                    </ChakraLink>
                    <CartIcon />
                </HStack>
            </Flex>
        </Box>
    );
};

export default Navbar;
