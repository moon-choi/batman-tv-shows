
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

//method 0. 
const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children} {/* <p>this is index.js page</p> */}
  </div>
)

export default Layout

/*
// method 1.

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default withLayout
*/