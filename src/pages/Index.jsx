import { Box, Flex, Text, VStack, Link, Container, Heading, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const theme = extendTheme({
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl2" p={0}>
        <Box as="header" bg="brand.800" w="100%" p={4} color="white">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="2xl" fontWeight="bold">John Doe</Text>
            <Flex>
              <Link href="#about" p={3}>About</Link>
              <Link href="#portfolio" p={3}>Portfolio</Link>
              <Link href="#contact" p={3}>Contact</Link>
            </Flex>
          </Flex>
        </Box>
        <VStack spacing={10} p={5}>
          <Box id="about" pt={10}>
            <Heading as="h2" size="xl">About Me</Heading>
            <Text mt={3} letterSpacing="wider">I am a professional web developer with a passion for creating elegant solutions in the least amount of time.</Text>
          </Box>
          <Box id="portfolio" pt={10}>
            <Heading as="h2" size="xl">Portfolio</Heading>
            <Text mt={3} letterSpacing="wider">Here are some of my recent projects.</Text>
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
        <Box as="footer" bg="brand.800" w="100%" p={4} color="white" mt={10} boxShadow="md">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="sm">© 2023 John Doe. All rights reserved.</Text>
            <Flex>
              <Link href="/privacy-policy" p={2}>Privacy Policy</Link>
              <Link href="https://facebook.com" isExternal p={2}><FaFacebookF /></Link>
              <Link href="https://twitter.com" isExternal p={2}><FaTwitter /></Link>
              <Link href="https://instagram.com" isExternal p={2}><FaInstagram /></Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Index;