import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Typography,
} from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import SongList from "./SongsList";

const StyledList = styled(List)({
  backgroundColor: "#242a30",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const StyledListItem = styled(ListItem)({
  borderBottom: "1px solid #444",
  "&:last-child": {
    borderBottom: "none",
  },
  "&:hover": {
    backgroundColor: "#333c45",
    transition: "background-color 0.3s ease",
  },
});

const iconStyles = {
  color: "#ffffff",
};

const expandIconStyles = {
  marginLeft: "auto",
};

const AlbumList = ({ albums, onAlbumClick, expandedAlbum }) => {
  return (
    <StyledList>
      {albums.map((album) => (
        <div key={album._id}>
          <StyledListItem
            key={album._id}
            onClick={() => onAlbumClick(album._id)}
          >
            <ListItemIcon>
              <AlbumIcon style={iconStyles} />
            </ListItemIcon>
            <ListItemText primary={album.title} />
            <IconButton edge="end" style={expandIconStyles}>
              <ExpandMoreIcon style={iconStyles} />
            </IconButton>
          </StyledListItem>

          <Collapse
            in={expandedAlbum === album._id}
            timeout="auto"
            unmountOnExit
          >
            <p>{album.description}</p>
            <Typography
              variant="h1"
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "#FFB100",
              }}
            >
              Songs in the album
            </Typography>
            <SongList songs={album.songs} />
          </Collapse>
        </div>
      ))}
    </StyledList>
  );
};

export default AlbumList;
