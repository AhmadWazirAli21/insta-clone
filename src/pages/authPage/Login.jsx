import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import {BiSolidFaceMask,BiSolidFace} from 'react-icons/bi'
const Login =() => {
     const [inputs , setInputs] = useState({
        email : "",
        password :"",
    })
    const [showPassword, setShowPassword] = useState(false)
    //console.log(inputs.email,inputs.password,Login)
    return(
        <>
             <Input
                placeholder="Email"
                fontSize={"14"}
                type="email"
                size={"sm"}
                onChange={(e)=> setInputs({...inputs,email: e.target.value})}
            />
             <InputGroup>
              <Input
                placeholder="Password"
                fontSize={"14"}
                type={showPassword ? "text" : "password"}
                size={"sm"}
                onChange={(e)=> setInputs({...inputs,password: e.target.value})}
            />
                <InputRightElement>
                    <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword ? <BiSolidFaceMask /> : <BiSolidFace/>}
                    </Button>
                </InputRightElement>
             </InputGroup>
          <Button onClick={()=> setLogin(!Login)} width={"full"} colorScheme="blue" size={"sm"} fontSize={14}>Log in</Button>
        </>
    )
}
export default Login