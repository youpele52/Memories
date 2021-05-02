import mongoose from 'mongoose'

// creating a mongoose schema for each post
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  //we are going to convert an image into a string using base64 package
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

// converting our schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema)

// exporting the mongoose model
export default PostMessage
