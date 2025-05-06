import express from 'express'
import morgan from 'morgan'
import musicRoutes from './routes/music.routes'
import videoRoutes from './routes/video.routes'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import path from 'path'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
// import { DBconect } from './database/database'
import cors from 'cors'

const app = express()

//middleware
app.use(cors())
// DBconect()
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

//setting
app.set('port', process.env.PORT || 6000)

//routes
app.use('/api', musicRoutes)
app.use('/api', videoRoutes)
app.use('/api', userRoutes)
app.use('/api', authRoutes)

//storage
app.use('/MusicUploads', express.static(path.resolve('/MusicUploads')))
app.use('/VideoUploads', express.static(path.resolve('/VideoUploads')))
export default app
