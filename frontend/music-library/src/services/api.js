import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call error:", error);
    return Promise.reject(
      error.response ? error.response.data : { message: "Network Error" }
    );
  }
);

export const getArtists = async () => {
  try {
    const response = await api.get(`/artists`);
    return response.data;
  } catch (error) {
    console.error("Error in getArtists: ", error.message);
    throw error;
  }
};

export const getAlbumsByArtistId = async (artistId) => {
  try {
    const response = await api.get(`/albums/${artistId}`);
    return response.data;
  } catch (error) {
    console.error("Error in getAlbumsByArtistId:", error.message);
    throw error;
  }
};

export const getSongsByAlbumId = async (albumId) => {
  try {
    const response = await api.get(`/albums/${albumId}/songs`);
    return response.data;
  } catch (error) {
    console.error("Error in getSongsByAlbumId:", error.message);
    throw error;
  }
};

export const getArtistById = async (artistId) => {
  try {
    const response = await api.get(`/artists/${artistId}`);
    return response.data;
  } catch (error) {
    console.error("Error in getArtistById:", error.message);
    throw error;
  }
};

export const searchArtistsByQuery = async (query) => {
  try {
    const response = await api.get(`/search?query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error in searchByQuery:", error.message);
    throw error;
  }
};
