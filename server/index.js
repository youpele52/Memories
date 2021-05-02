//  this is the starting point of our server app
import mongoose from 'mongoose' //to create module of our posts
import express from 'express' // for creating the routing of our app
import bodyParser from 'body-parser' // will us enable send post request
import cors from 'cors' //  will enable cross origin request
import dotenv from 'dotenv' //hiding sensitive info like password

import postRoutes from './routes/posts.js'

// initialise the app
const app = express()

dotenv.config()

// using express middleware to connect our routes to our app
app.use('/posts', postRoutes) // every routes inside of postRoutes is going to start with /posts

// setting up our body parser so that we can send a request
app.use(bodyParser.json({ limit: '30mb', extended: true })) //'30mb' limits the size of our images
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

// cloud mongodb will be used
//  https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`SUCCESSULLY CONNECTED...Server running on port: ${PORT}`)
    )
  ) //what to do if connection is successful
  .catch((error) => console.log(`ERROR DETECTED ${error.message}`)) //what to do if connection fails

mongoose.set('useFindAndModify', false)
