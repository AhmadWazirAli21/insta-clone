import { Flex, GridItem, Text, Image,useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Box, Avatar, Divider,VStack  } from "@chakra-ui/react"
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Comment from "../comment/Comment"
import PostFooter from '../feedPosts/PostFooter'
const ProfilePost = (props) => {
    const {isOpen ,onOpen , onClose} = useDisclosure()
    return(
        <>
        <GridItem
            cursor={"pointer"}
            borderRadius={4}
            overflow={"hidden"}
            border={"1px solid"}
            position={"relative"}
            aspectRatio={1/1}
            onClick={onOpen}
        >
            <Flex 
                opacity={0}
                _hover={{opacity:1}}
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg={"blackAlpha.700"}
                transition={"all 0.3s ease"}
                zIndex={1}
                justifyContent={"center"}
            >
                <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                    <Flex>
                        <AiFillHeart size={20}/>
                        <Text fontWeight={"bold"} ml={2}>{props.likes}</Text>
                    </Flex>
                    <Flex>
                    <FaComment size={20}/>
                    <Text fontWeight={"bold"} ml={2}>{props.comments}</Text>
                </Flex>
                </Flex>
            </Flex>
            <Image src={props.img} w={"100%"} h={"100%"} objectFit={"cover"}/>
        </GridItem>

        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:"3xl",md:"5xl"}}>
            <ModalOverlay/>
            <ModalContent>
                
                <ModalCloseButton/>
                <ModalBody bg={"black"} pb={5}>
                    <Flex gap={4} w={{base:"90%",sm:"70%",md:"full"}} mx={"auto"}>
                        <Box 
                            borderRadius={4}
                            overflow={"hidden"}
                            border={"1px solid"}
                            borderColor={"whiteAlpha.300"}
                            flex={1.5}
                        >
                            <Image src={props.img} h={"700px"} objectFit={"cover"} w={"full"}/>
                        </Box>
                        <Flex flex={1} flexDir={"column"} px={10} display={{base:"none",md:"flex"}}>
                            <Flex alignItems={"center"} justifyContent={"space-between"}>
                                <Flex alignItems={"center"} gap={4}>
                                <Avatar src="/public/ahmad.jpg" name="Ahmad_Wazir"/>
                                <Text fontWeight={"bold"} fontSize={12}>
                                    Ahmad_Wazir
                                </Text>
                            </Flex>
                            <Box _hover={{bg:"whiteAlpha.300",color:"red.600"}} borderRadius={4} p={1}>
                                <MdDelete size={20} cursor={"pointer"}/>
                            </Box>
                            </Flex>
                            <Divider my={4} bg={"gray.500"}/>
                            <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflow={"auto"}>
                                <Comment 
                                img="/public/nigga.png"
                                username="Adam roger"
                                createAt="1d ago"
                                text={"Nice clone God dameit!!"}
                                />
                                <Comment 
                                img="/public/img3.png"
                                username="stev kharleg"
                                createAt="1d ago"
                                text={"Sexy clone dude!"}
                                />
                                <Comment 
                                img="/public/img2.png"
                                username="Roni roni"
                                createAt="1d ago"
                                text={"Perfect clone more than CR7!"}
                                />
                            </VStack>
                            <Divider my={4} bg={"gray.800"}/>
                                <PostFooter isProfilePage={true} likes={props.likes}/>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}
export default ProfilePost 