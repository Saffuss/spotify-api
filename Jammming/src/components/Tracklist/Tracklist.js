import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

function Tracklist({ tracks }) {
    return (
        <>
            {tracks.map((track, index) => (
                <Track key={index} track={track} />
            ))}
        </>
    );
}

export default Tracklist;
