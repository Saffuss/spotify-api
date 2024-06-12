import React, { useState } from 'react';
import './SearchBar.css';
import HandleSearchSubmit from '../HandleSearchSubmit';

function SearchBar({ search }) {
    const [query, setQuery] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        search(query);
    }

    return (
        <div className='searchBar'>
            <form onSubmit={handleSearchSubmit} className='search-bar-container'>
                <input
                    type='text'
                    placeholder='Thingies...'
                    aria-label='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type='submit' >Search</button>
            </form>
        </div>
    );
}

export default SearchBar;