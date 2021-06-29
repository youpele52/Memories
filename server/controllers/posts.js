import PostMessage from '../models/postMessage.js'

// handlers and logic for the routes

// getting all the posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    // console.log(postMessages)
    res.status(200).json(postMessages)
    // res.json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// creating a post
export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
