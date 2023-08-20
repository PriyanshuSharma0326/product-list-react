import React, { useContext } from 'react';
import './sort-list.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CategoryContext } from '../../context/category-context';

function SortList() {
    const { priceOrder, setPriceOrder } = useContext(CategoryContext);

    const handlePriceSort = () => {
        if(priceOrder === '') {
            setPriceOrder('asc');
        }
        else if(priceOrder === 'asc') {
            setPriceOrder('desc');
        }
        else if(priceOrder === 'desc') {
            setPriceOrder('asc');
        }
    }

    return (
        <div className='sort-features'>
            <span>Sort by</span>
            <button className="price-sort" onClick={handlePriceSort}>
                Price {priceOrder === '' ? '' : 
                (priceOrder === 'asc' ? <FontAwesomeIcon icon={faArrowUp} className='icon' /> : 
                <FontAwesomeIcon icon={faArrowDown} className='icon' />)}
            </button>

            <button className="rating-sort">
                Rating <FontAwesomeIcon icon={faArrowDown} className='icon' />
            </button>
        </div>
    )
}

export default SortList;
