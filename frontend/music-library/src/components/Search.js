import React, { useState } from "react";
import { TextField, Autocomplete, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { searchArtistsByQuery } from "../services/api";

const Search = ({ onSearch }) => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = async (event) => {
    const value = event.target.value;

    if (value) {
      try {
        const response = await searchArtistsByQuery(value);
        setOptions(response);
        onSearch(value);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setOptions([]);
      onSearch("");
    }
  };

  const handleOptionSelect = (event, value) => {
    const selectedArtist = options.find((artist) => artist.name === value);
    if (selectedArtist) {
      navigate(`/artists/${selectedArtist._id}/albums`);
    }
  };

  return (
    <Paper
      style={{
        backgroundColor: "white",
        padding: "7px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "10px",
        marginTop: "30px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Autocomplete
        freeSolo
        align="center"
        options={options.map((artist) => artist.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Artists"
            variant="outlined"
            onChange={handleInputChange}
          />
        )}
        onChange={handleOptionSelect}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </Paper>
  );
};

export default Search;
