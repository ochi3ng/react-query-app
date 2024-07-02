import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, Container } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box
            bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiWy737ibGj1AsHoRwP1yNF7uR_uu6rUy0XM0dWnqp4opjGORZw60dv6EETuZNDzglEg&usqp=CAU')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Container maxW="md" bg="whiteAlpha.900" p={5} borderRadius="lg" boxShadow="xl">
                <Heading as="h1" mb={6}>Contact Us</Heading>
                <form>
                    <FormControl id="name" mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Your Name" />
                    </FormControl>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Your Email" />
                    </FormControl>
                    <FormControl id="message" mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Your Message" />
                    </FormControl>
                    <Button type="submit" colorScheme="teal" width="full">Send Message</Button>
                </form>
            </Container>
        </Box>
    );
};

export default Contact;
