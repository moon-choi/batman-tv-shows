import Layout from '../components/Layout'

/* method 1
import withLayout from '../components/Layout'
const Page = () => <p>Hello Next.js</p>
export default withLayout(Page)
*/

// method 0
export default function Index() {
  return (
    <Layout>
      <p>this is index.js page</p>
    </Layout>
  )
}