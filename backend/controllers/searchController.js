import Artist from "../models/Artist.js";

export const searchArtists = async (req, res) => {
    const { query } = req.query; 

    try {
        const artists = await Artist.find({
            name: { $regex: query, $options: 'i' } 
        }).limit(10);

        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};