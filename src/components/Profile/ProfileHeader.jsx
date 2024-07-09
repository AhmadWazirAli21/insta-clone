import { Avatar, AvatarGroup, Flex, VStack, Text, Button } from "@chakra-ui/react"

const ProfileHeader = () => {
    return(
        <Flex gap={{base : 4,sm:10}} py={10} direction={{base:"column",sm:"row"}}>
            <AvatarGroup
                size={{base:"xl" ,md:"2xl"}}
                justifySelf={"center"}
                alignSelf={"flex-start"}
                mx={"auto"}
            >
                <Avatar name="Ahmad wazir ali" src="/public/code.jpg"/>
            </AvatarGroup>
            <VStack
                alignItems={"start"}
                gap={2}
                mx={"auto"}
                flex={2}
            >
                <Flex   gap={4} direction={{base:"column",md:"row"}}
                        justifyContent={{base:'center',md:"flex-start"}}
                        alignItems={"center"}
                        w={"full"}
                >
                    <Text fontSize={{base:"sm" ,md:"lg"}}>
                        Ahmad_Wazir
                    </Text>
                    <Flex gap={4} alignContent={"center"} justifyContent={"center"}>
                        <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}}>Edit Profile</Button>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"} gap={{base:2 ,sm:4}} justifyContent={"flex-start"}>
                    <Text fontSize={{base:"xs",md:"sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>6</Text>
                        Posts
                    </Text>
                    <Text fontSize={{base:"xs",md:"sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>54</Text>
                        Followers
                    </Text>
                    <Text fontSize={{base:"xs",md:"sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>56</Text>
                        Following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>Coder</Text>
                </Flex>
                 <Text fontSize={"sm"}>Coding and caffeen</Text>
            </VStack>
        </Flex>
    )
}
export default ProfileHeader 