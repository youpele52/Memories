import Head from 'next/head'
import Nav from '../components/Nav'
function Account() {
  return (
    <div>
      <Head>
        <title>Account</title>
        <meta
          name='description'
          content='Let us manage your appointments for you.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <h1>Account</h1>
    </div>
  )
}

export default Account
