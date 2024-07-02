// src/components/Features.js
import React from 'react';
import { Box, Heading, Text, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaRocket, FaMobileAlt, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

const features = [
    {
        icon: FaRocket,
        title: 'Fast Performance',
        description: 'Experience lightning fast speed with our state-of-the-art technology.',
    },
    {
        icon: FaMobileAlt,
        title: 'Mobile Friendly',
        description: 'Our platform is fully optimized for mobile devices.',
    },
    {
        icon: FaShieldAlt,
        title: 'Secure',
        description: 'We prioritize your security with top-notch encryption and security protocols.',
    },
    {
        icon: FaThumbsUp,
        title: 'User Friendly',
        description: 'Our user interface is intuitive and easy to navigate.',
    },
];

const Features = () => {
    return (
        <Box p={5}>
            <Heading as="h1" mb={6}>Our Features</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={5}
                        textAlign="center"
                    >
                        <Icon as={feature.icon} boxSize={12} color="teal.500" mb={4} />
                        <Heading as="h3" size="md" mb={2}>{feature.title}</Heading>
                        <Text>{feature.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Features;
