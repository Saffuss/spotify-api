import React, { useState } from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';
import PlaylistName from '../../PlaylistName';

function Playlist({ tracklistItems, setTracklistItems }) {
    const [name, setName] = useState('')

    return (
        <div className='playlist'>
            <PlaylistName name={name} setName={setName} />
            <Tracklist tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
            <button type='button'>Save to Spotify</button>
        </div>
    );
}

export default Playlist;