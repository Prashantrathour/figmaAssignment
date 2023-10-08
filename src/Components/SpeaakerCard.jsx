import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {FiHeart} from "react-icons/fi"
export default function SpeaakerCard({name,pos,img}) {
    console.log(name,pos,img)
  return (
    <Box
      width="221.65px"
      height="255.79px"
      borderRadius="11.98px"
      boxShadow="0px 3.5942437648773193px 11.3817720413208px 0px #00000030"
      position="relative"
    >
      {/* Image with SVG */}
      <Image
        src={img}
        alt="Profile"
        width="100%"
        height="70%"
        objectFit="cover"
        borderTopLeftRadius="11.98px"
        borderTopRightRadius="11.98px"
      />

      {/* SVG Icon */}
      <Flex
        justifyContent="flex-end"
        position="absolute"
        top="5px"
        right="5px"
        zIndex="1"
      >
        <Icon as={FiHeart} color="#939393" w={5} h={5} />
      </Flex>

      {/* Text */}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="30%"
        bg="#538DD7"
        color={"white"}
        textAlign="center"
        borderBottomRadius={"11.98px"}
       
      >
        <Text  mt={"7.79px"} align={"center"}  fontWeight={"600"}  fontSize="10.78px" lineHeight={"14.06px"}>
          {name}
        </Text>
        <Text mt="9.78px" align={"center"} w="161.74px" h="22px" fontWeight={"400"}  fontSize="8.39px" lineHeight={"11.19px"}>
        {pos}
        </Text>
      </Flex>
    </Box>
  )
}
