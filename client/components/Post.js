import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { ThumbUpIcon, ThumbDownIcon, TrashIcon } from '@heroicons/react/solid'
// import Image from 'next/image'
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from 'cloudinary-react'
import { forwardRef } from 'react'
import { useApiContext } from '../context/ApiContext'

const Post = forwardRef(({ post }, ref) => {
  const {
    createdAt,
    creator,
    likeCount,
    message,
    selectedFile,
    tags,
    title,
    _id,
  } = post
  // const [isAvailable, setIsAvailable] = useState(true)
  // console.log(isAvailable)
  // console.log(post)
  const { currentId, setCurrentId, deletePost, fetchPosts, url, likePost } =
    useApiContext()

  const deleteThisPost = () => {
    deletePost(_id)
    fetchPosts(url)
    window.location.reload(false)
  }

  // console.log(currentId)
  return (
    <div className='p-2 pr-12 md:pr-2 pb-10'>
      <div className=''>
        <div className='bg-white w-100 rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col'>
          <div
            className=' bg-cover  bg-center h-48 w-1000  p-4 flex justify-between'
            // bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500

            style={{
              backgroundImage: `url(${selectedFile})`,
              backgroundRepeat: `no-repeat`,
            }}
          >
            <div className='text-white'>
              <div className=' font-bold'>{creator}</div>
              <div className=' text-sm'>{moment(createdAt).fromNow()}</div>
            </div>
            <div
              className='text-white font-bold cursor-pointer'
              onClick={() => {
                setCurrentId(_id)
              }}
            >
              • • •{' '}
            </div>

            {/* <Image src={Image} alt={title} width={1000} height={750} /> */}
          </div>
          <div className='p-4 flex-1 flex flex-col' style={{}}>
            <h3 className='mb-4 text-2xl'>{title}</h3>
            <div className='mb-4 text-grey-darker text-sm flex-1'>
              <p>{message}</p>
            </div>
            <p className='border-t border-gray-light pt-2 text-xs text-gray-400 hover:text-blue-400 '>
              #{tags}
              {/* {tags.map((tag) => `#${tag} `)} */}
            </p>
            <div className='pt-2 px-2 flex justify-between'>
              <div
                className='w-12 grid grid-flow-col grid-cols-2 cursor-pointer hover:text-blue-600 '
                onClick={() => likePost(_id)}
              >
                <ThumbUpIcon />
                <div> {likeCount}</div>
              </div>
              <div
                className='w-7 cursor-pointer hover:text-red-600 '
                onClick={deleteThisPost}
              >
                <TrashIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Post
