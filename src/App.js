import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Headers from './Components/Headers';
import MidSection from './Components/MidSection';
import Sessions from './Components/Sessions';
import CrousalDiv from './Components/CrousalDiv';
import Companies from './Components/Companies';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <Box w="1440px">
      <Headers/>
      <Box position={"absolute"} top={"1850px"}>
      <MidSection/>
      
      </Box>
      <Box position={"absolute"} top={"2509px"}>

      <Sessions/>
      </Box>
      <Box position={"absolute"} top={"3610px"}>
      <CrousalDiv/>
      </Box>
      <Box position={"absolute"} top={"4131px"} width={"100%"}>
      <Companies/>
      </Box>
      <Box position={"absolute"} top={"4561px"} width={"100%"}>
      <About/>
      </Box>
   
    </Box>
  );
}

export default App;
