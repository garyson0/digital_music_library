import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}]
  },
  { timestamps: true }
);


export default mongoose.model("Artist", artistSchema);