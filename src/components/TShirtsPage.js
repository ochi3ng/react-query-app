

import React from 'react';
import { Box, Image, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import data from '../dammyData/Dammydata';

const TShirtsPage = () => {
    const tshirts = data.tshirts; // Extract tshirts from data

    return (
        <Box p={8} bg="gray.50">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                T-Shirts
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {tshirts.map((tshirt) => (
                    <Box
                        key={tshirt.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                        transition="transform 0.2s"
                        bg="white"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center" overflow="hidden">
                            <Image src={tshirt.image} alt={tshirt.name} objectFit="cover"  />
                            </Box>
                        <Box p={6}>
                            <Text fontWeight="bold" fontSize="lg" mb={2}>
                                {tshirt.name}
                            </Text>
                            <Text fontSize="xl" color="teal.500" mb={2}>
                                ${tshirt.price.toFixed(2)}
                            </Text>
                            <Text color="gray.600">
                                {tshirt.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default TShirtsPage;

