import { Box, Flex, Text, Button, Image, VStack, Heading } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5} bg="gray.50">
      <VStack spacing={8} align="center">
        <Image src="/images/landing-hero.png" alt="GPT Engineer Hero Image" boxSize="300px" />
        <Heading as="h1" size="2xl" fontWeight="bold" textAlign="center">
          GPT Engineer
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Revolutionize your web development with AI-powered tools.
        </Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Flex>
  );
};

export default Index;