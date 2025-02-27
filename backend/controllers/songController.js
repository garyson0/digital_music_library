import Album from "../models/Album.js";

export const getSongsByAlbumId = async (req, res) => {
    try {
        const album = await Album.findById(req.params.albumId);
        if (!album) return res.status(404).json({ message: 'Album not found' });
        res.json(album.songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};