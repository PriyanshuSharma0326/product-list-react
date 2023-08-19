import { createContext } from "react";

const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
    const contextValue = {};

    return (
        <CategoryContext.Provider value={ contextValue }>
            { children }
        </CategoryContext.Provider>
    );
}
