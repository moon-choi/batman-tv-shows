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
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      {/* Link 컴포넌트의 href는 페이지의 경로입니다. as는 브라우저 URL에 보여질 URL입니다. 동적인 url을 사용하고 싶다면 'as' props를 추가 하면 됩니다. 'as' props가 없으면 동적 경로가 작동하지 않으니 주의하세요 */}
      <a>{props.id}</a>
    </Link>
  </li>
)
/*
const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
*/

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  )
}