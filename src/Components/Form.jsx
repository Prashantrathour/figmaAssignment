import {
    Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Form() {
  return (
    <Flex
    fontFamily="Poppins"
   
     justifyContent={"center"}
     alignItems={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
      marginTop={"43px"}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
      >
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
           placeholder="Enter Name"
            _placeholder={{ color: "#6B778C" }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Email"
            _placeholder={{ color: "#6B778C" }}
            type="email"
          />
        </FormControl>
        <FormControl id="phone" isRequired>
          <FormLabel>Phone Number</FormLabel>
            <InputGroup>
          <Select
        defaultValue="+91"
        _placeholder={{ color: "#6B778C" }}
        width="100px" 
      >
        <option value="+91">+91</option>
        <option value="+92">+92</option>
        <option value="+93">+93</option>
     
      </Select>
         
          
          
          <Input
           placeholder="+91"
            _placeholder={{ color: "#6B778C" }}
            type="tel"
          /></InputGroup>
        </FormControl>
        <FormControl id="org" isRequired>
          <FormLabel>Organization</FormLabel>
          <Input type="text"  placeholder="Enter Name"
            _placeholder={{ color: "#6B778C" }}/>
        </FormControl>
        <FormControl id="org" isRequired>
          <FormLabel>Select Date</FormLabel>
          <Input type="date" color={"#6B778C"}   _placeholder={{ color: "#6B778C" }} />
        </FormControl>
        <Stack>
        <Text
 
     width="184px"
     height="27px"
     
     fontFamily="Poppins"
     fontSize="18px"
     fontWeight="500"
     lineHeight="27px"
     letterSpacing="0em"
     textAlign="left"
   >
 
    Topic of the Session:
  </Text>
  <Flex flexFlow={"wrap"} rowGap={"24px"} columnGap={"10px"} >
    <CustomDiv text={"Business Leadership"}/>
    <CustomDiv text={"Motivation During Crisis"}/>
    <CustomDiv text={"Spirituality"}/>
    </Flex>
  
        </Stack>
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button
            width="424px"
            height="53px"
            borderRadius="48.68px"
            bg="#538DD7"
            color="white"
            _hover={{
              bg: "blue.500",
            }}
          >
            <Text
              fontFamily="Poppins"
              fontSize="14px"
              fontWeight="700"
              lineHeight="20px"
              letterSpacing="0em"
              textAlign="center"
            >
              Register
            </Text>
          </Button>
        </Stack>

      </Stack>
    </Flex>
  );
}
const CustomDiv = ({text}) => (
    <Box
      
      height="31px"
      borderRadius="50px"
      border="1px solid #AEB7C3"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX="10px"
    >
      <Flex alignItems="center">
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          marginRight="5px"
        >
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1153 0.441107C9.7314 0.0440753 9.09832 0.0334353 8.70129 0.417342L3.81438 5.1427L2.2141 2.82349C1.90044 2.36892 1.27766 2.25469 0.823091 2.56835C0.368519 2.88201 0.254286 3.50478 0.567946 3.95936L2.54546 6.82528C2.58812 6.8871 2.6365 6.94264 2.6894 6.99165C2.73418 7.13746 2.81312 7.27518 2.92641 7.39235C3.31031 7.78938 3.94339 7.80002 4.34042 7.41611L10.0915 1.85512C10.4886 1.47121 10.4992 0.838139 10.1153 0.441107Z"
            fill="#CCCCCC"
          />
        </svg>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="600"
          lineHeight="21px"
          letterSpacing="0em"
          textAlign="center"
         ml="5px"
          height="21px"
        >
          {text}
        </Text>
      </Flex>
    </Box>
  );