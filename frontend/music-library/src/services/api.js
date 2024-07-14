import axios from 'axios';


const API_BASE_URL = 'http://localhost:5000/api';

export const getArtists = async () => {
    const response = await axios.get(`${API_BASE_URL}/artists`);
    return response.data;
};

export const getAlbumsByArtistId = async (artistId) => {
    const response = await axios.get(`${API_BASE_URL}/albums/${artistId}`);
    return response.data;
};

export const getSongsByAlbumId = async (albumId) => {
    const response = await axios.get(`${API_BASE_URL}/songs/album/${albumId}`);
    return response.data;
};

export const getArtistById = async (artistId) => {
    const response = await axios.get(`${API_BASE_URL}/artists/${artistId}`);
    return response.data;
};