import { Box, Progress, Stack, Text } from "@chakra-ui/react";

const Skill = ({title,value}) => {
  return (
    <Box w={{ md: 350 }}>
      <Text fontSize={20} fontWeight={"bold"}>
        {title}
      </Text>

      <Progress size="lg" value={value} colorScheme="blackAlpha" />
    </Box>
  );
};

export default Skill;
