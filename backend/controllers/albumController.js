import Artist from "../models/Artist.js";
import Song from "../models/Song.js";

export const getAlbumsByArtistId = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.artistId).populate({
      path: 'albums',
      populate: {
        path: 'songs'
      }
    });

    if (!artist) {
      return res.status(404).json({ message: 'Artist not found' });
    }

    const albums = artist.albums;
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};