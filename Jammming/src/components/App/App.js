import React, { useState } from 'react';
import './App.css'; // Importing CSS for styling

// Import statements for the components
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../Spotify.js';

const initialTracks = [
    { name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { name: "Song 3", artist: "Artist 3", album: "Album 3" }
]


function App() {
    const [tracklistItems, setTracklistItems] = useState([]);
    const [searchItems, setSearchItems] = useState(initialTracks);

    const uris = tracklistItems.map(track => track.uri);

  return (
    <div className="app">

      <header className="App-header">
        <h1>Jammming</h1>
      </header>

      <main>
        <SearchBar setSearchItems={setSearchItems} />
        <div className='searchAndPlaylist'>
            <SearchResults searchItems={searchItems} setTracklistItems={setTracklistItems}  />
            <Playlist tracklistItems={tracklistItems} setTracklistItems={setTracklistItems} />
        </div>
      </main>
    </div>
  );
}

export default App;
