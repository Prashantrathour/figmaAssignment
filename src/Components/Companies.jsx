import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Companies() {
  return (
    <Box
      margin={"auto"}
      
      fontFamily="Poppins"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box >
        <Text textAlign={"center"} w="483px" h="94px" fontSize={"32px"} fontWeight={600} lineHeight={"47.36px"}>
          Your SpeakIn is Trusted by the Best of Clients
        </Text>
      </Box>
      <Box mt="18px" >
        <Text
        w="484px" h="42px"
          fontSize={"14px"}
          fontWeight={"400"}
          lineHeight={"20.72px"}
          textAlign={"center"}
        >
          SpeakIn speakers have enthralled audiences across top-of-the-line
          businesses in varied sectors globally.
        </Text>
      </Box>
      <Box height={"155px"}>
        <Image objectFit={"cover"} width={"100%"} h={"100%"}  src="https://ik.imagekit.io/ntmgxa7c6/Screenshot%202020-11-27%20at%207.16.png?updatedAt=1696770665258"/>
      </Box>
    </Box>
  );
}

export default Companies;
