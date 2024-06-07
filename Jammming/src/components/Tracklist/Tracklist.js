import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

function Tracklist({ tracks, setPlaylistItems }) {
    function handleClick(track) {
        setPlaylistItems((prev) => [...prev, track]);
    }

    return (
        <>
            {tracks.map((track, index) => (
                <>
                    <Track key={index} track={track} setPlaylistItems={setPlaylistItems} />
                    <button type='button' onClick={() => handleClick(track)}>+</button>
                </>
            ))}
        </>
    );
}

export default Tracklist;
