
import { Box, Flex, Button, IconButton, Spacer, useColorMode } from '@chakra-ui/react';

import { useStore } from '../../store/store';
import { HamburgerIcon } from '@chakra-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { BsList } from "react-icons/bs";
// import './../../responsive.css';



const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { toggleNavbar } = useStore();
  const buttonStyle = {
   // textDecoration: 'none', // Remove underline on hover
    color: 'inherit', // Inherit text color
    backgroundColor: 'transparent', // Transparent background on hover
    border: 'none',
     // Remove border on hover
  };

  return (
    <Box
   
      as="header"
      id="masthead"
      className="site-header"
      data-anchor-target=".hero"
      data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);"
      data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
    >
      <Flex  alignItems='center'  justifyContent="space-around" p={4}>
     
        <Box>
          <a href="#hero" className="site-logo">
            <img src="src/assets/img/logo.png" alt="logo" />
          </a>
        </Box>

        <Box  display={{base:'flex',md:'none'}} cursor={'pointer'}>
        <BsList size={24}/>
        </Box>
     


  



        <Flex align="center" display={{base:'none',md:'flex'}}>
        
          <Button href="#hero" variant="ghost" mr={2}>
            Home
          </Button>
          <Button href="#about" variant="ghost" mr={2}>
            About
          </Button>
          <Button href="#service" variant="ghost" mr={2}>
            Service
          </Button>
          <Button href="#portfolio" variant="ghost" mr={2}>
            Portfolio
          </Button>
          <Button href="#contact" variant="ghost">
            Contact
          </Button>
          {/* <Button onClick={toggleColorMode} mr={2}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
