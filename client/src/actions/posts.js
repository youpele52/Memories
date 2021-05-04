// here we import everything from the api index file as api
import * as api from '../api'

// Action creators are functions that returns an action

export const getPosts = () => async (dispatch) => {
  try {
    // we get the response data from the api and immediately destructure it to the data itself
    const { data } = await api.fetchPosts()
    // payload here is the data where we store all of our posts
    const action = { type: 'FETCH_ALL', payload: data }
    //   we dispatch the action instead returning it
    dispatch(action)
  } catch (error) {
    console.log(error.message)
  }
}
