import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = (props) => {
    const [isFollowed ,setIsFollowed] = useState(false)
    return(
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={props.avtart} name={props.name} size={'md'}/>
                <VStack spacing={2} alignItems={"flex-start"}>
                    <Box fontSize={11}  fontWeight={"bold"}>
                        {props.name}
                    </Box>
                    <Box fontSize={11} color={"gray.500"}>
                        {props.followers} followers
                    </Box>
                </VStack>
            </Flex>
            <Button 
            fontSize={13} 
            bg={"transparent"} 
            onClick={()=> setIsFollowed(!isFollowed)}
            p={0}
            h={"max-content "}
            fontWeight={"meduim"}
            color={"blue.500"}
            cursor={"pointer"}
            _hover={{color:"white"}}
            >{!isFollowed ? "Follow" : "Unfollow"}</Button>
        </Flex>
    )
}
export default SuggestedUser