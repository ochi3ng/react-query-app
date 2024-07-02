import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Grid, Center, Spinner, Text } from '@chakra-ui/react';
import AddToCartButton from './AddToCartButton';

const fetchProduct = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const ProductList = () => {
  const { data, error, isLoading } = useQuery(['product'], fetchProduct);

  if (isLoading) {
    return (
      <Center height="100vh">
        <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.900" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center height="100vh">
        <Text fontSize="xl" color="red.500">Something went wrong, please try again</Text>
      </Center>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Center height="100vh">
        <Text fontSize="xl" color="blue.500">No products available</Text>
      </Center>
    );
  }

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
      {data.map(product => (
        <Box key={product.id} p={5} shadow="md" borderWidth="1px">
          <Text>{product.title}</Text>
          <img src={product.image} alt={product.title} style={{ width: '100%' }} />
          <Text mt={4}>{product.price} USD</Text>
          <AddToCartButton product={product} />
        </Box>
      ))}
    </Grid>
  );
};

export default ProductList;
