import '../styles/global.scss'
import { Navbar } from '../ui/shared'

// eslint-disable-next-line react/prop-types
function MyApp ({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
