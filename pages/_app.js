import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css'
import '../assets/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
