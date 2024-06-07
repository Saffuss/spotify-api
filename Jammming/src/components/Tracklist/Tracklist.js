import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

function Tracklist({ tracklistItems, setTracklistItems }) {
    function handleClick(index) {
        setTracklistItems((prevItems) =>
            prevItems.filter((_, i) => i !== index)
        )
    }

    return (
        <div className='tracklist'>
            {tracklistItems.map((track, index) => (
                <div key={index} className='track-item'>
                    <Track track={track} />
                    <button type='button' onClick={() => handleClick(index) }>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Tracklist;
