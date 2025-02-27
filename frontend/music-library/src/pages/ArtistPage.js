import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Typography, Alert } from "@mui/material";
import { getArtists } from "../services/api";
import ArtistList from "../components/ArtistList";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
import { searchArtistsByQuery } from "../services/api";

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const data = await getArtists();
        setArtists(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  const handleArtistClick = (artistId) => {
    navigate(`/artists/${artistId}/albums`);
  };

  const handleSearch = async (query) => {
    try {
      const searchRes = await searchArtistsByQuery(query);
      setSearchResults(searchRes);
    } catch (err) {
      setError(error.message);
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error"> {error} </Alert>;
  const artistsToDisplay = searchResults.length <= 0 ? artists : searchResults;

  return (
    <Container
      style={{
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "40px",
        marginTop: "40px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        style={{
          fontWeight: "italic",
          letterSpacing: "10px",
          fontSize: "3rem",
          color: "#FFB100",
        }}
      >
        Artists
      </Typography>
      <Search onSearch={handleSearch} />
      <ArtistList
        artists={artistsToDisplay}
        onArtistClick={handleArtistClick}
      />
    </Container>
  );
};

export default ArtistsPage;
