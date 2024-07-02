import React from 'react';
import { Box, Text, Link, HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.500" color="white" py={4} mt={8}>
      <HStack justify="center" spacing={4}>
        <Link href="#" color="white" isExternal>
          About Us
        </Link>
        <Link href="#" color="white" isExternal>
          Contact
        </Link>
        <Link href="#" color="white" isExternal>
          Privacy Policy
        </Link>
      </HStack>
      <Text mt={2} textAlign="center">
        © {new Date().getFullYear()} Todo App. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
