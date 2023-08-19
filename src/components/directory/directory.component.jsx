import React from 'react';
import './directory.styles.scss';
import CategoryItem from '../list-item/list-item.component';

function Directory({ products }) {
    return (
        <div className="categories-container">
            {products.map(item => {
                return (
                    <CategoryItem 
                        key={item.id} 
                        {...item} 
                    />
                );
            })}
        </div>
    );
}

export default Directory;
