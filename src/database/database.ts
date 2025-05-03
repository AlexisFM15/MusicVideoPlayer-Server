import Mongoose from 'mongoose'

const uri =
  'mongodb+srv://malexfuture:malex1524@cluster0.m2yho7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
export async function DBconect() {
  await Mongoose.connect(uri, {})
}
