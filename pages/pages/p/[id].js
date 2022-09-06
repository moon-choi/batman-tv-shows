import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  //   console.log(`Fetched show: ${show.name}`)
  //   Fetch Data in Client Side
  // 서버와 브라우저 콘솔을 모두 열고 이번에는 콘솔 메세지가 어디에 나타나는지 확인해 봅시다.index페이지에 생성된 링크를 클릭 했을 때 브라우저의 콘솔 창에 콘솔 메세지가 나타나는 것을 확인 할 수 있습니다.위에서 설명 했듯이 브라우저 내부에서의 이동은 클라이언트 사이드 렌더링이 됩니다.

  // 이는 Next.js의 < Link /> 컴포넌트로 랩핑된 링크를 클릭 할 경우에 가능합니다.http : // localhost : 3000 / p / 975 페이지를 직접 방문할 경우에는 url로 초기 접속을 했기 때문에 서버사이드 렌더링이 되면서 서버의 콘솔에 콘솔 메세지가 출력 되는 것을 볼 수 있습니다.


  return { show }
}

export default Post