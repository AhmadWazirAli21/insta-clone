import { Avatar, Box, Flex ,Link, Tooltip} from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../../assets/constants"
import {AiFillHome} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
const SideBar = ()=>{
    const sidebarItems = [
        {
            icon : <AiFillHome size={25}/>,
            text :"Home",
            link : "/"
        },
        {
            icon : <SearchLogo size={25}/>,
            text :"Search",
        },
        {
            icon : <NotificationsLogo/>,
            text : "Notifications"
        },
        {
            icon : <CreatePostLogo/>,
            text : "Create"
        }
        ,{
            icon : <Avatar size={"sm"} name="Ahmad Wazir" src="/public/code.jpg"/>,
            text : "Profile",
            link : "/ahmad_wazir"
        }
    ]
    return(
       <Box 
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{base: 2,md:4}}
        >
            <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
                <Link to='/' as={RouterLink} pl={2} display={{base:"none" ,md:"block"}} cursor={"pointer"}>
                    <InstagramLogo/>
                </Link>
                <Link to='/' 
                as={RouterLink} 
                p={2} 
                display={{base:"block" ,md:"none"}} 
                cursor={"pointer"} 
                _hover={{bg :"whiteAlpha.200"}} 
                w={{base:10}} 
                >
                    <InstagramMobileLogo/>
                </Link>
                <Flex direction={"column"} gap={5} cursor={"pointer"}>
                    {sidebarItems.map((item,index)=>(
                        <Tooltip 
                            key={index}
                            hasArrow
                            label={item.text}
                            placement="right"
                            ml={1}
                            openDelay={500}
                            display={{base:"block",md:"none"}}
                        >
                            <Link 
                                display={"flex"}
                                to={item.link || null}
                                as={RouterLink}
                                alignItems={"center"}
                                gap={4}
                                _hover={{bg : "whiteAlpha.400"}}
                                borderRadius={6}
                                p={2}
                                w={"full"}
                                justifyContent={{base:"center",md:"flex-start"}}
                            >
                                {item.icon}
                                <Box display={{base:"none",md:"block"}}>{item.text}</Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>
                <Tooltip         
                    hasArrow
                    label={"Log out"}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base:"block",md:"none"}}
                >
                    <Link 
                        display={"flex"}
                        to={"/auth"}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg : "whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={"full"}
                        mt={"auto"}
                        justifyContent={{base:"center",md:"flex-start"}}
                    >
                        <BiLogOut size={25}/>
                        <Box display={{base:"none",md:"block"}}>Log out</Box>
                    </Link>
                </Tooltip>
            </Flex>
       </Box>
    )
}
export default SideBar