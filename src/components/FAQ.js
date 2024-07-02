import React from 'react';
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 15 days of purchase for a full refund, provided it is in its original condition."
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping typically takes 3-5 business days."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to several countries. Please contact us for more details."
        },
        {
            question: "How can I track my order?",
            answer: "You will receive a tracking number via email once your order has been shipped. You can use the number to track your order on our website."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept M-Pesa, credit/debit cards, and bank transfers."
        },
    
    ];

    return (
        <Box mt={10} p={5} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="lg" mb={4}>Frequently Asked Questions</Heading>
            <Accordion allowToggle>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index}>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" color="black">
                                {faq.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            {faq.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default FAQ;
