import React, { useState } from 'react';

function PlaylistName({ name, setName }) {
    return (
        <>
            <input
                type='text'
                placeholder='Playlist Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
}

export default PlaylistName;