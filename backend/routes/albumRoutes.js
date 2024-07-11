import express from "express";
import { getAlbumsByArtistId } from "../controllers/albumController.js";

const router = express.Router();

router.get('/:artistId', getAlbumsByArtistId);

export default router;