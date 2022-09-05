import Layout from '../components/Layout'

// method 0
export default function About() {
  return (
    <Layout>
      <p>About page</p>
    </Layout>
  )
}


/*

// method 1

import withLayout from '../components/Layout'

const Page = () => <p>This is the about page</p>

export default withLayout(Page)
*/