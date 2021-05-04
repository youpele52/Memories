import React from 'react'
// useSelector is used  to fetch the data from the global data store
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'

const Posts = () => {
  // state here is the current content of the whole global store
  // the state of the posts we need here is posts because in the reducers index file
  //   we did this
  // export default combineReducers({
  //   posts: posts,
  // })
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log(posts)
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts
