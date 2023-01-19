import mongoose from "mongoose";

const { Schema, model } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true }, //indexa email. Buscar documentos por el email será más sencillo.
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("user", userSchema);
