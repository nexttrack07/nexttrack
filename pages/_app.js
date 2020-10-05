import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import { Code } from '../components/mdx-components'

const components = {
  h2: ({ children }) => {
    const getId = children.toLowerCase().split(' ').join('-')

    return <h2 id={getId}>{children}</h2>
  },
  code: Code,
  inlineCode: (props) => (
    <span
      {...props}
      style={{ padding: '2px 4px' }}
      className='bg-blue-100 rounded'
    />
  ),
}

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
