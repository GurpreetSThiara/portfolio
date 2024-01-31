import { Box } from "@chakra-ui/react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Skills from "../components/Skills/Skills"


const HomePage = () => {
  return (
    <Box backgroundColor={'white'}>
          <Header />
          <Hero/>
          <Skills/>
          
    </Box>
  )
}

export default HomePage
