import multer from 'multer'
import { v4 } from 'uuid'
import path from 'path'

const storage = multer.memoryStorage()

export default multer({ storage })
