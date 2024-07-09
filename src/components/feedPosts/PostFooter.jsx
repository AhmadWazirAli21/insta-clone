import { Box, Button, Flex,Input,InputGroup,InputRightElement,Text } from "@chakra-ui/react"
import {  useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";

const PostFooter = (props) => {
    const [liked , setLiked] = useState(props.like);
    const [likes , setLikes] = useState(props.likes);
    const hamdleLike = () => {
        if(liked){
            setLikes(prev => prev - 1)
            setLiked(prev => !prev)
        }
        if(!liked){
            setLikes(prev => prev + 1)
            setLiked(prev => !prev)
        }
    }
    return(
        <Box mb={10} mt={"auto"}>
            <Flex alignItems={"center"} gap={3} w={"full"} pt={0} mb={2} mt={2}>
                <Box onClick={hamdleLike} cursor={"pointer"} fontSize={18}>
                    {!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
                </Box>
                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo/>
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={"sm"}>{likes} likes</Text>
            {props.IsProfilePage && 
                <>
                <Text fontSize={"sm"} fontWeight={700}>{props.username}{" _"}
                <Text as={"span"} fontWeight={400}>Feeling {props.caption}</Text></Text>
                <Text fontSize={"sm"} color={"gray"}>View all {props.comments} comments </Text>
                </>
            }

            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
                w={"full"}
            >
                <InputGroup>
                    <Input variant={"flushed"} placeholder="Add comment..." fontSize={14}/>
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            color={"blue.500"}
                            fontWeight={600}
                            cursor={"pointer"}
                            _hover={{color:"white"}}
                            bg={"transparent"}
                        >Post</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    )
}
export default PostFooter