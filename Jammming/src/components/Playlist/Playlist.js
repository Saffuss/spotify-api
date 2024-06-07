import React, { useEffect } from 'react';
import './Playlist.css';
import Track from '../Track/Track';

function Playlist({ playlistItems, setPlaylistItems }) {
    function handleClick(index) {
        setPlaylistItems((prevItems) =>
            prevItems.filter((_, i) => i !== index)
        )
    }

    useEffect(() => {}, [playlistItems]);

    return (
        <>
            {playlistItems.map((track, index) => (
                <div key={index} className='track-item'>
                    <Track track={track} />
                    <button type='button' onClick={() => handleClick(index)}>X</button>
                </div>
            ))}
        </>
    );
}

export default Playlist;