import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './search-bar.styles.scss';
import { CategoryContext } from '../../context/category-context';

export default function SearchBar(props) {
    const { searchInputValue, setSearchInputValue } = useContext(CategoryContext);

    const handleChange = (e) => {
        setSearchInputValue(e.target.value);
    }

    return (
        <div className='search-bar-container'>
            <input 
                onChange={handleChange} 
                // onKeyDown={props.handleKeyDown} 
                placeholder='Search Products or Categories' 
                value={searchInputValue} 
            />
            <div className='search-icon-container'>
                <button onClick={props.handleClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                </button>
            </div>
        </div>
    );
}
