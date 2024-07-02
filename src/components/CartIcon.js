import React from 'react';
import { Box, IconButton, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const { cart } = useCart();
    const cartItemCount = cart.length;
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <Box position="relative">
            <IconButton
                icon={<FaShoppingCart />}
                variant="outline"
                colorScheme="teal"
                aria-label="Cart"
                onClick={handleCartClick}
            />
            {cartItemCount > 0 && (
                <Badge
                    colorScheme="red"
                    borderRadius="full"
                    position="absolute"
                    top="-1"
                    right="-1"
                    width="18px"
                    height="18px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {cartItemCount}
                </Badge>
            )}
        </Box>
    );
};

export default CartIcon;
