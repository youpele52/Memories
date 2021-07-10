import mongoose from 'mongoose'
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

// editting a post
export const updatePost = async (req, res) => {
  // getting the id from the params and renaming it to _id
  const { id: _id } = req.params
  const post = req.body
  // check if _id is NOT a mongoose object id
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No post with that id')
    }
    // if the _id exist then
    else {
      const updatedPost = await PostMessage.findByIdAndUpdate(
        _id,
        { ...post, _id },
        {
          new: true,
        }
      )
      res.status(201).json(updatedPost)
      // res.json(updatedPost)
    }
  } catch (error) {
    res.status(409).json({ message: error.message })
    // next(error)
  }
}

// deleting a  post
export const deletePost = async (req, res) => {
  const { id: _id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No post with that id')
    } else {
      await PostMessage.findByIdAndRemove(_id)
      res.status(201).json({ message: 'Post deleted successfully' })
    }
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

// like post

export const likePost = async (req, res) => {
  const { id: _id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No post with that id')
    } else {
      const post = await PostMessage.findById(_id)
      const updatedPost = await PostMessage.findByIdAndUpdate(
        _id,
        { likeCount: post.likeCount + 1 },
        { new: true }
      )
      res.status(201).json(updatedPost)
    }
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
