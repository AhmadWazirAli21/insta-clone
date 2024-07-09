import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useState,useEffect } from "react"
const FeedPosts = () => {
    const [isLoading , setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
    },[])
    return(
        <Container maxW={"constainer.sm"} py={10} px={2}>
            {isLoading && [0,1,2,3].map((_,idx) =>(
                <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10}/>
                        <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height="10px" width="200px"/>
                        <Skeleton height="10px" width="200px"/>
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>ahmad</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading &&  
            <>
                <FeedPost 
                username="NBA"
                avatar='/public/NBA.jpg'
                img='/public/NBA.jpg'
                comments={32}
                likes={39}
                caption="happy"
            />
            <FeedPost 
                username="Eduoford"
                avatar='/public/eduo.png'
                img='/public/background.jpg'
                comments={1267}
                likes={3456}
                caption="happy"
            
            />
            <FeedPost 
                username="Porsche"
                avatar='/public/porsch911.jpg'
                img='/public/porsch911.jpg'
                comments={60903}
                likes={309456}
                caption="warmy"
            
            />
            <FeedPost
                username="Radio of Tech"
                avatar='/public/s24.jpg'
                img='/public/s24.jpg'
                comments={1455}
                likes={8943}
                caption="positevy"
            />
            </>
        
        }
        </Container>
    )
}
export default FeedPosts