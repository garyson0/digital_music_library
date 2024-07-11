import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from './config/db.js';

const app = express();
const dotEnv = dotenv.config();
const PORT = process.env.PORT || 4000;

connectToDatabase();
 
  
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
