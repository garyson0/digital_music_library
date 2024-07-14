import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const SongList = ({ songs }) => {
  return (
    <List>
      {songs.map((song) => (
        <div key={song._id}>
          <ListItem
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              color: "black"
            }}
          >
            <ListItemIcon>
              <MusicNoteIcon style={{ color: "#000", fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              primary={song.title}
              secondary={`Length: ${song.length}`}
              primaryTypographyProps={{ style: { fontWeight: "bold" } }}

            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default SongList;
