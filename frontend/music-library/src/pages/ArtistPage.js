import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { getArtists } from "../services/api";
import ArtistList from "../components/ArtistList";

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await getArtists();
      setArtists(data);
    };
    fetchArtists();
  }, []);

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
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{
          fontWeight: "italic",
          letterSpacing: "10px",
          fontSize: "3rem", 
          color: "#FFB100"
        }}
      >
        Artists
      </Typography>
      <ArtistList artists={artists} />
    </Container>
  );
};

export default ArtistsPage;
