import Mongoose from 'mongoose'

const uricloud =
  'mongodb+srv://malexfuture:malex1524@cluster0.m2yho7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const uri = 'mongodb://localhost/music-videoPlayer'

export async function DBconect() {
  await Mongoose.connect(uri, {})
}
