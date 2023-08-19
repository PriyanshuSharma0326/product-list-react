import React from 'react';
import Navbar from './components/navbar/navbar.component';
import Directory from './components/directory/directory.component';
import products from './constant/products';

function App() {
    return (
        <>
            <Navbar />

            <Directory 
                products={products} 
            />
        </>
    );
}

export default App;
