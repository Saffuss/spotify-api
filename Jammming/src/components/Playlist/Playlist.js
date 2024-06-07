import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ tracklistItems, setTracklistItems }) {
    return (
        <div className='playlist'>
            <h2>Playlist</h2>
            <Tracklist tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
        </div>
    );
}

export default Playlist;