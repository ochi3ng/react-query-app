import React from 'react';
import { Box, Image, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import data from '../dammyData/Dammydata';

const ShoesPage = () => {
    const Shoes = data.shoes; // Extract Shoes from data

    return (
        <Box p={8} bg="gray.50">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Shoes
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {Shoes.map((Shoe) => (
                    <Box
                        key={Shoe.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                        transition="transform 0.2s"
                        bg="white"
                    >
                        <Box display="flex" justifyContent="center" alignItems="center" height="200px" overflow="hidden">
                            <Image src={Shoe.image} alt={Shoe.name} objectFit="cover" boxSize="150px" />
                        </Box>
                        <Box p={6}>
                            <Text fontWeight="bold" fontSize="lg" mb={2}>
                                {Shoe.name}
                            </Text>
                            <Text fontSize="xl" color="teal.500" mb={2}>
                                ${Shoe.price.toFixed(2)}
                            </Text>
                            <Text color="gray.600">
                                {Shoe.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ShoesPage;
