import React, { useState } from 'react';
import './App.css'; // Importing CSS for styling

// Import statements for the components
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import Tracklist from '../Tracklist/Tracklist';

const initialTracks = [
    { name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { name: "Song 3", artist: "Artist 3", album: "Album 3" }
]


function App() {
    const [tracks, setTracks] = useState(initialTracks);

  return (
    <div className="App">

      <header className="App-header">
        <h1>Jammming</h1>
      </header>

      <main>
        <SearchBar />
        <SearchResults />
        <Playlist />
        <Tracklist tracks={tracks} />
      </main>
    </div>
  );
}

export default App;
