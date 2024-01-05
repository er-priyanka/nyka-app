import {Box, Button, ButtonGroup, Flex, Icon, Image, Link, Spacer, Text} from "@chakra-ui/react";
import { IoIosRocket } from "react-icons/io";


export const Navbar=()=>{
    return (
        <Flex minWidth='max-content'   alignItems="center"  border="1px solid #cecece">
            <Box p='5' >
                <Link href="/dashboard">Dashboard</Link>
            </Box>
            <Spacer />
            <ButtonGroup gap='2' pr="5">
                <Link href="/analytics">Analytics</Link>
                <Link href="/login" bg='white'>Log In</Link>
                <Link href="/register" bg="white"  >Register</Link>
                
            </ButtonGroup>
        </Flex>


     
    )
}