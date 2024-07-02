import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box>
            <VStack spacing={5}>
                <Heading as="h1" size="xl">
                    Welcome to the Todo App
                </Heading>
                <Text fontSize="lg">
                    Manage your tasks efficiently with our Todo App.
                </Text>
                <Button colorScheme="teal" size="lg" as={Link} to="/products">
                    View Products
                </Button>
            </VStack>
        </Box>
    );
};

export default Home;
