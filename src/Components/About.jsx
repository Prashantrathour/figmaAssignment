import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Speakers from "./Speakers";

function About() {
  return (
    <Box>
      <Box >
        <svg
          width="100%"
          height="495"
          viewBox="0 0 1440 495"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M0 141C0 141 640 91.5 937 28.5C1234 -34.5 1440 28.4998 1440 28.4998V424C1440 424 1170.5 174 730.5 347C290.5 520 0 493 0 493V141Z"
            fill="#538DD7"
          />
        </svg>
      </Box>
      <Box width={"100%"} height={"434px"} bg={"#FFDE00"} position={"absolute"} top={"0"} display={"flex"}  justifyContent={"center"} alignItems={"center"}>
         <Flex gap={'81px'}>
            <Box   bgImage={"https://ik.imagekit.io/ntmgxa7c6/Screenshot%202020-11-16%20at%201.08%20(1).jpg?updatedAt=1696775627932"}>
                <Image  opacity={.2} src="https://ik.imagekit.io/ntmgxa7c6/Screenshot%202020-11-16%20at%201.08.png?updatedAt=1696774314553"/>
                <Box position={"absolute"} bottom={0} left={"13%"}>
                <Image  src="https://ik.imagekit.io/ntmgxa7c6/unnamed%201.png?updatedAt=1696774314549"/></Box>
            </Box>
            <Box  display={"flex"} justifyContent={"center"} flexDirection={"column"} gap={"20px"}>
                <Box float={"left"}>
                    <Text w="238px" h="47px" fontWeight="600" fontSize='32px'>About SpeakIn</Text>
                </Box>
                <Box>
                    <Text textAlign={"left"} w="635px" h="134px" fontWeight="400" fontSize='18px' lineHeight={"28.26px"}>SpeakIn is Asia's largest on-demand network providing access to top regional speakers, thought leaders and their content. Enabling organizations to build performance agility and win over disruption, at SpeakIn only the best come together to inform, inspire and motivate.</Text>
                </Box>
            </Box>
         </Flex>
      </Box>
      <Speakers/>
    </Box>
  );
}

export default About;
