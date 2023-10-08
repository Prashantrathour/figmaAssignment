import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box bg={"black"} h={"187px"} color={"white"}>
      <Flex justifyContent={"space-between"} m="135px" alignItems={"center"}>
        <Box mt={"37px"}>
          <Image
            w="100%"
            src="https://ik.imagekit.io/ntmgxa7c6/Screenshot%202020-11-14%20at%207.38.png?updatedAt=1696781857692"
          />
          <Text
            ml="27px"
            width="323px"
            height="20px"
            opacity="0.5"
            fontFamily="Gotham Rounded"
            fontSize="14px"
            fontWeight="500"
            lineHeight="20px"
            letterSpacing="0.06em"
            textAlign="left"
          >
            © 2020 Speakin All rights reserved
          </Text>
        </Box>
        <Box>
          <Flex>
            <Input h="34px" w="333px" placeholder="Enter Your Email ID" />
            <Button p="10px 6px" width={"105px"} h="34px" ml="11px" colorScheme={"linkedin"} bg="#538DD7">
              Subscribe
            </Button>
          </Flex>
          <Text
            ml="27px"
            mt="18px"
            width="424px"
            height="17px"
            opacity="0.5"
            fontFamily="Poppins"
            fontSize="12px"
            fontWeight="400"
            lineHeight="17px"
            letterSpacing="0em"
            textAlign="right"
          >
            Subscribe to our news letter
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
