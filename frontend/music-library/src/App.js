import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtistsPage from './pages/ArtistPage';
import './App.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ArtistsPage />} />
            </Routes>
        </Router>
    );
};

export default App;