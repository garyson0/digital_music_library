import React from "react";
import { List, ListItem, Paper, Typography, Container, ListItemIcon } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const ArtistList = ({ artists }) => {
  return (
    <Container sx={{ padding: '2rem', backgroundColor: '#000'}}>
      <Paper
        sx={{
          padding: '1rem',
          borderRadius: '12px',
          backgroundColor: 'white'
        }}
      >
        <List>
          {artists.map((artist) => (
            <ListItem
              key={artist._id}
              sx={{
                margin: '10px 0',
                padding: '20px',
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: '8px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#333',
                  cursor: 'pointer',
                },
              }}
            >
              <ListItemIcon>
                <PersonIcon sx={{ color: '#fff', marginRight: '10px' }} />
              </ListItemIcon>
              <div>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    color: '#fff',
                    display: 'block',
                  }}
                >
                  {artist.name}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ArtistList;
