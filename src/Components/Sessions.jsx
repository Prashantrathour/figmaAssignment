import { Text, Box, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import SessionCard from "./SessionCard";
import { color } from "framer-motion";
import { formsvg } from "./images/svg";
import Svgs, { Arraowdown, Arraowup, Svg2, Svg3, Svg4 } from "./images/Svgs";

function Sessions() {
  let sessionCard = [
    {
      text: "Leadership and Executive coach",
      image:
        "https://ik.imagekit.io/ntmgxa7c6/1%207.png?updatedAt=1696733383507",
    },
    {
      text: "Change Management and Reboot Training",
      image:
        "https://ik.imagekit.io/ntmgxa7c6/preview%201.png?updatedAt=1696733383576",
    },
    {
      text: "Employee Upskill Sessions",
      image:
        "https://ik.imagekit.io/ntmgxa7c6/1530217060-8738%201%20(1).png?updatedAt=1696733383502",
    },
    {
      text: "Employee Motivation and Engagement",
      image:
        "https://ik.imagekit.io/ntmgxa7c6/3%201%20(1).png?updatedAt=1696733383339",
    },
    {
      text: "Soft skills Training",
      image:
        "https://ik.imagekit.io/ntmgxa7c6/5%201.png?updatedAt=1696733382941",
    },
  ];
  return (
    <Box
      width={"100%"}
      boxSizing={"border-box"}
      p={0}
      m={0}
      fontFamily={"Poppins"}
    >
      <Box
        bg={"rgba(83, 141, 215, 0.1)"}
        height={"473px"}
        width={"100vw"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box width={"1170px"} h={"329px"} mt={"65px"}>
          <Box w={"393px"} h={"70px"}>
            <Stack
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
              p={"10px"}
              borderRadius={"20%"}
              w={"100px"}
              bg={"orange.400"}
            >
              <Text
                lineHeight={"18.54px"}
                color={"white"}
                fontWeight={600}
                fontSize={"18px"}
                textAlign={"center"}
              >
                Trending
              </Text>{" "}
            </Stack>
            <Text fontWeight={600} fontSize={"32px"} lineHeight={"32.96px"}>
              Live Learning Sessions
            </Text>
          </Box>
          <Flex
            flexWrap={"wrap"}
            justify={"center"}
            justifyContent={"space-between"}
          >
            {sessionCard.map((item) => (
              <SessionCard image={item.image} text={item.text} />
            ))}
          </Flex>
        </Box>
      </Box>

      <Box mt="86px" width={"100%"}>
        <Text
          lineHeight={"23.4px"}
          fontWeight={500}
          fontSize={"36px"}
          align={"center"}
        >
          How Live{" "}
          <span style={{ color: "rgb(106,96,204)", fontWeight: "500" }}>
            Sessions
          </span>{" "}
          Work?
        </Text>
        <Box position={"absolute"} top={"610px"} right={"40%"}>
          <Arraowdown />
          <Box position={"absolute"} top={"73px"} right={"-2%"}>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9163 18.2893L18.3709 0.782882L-1.79708e-05 12.0306L15.9163 18.2893Z"
                fill="url(#paint0_linear_0_487)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_487"
                  x1="19.2048"
                  y1="13.8808"
                  x2="5.97922"
                  y2="4.01502"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#316BBF" />
                  <stop offset="1" stop-color="#7A5CD0" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} mt="120px" gap={"45px"}>
          <Box
            width="182px"
            height="239px"
            borderRadius="10px"
            boxShadow="0px 0px 24px 0px #2868C83D"
            p="20px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box margin={"auto"}>
              <Svgs />
            </Box>
            <Box>
              {/* Your text goes here */}
              <Text
                textAlign={"center"}
                fontWeight={500}
                lineHeight={"23.68px"}
                fontSize="16px"
              >
                Express the interest by Filling the form
              </Text>
            </Box>
          </Box>
          <Box
            width="182px"
            height="239px"
            borderRadius="10px"
            boxShadow="0px 0px 24px 0px #2868C83D"
            p="20px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box margin={"auto"}>
              <Svg2 />
            </Box>
            <Box>
              {/* Your text goes here */}
              <Text
                textAlign={"center"}
                fontWeight={500}
                lineHeight={"23.68px"}
                fontSize="16px"
              >
                Finalize Speakers, Date and Time
              </Text>
            </Box>
          </Box>
          <Box
            width="182px"
            height="239px"
            borderRadius="10px"
            boxShadow="0px 0px 24px 0px #2868C83D"
            p="20px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box margin={"auto"}>
              <Svg3 />
            </Box>
            <Box>
              {/* Your text goes here */}
              <Text
                textAlign={"center"}
                fontWeight={500}
                lineHeight={"23.68px"}
                fontSize="16px"
              >
                Make payment through sent Payment Link
              </Text>
            </Box>
          </Box>
          <Box
            width="182px"
            height="239px"
            borderRadius="10px"
            boxShadow="0px 0px 24px 0px #2868C83D"
            p="20px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box margin={"auto"}>
              <Svg4 />
            </Box>
            <Box>
              {/* Your text goes here */}
              <Text
                textAlign={"center"}
                fontWeight={500}
                lineHeight={"23.68px"}
                fontSize="16px"
              >
                Host your Fully Managed Live Session
              </Text>
            </Box>
          </Box>
        </Box>
        <Box position={"absolute"} top={"950px"} left={"400.34px"}>
          <Arraowup />
        </Box>
        <Box position={"absolute"} top={"950px"} right={"400.34px"}>
          <Arraowup />
        </Box>
      </Box>
    </Box>
  );
}

export default Sessions;
