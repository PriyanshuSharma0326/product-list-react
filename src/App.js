import React, { useContext } from 'react';
import Navbar from './components/navbar/navbar.component';
import Directory from './components/directory/directory.component';
import { CategoryContext } from './context/category-context';
import SearchBar from './components/search-bar/search-bar.component';
import SortList from './components/sort-list/sort-list.component';

function App() {
    const { listOfProducts } = useContext(CategoryContext);

    return (
        <>
            <Navbar />

            <SearchBar />

            <SortList />

            <Directory 
                products={listOfProducts} 
            />
        </>
    );
}

export default App;
