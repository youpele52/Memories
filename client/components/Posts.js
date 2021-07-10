import Post from './Post'
import React, { useEffect } from 'react'
import { useApiContext } from '../context/ApiContext'
import { CircularProgress } from '@material-ui/core'
import * as moment from 'moment'
import FlipMove from 'react-flip-move'

function Posts() {
  const { posts, currentId, fetchPosts, url } = useApiContext()
  console.log(`posts type ${typeof posts}`)
  console.log(posts)

  // this automatically reloads our page whenever there is change to our data
  useEffect(() => {
    fetchPosts(url)
  }, [posts])

  return !posts.length ? (
    <CircularProgress color='inherit' size={100} />
  ) : (
    <FlipMove className='px-1 my-10 sm:grid md:grid-cols-1 xl:grid-cols-2  xl:pr-24  '>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </FlipMove>
  )
}

export default Posts
