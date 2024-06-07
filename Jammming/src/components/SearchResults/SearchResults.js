import React from 'react';
import './SearchResults.css';
import Track from '../Track/Track';

function SearchResults({ searchItems, setTracklistItems }) {
    function handleClick(track) {
        setTracklistItems((prev) => [...prev, track]);
    }

    return (
        <div className='searchResults'>
            <h2>Search Results</h2>
            {searchItems.map((track, index) => (
                <>
                    <Track key={index} track={track} setTrackslistItems={setTracklistItems} />
                    <button type='button' onClick={() => handleClick(track)}>+</button>
                </>
            ))}
        </div>
    );
}

export default SearchResults;
