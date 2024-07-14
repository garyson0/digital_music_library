import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

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

const AlbumList = ({ albums, onAlbumClick }) => {
  return (
    <StyledList>
      {albums.map((album) => (
        <StyledListItem button key={album._id} onClick={() => onAlbumClick(album._id)}>
          <ListItemIcon>
            <AlbumIcon style={iconStyles} />
          </ListItemIcon>
          <ListItemText primary={album.title} />
          <IconButton edge="end" style={expandIconStyles}>
            <ExpandMoreIcon style={iconStyles} />
          </IconButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default AlbumList;