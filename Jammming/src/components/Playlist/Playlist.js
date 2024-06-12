import React, { useState } from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';
import PlaylistName from '../PlaylistName';

function Playlist({ tracklistItems, setTracklistItems, savePlaylist, uris }) {
    const [name, setName] = useState('');

    function save() {
        if (name.trim() === '') {
            return;
        }
        savePlaylist(name, uris);
        setName('');
        setTracklistItems([]);
    }

    return (
        <div className='playlist'>
            <PlaylistName name={name} setName={setName} />
            <Tracklist tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
            <button type='button' onClick={save} >Save to Spotify</button>
        </div>
    );
}

export default Playlist;