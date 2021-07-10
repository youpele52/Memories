import {
  FETCH_ALL,
  CREATE,
  FETCH_ERROR,
  UPDATE,
  DELETE,
  LIKE,
} from '../actions/posts'

const reducer = (state, action) => {
  switch (action.type) {
    //   fetch posts data
    case FETCH_ALL:
      return { ...state, posts: action.payload }
    case FETCH_ERROR:
      return { ...state, posts: [] }

    case CREATE:
      return { ...state, post: action.payload }

    case UPDATE:
    case LIKE:
      state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )
      return state
    // return { ...state, post: action.payload }
    case DELETE:
      //  preserve all the post in which thier _id is not the same as the payload's _id
      // if it is the same, then it is removed
      state.posts.filter((post) => post._id !== action.payload._id)
      return state

    default:
      return state
  }
}

export default reducer
