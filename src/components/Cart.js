import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cart } = useCart();

    return (
        <Box p="5">
            <Heading mb="5">Your Cart</Heading>
            {cart.length === 0 ? (
                <Text>Your cart is empty</Text>
            ) : (
                cart.map((item) => <CartItem key={item.id} item={item}  />)
            )}
        </Box>
    );
};

export default Cart;
