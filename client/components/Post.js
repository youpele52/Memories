import React, { useState } from 'react'
import * as moment from 'moment'
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { forwardRef } from 'react'

const Post = forwardRef(({ post }, ref) => {
  const [isAvailable, setIsAvailable] = useState(true)
  console.log(isAvailable)
  return (
    <>
      <div
        className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
        ref={ref}
      >
        <img src={post.selectedFile} alt='' width='1400' height='1080' />

        {/* <Image
          layout='responsive'
          src={post.selectedFile}
          height={1018}
          width={1400}
        /> */}
        <p>{post.creator}</p>
      </div>
    </>
  )
})

export default Post
