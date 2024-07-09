import { Grid, Skeleton, VStack, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from "./ProfilePost"
const ProfilePosts = () => {
    const [isLoading , setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
    },[])
    return(
        <Grid
            templateColumns={{
                sm:"repeat(1,1fr)",
                md:"repeat(3,1fr)"
            }}
            gap={1}
            columnGap={1}  
        >
            {isLoading && [0,1,2,3,4,5].map((_,idx)=>(
                <VStack key={idx} alignItems={"flex-start"} gap={4}>
                    <Skeleton w={"full"}>
                        <Box h={"300px"}>connten wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && <>
                <ProfilePost img="/public/animals.jpg" likes={21} comments={17}/>
                <ProfilePost img="/public/RDR2.jpg" likes={20} comments={14}/>
                <ProfilePost img="/public/quantom.png" likes={23} comments={18}/>
                <ProfilePost img="/public/ai.webp" likes={21} comments={15}/>
                <ProfilePost img="/public/library.png" likes={13} comments={5}/>
                <ProfilePost img="/public/basketball.png" likes={45} comments={32}/>
            </>}
        </Grid>

    )
}
export default ProfilePosts 