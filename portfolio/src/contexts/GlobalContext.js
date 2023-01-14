import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <GlobalContext.Provider
            value={{ openMenu, setOpenMenu }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobal = () => {
    return useContext(GlobalContext);
};