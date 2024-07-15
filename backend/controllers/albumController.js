import Artist from "../models/Artist.js";
import Song from "../models/Song.js";

export const getAlbumsByArtistId = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.artistId).populate({
      path: "albums",
      populate: {
        path: "songs",
      },
    });

    if (!artist) {
      const error = new Error(
        "Artist not found while searching for his albums!"
      );
      error.statusCode = 404;
      throw error;
    }

    const albums = artist.albums;
    res.json(albums);
  } catch (error) {
    next(error);
  }
};
