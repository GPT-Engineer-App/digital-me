import { Box, Flex, Text, VStack, Link, Container, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" w="100%" p={4} color="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">John Doe</Text>
          <Flex>
            <Link href="#about" p={2}>About</Link>
            <Link href="#portfolio" p={2}>Portfolio</Link>
            <Link href="#contact" p={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} p={5}>
        <Box id="about" pt={10}>
          <Heading as="h2" size="xl">About Me</Heading>
          <Text mt={3}>I am a professional web developer with a passion for creating elegant solutions in the least amount of time.</Text>
        </Box>
        <Box id="portfolio" pt={10}>
          <Heading as="h2" size="xl">Portfolio</Heading>
          <Text mt={3}>Here are some of my recent projects.</Text>
          {/* Portfolio items would be listed here */}
        </Box>
        <Box id="contact" pt={10}>
          <Heading as="h2" size="xl">Contact</Heading>
          <VStack spacing={3}>
            <Link href="https://github.com" isExternal><FaGithub /> Github</Link>
            <Link href="https://linkedin.com" isExternal><FaLinkedin /> LinkedIn</Link>
            <Link href="mailto:example@example.com"><FaEnvelope /> Email</Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;