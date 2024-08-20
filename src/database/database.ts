import Mongoose from "mongoose";

export async function DBconect() {
  await Mongoose.connect("mongodb://localhost/music-videoPlayer", {});
}
