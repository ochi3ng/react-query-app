import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, Container, Alert, AlertIcon } from '@chakra-ui/react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }
        setError('');

        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

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
                {success && (
                    <Alert status="success" mb={6}>
                        <AlertIcon />
                        Message sent successfully!
                    </Alert>
                )}
                {error && (
                    <Alert status="error" mb={6}>
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                <form onSubmit={handleSubmit}>
                    <FormControl id="name" mb={4} isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="email" mb={4} isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="message" mb={4} isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="teal" width="full">Send Message</Button>
                </form>
            </Container>
        </Box>
    );
};

export default Contact;
