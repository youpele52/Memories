import axios from 'axios' //for making api calls

// url pointing to our backend route
const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)
