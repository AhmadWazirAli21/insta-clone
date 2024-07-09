import { Box, Container, Flex,Image, VStack } from "@chakra-ui/react"
import AuthFomr from "../../components/AuthForm/AuthForm"
const AuthPage = () =>{
    return(
        <Flex minH={"100vh"} justifyContent={'center'} alignItems={'center'} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    <Box display={{base : "none",md:"block"}}>
                        <Image src="/public/auth.png" h={630}/>
                    </Box>
                    <VStack spacing={4} align={"stretch"}> 
                        <AuthFomr/>
                        <Box textAlign={"center"}>Get the app</Box>
                        <Flex gap={5} justifyContent={"center"}>
                            <Image src="/public/playstore.png" h={10} alt="playstor logo"/>
                            <Image src="/public/microsoft.png" h={10} alt="microsoft logo"/>
                        </Flex>
                </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}
export default AuthPage