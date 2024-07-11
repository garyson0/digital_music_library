import Album from "../models/Album.js";


export const getAlbumsByArtistId = async (req, res) => {
    try {
        const albums = await Album.find({ artist: req.params.artistId });
        res.json(albums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
