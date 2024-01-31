// Hero.jsx

import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import "./Hero.css";
import { useStore } from "../../store/store";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  const { toggleNavbar } = useStore();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set up event listener for resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box id="hero" className="hero" w={windowWidth}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      
      >
        <Box
          flex={{ base: 1, md: 1 }}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          
      
          w={{ md: windowWidth / 2 }}
        >
          <Heading as="h1">Gurpreet Singh </Heading>
          <Box>
            <Text className="job-title">Full Stack Developer</Text>
            <Button
              m={1}
              href="#contact"
              className="btn btn-fill"
              _hover={{ backgroundColor: "#212121", color: "#fff" }}
              backgroundColor={"#212121"}
              color={"#fff"}
              onClick={toggleNavbar}
            >
              Hire me
            </Button>

            <Button
              m={1}
              href="#portfolio"
              className="btn btn-border"
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
              onClick={toggleNavbar}
            >
              Explore more
            </Button>
          </Box>
        </Box>
        <Box w={{ md: windowWidth / 2 }} px={16}>
          <Flex flexDirection={"column"} alignItems={"center"} gap={1} mb={2}>
            <Text fontSize={30} mb={0}>
              ABOUT
            </Text>
            <Box>
              <Image src="src/assets/img/lines.svg" alt="lines" />
            </Box>
          </Flex>

          <Text>
            {" "}
            {
              " Hello! I'm Alex, a full stuck developer, a Ruby enthusiast, and a guy slighty obsessed for code quality. Also I'm a co-founder of pykod.com. I’m currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch."
            }
          </Text>

          <Button
              m={1}
              href="#contact"
              className="btn btn-fill"
              _hover={{ backgroundColor: "#212121", color: "#fff" }}
              backgroundColor={"#212121"}
              color={"#fff"}
              onClick={toggleNavbar}
            >
              Download My Resume
            </Button>
          {/* <Image src="src/assets/img/alex-vidal.png" alt="alex-vidal" /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
