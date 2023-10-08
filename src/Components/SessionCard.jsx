import { Box, Image, Text, VStack } from "@chakra-ui/react";

function SessionCard({image,text}) {
    console.log(image)
  return (
    <Box
      mt={"57px"}
      width="205px"
      height="197px"
      borderRadius="10px"
      boxShadow="0px 4px 14px -6px #1E4FAF59"
      overflow="hidden"
      position="relative"
      bg="white"
      fontFamily={"Poppins"}
    >
      <Box w="205.05px" h="130px" borderRadius={"14px"}>
        <Image
          src={image}// Replace with your image source
          alt="Your Photo"
          width="100%"
          height="auto"
          borderRadius={"14px"}
          objectFit={"cover"}
        />
      </Box>
      <VStack
        display={"flex"}
        justifyContent={"center"}
        spacing="2"
        color="#131111"
      >
        <Box mt={"12px"} width={"174px"} h={"39"}>
          <Text
            color={"#606060"}
            fontWeight={"500"}
            fontSize="15px"
            lineHeight={"22px"}
            overflowWrap={"break-word"}
          >
           {text}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default SessionCard;
