import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { Register } from "./Register"
import { Dashboard } from "./Dashboard"
import { Analytics } from "./Analytics"

export const AllRoutes = () =>{
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/dashboard" element={ <Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                

            </Routes>
        </>
    )
}