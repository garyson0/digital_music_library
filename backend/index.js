import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from './config/db.js';
import albumRoutes from './routes/albumRoutes.js';
import songRoutes from './routes/songRoutes.js';
import artistRoutes from './routes/artistRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import errorHandler from './middlewares/errorHandler.js';


const app = express();
const dotEnv = dotenv.config();
const PORT = process.env.PORT || 5000;


connectToDatabase();
 
app.use(cors());
app.use(express.json());

app.use('/api/artists',artistRoutes);
app.use('/api/albums',albumRoutes);
app.use('/api/songs',songRoutes);
app.use('/api/search',searchRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
