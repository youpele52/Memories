import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import Posts from '../components/Posts'
import Form from '../components/Form'
import { useApiContext } from '../context/ApiContext'

export default function Home() {
  return (
    <div className='px-4'>
      <Head>
        <title>Home</title>
        <meta
          name='description'
          content='Let us manage your appointments for you.'
        />
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link
          rel='icon'
          href='https://www.svgrepo.com/show/283873/polaroid.svg'
        />
      </Head>
      <Nav />
      <main className=' px-5 my-10 grid sm:grid md:grid-cols-2 justify-center'>
        <Posts className='my-10' />
        <Form className='' />
        {/* <img src='/vercel.svg' alt='' /> */}
      </main>
    </div>
  )
}
