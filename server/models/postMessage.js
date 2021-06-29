import mongoose from 'mongoose'

// creating a  mongoose Schema
const postSchema = mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  title: {
    required: true,
    type: String,
  },
  message: String,
  tags: [String],
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

// creating mongoose model from the created mongoose schema
// 'MemoriesPostMessage' will/is the name of the collection in the mongo database we connected to this app
const PostMessage = mongoose.model('MemoriesPostMessage', postSchema)

// exporting mongoose model
export default PostMessage
