import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import memories from './images/memories.png'
import useStyles from './styles'

// this hook allows us to disptach an action
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

const App = () => {
  // using the styles
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        {/* Typography for textual elements  */}
        <Typography
          className={classes.heading}
          variant='h2'
          alignItems='center'
        >
          {' '}
          Memories
          <img
            className={classes.image}
            src={memories}
            alt='memories'
            height='60'
          />
        </Typography>
      </AppBar>
      {/* Grow provids simple animations */}
      <Grow in>
        <Container>
          <Grid
            conatiner
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            {/* small devices xs={12} medium to large devices sm={7} */}
            <Grid item xs={12} sm={7}>
              {/* Post component */}
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* form component */}
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
