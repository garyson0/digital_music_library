import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid, CircularProgress, Alert } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AlbumList from "../components/AlbumList";
import { getAlbumsByArtistId, getArtistById } from "../services/api";

const AlbumPage = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [expandedAlbum, setExpandedAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await getAlbumsByArtistId(artistId);
        setAlbums(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const fetchArtist = async () => {
      try {
        const data = await getArtistById(artistId);
        setArtist(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAlbums();
    fetchArtist();
  }, [artistId]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAlbumClick = (albumId) => {
    setExpandedAlbum(expandedAlbum === albumId ? null : albumId);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error"> {error} </Alert>;

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
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        style={{ marginBottom: "20px" }}
      >
        <Grid item>
          <Button
            onClick={handleBackClick}
            variant="outlined"
            color="primary"
            style={{ marginRight: "20px" }}
          >
            Go back
          </Button>
        </Grid>
        <Grid item xs>
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
            Albums of {artist?.name}
          </Typography>
        </Grid>
      </Grid>

      <AlbumList
        albums={albums}
        onAlbumClick={handleAlbumClick}
        expandedAlbum={expandedAlbum}
      />
    </Container>
  );
};

export default AlbumPage;
