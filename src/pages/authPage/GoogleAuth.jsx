import  {Flex,Image,Text} from '@chakra-ui/react'
const GoogleAuth = () => {
    return(
        <>
             <Flex alignItems={"center"} justifyContent={"center"} gap={4} cursor={"pointer"}>
                <Image src="/public/google.png" w={5}/>
                <Text color={"blue.500"}>Log in with Google</Text>
            </Flex>
        
        </>
    )
}
export default GoogleAuth