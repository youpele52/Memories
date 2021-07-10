import React, { useContext, useState, useEffect, useReducer } from 'react'
import reducer from '../reducers/posts'
import {
  FETCH_ALL,
  FETCH_ERROR,
  CREATE,
  CREATE_ERROR,
  UPDATE,
  LIKE,
  UPDATE_ERROR,
  DELETE,
  DELETE_ERROR,
} from '../actions/posts'
import { url } from '../pages/api/index'
import axios from 'axios'

const initialState = {
  posts: [],
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

  const updatePost = async (id, updatedPost) => {
    try {
      const response = await axios.patch(`${url}/${id}`, updatedPost)
      const post = response.data
      dispatch({ type: UPDATE, payload: post })
    } catch (error) {
      dispatch({ type: UPDATE_ERROR })
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`${url}/${id}`)
      dispatch({ type: DELETE, payload: id })
    } catch (error) {
      dispatch({ type: DELETE_ERROR })
    }
  }

  const likePost = async (id) => {
    try {
      const response = await axios.patch(`${url}/${id}/likePost`)
      const post = response.data
      dispatch({ type: LIKE, payload: post })
    } catch (error) {
      dispatch({ type: UPDATE_ERROR })
    }
  }

  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    fetchPosts(url)
  }, [])

  return (
    <ApiContext.Provider
      value={{
        ...state,
        createPost,
        fetchPosts,
        updatePost,
        deletePost,
        url,
        currentId,
        setCurrentId,
        likePost,
      }}
    >
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
