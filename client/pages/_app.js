import '../styles/globals.css'
import { ApiProvider } from '../context/ApiContext'
function MyApp({ Component, pageProps }) {
  return (
    <ApiProvider>
      <Component {...pageProps} />{' '}
    </ApiProvider>
  )
}

export default MyApp
