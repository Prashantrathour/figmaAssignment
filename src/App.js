import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Headers from './Components/Headers';
import MidSection from './Components/MidSection';

function App() {
  return (
    <Box>
      <Headers/>
      <Box position={"absolute"} top={"1850px"}>
      <MidSection/>
      
      </Box>
    </Box>
  );
}

export default App;
