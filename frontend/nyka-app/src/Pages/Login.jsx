import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { Form } from "react-router-dom"

const iniState = {
    email:"",
    password:""
}

export const Login = () =>{
    const [userDetails, setUserDetails] = useState(iniState);
    
    const handleDetails = (e) =>{
        const {name, value} = e.target;

        setUserDetails({...userDetails, [name]:value});
    }
    
    return (
        <>
            <Heading>Log In</Heading>
            <Box>
                <Form>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input 
                        value={userDetails.email}
                        name="email"
                        onChange={() => handleDetails()}
                        placeholder="Enter your email" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                        value={userDetails.password}
                        name="password"
                        onChange={()=>handleDetails()}
                        placeholder="Enter your password" />
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                    >
                        Log In
                    </Button>
                </Form>
            </Box>
        </>
    )
}