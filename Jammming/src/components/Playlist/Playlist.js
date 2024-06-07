import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({ tracklistItems, setTracklistItems }) {
    return (
        <div className='playlist'>
            <Tracklist tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
        </div>
    );
}

export default Playlist;