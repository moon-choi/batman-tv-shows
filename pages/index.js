import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


/* method 1
import withLayout from '../components/MyLayout'
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

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="learn-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   )
// }


const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id} >
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))
      }

    </ul>
  </Layout >
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  // 여기서 확인해야 할 것은 데이터를 서버에서 가지고 오는지 클라이언트에서 가지고 오는지 입니다.새로 고침을 했을 때 getInitialProps 안에 있는 console.log의 내용이 어디에 찍히는지 보면 확인을 할 수 있습니다.새로 고침을 할 경우 서버의 콘솔에서만 메세지가 출력되는 것을 볼 수 있습니다. 

  return {
    shows: data.map(entry => entry.show)
  }
}
export default Index
