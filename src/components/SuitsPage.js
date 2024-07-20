import React from 'react';
import { Box, Image, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import data from '../dammyData/Dammydata';

const SuitsPage = () => {
    const suits = data.suits; // Extract suits from data

    return (
        <Box p={8} bg="gray.50">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Suits
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {suits.map((suit) => (
                    <Box
                        key={suit.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                        transition="transform 0.2s"
                        bg="white"
                    >
                        <Image src={suit.image} alt={suit.name} objectFit="cover" />
                        <Box p={6}>
                            <Text fontWeight="bold" fontSize="lg" mb={2}>
                                {suit.name}
                            </Text>
                            <Text fontSize="xl" color="teal.500" mb={2}>
                                ${suit.price.toFixed(2)}
                            </Text>
                            <Text color="gray.600">
                                {suit.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default SuitsPage;
