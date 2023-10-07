import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Form from "./Form";

const FormDiv = () => (
  <Box
    width="533px"
    height="885px"
    top="720px"
    left="168px"
    overflow="hidden" // To hide the folded part
  >
    <Box
      position="absolute"
      top= "685px"
    right= '180px'
      width="0"
      height="0"
      borderStyle="solid"
      borderWidth="0 39.55px 71.46px 0"
      borderColor="transparent transparent #C4DBFA transparent"
      transform="rotate(-2.74deg)"
      zIndex={2}
      ></Box>
    <Box
      width="533px"
      height="885px"
      top="720px"
      left="168px"
      //   border="1px solid #AEB7C3"
      bg="#FFFFFF"
      borderColor="#AEB7C3"
      position="absolute"
      ></Box>

    <Box
    //   transform="scaleX(0.7) scaleY(0.7) rotate(45deg)"
      width="596px"
      height="954px"
      top="688.5px"
      left="136px"
      opacity="0.96"
      boxShadow="0px 23px 64px 0px rgba(83, 141, 215, 0.45)"
      backgroundColor="white"
      position="absolute"
    ></Box>

    <Box
      width="533px"
      height="885px"
      top="720px"
      left="168px"
      border="2px dashed #AEB7C3"
      borderColor="#AEB7C3"
      position="absolute"
    >
      <Flex flexDirection={"column"} justifyContent={"center"} margin={"42.5"}>
        <Stack margin={"auto"}>
          <Box
            width="140px"
            height="45px"
            backgroundImage={`url(https://s3-alpha-sig.figma.com/img/469b/7223/d0036baddc870ca9aa98f9466e3bbd48?Expires=1697414400&Signature=elwZMNwHGIOBxccgrMv5UBXHx0b62G5QIVpIg8PYOH5UykVajqplkbTHPjhog-CFx20yN5hLyu-Vd12LzwL66tftu4RpToQUh-WOmp9lpBgK4e3T-LINCqfHXSLA3DSaRexvtIn7RXcmNVK65UnNv1DQOTejb7jpjC9fcAwBpYg6~m4f-OxT0rw9YyvneW98gBCfV~U~GUBgWuC93lF2jJtoO~F3wi9MoSN~r3EBq0AFuHIT1pQSquZIJvtz9CE5xXEq7m-0Fnn6CwS0p~eMFvZcH4JbCFHUNWMtkHV-lrrwuqwDiig0Ry64zmrVf~WOe1PCoRpy66UTzaye1r9v0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`}
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundColor="#d3cece00"
          ></Box>
        </Stack>
        <Stack>
          <Text
            fontFamily="Poppins"
            fontSize="26px"
            fontWeight="500"
            lineHeight="38.48px"
            letterSpacing="0em"
            textAlign="center"
          >
            Welcome Form
          </Text>
        </Stack>
        <Stack>
          <Text
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="500"
            lineHeight="21px"
            letterSpacing="0em"
            color={"#A0A0A0"}
            textAlign="center"
          >
            Submit Your Requirement
          </Text>
        </Stack>
        <Stack>
            <Form/>
        </Stack>
      </Flex>
      
    </Box>
  </Box>
);

export default FormDiv;
