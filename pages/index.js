import Layout from '../components/Layout'
import Link from 'next/link'


/* method 1
import withLayout from '../components/Layout'
const Page = () => <p>Hello Next.js</p>
export default withLayout(Page)
*/

/* method 0
export default function Index() {
  return (
    <Layout>
      <p>this is index.js page</p>
    </Layout>
  )
}
*/

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" /> 
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}