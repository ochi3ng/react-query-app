import React from 'react';
import { Box, Image, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import data from '../dammyData/Dammydata';

const DressesPage = () => {
    const dresses = data.dresses; // Extract dresses from data

    return (
        <Box p={8} bg="gray.50">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Dresses
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {dresses.map((dress) => (
                    <Box
                        key={dress.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                        transition="transform 0.2s"
                        bg="white"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center" height="200px" overflow="hidden">
                            <Image src={dress.image} alt={dress.name} objectFit="cover" boxSize="150px" />
                        </Box>
                        <Box p={6}>
                            <Text fontWeight="bold" fontSize="lg" mb={2}>
                                {dress.name}
                            </Text>
                            <Text fontSize="xl" color="teal.500" mb={2}>
                                ${dress.price.toFixed(2)}
                            </Text>
                            <Text color="gray.600">
                                {dress.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default DressesPage;
