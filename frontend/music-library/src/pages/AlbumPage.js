import React, { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AlbumList from "../components/AlbumList";
import { getAlbumsByArtistId } from "../services/api";

const AlbumPage = () => {
  const { artistId } = useParams();
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await getAlbumsByArtistId(artistId);
        console.log("albums: ",data);
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [artistId]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "40px",
        marginTop: "40px",
      }}
    >
      <Button
        onClick={handleBackClick}
        variant="contained"
        sx={{ marginBottom: "1rem" }}
      >
        Back
      </Button>
      <Typography
        variant="h4"
        align="center"
        style={{
            fontWeight: "italic",
            letterSpacing: "10px",
            fontSize: "3rem", 
            color: "#FFB100"
          }}
      >
        Albums of {}
      </Typography>
      <AlbumList albums={albums} />
    </Container>
  );
};

export default AlbumPage;
