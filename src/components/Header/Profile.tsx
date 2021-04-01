import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface IProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData } : IProfileProps){
  return(
    <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Rodrigo Gonçalves</Text>
        <Text 
          color="gray.300"
          fontSize="small"
        >
          rodrigo@email.com
        </Text>
      </Box>
    )}

    <Avatar size="md" name="Rodrigo Gonçalves" src="https://avatars.githubusercontent.com/u/49030804?v=4"/>
  </Flex>
  )
}