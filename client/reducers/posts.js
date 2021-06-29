import { FETCH_ALL, CREATE, FETCH_ERROR } from '../actions/posts'

const reducer = (state, action) => {
  switch (action.type) {
    //   fetch posts data
    case FETCH_ALL:
      return { ...state, posts: action.payload }
    case FETCH_ERROR:
      return { ...state, posts: [] }

    case CREATE:
      return { ...state, post: action.payload }
    default:
      return state
  }
}

export default reducer
