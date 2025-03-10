import { Box, VStack, Image, Flex ,Text} from "@chakra-ui/react"
import { useState } from "react"
import Login from "../../pages/authPage/Login"
import Signup from "../../pages/authPage/Signup"
import GoogleAuth from "../../pages/authPage/GoogleAuth"
const AuthFomr = ()=>{
    const [isLogin , setIsLogin] = useState(true)
    return(
        <>
       <Box border={"1px solid gray"} borderRadius={5} padding={5}>
        <VStack spacing={4}>
            <Image src="/public/logo.png" h={24} cursor={"pointer"} alt="instagram"/>

                {isLogin ? <Login/> : <Signup/>}

            <Flex alignItems={"center"} justifyContent={"center"} my={4} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
                <Text mx={1} color={"white"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}/>
            </Flex>
                <GoogleAuth/>
        </VStack>
       </Box>
       <Box border={"1px solid gray"} borderRadius={5} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>{isLogin ? "Don't have an account ?" : "Already have an account ?"}</Box>
                    <Box onClick={()=> setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>{isLogin ? "Sign up" : "Log in"}</Box>
                </Flex>
       </Box>
       </>
    )
}
export default AuthFomr