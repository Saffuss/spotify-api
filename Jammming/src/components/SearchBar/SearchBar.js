import React, { useState } from 'react';
import './SearchBar.css';
import HandleSearchSubmit from '../HandleSearchSubmit';

function SearchBar() {
    const [query, setQuery] = useState('');

    return (
        <div className='searchBar'>
            <form onSubmit={(e) => HandleSearchSubmit(e, query)} className='search-bar-container'>
                <input
                    type='text'
                    placeholder='Thingies...'
                    aria-label='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;