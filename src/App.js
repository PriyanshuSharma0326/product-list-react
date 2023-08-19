import React, { useContext } from 'react';
import Navbar from './components/navbar/navbar.component';
import Directory from './components/directory/directory.component';
import { CategoryContext } from './context/category-context';

function App() {
    const { listOfProducts } = useContext(CategoryContext);

    return (
        <>
            <Navbar />

            <Directory 
                products={listOfProducts} 
            />
        </>
    );
}

export default App;
