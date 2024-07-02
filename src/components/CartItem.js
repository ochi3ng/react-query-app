import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();

    const handleRemove = () => {
        removeFromCart(item.id); // Assuming removeFromCart removes item by id
    };

    return (
        <Box borderWidth="1px" borderRadius="md" p="3" mb="3" display="flex" alignItems="center">
            <Box flex="1">
                <Text fontSize="xl">{item.name}</Text>
                <Text>{item.title}</Text>
                <img src={item.image} alt={item.title} style={{ width: '10%' }} />
                <Text>${item.price}</Text>
            </Box>
            <Button colorScheme="red" onClick={handleRemove} ml="3">
                Remove
            </Button>
        </Box>
    );
};

export default CartItem;
