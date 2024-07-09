import { Box,Image } from "@chakra-ui/react"
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { useState } from "react"
const FeedPost = (props) => {
    const [liked , setLiked] = useState(false);
    return(
        <>
            <PostHeader avatar={props.avatar} username={props.username}/>
            <Box my={2} 
            overflow={"hidden"} 
            onDoubleClick={()=>setLiked(!liked)}
            cursor={"pointer"}
            >
                <Image src={props.img} borderRadius={3}/>
            </Box>
            <PostFooter like={liked}
                        likes={props.likes}
                        comments={props.comments}
                        username={props.username}
                        caption={props.caption}
            />
        </>
    )
}
export default FeedPost