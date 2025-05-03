import Mongoose from 'mongoose'

export async function DBconect() {
  await Mongoose.connect('mongodb://mongo/music-videoPlayer', {})
}
