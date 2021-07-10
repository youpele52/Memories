import React, { useState, useEffect } from 'react'
import { useApiContext } from '../context/ApiContext'
import FileBase from 'react-file-base64'

function Form() {
  const {
    createPost,
    fetchPosts,
    url,
    currentId,
    setCurrentId,
    posts,
    updatePost,
  } = useApiContext()
  // console.log(createPost)
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })

  const post = posts.find((post) => post._id === currentId)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId) {
      console.log('Before')
      console.log(post)
      updatePost(currentId, postData)
      console.log('After')
      console.log(postData)
    } else {
      createPost(postData)
    }
    fetchPosts(url)
    // window.location.reload(false)
    clear()
  }
  const clear = () => {
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
    setCurrentId(null)
  }

  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])

  return (
    <div className=' py-10 pr-12'>
      <div className='grid justify-items-end'>
        {/* <h1 className=''>Creating a Memory </h1> */}
        <form className='w-full max-w-lg ' onSubmit={handleSubmit}>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <FileBase
                type='file'
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                htmlFor='title'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                Title
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                required
                id='title'
                name='title'
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                htmlFor='creator'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                Creator
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                id='creator'
                name='creator'
                placeholder='John Doe'
                value={postData.creator}
                onChange={(e) =>
                  setPostData({ ...postData, creator: e.target.value })
                }
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                htmlFor='tags'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                tags
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                required
                id='tags'
                name='tags'
                placeholder='fun, holiday'
                value={postData.tags}
                onChange={(e) =>
                  setPostData({ ...postData, tags: e.target.value.split(',') })
                }
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                htmlFor='message'
                className='block uppercase tracking-wide text-white-700 text-xs font-bold mb-2'
              >
                Optional message
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-7 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-20'
                type='text'
                required
                id='message'
                name='message'
                placeholder='optional message'
                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
                }
              />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button
              className='bg-red-600 hover:bg-red-300 text-white font-bold py-2 px-4 mx-5 rounded focus:outline-none focus:shadow-outline'
              type='submit'
              onClick={clear}
            >
              Clear
            </button>
            <button
              className='bg-blue-600 hover:bg-blue-300 text-white font-bold py-2 px-4 mx-5 rounded focus:outline-none focus:shadow-outline'
              type='submit'
              onClick={handleSubmit}
            >
              {currentId ? 'Edit Memory' : 'Add a Memory'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
