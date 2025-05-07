import Mongoose from 'mongoose'
import 'dotenv/config'
const uricloud =
  'mongodb+srv://malexfuture:malex1524@cluster0.m2yho7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const uri = process.env.DB_URI!
// 'mongodb://localhost/music-videoPlayer'

export async function DBconect() {
  try {
    await Mongoose.connect(uri, {})
  } catch (error) {
    console.log(error)
  }
}
