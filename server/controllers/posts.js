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
  const post = req.body

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
