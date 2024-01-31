import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Skill from './Skill/Skill'

const Skills = () => {
  return (
    <Box p={16}>
          <Flex flexDirection={"column"} alignItems={"center"} gap={1} mb={2}>
            <Text fontSize={30} mb={0}>
             MY SKILLS
            </Text>
            <Box>
              <Image src="src/assets/img/lines.svg" alt="lines" />
            </Box>

          </Flex>
     <Flex pb={16}  flexDirection={'column'} gap={6}>
     <Flex alignItems={'center'} gap={6} justifyContent={'center'}>
         <Skill title={'ReactJs'} value={45}/>
         <Skill title={'Java'} value={45}/>
         <Skill title={'Javascript'} value={45}/>
         
      
         </Flex>
         <Flex alignItems={'center'} gap={6} justifyContent={'center'}>
         <Skill title={'HTML CSS'} value={45}/>
         <Skill title={'Flutter'} value={45}/>
         <Skill title={'Salesforce'} value={45}/>
         
      
         </Flex>
     </Flex>
      
    </Box>
  )
}

export default Skills
