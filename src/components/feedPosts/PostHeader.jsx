import { Avatar, Box, Flex ,Text} from "@chakra-ui/react"

const PostHeader = (props) => {
    return(
        <Flex my={2} justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={props.avatar} size={"sm"}/>
                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                    {props.username}
                    <Box color={"gray.500"}>. 1h</Box>
                </Flex>
            </Flex>
            <Box 
                cursor={"pointer"}
            >
                <Text 
                fontSize={12} 
                color={"blue.500"} 
                fontWeight={"bold"} 
                _hover={{color:"white"}}
                transition={"0.4s ease in-out"}
                >Unfollow</Text>
            </Box>
        </Flex>
    )
}
export default PostHeader