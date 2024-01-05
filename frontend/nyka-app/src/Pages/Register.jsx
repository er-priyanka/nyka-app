import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react"
import { Form } from "react-router-dom";


const iniState = {
    name:"",
    avatar:"",
    email:"",
    password:""
}

export const Register = () =>{
    const [data, setData] = useState(iniState);

    const handleData = (e)=>{
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }


    return (
        <>
            <Heading>Sign up</Heading>

            <Box>
                <Form>
                <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input 
                        value={data.name}
                        name="name"
                        onChange={() => handleData()}
                        placeholder="Enter your name" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Avatar</FormLabel>
                        <Input 
                        value={data.avatar}
                        name="avatar"
                        onChange={() => handleData()}
                        placeholder="Enter Avatar URL" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input 
                        value={data.email}
                        name="email"
                        onChange={() => handleData()}
                        placeholder="Enter your email" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                        value={data.password}
                        name="password"
                        onChange={()=>handleData()}
                        placeholder="Enter your password" />
                    </FormControl>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                    >
                        Signup
                    </Button>
                </Form>
            </Box>
        </>
    )
}