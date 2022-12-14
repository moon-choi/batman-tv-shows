import fetch from 'isomorphic-unfetch'
import Layout from '../components/MyLayout'
import Link from 'next/link'

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  //res example:  https://api.tvmaze.com/shows/1
  const data = await res.json()

 
  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index
