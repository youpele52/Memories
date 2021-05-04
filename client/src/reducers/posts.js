// post is going to be array thats why we setting state =[]
export default (posts = [], action) => {
  // you can use if statement here too

  switch (action.type) {
    case 'FETCH_ALL':
      // this returns our actual posts
      return action.payload
    case 'CREATE':
      return posts
    default:
      return posts
  }
}
