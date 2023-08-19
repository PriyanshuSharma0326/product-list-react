import { createContext, useEffect, useState } from "react";
import products from "../constant/products";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
    const [listOfProducts, setListOfProducts] = useState(products);

    const [selectedCategory, setSelectedCategory] = useState('');

    let uniqueCategories = [...new Set(products.map(product => product.productCategory))];

    const categories = uniqueCategories.map((uniqueCategory, index) => {
        return {
            id: index,
            productCategory: uniqueCategory
        }
    });

    useEffect(() => {
        const changeList = () => {
            if(selectedCategory === '') {
                setListOfProducts(products);
                return;
            }
            let list = products.filter(item => item.productCategory === selectedCategory);
            setListOfProducts(list);
        }

        changeList();
    }, [selectedCategory]);

    const contextValue = { 
        categories,
        listOfProducts,
        setListOfProducts,
        selectedCategory,
        setSelectedCategory,
    };

    return (
        <CategoryContext.Provider value={ contextValue }>
            { children }
        </CategoryContext.Provider>
    );
}
