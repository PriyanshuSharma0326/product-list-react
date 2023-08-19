import React from 'react';
import './navbar.styles.scss';
import SearchFilter from '../search-filter/search-filter.component';

function Navbar() {
    return (
        <nav className='navbar'>
            <img className='nav-logo' src="https://productlist-app.netlify.app/static/media/logo.8be8365c6b0831e4d3b2.png" alt="Logo" />
            <h1 className='nav-title'>Product List App</h1>

            <SearchFilter />
        </nav>
    );
}

export default Navbar;
