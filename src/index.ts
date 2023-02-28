import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import path from 'path'
import './db/connection'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000
app.use(bodyParser.json())

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
