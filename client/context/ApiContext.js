import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/posts'
import { FETCH_ALL, FETCH_ERROR, CREATE, CREATE_ERROR } from '../actions/posts'
import { url } from '../pages/api/index'
import axios from 'axios'

const initialState = {
  posts: ['hero'],
}
const ApiContext = React.createContext()

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchPosts = async (url) => {
    try {
      const response = await axios.get(url)
      const posts = response.data
      //   console.log(posts)
      dispatch({ type: FETCH_ALL, payload: posts })
    } catch (error) {
      dispatch({ type: FETCH_ERROR })
    }
  }

  const createPost = async (newPost) => {
    try {
      const response = await axios.post(url, newPost)
      const post = response.data
      dispatch({ type: CREATE, payload: post })
    } catch (error) {
      dispatch({ type: CREATE_ERROR })
    }
  }

  useEffect(() => {
    fetchPosts(url)
  }, [])
  return (
    <ApiContext.Provider value={{ ...state, createPost, fetchPosts, url }}>
      {children}
    </ApiContext.Provider>
    // <ApiContext.Provider value={' ...state, fetchData'}>
    //   {children}
    // </ApiContext.Provider>
  )
}

export const useApiContext = () => {
  return useContext(ApiContext)
}
