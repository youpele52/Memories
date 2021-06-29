import Post from './Post'
import React, { useEffect } from 'react'
import { useApiContext } from '../context/ApiContext'
import { CircularProgress } from '@material-ui/core'
import * as moment from 'moment'
import FlipMove from 'react-flip-move'

function Posts() {
  const { posts, fetchPosts, url } = useApiContext()
  console.log(posts)

  // this automatically reloads our page whenever there is change to our data
  // useEffect(() => {
  //   fetchPosts(url)
  // }, [posts])

  return !posts.length ? (
    <CircularProgress color='inherit' size={100} />
  ) : (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 '>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </FlipMove>
  )
}

export default Posts
