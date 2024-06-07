import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [query, setQuery] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();

        if (query.trim() === '') return;

        const url = `${query}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }

    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit} className='search-bar-container'>
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