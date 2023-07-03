import { Box, Text, Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box className="footer">
      <Flex
        align="center"
        justify="center"
        h="50px"
        bg="gray.200"
        borderTop="1px solid"
        borderColor="gray.300"
      >
        <Text className="studentName" mr={2}>
          Mohammad Firman Fardiansyah
        </Text>
        <Text className="studentId">FE4487715</Text>
      </Flex>
    </Box>
  );
};

export default Footer;