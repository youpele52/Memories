import * as api from '../pages/api/index'

export const FETCH_ALL = 'FETCH_ALL'
export const FETCH_ERROR = 'FETCH_ERROR'
export const CREATE = 'CREATE'
export const CREATE_ERROR = 'CREATE_ERROR'
export const UPDATE = 'UPDATE'
export const LIKE = 'LIKE'
export const UPDATE_ERROR = 'UPDATE_ERROR'
export const DELETE = 'DELETE'
export const DELETE_ERROR = 'DELETE_ERROR'

// export const fetchAllData = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchPosts()
//     dispatch({ type: 'FETCH_ALL', payload: data })
//   } catch (error) {
//     console.log(error.message)
//   }
// }
