import mongoose from "mongoose";
import Artist from "./models/Artist.js";
import Album from "./models/Album.js";
import songSchema from "./models/Song.js";
import data from "./data.json" assert { type: "json" };
import connectToDatabase from "./config/db.js";
import Song from "./models/Song.js";

const importData = async () => {
  try {
    await connectToDatabase();
    await Artist.deleteMany();
    await Album.deleteMany();
    await Song.deleteMany();

    // loop through artists
    for (const artistData of data) {
      // albums of current artist
      let albums = [];

      // handle albums of current artist
      for (const albumData of artistData.albums) {
        let songs = [];

        // handle songs of current album
        for (const songData of albumData.songs) {
          const song = new Song({
            title: songData.title,
            length: songData.length,
          });
          await song.save();

          songs.push(song._id);
        }
        const album = new Album({
          title: albumData.title,
          songs: songs,
          description: albumData.description,
        });

        await album.save();

        albums.push(album._id);
      }

      const artist = new Artist({
        name: artistData.name,
        albums: albums,
      });
      await artist.save();
    }
    console.log("Data from json imported successfully into the database.");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error at importing the data from json: ", error);
    mongoose.connection.close();
  }
};

importData();
