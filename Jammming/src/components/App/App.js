import React, { useState } from 'react';
import './App.css'; // Importing CSS for styling
// Import statements for the components
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import Tracklist from '../Tracklist/Tracklist';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Jammming</h1>
      </header>

      <main>
        <SearchBar />
        <SearchResults />
        <Playlist />
        <Tracklist />
        <Track />
      </main>
    </div>
  );
}

export default App;
