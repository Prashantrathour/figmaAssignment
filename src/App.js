import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Headers from './Components/Headers';
import MidSection from './Components/MidSection';
import Sessions from './Components/Sessions';
import CrousalDiv from './Components/CrousalDiv';

function App() {
  return (
    <Box>
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
    </Box>
  );
}

export default App;
