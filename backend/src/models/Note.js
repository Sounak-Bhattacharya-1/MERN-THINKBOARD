import mongoose from "mongoose";

// 1- Define the Note schema
// 2- Create and export the Note model

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
