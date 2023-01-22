import React,{useState, createContext} from "react";

export const Context = createContext();

 const UserProvider = ({children}) => {
    const [state, setState] = useState("");

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider;
