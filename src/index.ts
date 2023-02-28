import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import path from 'path'
import './db/connection'
import routes from './routes'
import cors from 'cors'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json())
app.use('/api', ...routes)

if (process.env.NODE_ENV === 'production') {
  // Express will serve Production Assets
  app.use(express.static(`${process.env.BASE_FRONTEND_PATH}/frontend/dist`))

  //Express will serve up the index.html
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        process.env.BASE_FRONTEND_PATH,
        'frontend',
        'dist',
        'index.html'
      )
    )
  })
}
app.listen(PORT, () => {
  console.log(`App Started on port ${PORT}`)
})
