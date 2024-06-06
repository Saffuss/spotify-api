import React from 'react';
import './Track.css';

function Track({ track }) {
    return (
        <>
            <h2>{track.name}</h2>
            <p>{track.artist}</p>
            <p>{track.album}</p>
        </>
    );
}

export default Track;