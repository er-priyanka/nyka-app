import React, { useState } from "react";

export const AuthContext = React.createContext();

const iniState = {
    isAuth: false,
    token: null,
    name: null,
    email: null
}

export const AuthContextProvider = ({children}) => {
    const [state, setState] = useState(iniState); 

    const login = (token, name, email) =>{
        setState({
            ...state,
            isAuth:true,
            token,
            name, 
            email
        });
    }

    const logout = () =>{
        setState(iniState);
    }
    
    return (
        <AuthContext.Provider value={{authState:state, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}