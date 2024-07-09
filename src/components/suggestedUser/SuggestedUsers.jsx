import { Text, Flex, VStack, Box ,Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import { Link as RouterLink } from "react-router-dom"
const SuggestedUsers = () => {
    return(
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader/>
            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                    See All
                </Text>
            </Flex>
            <SuggestedUser name="Adrian Gasby" followers={1033} avtart="/public/img2.png"/>
            <SuggestedUser name="Justin Kol" followers={566} avtart="/public/nigga.png"/>
            <SuggestedUser name="Natallia Gray" followers={2489} avtart="/public/img1.png"/>
            <Box fontSize={12} color={"gray.500"} mt={5}>
                &copy; 2023 Built by {" "}
                <Link as={RouterLink} href="https://www.instagram/ahmad_wazir_ali" target="_blank" color={"blue.500"} fontSize={14}>
                    Ahmad wazir ali
                </Link>
                </Box>
        </VStack>
    )
}
export default SuggestedUsers