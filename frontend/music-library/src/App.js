import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtistsPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import './App.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ArtistsPage />} />
                <Route path="/artists/:artistId/albums" element={<AlbumPage />} />
            </Routes>
        </Router>
    );
};

export default App;