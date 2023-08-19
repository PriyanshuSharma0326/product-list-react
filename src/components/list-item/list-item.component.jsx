import React from 'react';
import './list-item.styles.scss';

function ListItem({ productName, productImageURL, productPrice, productCategory }) {
    return (
        <div className='category-container'>
            <img className="background-image" src={productImageURL} alt={productName} />

            <div className="category-body-container">
                <h2 className='title'>{productName}</h2>

                <h2 className='category'>{productCategory}</h2>

                <h2 className='amount'>Starts from <span>${productPrice}</span></h2>
            </div>
        </div>
    );
}

export default ListItem;
