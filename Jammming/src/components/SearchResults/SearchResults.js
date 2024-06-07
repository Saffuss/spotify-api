import React from 'react';
import './SearchResults.css';
import Track from '../Track/Track';

function SearchResults({ searchItems, setTracklistItems }) {
    function handleClick(track) {
        setTracklistItems((prev) => [...prev, track]);
    }

    return (
        <>
            {searchItems.map((track, index) => (
                <>
                    <Track key={index} track={track} setTrackslistItems={setTracklistItems} />
                    <button type='button' onClick={() => handleClick(track)}>+</button>
                </>
            ))}
        </>
    );
}

export default SearchResults;
