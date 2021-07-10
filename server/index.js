import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import postRoutes from './routes/posts.js'

// for .env variables
const __dirname = path.resolve()
dotenv.config({ path: __dirname + '/.env' })
// initialise app
const app = express()
// cors() has to be above the postRoutes
app.use(cors())

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// using middleware to connect postRoutes to the app
// interpreted as http://localhost:5000/posts
app.use('/posts', postRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to Memories API')
})

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000

// connect to db
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) =>
    console.log(`Failed to run server! Error detected: ${error.message}`)
  )

//   this makes sure there is no warnings in the console
mongoose.set('useFindAndModify', false)
