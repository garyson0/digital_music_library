import Artist from "../models/Artist.js";

export const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find().populate('albums');
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};