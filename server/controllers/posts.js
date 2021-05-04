// importing the Mongoose model
import PostMessage from '../models/postMessage.js'

// Viewing posts,
// this returns a json file from our db
export const getPosts = async (req, res) => {
  try {
    // retrieving everything in the db
    const postMessage = await PostMessage.find()
    // 200 OK success status response code
    res.status(200).json(postMessage) // converts our db content to json
  } catch (error) {
    //   404 This means the file or page that the browser is requesting wasn't found by the server.
    res.status(404).json({ message: error.message })
  }
}

// creating posts
export const createPosts = async (req, res) => {
  // takes in the body of post
  const post = req.body
  // and adds it to our database in mongodb PostMessage
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    // 201 ssuccefull creation
    res.status(201).json(newPost)
  } catch (error) {
    //   409  The request could not be completed due to a conflict with the current state of the target resource
    res.status(409).json({ message: error.message })
  }
}
