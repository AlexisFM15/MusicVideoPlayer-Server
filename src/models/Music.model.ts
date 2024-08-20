import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  title: String,
  description: String,
  musicPath: String,
});

interface IMusic extends Document {
  title: string;
  description: string;
  musicPath: string;
}

export default model<IMusic>("music", schema);
