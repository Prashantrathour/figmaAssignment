import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FormDiv from "./FormDiv";

function Headers() {
  return (
    <Box p={0} margin={0} overflow={"hidden"} boxSizing={"border-box"}>
      <Box width="100%" height="80px">
        <Box
          className="speakin"
          width="99px"
          height="28px"
          top="19px"
          left="130px" // Set the left position to 130px
          position="relative"
          zIndex="2"
        >
          <Box
            bg={`url(https://ik.imagekit.io/ntmgxa7c6/%20figma%20assignment/sprakin1%201.png?updatedAt=1696655100232) #d3cece00 50%/cover no-repeat`}
            width="100%"
            height="100%"
          ></Box>
        </Box>
      </Box>
      <Box
        className="rectangle_190"
        position="absolute"
        width="100%"
        height="870px"
        top="-46px"
        bg={`url(https://ik.imagekit.io/ntmgxa7c6/Wallpaper.jpg?updatedAt=1696656508361) lightgray 50% / cover no-repeat`}
        backgroundColor="#538dd7"
      >
        <Box
          position="absolute"
          height="183px"
          top="138px"
          left="716px"
          color="white"
          fontFamily="Poppins"
          fontSize="46px"
          fontWeight="600"
          lineHeight="61px"
          letterSpacing="0em"
          textAlign="left"
          overflowX={"hidden"}
        >
          <Text width={"600px"} textOverflow={"clip"}>
            Curate Your own Training Sessions with top Keynote Speakers
          </Text>
        </Box>
        {/* import { Box, Flex, Stack, Image } from "@chakra-ui/react"; */}
        <Box>
          <Box
            position="absolute"
            width="571px"
            height="224px"
            top="356px"
            left="713px"
            borderRadius="20px"
            // opacity={0.3} // Change opacity to 1
            backgroundColor="rgba(0, 0, 0, 0.3)" // Set a background color (you can change it)
          >
            <Box
              marginLeft={"30px"}
              marginTop={"30px"}
              width={"-moz-fit-content"}
            >
              <Flex gap={2} className="inneritem">
                <Stack>
                  <Image
                    filter={"auto"}
                    src="https://ik.imagekit.io/ntmgxa7c6/%20figma%20assignment/sprakin1%201.png?updatedAt=1696655100232"
                  />
                </Stack>
                <Stack>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Union"
                      d="M12.0326 0H8.46741V8.46701H0V12.0322H8.46741V20.5H12.0326V12.0322H20.5V8.46701H12.0326V0Z"
                      fill="white"
                    />
                  </svg>
                </Stack>
                <ZoomLogoTransparent61 />
              </Flex>
              <Box
                marginLeft={"2px"}
                marginTop={"7px"}
                width="428px"
                height="31px"
                top="438px"
                left="747px"
                fontFamily="Poppins"
                color={"white"}
                fontSize="22px"
                fontWeight="400"
                lineHeight="31px"
                letterSpacing="0em"
                textAlign="left"
                content={`"= Your Own Live Session in <30 minutes"`}
              >
                = Your Own Live Session in &lt;30 minutes
              </Box>
              <Box
                marginLeft={"6px"}
                marginTop={"30px"}
                width="322px"
                height="50px"
                borderRadius="57px"
                backgroundColor="yellow"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {" "}
                <Text
                  width="281px"
                  height="25px"
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="25px"
                  letterSpacing="0em"
                  textAlign="center"
                  color="#2A2727"
                >
                  30 Minutes Schedule Now
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box position="absolute" top="643px" left="-20.5px" overflow="hidden" width="100%" minWidth="1440px" boxSizing="border-box">
  <svg width="100%" height="489" viewBox="0 0 1440 489" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-9.00001 182.564C-9.00001 182.564 388 -138.54 723 70.9603C1058 280.461 1568 155.035 1568 155.035L1444.5 489C883 253 151.5 236.5 -20.5 324C-20.5 208.5 -9.00001 182.564 -9.00001 182.564Z" fill="#FFDE00"/>
  </svg>
</Box>
<Box position="absolute" top="599px" left="-3" width="100%" minWidth="1440px">
  <svg
    width="100%"
    height="434"
    viewBox="0 0 1440 434"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-9.00001 183C-9.00001 183 388 -138.104 723 71.3959C1058 280.896 1568 155.47 1568 155.47L1453 433.5C891.5 197.5 150 258.5 -22 346C-22 230.5 -9.00001 183 -9.00001 183Z"
      fill="#538DD7"
    />
  </svg>
  {/* Your content goes here */}
</Box>
<Box position="absolute" top="615.44px" left="-22px" width="100%" minWidth="1440px">
  <svg
    width="100%"
    height="460"
    viewBox="0 0 1440 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.8"
      d="M-3 159.471C-3 159.471 257 -134.104 592 75.3963C927 284.897 1437 159.471 1437 159.471V256.396C1437 256.396 1825 594 1266 398C707 202 -3 256.396 -3 256.396V159.471Z"
      fill="#538DD7"
    />
  </svg>
</Box>

     <FormDiv/>
     <Text
    width="423px"
    height="204px"
    top="1100px"
    left="783px"
    fontFamily="Poppins"
    fontSize="46px"
    fontWeight="600"
    lineHeight="68px"
    letterSpacing="0em"
    textAlign="left"
    position={"absolute"}
  >
    Grow with India’s Largest Network of Experts
  </Text>
     <Box
   
    top="1143.84px"
    right="0"
    
    position="absolute"
  ><svg width="394" height="571" viewBox="0 0 394 571" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.5" d="M581.759 176.396C657.003 306.722 653.158 449.809 508.312 533.436C363.467 617.063 98.4856 550.698 23.2415 420.371C-52.0025 290.045 73.999 115.69 218.845 32.0633C363.69 -51.5634 506.515 46.0694 581.759 176.396Z" fill="#538DD7"/>
  </svg><Box></Box></Box>
  <Box
    width="370px"
    height="319px"
    top="1370px"
    right="0"
    borderRadius="63.5px"

  

    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center"
    position="absolute"
  ><Image  src="https://ik.imagekit.io/ntmgxa7c6/istockphoto-1146425090-612x612_1__1_-removebg-preview%20(1).png?updatedAt=1696684791368"/></Box>
  
    </Box>
  );
}

export default Headers;
const ZoomLogoTransparent61 = () => (
  <Box
    className="lightgray"
    w="3.8125rem"
    h="7"
    borderRadius="0.3125rem"
    background={`url(https://s3-alpha-sig.figma.com/img/bbae/02d4/d8fd275fe3684c10ed30987d88b84baf?Expires=1697414400&Signature=HoX4KDRigeOjtiKGGxxFVoAp2jBkPbhQ7mXZVCfk8KYMpmN4083uymJAxOv0wiDxw-WJgs7Jq~RSxgSmjuEAPsf5lSKZ21miJT~z9wmfrw0FV2g07KMYGNW-mhtBgzzjxbud-Sk4JD8jP~Oeo0oKRgL2Xi7YDNDiNtxaZ3QrvIOsjIhSW2L3kOc~hUbz7b0DUA8iGTS~4QBDMF-AppXD6URY2TWoExiZPjUjSJuvSOExDksyxmjzD4kZYb49DdtUOvWXJV-oR7dy6zONhwVvSvGlRqCd5ygRG7AfTsNydGKSdrSRjFATGIXrEknX0YQPe6o5bPq7HmlretKbUIRx2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`}
    backgroundSize="100% 134.507%"
    backgroundRepeat="no-repeat"
    backgroundPosition="0px -2.6px"
    flexShrink="0"
  />
);
