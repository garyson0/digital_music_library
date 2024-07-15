import express from 'express';
import { searchArtists } from '../controllers/searchController.js';

const router = express.Router();

router.get('/', searchArtists);

export default router;