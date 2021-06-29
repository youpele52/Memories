import Head from 'next/head'
import Nav from '../components/Nav'
function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name='description'
          content='Let us manage your appointments for you.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <h1>About</h1>
    </div>
  )
}

export default About
