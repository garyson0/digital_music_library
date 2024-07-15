import Artist from "../models/Artist.js";

export const getAllArtists = async (req, res, next) => {
    try {
        const artists = await Artist.find().populate('albums');
        res.json(artists);
    } catch (error) {
        next(error);
    }
};

export const getArtistById = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.artistId).populate('albums');
        
        if (!artist) {
            const error = new Error("Artist not found!");
            error.statusCode = 404;
            throw error;
        }

        res.json(artist);
    } catch (error) {
        next(error);
    }
};