import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import {BiSolidFace,BiSolidFaceMask} from 'react-icons/bi'
const Signup = () => {
    const [inputs , setInputs] = useState({
        email : "",
        fullName :"",
        userName:"",
        password :"",
        confirmPassword : ""
    })
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <Input
                placeholder="Email"
                fontSize={"14"}
                type="email"
                value={inputs.email}
                size={"sm"}
                onChange={(e)=> setInputs({...inputs,email: e.target.value})}
            />
            <Input
                placeholder="Full name"
                fontSize={"14"}
                type="text"
                value={inputs.fullName}
                size={"sm"}
                onChange={(e)=> setInputs({...inputs,fullName: e.target.value})}
            />
            <Input
                placeholder="Username"
                fontSize={"14"}
                type="text"
                value={inputs.userName}
                size={"sm"}
                onChange={(e)=> setInputs({...inputs,userName: e.target.value})}
            />
            <InputGroup>
                <Input
                placeholder="Password"
                fontSize={"14"}
                type={showPassword ? "text" : "password"}
                value={inputs.password}
                size={"sm"}
                onChange={(e)=> setInputs({...inputs,password: e.target.value})}
            />
                <InputRightElement>
                    <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword ? <BiSolidFaceMask /> : <BiSolidFace/>}
                    </Button>
                </InputRightElement>
            </InputGroup>
             <Button width={"full"} colorScheme="blue" size={"sm"} fontSize={14}>Sign Up</Button>
        </>
    )
}
export default Signup