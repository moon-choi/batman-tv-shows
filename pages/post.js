import { useRouter } from 'next/router'
import Layout from '../components/MyLayout'

const Content = () => {
  const router = useRouter()
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content. - post title</p>
    </>
  )
}

const Page = () => (
  <Layout>
    <Content />
  </Layout>
)

export default Page