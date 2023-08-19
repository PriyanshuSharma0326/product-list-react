import React from 'react';
import './search-filter.styles.scss';
import products from '../../constant/products';

function SearchFilter() {
    let uniqueCategories = [...new Set(products.map(product => product.productCategory))];

    const categories = uniqueCategories.map((uniqueCategory, index) => {
        return {
            id: index,
            productCategory: uniqueCategory
        }
    });

    return (
        <div className='search-filter'>
            <select name="" id="">
                <option value="">--Select a category--</option>
                {categories.map(category => 
                    <option key={category.id} value={category.productCategory}>{category.productCategory}</option>
                )}
            </select>
        </div>
    )
}

export default SearchFilter;
