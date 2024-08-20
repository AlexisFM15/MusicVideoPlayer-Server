import { model, Document, Schema} from "mongoose";

const VideoSchema = new Schema({
    title: String,
    description: String,
    VideoPath: String
})

interface IVideo extends Document{
    title: string,
    description:string,
    VideoPath:String
}

export default model<IVideo>('video',VideoSchema)