import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      length: {type: String, required: true}
    },
    { timestamps: true }
  );

export default songSchema;