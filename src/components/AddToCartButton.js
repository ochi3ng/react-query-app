import React from 'react';
import { Button } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

const AddToCartButton = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <Button colorScheme="teal" onClick={() => addToCart(product)}>
            Add to Cart
        </Button>
    );
};

export default AddToCartButton;
