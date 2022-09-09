import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch'
const Post = (show) => ( // Post component received the objet.
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} />
  </Layout>
)

//function definition //hoisting
Post.getInitialProps = async function (context) {
  const { id } = context.query // after destructuing, id is just a string.
    console.log('CONTEXT.QUERY', context.query) 
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`) // is this res a json?
    console.log('THIS IS RES', res)
  const show = await res.json() // is this the same as JSON.parse()? // converting to an object?

  console.log(`Fetched show: ${show.name}`)

  return { show } //returning show as an object
}

export default Post