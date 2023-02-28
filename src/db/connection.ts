import mongoose from 'mongoose'
import { config } from 'dotenv'
config()
mongoose.connect(process.env.MONGO_DB_URL || '')
mongoose.Promise = global.Promise
