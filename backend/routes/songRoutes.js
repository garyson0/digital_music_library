import express from "express";
import { getSongsByAlbumId } from "../controllers/songController.js";

const router = express.Router();

router.get("/album/:albumId", getSongsByAlbumId);

export default router;