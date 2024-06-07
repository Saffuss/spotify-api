import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ tracklistItems, setTracklistItems }) {
    return (
        <>
            <Tracklist tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
        </>
    );
}

export default Playlist;