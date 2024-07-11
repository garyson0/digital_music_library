import mongoose from 'mongoose';
import songSchema from './Song';

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    songs: {type: [songSchema], required: true}
  },
  { timestamps: true }
);

export default mongoose.model("Album", albumSchema);