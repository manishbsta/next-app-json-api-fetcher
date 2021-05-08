import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="body-container">
      <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
