import { Box, Flex, Text } from "@chakra-ui/react"
import {BsBookmark, BsGrid3X3, BsSuitHeart} from 'react-icons/bs'
const ProfileTabs = () => {
    return(
        <Flex gap={{base:4,md:10}} justifyContent={"center"} w={"full"} textTransform={"uppercase"} fontWeight={"bold"}>
            <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsGrid3X3/>
                </Box>
                <Text fontSize={12}display={{base:"none", md:"block"}}>Posts</Text>
            </Flex>
            
             <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsBookmark/>
                </Box>
                <Text fontSize={12}display={{base:"none", md:"block"}}>Saved</Text>
            </Flex>

             <Flex  alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsSuitHeart/>
                </Box>
                <Text fontSize={12}display={{base:"none", md:"block"}}>Likes</Text>
            </Flex>
        </Flex>
    )
}
export default ProfileTabs 