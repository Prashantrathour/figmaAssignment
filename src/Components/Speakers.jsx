import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SpeaakerCard from './SpeaakerCard'
import Footer from './Footer'

function Speakers() {
const speakers=[
    {name:"Michael Kapoor",pos:"Former Chairman and Managing Director, Air India",img:"https://ik.imagekit.io/ntmgxa7c6/Dr.-Shashi-Tharoor-headshot%201%20(1).png?updatedAt=1696778594125"},
    {name:"Aditya Ghosh",pos:"Board Member, Fabindia Overseas Pvt Ltd And OYO Rooms",img:"https://ik.imagekit.io/ntmgxa7c6/Dr.-Shashi-Tharoor-headshot%201%20(2).png?updatedAt=1696778595615"},
    {name:"Bhupendra Chaubey",pos:"Executive Editor CNN News18",img:"https://ik.imagekit.io/ntmgxa7c6/Dr.-Shashi-Tharoor-headshot%201.png?updatedAt=1696778502063"},
    {name:"Dr.Arogyaswami Velumani",pos:"Founder Thyrocare Technologies",img:"https://ik.imagekit.io/ntmgxa7c6/Dr.-Shashi-Tharoor-headshot%201%20(3).png?updatedAt=1696778598619"},
    {name:"Shashi Tharoor",pos:"Member of Parliament Lok Sabha, Indian National Congress",img:"https://ik.imagekit.io/ntmgxa7c6/Dr.-Shashi-Tharoor-headshot%201%20(4).png?updatedAt=1696778602489"}
]

  return (
    <Box width="100%">
      <Box textAlign="center" my={4} >
        <Text
          fontFamily="Pippins"
          fontSize={{ base: '24px', md: '32px' }} // Adjust font size for different screen sizes
          fontWeight={600}
        >
          Trending Speakers
        </Text>
      </Box>
      <Flex
        mx={{ base: 4, md: 16 }} // Adjust horizontal margin for different screen sizes
        flexDirection={{ base: 'column',md:"column", lg: 'row' }} // Stack on smaller screens, row on larger screens
       justifyContent={"space-evenly"}
       
        alignItems="center"
        flexWrap="wrap"
      >
        {speakers.map((item) => (
          <SpeaakerCard key={item.id} {...item} />
        ))}
      </Flex>
      <Footer/>
    </Box>
  )
}

export default Speakers