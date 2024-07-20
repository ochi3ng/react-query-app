import React from 'react';
import { Box, Flex, Heading, Spacer, HStack, Button, Link as ChakraLink, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
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
                    <ChakraLink as={Link} to="/features" color="white" _hover={{ textDecoration: 'none' }}>
                        Features
                    </ChakraLink>
                    <ChakraLink as={Link} to="/contacts" color="white" _hover={{ textDecoration: 'none' }}>
                        Contact
                    </ChakraLink>
                    <Menu>
                        <MenuButton as={Button} colorScheme="teal" variant="link" color="white" _hover={{ textDecoration: 'none' }}>
                            More Products
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/products/shoes">Shoes</MenuItem>
                            <MenuItem as={Link} to="/products/dresses">Dresses</MenuItem>
                            <MenuItem as={Link} to="/products/suits">Suits</MenuItem>
                            <MenuItem as={Link} to="/products/tshirts">T-Shirts</MenuItem>
                        </MenuList>
                    </Menu>
                    <CartIcon aria-label="Cart" />
                </HStack>
            </Flex>
        </Box>
    );
};

export default Navbar;
