import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function CrousalDiv() {
  return (
    <Box
      fontFamily={"Poppins"}
      width={"100vw"}
      h={"429px"}
   
      bg={"linear-gradient(135deg, #6CA4EB, #5E97E1, #4D89D6)"}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Box color={"white"} mt="129px">
          <Box w="318px" h="93px">
            <Text fontWeight={600} fontSize={"42px"} lineHeight={"39.9px"}>
              Real People Real Learnning
            </Text>
          </Box>
          <Box w="442px" height={"56px"}>
            {" "}
            <Text color={"white"} fontWeight={400} fontSize={"18px"}>
              SpeakIn is Asia's largest on-demand network providing access to
              top regional speakers.
            </Text>
          </Box>
        </Box>
        <Box mt="38px" width={"501.66px"} h="304.58px" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Image width={"501.66px"} h="304.58px" src="https://ik.imagekit.io/ntmgxa7c6/ashutosh-pandey-1%201.png?updatedAt=1696749340677" />
          <Box position={"relative"} bottom={"30px"} w="403px" h="51px"><Text color={"white"} fontSize={"18px"} fontWeight={400}>Dr. Muhammad Yunis, Nobel Laureate and conomist</Text></Box>
          
          <Box>
            <svg
              width="64"
              height="10"
              viewBox="0 0 64 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 1026">
                <circle id="Ellipse 30" cx="5" cy="5" r="5" fill="white" />
                <circle
                  id="Ellipse 31"
                  opacity="0.5"
                  cx="23"
                  cy="5"
                  r="5"
                  fill="white"
                />
                <circle
                  id="Ellipse 32"
                  opacity="0.5"
                  cx="41"
                  cy="5"
                  r="5"
                  fill="white"
                />
                <circle
                  id="Ellipse 33"
                  opacity="0.5"
                  cx="59"
                  cy="5"
                  r="5"
                  fill="white"
                />
              </g>
            </svg>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default CrousalDiv;
