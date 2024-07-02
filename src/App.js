import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Contact from './pages/Contacts'; 

function App() {
    return (
        <CartProvider>
            <ChakraProvider>
                <Router>
                    <Navbar />
                    <Box p={5}>
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/features" element={<Features />} />
                            <Route path="/contacts" element={<Contact/>}/>
                        </Routes>
                    </Box>
                </Router>
            </ChakraProvider>
        </CartProvider>
    );
}

export default App;
