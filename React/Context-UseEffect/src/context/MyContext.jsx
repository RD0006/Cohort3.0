import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({children}) => {
    console.log("Context rendering...")
    const [count, setCount] = useState(0);
    return <MyStore.Provider value = {{count, setCount}}>{children}</MyStore.Provider>
}

// children need to demand
// all children customers